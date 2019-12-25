export const dateStringToDate = (dateString: string): Date => {
    // 28/10/2018
    const d = dateString.split('/').map((value: string) => {
        return parseInt(value);
    });
    return new Date(d[2], d[1] - 1, d[0]);
};
