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

// Configure pa11y
const pa11yOptions = {
  includeWarnings: true,
  standard: 'WCAG2AA',
  runners: ['axe'],
  timeout: 60000,
  wait: 5000,
  log: {
    debug: console.log,
    error: console.error,
    info: console.info,
  },
};

// Run pa11y on a single URL
async function testUrl(url) {
  console.log(chalk.blue(`\nTesting URL: ${url}`));
  
  try {
    const results = await pa11y(url, pa11yOptions);
    
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
    
  } catch (error) {
    console.error(chalk.red(`Error testing ${url}:`), error);
    return 1;
  }
}

// Main function
async function main() {
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
    console.log(chalk.red(`\nTotal accessibility issues found: ${totalIssues}`));
    if (totalIssues > threshold) {
      console.log(chalk.red(`\n❌ Exceeded threshold of ${threshold} issues`));
      process.exit(1);
    } else {
      console.log(chalk.yellow(`\n⚠️  Found ${totalIssues} issues (threshold: ${threshold})`));
    }
  } else {
    console.log(chalk.green('\n✅ No accessibility issues found!'));
  }
  
  process.exit(0);
}

// Start the application
main();
