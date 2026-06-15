<!-- 

//globalsetup  ---like login setup before all the tests starts

//globalTearDown ---after all the tests completed executing then we can do what we want to do like storing the data into the execel 

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  // Test folder
  testDir: './tests',

  // Test file patterns
  testMatch: '**/*.spec.ts',

  // Ignore specific files/folders
  testIgnore: '**/old-tests/**',

  // Maximum time per test
  timeout: 60 * 1000,

  // Assertion timeout
  expect: {
    timeout: 10000
  },

  // Retry failed tests
  retries: 1,

  // Number of parallel workers
  workers: 4,

  // Run tests in parallel within same file
  fullyParallel: true,

  // Fail build if test.only exists
  forbidOnly: !!process.env.CI,

  // Stop after certain failures
  maxFailures: 5,

  // Reporters
  reporter: [
    ['html'],
    ['list'],
    ['junit', { outputFile: 'results.xml' }]
  ],

  // Artifacts folder
  outputDir: 'test-results',

  // Run before all tests
  globalSetup: require.resolve('./globalSetup'),

  // Run after all tests
  globalTeardown: require.resolve('./globalTeardown'),

  // Shared browser/context settings
  use: {

    // Base URL
    baseURL: 'https://example.com',

    // Browser
    browserName: 'chromium',

    // Headless mode
    headless: true,

    // Browser window size
    viewport: {
      width: 1920,
      height: 1080
    },

    // Authentication state
    storageState: './playwright/.auth/user.json',

    // Screenshot settings
    screenshot: 'only-on-failure',

    // Video settings
    video: 'retain-on-failure',

    // Trace settings
    trace: 'on-first-retry',

    // Action timeout
    actionTimeout: 10000,

    // Navigation timeout
    navigationTimeout: 30000,

    // Ignore SSL issues
    ignoreHTTPSErrors: true,

    // Browser locale
    locale: 'en-US',

    // Timezone
    timezoneId: 'Asia/Kolkata',

    // Browser permissions
    permissions: ['geolocation'],

    // Mock location
    geolocation: {
      latitude: 12.9716,
      longitude: 77.5946
    },

    // Extra HTTP headers
    extraHTTPHeaders: {
      'x-test': 'playwright'
    },

    // Browser launch options
    launchOptions: {

      // Slow down actions for debugging
      slowMo: 500,

      args: [
        '--start-maximized'
      ]
    }
  },

  // Multiple execution projects
  projects: [

    {
      name: 'chromium',

      use: {
        ...devices['Desktop Chrome']
      }
    },

    {
      name: 'firefox',

      use: {
        ...devices['Desktop Firefox']
      }
    },

    {
      name: 'webkit',

      use: {
        ...devices['Desktop Safari']
      }
    }

  ]
}); -->



<!-->
/*
pipeline {
agent any

```
parameters {
    choice(
        name: 'TEST_ENV',
        choices: ['qa', 'uat', 'prod'],
        description: 'Select environment'
    )
}

stages {

    stage('Checkout') {
        steps {
            checkout scm
        }
    }

    stage('Install') {
        steps {
            sh 'npm ci'
            sh 'npx playwright install --with-deps'
        }
    }

    stage('Run Tests') {
        steps {
            script {

                def credentialId = ''

                switch(params.TEST_ENV) {

                    case 'qa':
                        env.URL = 'https://qa.example.com'
                        credentialId = 'qa-creds'
                        break

                    case 'uat':
                        env.URL = 'https://uat.example.com'
                        credentialId = 'uat-creds'
                        break

                    case 'prod':
                        env.URL = 'https://prod.example.com'
                        credentialId = 'prod-creds'
                        break

                    default:
                        error("Invalid environment selected")
                }

                withCredentials([
                    usernamePassword(
                        credentialsId: credentialId,
                        usernameVariable: 'USERNAME',
                        passwordVariable: 'PASSWORD'
                    )
                ]) {

                    sh '''
                        echo "Running tests against $URL"

                        npx playwright test
                    '''
                }
            }
        }
    }
}
```

}

*/