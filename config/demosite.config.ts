import {config as baseConfig } from "../wdio.conf"
export const config = Object.assign(baseConfig,{
    //All env specific values
    environment : "Magento Demo",
    baseUrlSite: "https://magento.softwaretestingboard.com/"
}) 