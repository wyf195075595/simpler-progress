/*!
 * RollupDemo.js v1.0.0
 * https://195075595.github.io
 *
 * Copyright 2023-present wyf
 * Released under the ISC license
 *
 * Date: 2023-03-22T01:17:45.093Z
 */

define((function () { 'use strict';

    const log = msg => {
        console.log("----Info----");
        console.log(msg);
    };

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
    log(esm.name);
    log(msg);
    log(name);
    log(version);

    // // 此方式不支持 iife,umd 格式模块
    // import('./logger').then(({log})=> {
    //     log("code splitting~");
    // })

}));
