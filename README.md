# Test Engineer Automation Task 

This task contains automated tests for VoucherCode Restaurant search feature using Playwright with Javascript.
---
## Overview:
The task automate searching for offers in local restaurants in london using browser automation.

It includes:
- A successful test against the 'https://www.vouchercodes.co.uk' for searching restaurant offers.
- One intentionally failing test to demonstrate debugging ('screenshots,video,trace.')
- Project scaffolding with config,  tests, and reporting
- A markdown plan and results file for reflection

---


## Local Setup guide
### clone the repo
```bash
git clone https://github.com/ayushi-dixit09/VoucherCodePlaywrightTask.git

To get started :

```bash
npm install
npm run install:browsers
npm test
npx playwright show-report
```

This will install dependencies, run the suite, and open a visual HTML report of your test run.

Tested with Node.js v22.18.0

---




## Files Included

project-root/
│
├── pages/
│ └── RestaurantPage.js # Page Object for restaurant flow
│
├── tests/
│ ├── restaurantOffers.spec.js # Main test: search offers in London
│ └── negativeScenario.spec.js # Negative test: element not found
│ __ test-results              # records test results as video and screenshot on failure.
|
├── playwright.config.js # Playwright configuration
├── package.json # Node.js dependencies
├── README.md # Project documentation
└── test-plan.md # manual documentation of test cases
|__ test-results.md # manual documentation of test results

---

🧩 Command Reference
Action	              Command
Run all tests         npx playwright test	
Run single test       npx playwright test tests/restaurantOffers.spec.js     
Show test report	  npx playwright show-report
Run all tests in      npx playwright test --headed
 headed mode	                  
Run in UI mode	      npx playwright test --ui
Open trace file       npx playwright show-trace
---

Author

👤 Ayushi Dixit
📧 ayushidixit4@gmail.com
---
🏁 Notes

-Written using Playwright Test Runner with Page Object Model (POM).

-Works with Node.js v18+.

-Includes both automated and manual test documentation.

-Negative case is intentionally failing for validation.
-In some runs, a single test execution may fail due to the dynamic loading of the live site’s navigation elements.
When all tests are run together, the flow works consistently.

