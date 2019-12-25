import { Report } from './Report';

export class ConsoleReport implements Report {
    public print(report: string): void {
        console.log('>>> ConsoleReport::print -->', report);
    }
}
