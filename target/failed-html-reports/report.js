$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/loginWithParameter.feature");
formatter.feature({
  "name": "Log in as diffirent user",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@loginWithParameter"
    },
    {
      "name": "@rerun"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.krafttech.steps_defs.Login_StepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Log in as Mike wit parameter.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@loginWithParameter"
    },
    {
      "name": "@rerun"
    }
  ]
});
formatter.step({
  "name": "The user user logs in using \"john@gmail.com\" and \"John1234.\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.krafttech.steps_defs.Login_StepDefs.the_user_user_logs_in_using_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#email\"}\n  (Session info: chrome\u003d111.0.5563.147)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-50D0BEJG\u0027, ip: \u0027192.168.0.28\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 111.0.5563.147, chrome: {chromedriverVersion: 111.0.5563.64 (c710e93d5b63..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:50422}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: d1d526434874c48088cf65772ac72f15\n*** Element info: {Using\u003dcss selector, value\u003d#email}\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy19.sendKeys(Unknown Source)\r\n\tat com.krafttech.pages.LoginPage.login(LoginPage.java:89)\r\n\tat com.krafttech.steps_defs.Login_StepDefs.the_user_user_logs_in_using_and(Login_StepDefs.java:63)\r\n\tat ✽.The user user logs in using \"john@gmail.com\" and \"John1234.\"(file:///C:/Users/HP/IdeaProjects/CY_Batch3_Cucumber_Selenium/src/test/resources/features/loginWithParameter.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.krafttech.steps_defs.Login_StepDefs.the_user_should_be_able_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user name should be \"John\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.krafttech.steps_defs.Login_StepDefs.the_user_name_should_be(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.krafttech.steps_defs.Login_StepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Log in as Mike wit parameter.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@loginWithParameter"
    },
    {
      "name": "@rerun"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "The user user logs in using \"eddiem@kraft.com\" and \"eddiem12\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.krafttech.steps_defs.Login_StepDefs.the_user_user_logs_in_using_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#email\"}\n  (Session info: chrome\u003d111.0.5563.147)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-50D0BEJG\u0027, ip: \u0027192.168.0.28\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 111.0.5563.147, chrome: {chromedriverVersion: 111.0.5563.64 (c710e93d5b63..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:50422}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: d1d526434874c48088cf65772ac72f15\n*** Element info: {Using\u003dcss selector, value\u003d#email}\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy19.sendKeys(Unknown Source)\r\n\tat com.krafttech.pages.LoginPage.login(LoginPage.java:89)\r\n\tat com.krafttech.steps_defs.Login_StepDefs.the_user_user_logs_in_using_and(Login_StepDefs.java:63)\r\n\tat ✽.The user user logs in using \"eddiem@kraft.com\" and \"eddiem12\"(file:///C:/Users/HP/IdeaProjects/CY_Batch3_Cucumber_Selenium/src/test/resources/features/loginWithParameter.feature:20)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.krafttech.steps_defs.Login_StepDefs.the_user_should_be_able_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user name should be \"Eddie Murphy\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.krafttech.steps_defs.Login_StepDefs.the_user_name_should_be(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.krafttech.steps_defs.Login_StepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Log in as Mike wit parameter.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    },
    {
      "name": "@loginWithParameter"
    },
    {
      "name": "@rerun"
    }
  ]
});
formatter.step({
  "name": "The user user logs in using \"morganfreeman@kraft.com\" and \"mfreeman\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.krafttech.steps_defs.Login_StepDefs.the_user_user_logs_in_using_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#email\"}\n  (Session info: chrome\u003d111.0.5563.147)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-50D0BEJG\u0027, ip: \u0027192.168.0.28\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 111.0.5563.147, chrome: {chromedriverVersion: 111.0.5563.64 (c710e93d5b63..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:50422}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: d1d526434874c48088cf65772ac72f15\n*** Element info: {Using\u003dcss selector, value\u003d#email}\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy19.sendKeys(Unknown Source)\r\n\tat com.krafttech.pages.LoginPage.login(LoginPage.java:89)\r\n\tat com.krafttech.steps_defs.Login_StepDefs.the_user_user_logs_in_using_and(Login_StepDefs.java:63)\r\n\tat ✽.The user user logs in using \"morganfreeman@kraft.com\" and \"mfreeman\"(file:///C:/Users/HP/IdeaProjects/CY_Batch3_Cucumber_Selenium/src/test/resources/features/loginWithParameter.feature:25)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The user should be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "com.krafttech.steps_defs.Login_StepDefs.the_user_should_be_able_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user name should be \"Morgan Freeman\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.krafttech.steps_defs.Login_StepDefs.the_user_name_should_be(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/navigationMenu.feature");
formatter.feature({
  "name": "Navigation Menu",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.krafttech.steps_defs.Login_StepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Navigation to Developers menu",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@rerun"
    }
  ]
});
formatter.step({
  "name": "The user enters valid credentials that belongs to Mike",
  "keyword": "When "
});
formatter.match({
  "location": "com.krafttech.steps_defs.Login_StepDefs.the_user_enters_valid_credentials_that_belongs_to_Mike()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#email\"}\n  (Session info: chrome\u003d111.0.5563.147)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-50D0BEJG\u0027, ip: \u0027192.168.0.28\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002719.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 111.0.5563.147, chrome: {chromedriverVersion: 111.0.5563.64 (c710e93d5b63..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:50422}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: d1d526434874c48088cf65772ac72f15\n*** Element info: {Using\u003dcss selector, value\u003d#email}\r\n\tat java.base/jdk.internal.reflect.DirectConstructorHandleAccessor.newInstance(DirectConstructorHandleAccessor.java:67)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:484)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat jdk.proxy2/jdk.proxy2.$Proxy19.sendKeys(Unknown Source)\r\n\tat com.krafttech.pages.LoginPage.login(LoginPage.java:61)\r\n\tat com.krafttech.steps_defs.Login_StepDefs.the_user_enters_valid_credentials_that_belongs_to_Mike(Login_StepDefs.java:33)\r\n\tat ✽.The user enters valid credentials that belongs to Mike(file:///C:/Users/HP/IdeaProjects/CY_Batch3_Cucumber_Selenium/src/test/resources/features/navigationMenu.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "The user should be able to see Dashboard text",
  "keyword": "Then "
});
formatter.match({
  "location": "com.krafttech.steps_defs.NavigationMenu_StepDefs.the_user_should_be_able_to_see_Dashboard_text()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user navigates to Developer menu",
  "keyword": "And "
});
formatter.match({
  "location": "com.krafttech.steps_defs.NavigationMenu_StepDefs.the_user_navigates_to_Developer_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The user able to see Developers text",
  "keyword": "Then "
});
formatter.match({
  "location": "com.krafttech.steps_defs.NavigationMenu_StepDefs.the_user_able_to_see_Developers_text()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png", "screenshot");
formatter.after({
  "status": "passed"
});
});