import { config as baseConfig } from "../wdio.conf"
export const config = Object.assign(baseConfig, {
    //All env specific values
    environment: "UAT",
    baseUrlSauce: "https://www.saucedemo.com/",
    capabilities: [{

        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
        maxInstances: 5,
        acceptInsecureCerts: true,
        timeouts: { implicit: 15000, pageLoad: 20000, script: 30000 },
        //
        browserName: 'chrome',
        //headless/other arg

        'goog:chromeOptions': {
            args: ["--disable-web-security", "--headless", "--disable-dev-shm-usage", "--no-sandbox", "--window-size=1920,1080"]
        }

    }]
})