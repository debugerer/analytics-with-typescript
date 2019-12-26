import fs from "fs";
import { DataReader } from './DataReader';

export class CsvFileReader implements DataReader {
    protected _filename: string;
    protected _data: string[][] = [];

    public get data(): string[][] {
        return this._data;
    }

    public constructor(filename: string) {
        this._filename = filename;
    }

    public read(): CsvFileReader {
        this._data = fs.readFileSync(this._filename, {
            encoding: 'utf-8'
        }).split('\n').map(row => row.split(','));
        return this;
    }
}
