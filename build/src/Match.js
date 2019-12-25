"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var Match = /** @class */ (function () {
    function Match(fields) {
        this._date = utils_1.dateStringToDate(fields[0]);
        this._homeTeam = fields[1];
        this._awayTeam = fields[2];
        this._homeScore = parseInt(fields[3]);
        this._awayScore = parseInt(fields[4]);
        this._winCode = fields[5]; // type assertion
        this._referee = fields[6];
    }
    Object.defineProperty(Match.prototype, "homeTeam", {
        get: function () {
            return this._homeTeam;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Match.prototype, "awayTeam", {
        get: function () {
            return this._awayTeam;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Match.prototype, "homeScore", {
        get: function () {
            return this._homeScore;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Match.prototype, "awayScore", {
        get: function () {
            return this._awayScore;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Match.prototype, "winCode", {
        get: function () {
            return this._winCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Match.prototype, "referee", {
        get: function () {
            return this._referee;
        },
        enumerable: true,
        configurable: true
    });
    Match.prototype.toString = function () {
        return this.homeTeam + " - " + this.awayTeam + " [" + this.homeScore + ":" + this.awayScore + "]" + this.winCode + " at " + this.referee;
    };
    return Match;
}());
exports.Match = Match;
