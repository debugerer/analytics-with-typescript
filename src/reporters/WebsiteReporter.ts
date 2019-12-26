import fs from 'fs';
import { Reporter } from './Reporter';

export class WebsiteReporter implements Reporter {

    public print(report: string): void {
        const html = `
            <div>
                <h1>Analysis Report</h1>
                <div>${report}</div>
            </div>
        `;
        const path = 'assets/report.html';
        fs.writeFileSync(path, html);
        console.log(`>>> Website report generated ${path}`);
    }
}
