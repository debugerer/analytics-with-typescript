export interface DataReader {
    data: string[][];
    read(): DataReader;
}
