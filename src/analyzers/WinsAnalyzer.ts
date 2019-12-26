import { Analyzer } from './Analyzer';
import { Match } from '../Match';
import { MatchResult } from '../MatchResult';

export class WinsAnalyzer implements Analyzer {
    protected _team: string;

    public constructor(team: string) {
        this._team = team;
    }

    public run(matches: Match[]): string {
        let wins = 0;
        for (let match of matches) {
            match.homeTeam === this._team && match.winCode === MatchResult.HOME_WIN && wins++;
            match.awayTeam === this._team && match.winCode === MatchResult.AWAY_WIN && wins++;
        }
        return `>>> ${this._team} won ${wins} <<<`;
    }
}
