import os
from playwright.sync_api import sync_playwright

def verify_buttons():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.set_viewport_size({"width": 1280, "height": 800})

        # Setup bypass for onboarding
        page.goto("http://localhost:3000/")
        page.evaluate("""() => {
            window.localStorage.setItem('hasCompletedOnboarding', 'true');
            window.localStorage.setItem('isLoggedIn', 'true');
            window.localStorage.setItem('userProfile', JSON.stringify({
                name: 'Rohit Kumar',
                phone: '0000000000',
                countryCode: 'US'
            }));
        }""")
        page.reload()

        # Dashboard Screen
        page.goto("http://localhost:3000/#/dashboard")
        page.wait_for_selector("text=Select a day")
        page.screenshot(path="dashboard_buttons.png")

        # Insights Screen
        page.goto("http://localhost:3000/#/insights")
        page.wait_for_selector("text=Weekly")
        page.screenshot(path="insights_buttons.png")

        # Daily Meals Screen
        page.goto("http://localhost:3000/#/daily-meals")
        page.wait_for_selector("text=Add New Meal")
        page.screenshot(path="meals_buttons.png")

        # Add Meal Screen
        page.goto("http://localhost:3000/#/add-meal")
        page.wait_for_selector("input[placeholder='Search food...']")
        page.screenshot(path="add_meal_buttons.png")

        browser.close()

if __name__ == "__main__":
    verify_buttons()
