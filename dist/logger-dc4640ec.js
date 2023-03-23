define(['exports'], (function (exports) { 'use strict';

    const log = msg => {
        console.log("----Info----");
        console.log(msg);
    };

    const error = msg => {
        console.error("----ERROR----");
        console.error(msg);
    };

    exports.error = error;
    exports.log = log;

}));
