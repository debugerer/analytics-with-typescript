import { MatchResult } from './src/MatchResult';
import { MatchReader } from './src/MatchReader';
import { CsvFileReader } from './src/CsvFileReader';

// Create an object that satisfies DataReader interface
const csvFielReader: CsvFileReader = new CsvFileReader('assets/football.csv');

// Create an instance of MatchReader and pass in something satisfying DataReader interface
const matchReader = new MatchReader(csvFielReader);
matchReader.load();

const team = 'Man United';
let wins = 0;
const { matches } = matchReader;
for (let match of matches) {
    match.homeTeam === team && match.winCode === MatchResult.HOME_WIN && wins++;
    match.awayTeam === team && match.winCode === MatchResult.AWAY_WIN && wins++;
}

// report result
console.log(`>>> ${team} won ${wins} <<<`);
// console.log('>>> reader.data', reader.data);
