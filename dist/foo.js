define(['./logger-dc4640ec'], (function (logger) { 'use strict';

    var message = {
        hi: "Hey Guys, I am zce~"
    };

    var name = "rollup-demo";
    var version = "1.0.0";

    /*
     * @Description: 
     * @Author:  
     * @Date: 2023-03-21 16:36:57
     * @LastEditTime: 2023-03-22 08:58:22
     * @LastEditors:  
     */
    const esm = require("./cjs-module");
    const msg = message.hi;
    logger.log(esm.name);
    logger.log(msg);
    logger.log(name);
    logger.log(version);

    // // 此方式不支持 iife,umd 格式模块
    // import('./logger').then(({log})=> {
    //     log("code splitting~");
    // })

}));
