import { MatchReader } from './src/MatchReader';
import { Evaluation } from './src/Evaluation';

// Short usage of common and expected behaviour
const matchReader = MatchReader.fromCsv('assets/football.csv');
// const evaluation = Evaluation.winsAnalysisWithConsoleReport('Man United');
const evaluation = Evaluation.winsAnalysisWithWebsiteReport('Man United');
evaluation.runAndPrintReport(matchReader.matches);
