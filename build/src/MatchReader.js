"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Match_1 = require("./Match");
var MatchReader = /** @class */ (function () {
    function MatchReader(reader) {
        this._matches = [];
        this._reader = reader;
    }
    Object.defineProperty(MatchReader.prototype, "matches", {
        get: function () {
            return this._matches;
        },
        enumerable: true,
        configurable: true
    });
    MatchReader.prototype.load = function () {
        this._reader.read();
        this._matches = this._reader.data.map(function (fields) { return new Match_1.Match(fields); });
    };
    return MatchReader;
}());
exports.MatchReader = MatchReader;
