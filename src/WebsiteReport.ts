import { Report } from 'src/Report';

export class WebsiteReport implements Report {
    public print(report: string): void {
        console.log('>>> WebsiteReport -->', report);
    }
}
