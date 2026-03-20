from playwright.sync_api import sync_playwright

def verify_feature(page):
    # Bypass onboarding as per memory instructions
    page.goto("http://localhost:3000")
    page.wait_for_timeout(1000)
    page.evaluate("window.localStorage.setItem('hasCompletedOnboarding', 'false')")
    page.evaluate("window.localStorage.setItem('isLoggedIn', 'true')")

    # Go to onboarding step 2 (Target Glucose Step)
    page.goto("http://localhost:3000/#/onboarding")
    page.wait_for_timeout(500)

    # Click "None (Just tracking)" and then "Continue"
    page.get_by_role("button", name="None (Just tracking)").click()
    page.wait_for_timeout(500)
    page.get_by_role("button", name="Continue").click()
    page.wait_for_timeout(1000)

    # Now we should be on the Target Glucose Step
    # Let's take a screenshot and check for our aria-labels
    page.screenshot(path="verification.png")

    # Verify the aria labels exist
    min_slider = page.locator('input[aria-label="Minimum Target Glucose"]')
    max_slider = page.locator('input[aria-label="Maximum Target Glucose"]')

    print("Min slider count:", min_slider.count())
    print("Max slider count:", max_slider.count())

    # Click "Continue" to go to Weight Goal Step
    page.get_by_role("button", name="Continue").click()
    page.wait_for_timeout(1000)

    # Verify that the buttons have type="button"
    # Playwright's get_by_role("button") specifically finds elements with role="button"
    # But we want to ensure they don't submit. The best way to test type="button"
    # is to select them and verify their type attribute.
    lose_weight_btn = page.get_by_role("button", name="Lose Weight")
    print("Lose Weight button type:", lose_weight_btn.get_attribute("type"))

    page.screenshot(path="verification_step3.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()
        verify_feature(page)
        context.close()
        browser.close()
