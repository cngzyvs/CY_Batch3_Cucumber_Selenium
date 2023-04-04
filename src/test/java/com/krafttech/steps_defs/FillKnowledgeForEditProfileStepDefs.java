package com.krafttech.steps_defs;

import com.krafttech.pages.EditProfilePage;
import com.krafttech.utilities.BrowserUtils;
import com.krafttech.utilities.Driver;
import io.cucumber.core.gherkin.vintage.internal.gherkin.ast.DataTable;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;

import java.util.List;

public class FillKnowledgeForEditProfileStepDefs {
    EditProfilePage editProfilePage = new EditProfilePage();

    @Then("User should fill out necessary input boxes that are {string} {string} {string} {string} {string} {string} {string} and tab save changes button")
    public void user_should_fill_out_necessary_input_boxes_that_are_and_tab_save_changes_button(String fullName, String aboutBox, String company, String select, String webSite, String location, String skills) {

        editProfilePage.fiiOutTheEdidtProfileInputBoxes(fullName, aboutBox, company, select, webSite, location, skills);
        JavascriptExecutor jse = (JavascriptExecutor) Driver.get();
        jse.executeScript("window.scrollBy(0,500)");
//        jse.executeScript("arguments[0].click();",editProfilePage.profileApdate);
        editProfilePage.saveChangesButton.click();
    }


    @Then("User should verify the profile updated message")
    public void user_should_verify_the_profile_updated_message() {
        Assert.assertTrue(editProfilePage.profileApdate.isDisplayed());
    }

    @Then("User should fill out necessary input boxes with below and tab save changes button")
    public void user_should_fill_out_necessary_input_boxes_with_below_and_tab_save_changes_button(List<String> strArr) {
        List<String> knowledgeList = strArr;
        editProfilePage.name.clear();
        editProfilePage.name.sendKeys(knowledgeList.get(0));
        editProfilePage.aboutInputBox.clear();
        editProfilePage.aboutInputBox.sendKeys(knowledgeList.get(1));
        editProfilePage.companyInputBox.clear();
        editProfilePage.companyInputBox.sendKeys(knowledgeList.get(2));
        editProfilePage.selectJob(knowledgeList.get(3));
        editProfilePage.websiteInputBox.clear();
        editProfilePage.websiteInputBox.sendKeys(knowledgeList.get(4));
        editProfilePage.locationInputBox.clear();
        editProfilePage.locationInputBox.sendKeys(knowledgeList.get(5));
        editProfilePage.skillsInputBox.clear();
        editProfilePage.skillsInputBox.sendKeys(knowledgeList.get(6));

        JavascriptExecutor jse = (JavascriptExecutor) Driver.get();
        jse.executeScript("window.scrollBy(0,500)");
        BrowserUtils.waitFor(2);
        editProfilePage.saveChangesButton.click();
    }

}

