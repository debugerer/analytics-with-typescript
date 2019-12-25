"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var Match_1 = require("../Match");
var MatchReader = /** @class */ (function (_super) {
    __extends(MatchReader, _super);
    function MatchReader(filename) {
        return _super.call(this, filename) || this;
    }
    Object.defineProperty(MatchReader.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    MatchReader.prototype._mapRow = function (data) {
        return data.map(function (fields) { return new Match_1.Match(fields); });
    };
    return MatchReader;
}(CsvFileReader_1.CsvFileReader));
exports.MatchReader = MatchReader;
