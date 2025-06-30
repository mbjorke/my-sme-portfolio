import { test, expect } from '@playwright/test';
import { AxeBuilder } from '@axe-core/playwright';

const pages = [
  { url: '/', name: 'Home' },
  { url: '/#projects', name: 'Projects' },
  { url: '/#about', name: 'About' },
  { url: '/#contact', name: 'Contact' },
];

// Test each page for accessibility issues
pages.forEach(({ url, name }) => {
  test(`Accessibility: ${name} page`, async ({ page }) => {
    // Navigate to the page
    await page.goto(url);

    // Wait for the page to be fully loaded
    await page.waitForLoadState('networkidle');

    // Configure and run accessibility tests
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'])
      .exclude('.sr-only') // Skip elements that are visually hidden
      .exclude('[role="presentation"]') // Skip presentational elements
      .analyze();

    // Log any violations
    if (accessibilityScanResults.violations.length > 0) {
      console.log(`\nAccessibility issues found on ${name} page (${url}):`);
      accessibilityScanResults.violations.forEach((violation) => {
        console.log(`\n${violation.impact} - ${violation.help} (${violation.id})`);
        console.log(`  ${violation.helpUrl}`);
        console.log('  Affected elements:');
        violation.nodes.forEach((node) => {
          console.log(`  - ${node.html}`);
        });
      });
    }

    // Assert no critical issues
    expect(accessibilityScanResults.violations).toHaveLength(0);
  });
});
