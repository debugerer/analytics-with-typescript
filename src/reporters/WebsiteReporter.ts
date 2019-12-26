import { Reporter } from 'src/Reporter';

export class WebsiteReporter implements Reporter {
    public print(report: string): void {
        console.log('>>> WebsiteReporter::print -->', report);
    }
}
