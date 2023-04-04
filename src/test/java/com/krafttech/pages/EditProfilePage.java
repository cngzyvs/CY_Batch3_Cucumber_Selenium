package com.krafttech.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

public class EditProfilePage extends BasePage {

    @FindBy(xpath = "//input[@id='name']")
    public WebElement name;

    //driver.findelement(...)
    @FindBy(css = "#about")
    public WebElement aboutInputBox;

    @FindBy(xpath = "(//input[@id='company'])[1]")
    public WebElement companyInputBox;

    @FindBy(xpath = "//select[@id='job']")
    public WebElement jobTitle;

    @FindBy(css = "#website")
    public WebElement websiteInputBox;

    @FindBy(xpath = "(//input[@id='location'])[1]")
    public WebElement locationInputBox;

    @FindBy(css = "#skills")
    public WebElement skillsInputBox;

    @FindBy(xpath = "//div/button[.='Save Changes']/..")
    public WebElement saveChangesButton;

    @FindBy(xpath = "//div[contains(text(),'Profile U')]")
    public WebElement profileApdate;

    public void selectJob(String jobDescription){
        Select select = new Select(jobTitle);
        select.selectByVisibleText(jobDescription);
    }

    public void fiiOutTheEdidtProfileInputBoxes(String fullName, String aboutBox, String company, String select,
                                                String webSite, String location, String skills){
        name.clear();
        name.sendKeys(fullName);
        aboutInputBox.clear();
        aboutInputBox.sendKeys(aboutBox);
        companyInputBox.clear();
        companyInputBox.sendKeys(company);
        selectJob(select);
        websiteInputBox.clear();
        websiteInputBox.sendKeys(webSite);
        locationInputBox.clear();
        locationInputBox.sendKeys(location);
        skillsInputBox.clear();
        skillsInputBox.sendKeys(skills);
    }
}
