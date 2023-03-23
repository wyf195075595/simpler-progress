define(['require'], (function (require) { 'use strict';

    /*
     * @Description: 
     * @Author:  
     * @Date: 2023-03-21 17:12:56
     * @LastEditTime: 2023-03-21 17:19:38
     * @LastEditors:  
     */
    // 此方式不支持 iife,umd 格式模块
    // 此方式不支持 iife,umd 格式模块
    new Promise(function (resolve, reject) { require(['./logger-dc4640ec'], resolve, reject); }).then(({log})=> {
        log("album code splitting~");
    });

}));
