// @ts-check
import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',

  
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  use: {
    browserName: 'chromium',
    headless: true,
    slowMo: 50,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
});



