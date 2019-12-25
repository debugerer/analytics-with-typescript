"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_1 = require("./src/MatchResult");
var MatchReader_1 = require("./src/MatchReader");
var CsvFileReader_1 = require("./src/CsvFileReader");
// Create an object that satisfies DataReader interface
var csvFielReader = new CsvFileReader_1.CsvFileReader('assets/football.csv');
// Create an instance of MatchReader and pass in something satisfying DataReader interface
var matchReader = new MatchReader_1.MatchReader(csvFielReader);
matchReader.load();
var team = 'Man United';
var wins = 0;
var matches = matchReader.matches;
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    match.homeTeam === team && match.winCode === MatchResult_1.MatchResult.HOME_WIN && wins++;
    match.awayTeam === team && match.winCode === MatchResult_1.MatchResult.AWAY_WIN && wins++;
}
// report result
console.log(">>> " + team + " won " + wins + " <<<");
// console.log('>>> reader.data', reader.data);
