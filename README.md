#Tech-assignment

Playwright end-to-end test automation for [Swag Labs](https://www.saucedemo.com/).

## Scenario covered

Verifies the complete purchase flow:

1. Navigate to the login page
2. Log in with valid credentials
3. Verify the products page loads
4. Add a product to the cart
5. Open the cart and verify the correct item is listed
6. Proceed to checkout and fill in the required details
7. Complete the purchase
8. Validate the success/confirmation message

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Install Playwright browsers
npx playwright install chromium
```

## Run the tests

```bash
# Run all tests (headless)
npm test

# Run tests in headed mode (watch the browser)
npm run test:headed
```

### View the test report

An HTML report is generated automatically after each run at `playwright-report/index.html`.

```bash
npm run test:report
```

