# Cypress Automation - DemoQA Website

This project contains automated end-to-e (E2E) tests using [Cypress](https://www.cypress.io/) for the [DemmoQA](https://demoqa.com) website.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <repository-folder>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

The following scripts are available in `package.json` to run the tests:

- **Open Cypress Test Runner (GUI):**

  ```bash
  npm run cy:open
  ```

- **Run UI Tests (Headed Mode):**
  Runs tests in the browser window.

  ```bash
  npm run test:ui
  ```

- **Run Headless Tests:**
  Runs tests in the background (headless mode).

  ```bash
  npm run test:headless
  ```

- **Run Positive Tests Only:**
  Runs tests tagged with `@positive`.

  ```bash
  npm run test:positive
  ```

- **Run Negative Tests Only:**
  Runs tests tagged with `@negative`.

  ```bash
  npm run test:negative
  ```

- **Run All Tests:**
  Runs all Cypress tests.
  ```bash
  npm run test:all
  ```

## Project Structure

- `cypress/e2e`: Contains the test specifications (spec files).
- `cypress/support`: Contains support files and reusable commands.
- `page`: Contains Page Object Model (POM) files for better test maintenance.
- `utils`: Contains utility functions (if any).
- `cypress.config.js`: Cypress configuration file.

## Features

- **Page Object Model (POM):** Separates page details from test logic.
- **Tagging:** Allows running specific subsets of tests (positive/negative).
- **Screenshots & Videos:** Automatically captures screenshots on failure and records videos of test runs.
