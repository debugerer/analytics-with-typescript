"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConsoleReport = /** @class */ (function () {
    function ConsoleReport() {
    }
    ConsoleReport.prototype.print = function (report) {
        console.log('>>> ConsoleReport::print -->', report);
    };
    return ConsoleReport;
}());
exports.ConsoleReport = ConsoleReport;
