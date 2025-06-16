import { chromium } from 'playwright';
import { AxeBuilder } from '@axe-core/playwright';
import { program } from 'commander';

program
  .option('-u, --url <url>', 'URL to test', 'http://localhost:3000')
  .option('-t, --timeout <ms>', 'Timeout in milliseconds', '30000')
  .parse(process.argv);

const options = program.opts();
const url = options.url;
const timeout = parseInt(options.timeout, 10);

async function runAccessibilityTest() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    console.log(`Testing URL: ${url}`);
    await page.goto(url, { waitUntil: 'networkidle' });

    // Wait for the page to be fully loaded
    await page.waitForLoadState('networkidle');

    // Run accessibility tests
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    // Filter out color contrast issues for now
    const violations = results.violations.filter((violation) => violation.id !== 'color-contrast');

    // Output results
    if (violations.length === 0) {
      console.log('\x1b[32m%s\x1b[0m', '✓ No accessibility violations found!');
    } else {
      console.log('\x1b[31m%s\x1b[0m', `Found ${violations.length} accessibility violations:`);

      violations.forEach((violation, i) => {
        console.log(`\n${i + 1}. ${violation.help} (${violation.id})`);
        console.log(`   Impact: ${violation.impact}`);
        console.log(`   Help URL: ${violation.helpUrl}`);

        if (violation.nodes && violation.nodes.length > 0) {
          console.log('   Affected elements:');
          violation.nodes.forEach((node, j) => {
            console.log(`   ${j + 1}. ${node.failureSummary || node.html}`);
          });
        }
      });

      process.exit(1);
    }
  } catch (error) {
    console.error('Error running accessibility tests:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

// Run the test
runAccessibilityTest().catch(console.error);
