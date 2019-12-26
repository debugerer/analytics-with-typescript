import { Reporter } from 'src/Reporter';

export class ConsoleReporter implements Reporter {
    public print(report: string): void {
        console.log('>>> ConsoleReporter::print -->', report);
    }
}
