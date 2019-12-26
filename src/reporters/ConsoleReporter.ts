import { Reporter } from './Reporter';

export class ConsoleReporter implements Reporter {

    public print(report: string): void {
        console.log(report);
    }
}
