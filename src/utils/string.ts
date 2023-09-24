export function titleCase(str: string) {
    const strArray: string[] = str.toLowerCase().split(' ');
    for (let i = 0; i < strArray.length; i++) {
        strArray[i] = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1);
    }
    return strArray.join(' ');
}