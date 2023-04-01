function rot13(str) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";

    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        const index = alphabet.indexOf(letter);
        if (index === -1) {
            result += letter;
        } else {
            const newIndex = (index + 13) % 26;
            const shiftedChar = alphabet[newIndex];
            result += letter === letter ? shiftedChar : "";
        }
    }

    return result;
}