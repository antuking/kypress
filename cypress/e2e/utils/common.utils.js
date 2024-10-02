export function getRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export function getRandomValueFromDict(dict) {
    const keys = Object.keys(dict);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return dict[randomKey];
}