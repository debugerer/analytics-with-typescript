import { Analyzer } from './analyzers/Analyzer';
import { Reporter } from './reporters/Reporter';
import { Match } from './Match';
import { WinsAnalyzer } from './analyzers/WinsAnalyzer';
import { WebsiteReporter } from './reporters/WebsiteReporter';
import { ConsoleReporter } from './reporters/ConsoleReporter';

export class Evaluation {
    protected _analyzer: Analyzer;
    protected _reporter: Reporter;

    public constructor(analyzer: Analyzer, reporter: Reporter) {
        this._analyzer = analyzer;
        this._reporter = reporter;
    }

    static printHello() {
        console.log("Hello, it's me you're looking for?")
    }

    static winsAnalysisWithConsoleReport(team: string) {
        return new Evaluation(
            new WinsAnalyzer(team),
            new ConsoleReporter()
        );
    }

    static winsAnalysisWithWebsiteReport(team: string) {
        return new Evaluation(
            new WinsAnalyzer(team),
            new WebsiteReporter()
        );
    }

    public runAndPrintReport(matches: Match[]): void {
        const analysis: string = this._analyzer.run(matches);
        this._reporter.print(analysis);
    }
}
