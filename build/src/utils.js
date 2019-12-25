"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = function (dateString) {
    // 28/10/2018
    var d = dateString.split('/').map(function (value) {
        return parseInt(value);
    });
    return new Date(d[2], d[1] - 1, d[0]);
};
