"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this._data = [];
        this._filename = filename;
    }
    Object.defineProperty(CsvFileReader.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    CsvFileReader.prototype.read = function () {
        this._data = fs_1.default.readFileSync(this._filename, {
            encoding: 'utf-8'
        }).split('\n').map(function (row) { return row.split(','); });
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
