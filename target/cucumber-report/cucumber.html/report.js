$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("laptop.feature");
formatter.feature({
  "line": 1,
  "name": "Laptop Search functionality validation",
  "description": "User should be able to add and verify lenovo laptop text message \u0027Added to cart\u0027 successfully",
  "id": "laptop-search-functionality-validation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7046151200,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to search the laptop in the search bar and add to the cart",
  "description": "",
  "id": "laptop-search-functionality-validation;user-should-be-able-to-search-the-laptop-in-the-search-bar-and-add-to-the-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Sanity"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter \"laptop\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click on search bar",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on Lenovo check box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on the product \"Lenovo ThinkBook 13s Gen 2 Intel Laptop 2022, 13.3\" IPS 300 nits, 11th Intel i7-1165G7(up to 4.7GHz) 16GB RAM, 512GB SSD, Backlit Keyboard, Fingerprint Reader, Win 10 Pro\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "change the quantity to \"3\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify the message displayed \"Added to Cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LaptopSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 215869900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "laptop",
      "offset": 9
    }
  ],
  "location": "LaptopSteps.iEnter(String)"
});
formatter.result({
  "duration": 187074000,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.clickOnSearchBar()"
});
formatter.result({
  "duration": 2502129100,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.clickOnLenovoCheckBox()"
});
formatter.result({
  "duration": 2294792000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lenovo ThinkBook 13s Gen 2 Intel Laptop 2022, 13.3",
      "offset": 22
    },
    {
      "val": "300",
      "offset": 78
    },
    {
      "val": "11",
      "offset": 88
    },
    {
      "val": "7",
      "offset": 100
    },
    {
      "val": "1165",
      "offset": 102
    },
    {
      "val": "7",
      "offset": 107
    },
    {
      "val": "4",
      "offset": 115
    },
    {
      "val": "7",
      "offset": 117
    },
    {
      "val": "16",
      "offset": 123
    },
    {
      "val": "512",
      "offset": 133
    },
    {
      "val": "10",
      "offset": 186
    }
  ],
  "location": "LaptopSteps.clickOnTheProductIPSNitsThIntelIGUpToGHzGBRAMGBSSDBacklitKeyboardFingerprintReaderWinPro(String)"
});
formatter.result({
  "duration": 520400,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.amazon.cucumber.steps.LaptopSteps.clickOnTheProductIPSNitsThIntelIGUpToGHzGBRAMGBSSDBacklitKeyboardFingerprintReaderWinPro(String) in file:/C:/Users/jpate/IdeaProjects/cucumber-amazon-week16/target/test-classes/\u0027 with pattern [^click on the product \"([^\"]*)\" IPS (\\d+) nits, (\\d+)th Intel i(\\d+)-(\\d+)G(\\d+)\\(up to (\\d+)\\.(\\d+)GHz\\) (\\d+)GB RAM, (\\d+)GB SSD, Backlit Keyboard, Fingerprint Reader, Win (\\d+) Pro\"$] is declared with 1 parameters. However, the gherkin step has 11 arguments [Lenovo ThinkBook 13s Gen 2 Intel Laptop 2022, 13.3, 300, 11, 7, 1165, 7, 4, 7, 16, 512, 10]. \nStep: And click on the product \"Lenovo ThinkBook 13s Gen 2 Intel Laptop 2022, 13.3\" IPS 300 nits, 11th Intel i7-1165G7(up to 4.7GHz) 16GB RAM, 512GB SSD, Backlit Keyboard, Fingerprint Reader, Win 10 Pro\"\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 24
    }
  ],
  "location": "LaptopSteps.changeTheQuantityTo(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopSteps.clickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Added to Cart",
      "offset": 30
    }
  ],
  "location": "LaptopSteps.verifyTheMessageDisplayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1520668700,
  "status": "passed"
});
formatter.uri("mobile.feature");
formatter.feature({
  "line": 1,
  "name": "Mobile Search functionality validation",
  "description": "User should be able to add and verify nokia mobile text message \u0027Added to cart\u0027 successfully",
  "id": "mobile-search-functionality-validation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5786260900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to search the laptop in the search bar and add to the cart",
  "description": "",
  "id": "mobile-search-functionality-validation;user-should-be-able-to-search-the-laptop-in-the-search-bar-and-add-to-the-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter \"mobile phone\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click on search bar",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on Nokia check box",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on the product \"Nokia XR20 5G | Android 11 | Unlocked Smartphone | Dual SIM | US Version | 6/128GB | 6.67-Inch Screen | 48MP Dual Camera | Polar Night\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "change the quantity to \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "verify  message displayed \"Added to Cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LaptopSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 85900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mobile phone",
      "offset": 9
    }
  ],
  "location": "LaptopSteps.iEnter(String)"
});
formatter.result({
  "duration": 437972800,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.clickOnSearchBar()"
});
formatter.result({
  "duration": 2520533300,
  "status": "passed"
});
formatter.match({
  "location": "LaptopSteps.clickOnNokiaCheckBox()"
});
formatter.result({
  "duration": 2772820400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia XR20 5G | Android 11 | Unlocked Smartphone | Dual SIM | US Version | 6/128GB | 6.67-Inch Screen | 48MP Dual Camera | Polar Night",
      "offset": 22
    }
  ],
  "location": "LaptopSteps.clickOnTheProduct(String)"
});
formatter.result({
  "duration": 40706617200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[@class\u003d\u0027s-pagination-strip\u0027]//a[4]\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027PARAM397HP\u0027, ip: \u0027192.168.0.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [1f6c2992a39733b728461361021863aa, findElement {using\u003dxpath, value\u003d//span[@class\u003d\u0027s-pagination-strip\u0027]//a[4]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\jpate\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51201}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:51201/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 1f6c2992a39733b728461361021863aa\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.amazon.utility.Utility.clickOnElement(Utility.java:55)\r\n\tat com.amazon.pages.FindYourProductPage.setTheProductMobile(FindYourProductPage.java:181)\r\n\tat com.amazon.cucumber.steps.LaptopSteps.clickOnTheProduct(LaptopSteps.java:69)\r\n\tat ???.And click on the product \"Nokia XR20 5G | Android 11 | Unlocked Smartphone | Dual SIM | US Version | 6/128GB | 6.67-Inch Screen | 48MP Dual Camera | Polar Night\"(mobile.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "LaptopSteps.changeTheQuantityTo(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopSteps.clickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Added to Cart",
      "offset": 27
    }
  ],
  "location": "LaptopSteps.verifyMessageDisplayed(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1054739800,
  "status": "passed"
});
});