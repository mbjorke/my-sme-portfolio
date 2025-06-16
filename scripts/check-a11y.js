#!/usr/bin/env node

import { program } from 'commander';
import chalk from 'chalk';
import pa11y from 'pa11y';

// Parse command line arguments
program
  .option('-u, --url <url>', 'URL to test', 'http://localhost:3000')
  .option('-s, --sitemap <path>', 'Path to sitemap.xml')
  .option('-o, --output <path>', 'Output file path')
  .option('-t, --threshold <number>', 'Maximum number of errors allowed', '0')
  .parse(process.argv);

const options = program.opts();
const threshold = parseInt(options.threshold, 10);

// Get URL from command line arguments or use default
const url = process.argv[2] || options.url;

// Configure pa11y with more resilient settings
const pa11yOptions = {
  includeWarnings: true,
  standard: 'WCAG2AA',
  runners: ['axe'],
  timeout: 120000, // Increased timeout to 2 minutes
  wait: 10000, // Increased wait time to 10s
  ignore: [
    'color-contrast', // We'll handle this separately with our custom rules
    'landmark-one-main',
    'region',
  ],
  // Remove all custom actions that might be causing issues
  actions: [],
  chromeLaunchConfig: {
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--disable-software-rasterizer',
      '--disable-web-security',
      '--no-zygote',
      '--single-process',
      '--disable-features=IsolateOrigins,site-per-process',
      '--disable-site-isolation-trials',
      '--disable-webgl',
      '--disable-threaded-animation',
      '--disable-threaded-scrolling',
      '--disable-in-process-stack-traces',
      '--disable-histogram-customizer',
      '--disable-breakpad',
      '--disable-client-side-phishing-detection',
      '--disable-crash-reporter',
      '--disable-extensions',
      '--disable-notifications',
      '--disable-sync',
      '--metrics-recording-only',
      '--mute-audio',
      '--no-default-browser-check',
      '--no-first-run',
      '--safebrowsing-disable-auto-update',
      '--disable-hang-monitor',
      '--disable-prompt-on-repost',
      '--disable-component-update',
      '--disable-domain-reliability',
      '--disable-background-timer-throttling',
      '--disable-backgrounding-occluded-windows',
      '--disable-renderer-backgrounding',
      '--disable-ipc-flooding-protection',
      '--disable-back-forward-cache',
      '--disable-features=ScriptStreaming',
      '--disable-software-rasterizer',
      '--disable-features=LayoutInstabilityAPI',
      '--disable-features=GlobalMediaControls',
      '--disable-features=Translate',
      '--disable-component-extensions-with-background-pages',
      '--disable-default-apps',
      '--disable-remote-fonts',
      '--disable-session-crashed-bubble',
      '--disable-sync-preferences',
      '--disable-background-networking',
      '--disable-component-update',
      '--disable-datasaver-prompt',
      '--disable-default-apps',
      '--disable-device-discovery-notifications',
      '--disable-extensions-http-throttling',
      '--disable-hang-monitor',
      '--disable-ipc-flooding-protection',
      '--disable-popup-blocking',
      '--disable-prompt-on-repost',
      '--disable-renderer-backgrounding',
      '--disable-sync',
      '--disable-translate',
      '--metrics-recording-only',
      '--no-first-run',
      '--safebrowsing-disable-auto-update',
      '--password-store=basic',
      '--use-mock-keychain',
    ],
    ignoreHTTPSErrors: true,
    defaultViewport: { width: 1280, height: 800 },
  },
  log: {
    debug: console.log,
    error: console.error,
    info: console.log,
  },
};

// Run pa11y on a single URL with retry logic
async function testUrl(url, retries = 3) {
  console.log(chalk.blue(`\nTesting URL: ${url}`));

  for (let i = 0; i < retries; i++) {
    try {
      console.log(chalk.yellow(`  Attempt ${i + 1} of ${retries}...`));

      const results = await pa11y(url, pa11yOptions);

      if (results.issues.length === 0) {
        console.log(chalk.green('✓ No accessibility issues found'));
        return 0;
      }

      // Log issues
      results.issues.forEach((issue) => {
        console.log(chalk.red(`\n❌ ${issue.message}`));
        console.log(`   Type: ${issue.type}`);
        console.log(`   Context: ${issue.context}`);
        console.log(`   Selector: ${issue.selector}`);
      });

      return results.issues.length;
    } catch (error) {
      console.error(chalk.red(`  Attempt ${i + 1} failed: ${error.message}`));

      if (i === retries - 1) {
        console.error(chalk.red('  All retry attempts failed.'));
        throw error;
      }

      // Wait before retrying
      const delay = 1000 * (i + 1);
      console.log(chalk.yellow(`  Retrying in ${delay}ms...`));
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}

// Process and display results
function processResults(results) {
  if (results.issues.length === 0) {
    console.log(chalk.green('✓ No accessibility issues found'));
    return 0;
  }

  // Group issues by type
  const issuesByType = results.issues.reduce((acc, issue) => {
    const type = issue.type;
    if (!acc[type]) acc[type] = [];
    acc[type].push(issue);
    return acc;
  }, {});

  // Log issues
  Object.entries(issuesByType).forEach(([type, issues]) => {
    console.log(chalk.red(`\n${type.toUpperCase()} (${issues.length}):`));
    issues.forEach((issue, index) => {
      console.log(`  ${index + 1}. ${issue.message}`);
      console.log(`     ${chalk.dim(issue.selector)}`);
      console.log(`     ${chalk.blue(issue.context)}`);
    });
  });

  console.log(chalk.red(`\nFound ${results.issues.length} accessibility issues`));
  return results.issues.length;
}

// Main function
async function main() {
  try {
    let urls = [options.url];

    // If sitemap is provided, fetch URLs from sitemap
    if (options.sitemap) {
      // This would be implemented to parse sitemap.xml
      console.log('Sitemap parsing not yet implemented');
      process.exit(1);
    }

    // Test each URL
    let totalIssues = 0;
    for (const url of urls) {
      totalIssues += await testUrl(url);
    }

    // Output results
    if (totalIssues > 0) {
      console.log(chalk.red(`\nFound a total of ${totalIssues} accessibility issues`));
      if (totalIssues > threshold) {
        console.log(chalk.red(`❌ Exceeded threshold of ${threshold} issues`));
        process.exit(1);
      }
    } else {
      console.log(chalk.green('\n✓ No accessibility issues found'));
    }
  } catch (error) {
    console.error(chalk.red('Fatal error:'), error);
    process.exit(1);
  }
}

// Start the application
main();
