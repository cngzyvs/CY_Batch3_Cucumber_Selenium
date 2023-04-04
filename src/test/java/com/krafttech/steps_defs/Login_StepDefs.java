package com.krafttech.steps_defs;

import com.krafttech.pages.DashboardPage;
import com.krafttech.pages.LoginPage;
import com.krafttech.utilities.ConfigurationReader;
import com.krafttech.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class Login_StepDefs {
    LoginPage loginPage = new LoginPage();

    DashboardPage dashboardPage = new DashboardPage();

    @Given("The user is on the login page")
    public void the_user_is_on_the_login_page() {

//        System.out.println("Open browser and navigate to login page");
        String url = ConfigurationReader.get("url");
        Driver.get().get(url);
    }

    @When("The user enters valid credentials that belongs to Mike")
    public void the_user_enters_valid_credentials_that_belongs_to_Mike() {
//        System.out.println("Enter valid credentials that belongs to Mike");
//        loginPage.userEmailInput_loc.sendKeys(ConfigurationReader.get("userEmail"));
//        loginPage.passwordInput_loc.sendKeys(ConfigurationReader.get("password"));
//        loginPage.loginBtn_loc.click();
        loginPage.login();
    }

    @Then("The user should be able to login")
    public void the_user_should_be_able_to_login() {
//        System.out.println("verify that user successfully logs in");
//        Assert.assertTrue(100<99);
        Assert.assertEquals("Dashboard", dashboardPage.dashboardPageSubTitle.getText());
    }

    @When("The user enters valid credentials that belongs to John")
    public void the_user_enters_valid_credentials_that_belongs_to_John() {
//        System.out.println("Enter valid credentials that belongs to Jack");
        loginPage.loginAsJohn();
    }

    @When("The user enters valid credentials that belongs to Eddie Murphy")
    public void the_user_enters_valid_credentials_that_belongs_to_Eddie_Murphy() {
//        System.out.println("Enter valid credentials that belongs to Sebastian");
        loginPage.loginAsEddie();
    }

    @When("The user enters valid credentials that belongs to Morgan Freeman")
    public void the_user_enters_valid_credentials_that_belongs_to_Morgan_Freeman() {
//        System.out.println("Enter valid credentials that belongs to SDET");
        loginPage.loginAsMorgan();
    }

    @When("The user user logs in using {string} and {string}")
    public void the_user_user_logs_in_using_and(String email, String password) {
        loginPage.login(email, password);
    }


    @Then("The user name should be {string}")
    public void the_user_name_should_be(String expectedUserName) {
        String actualUserName = dashboardPage.userAccountName.getText();
        Assert.assertEquals(expectedUserName,actualUserName);

    }

    @When("The user user logs in using wrong {string} or {string}")
    public void the_user_user_logs_in_using_wrong_or(String email, String password) {

        loginPage.login(email,password);
    }




    @Then("Verify that warning message {string} is vicible")
    public void verify_that_warning_message_is_vicible(String message) {
        if (message.equalsIgnoreCase("Email address is incorrect. Please check")){
            Assert.assertEquals(message,loginPage.emailWarningMessage_loc.getText());
        }else if(message.equalsIgnoreCase("Password is incorrect. Please check")){
            Assert.assertEquals(message,loginPage.passwordWarningMessage_loc.getText());
        } else if (message.equalsIgnoreCase("Please enter your email!")) {
            Assert.assertEquals(message,loginPage.emptyEmailBox.getText());
        }else {
            Assert.assertEquals(message,loginPage.emptyPasswordBox.getText());
        }

    }

}
