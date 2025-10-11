#  Test Plan- VoucherCode search Restaurant feature in london
## Scope
This test plan covers search offers in london restaurant:
 - restaurant offers search
 - negative test for debugging

## Test Cases

### 1. "Search for restaurant offers in London via Categories flow"
  **Steps**: Open page in browser 'https://www.vouchercodes.co.uk'
             Accept cookies (if visible)
             Navigate to categories > Restaurants
             Enter town name='London'
             Select any date
             Select any number of people
             Verify that restaurant offers are visible
  **Expected Outcome**: Offers are displayed successfully.
### 2. Negative test
  **Steps**: Open the VoucherCode website
             try to locate an element that doesn't exist
  **Expected Outcome**:This test fails intentionally,generating
                       -Screenshot of the failure
                       -Video recording
                       -Trace file for debugging
