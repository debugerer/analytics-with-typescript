import { CsvFileReader } from './CsvFileReader';
import { DataReader } from './DataReader';
import { Match } from './Match';

export class MatchReader {

    protected _reader: DataReader;
    protected _matches: Match[] = [];

    public get matches(): Match[] {
        return this._matches;
    }

    public constructor(reader: DataReader) {
        this._reader = reader;
    }

    public load(): void {
        this._reader.read();
        this._matches = this._reader.data.map(fields => new Match(fields));
    }
}
