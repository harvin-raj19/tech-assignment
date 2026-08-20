# Tech-assignment

## Web UI testing

Playwright end-to-end test automation for [Swag Labs](https://www.saucedemo.com/).

### Scenario covered

Verifies the complete purchase flow:

1. Navigate to the login page
2. Log in with valid credentials
3. Verify the products page loads
4. Add a product to the cart
5. Open the cart and verify the correct item is listed
6. Proceed to checkout and fill in the required details
7. Complete the purchase
8. Validate the success/confirmation message

## API testing

Playwright CRUD api test automation for [jsonplaceholder](https://jsonplaceholder.typicode.com/)

### Scenario covered

Verifies the CRUD operations on the /posts endpoint:

1. [POST] Create a new post
2. [GET] Read the created post
3. [PATCH] Update the created post
4. [VERIFY UPDATE] Verify the updated post
5. [DELETE] Delete the created post
6. [VERIFY DELETE] Verify the deleted post


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

# Run api test
npm run test:api
```

### View the test report

An HTML report is generated automatically after each run at `playwright-report/index.html`.

```bash
npm run test:report
```

