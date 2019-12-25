import { MatchResult } from './MatchResult';
import { dateStringToDate } from './utils';

export class Match {
    protected _date: Date;
    protected _homeTeam: string;
    protected _awayTeam: string;
    protected _homeScore: number;
    protected _awayScore: number;
    protected _winCode: MatchResult;
    protected _referee: string;

    public constructor(fields: string[]) {
        this._date = dateStringToDate(fields[0]);
        this._homeTeam = fields[1];
        this._awayTeam = fields[2];
        this._homeScore = parseInt(fields[3]);
        this._awayScore = parseInt(fields[4]);
        this._winCode = fields[5] as MatchResult;// type assertion
        this._referee = fields[6];
    }

    public get homeTeam(): string {
        return this._homeTeam;
    }

    public get awayTeam(): string {
        return this._awayTeam;
    }

    public get homeScore(): number {
        return this._homeScore;
    }

    public get awayScore(): number {
        return this._awayScore;
    }

    public get winCode(): string {
        return this._winCode;
    }

    public get referee(): string {
        return this._referee;
    }

    public toString(): string {
        return `${this.homeTeam} - ${this.awayTeam} [${this.homeScore}:${this.awayScore}]${this.winCode} at ${this.referee}`;
    }
}
