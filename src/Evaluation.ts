import { Analyzer } from './Analyzer';
import { Report } from './Report';
import { Match } from './Match';

export class Evaluation {
    protected _analyzer: Analyzer;
    protected _report: Report;

    public constructor(analyzer: Analyzer, report: Report) {
        this._analyzer = analyzer;
        this._report = report;
    }

    public buildAndPrintReport(matches: Match[]): void {
        //
    }
}
