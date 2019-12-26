import { Match } from './Match';

export interface Analyzer {
    run(matches: Match[]): string;
}
