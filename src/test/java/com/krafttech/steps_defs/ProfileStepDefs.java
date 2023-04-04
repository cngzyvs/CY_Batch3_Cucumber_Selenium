package com.krafttech.steps_defs;

import com.krafttech.pages.DashboardPage;
import com.krafttech.pages.OverviewPage;
import com.krafttech.utilities.BrowserUtils;
import io.cucumber.java.en.Then;

public class ProfileStepDefs {
    DashboardPage dashboardPage = new DashboardPage();
    OverviewPage overviewPage = new OverviewPage();
    @Then("User should go to my profile with {string}")
    public void user_should_go_to_my_profile_with(String tabName) {
      dashboardPage.navigateToModule(tabName,"My Profile");

    }
    @Then("User should navigate to {string}")
    public void user_should_navigate_to(String editProfile) {
   overviewPage.tapOnTab(editProfile);
    }
}
