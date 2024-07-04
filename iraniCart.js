const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('./chromedriver-mac-x64/chromedriver').path;

async function fillForm(url, fileToUpload) {
    let service = new chrome.ServiceBuilder(path).build();
    chrome.setDefaultService(service);

    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get(url);
        await driver.findElement(By.name("your-name")).sendKeys('علیرضا شهبازیان');
        await driver.findElement(By.name("your-email")).sendKeys('alishah****@gmail.com');
        await driver.findElement(By.name("your-phone")).sendKeys('0939268****');
        await driver.findElement(By.name("your-position")).sendKeys('Front-end(Vue.js)');

        let fileInput = await driver.findElement(By.css(".wpcf7-form-control-wrap > .wpcf7-file"));
        await fileInput.sendKeys(fileToUpload);
        await driver.findElement(By.name("your-message")).sendKeys('I love irani-cart and i want work there');

        await driver.findElement(By.className('btn-lg')).click();
        await driver.sleep(5000);
    } finally {
        await driver.quit();
    }
}

// URL of the form
let formUrl = 'https://www.iranicard.ir/jobs/';

// Path to the file you want to upload
let fileToUpload = 'AlirezaShahbaziyan.pdf';

// Loop to fill the form 30 times
for (let i = 0; i < 30; i++) {
    fillForm(formUrl, fileToUpload);
}
