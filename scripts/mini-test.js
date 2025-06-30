import pa11y from 'pa11y';

async function runTest() {
  try {
    console.log('Running Pa11y test...');
    const results = await pa11y('http://localhost:3000', {
      log: {
        debug: console.log,
        error: console.error,
        info: console.log,
      },
      timeout: 60000,
      wait: 10000, // Increased wait time
      ignore: ['color-contrast'],
      chromeLaunchConfig: {
        headless: 'new',
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--disable-gpu',
          '--disable-software-rasterizer',
        ],
      },
    });

    console.log('✅ Success! Found', results.issues.length, 'accessibility issues');
    if (results.issues.length > 0) {
      console.log('\nIssues found:');
      results.issues.forEach((issue, index) => {
        console.log(`\n${index + 1}. ${issue.message}`);
        console.log(`   Type: ${issue.type}`);
        console.log(`   Context: ${issue.context}`);
        console.log(`   Selector: ${issue.selector}`);
      });
    }

    process.exit(0);
  } catch (error) {
    console.error('❌ Test failed with error:');
    console.error(error);
    process.exit(1);
  }
}

// Run the test
runTest();
