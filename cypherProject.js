class ShiftCipher {
    constructor(number) {
        this._number = number;
    }
    encrypt(string) {
        let changedWord = string.toUpperCase();
        //console.log(changedWord);
        let newWord = "";
        for (let i = 0; i <= string.length - 1; i++) {
            let charCode = changedWord.charCodeAt(i);
            if (charCode === 32) {
                newWord += " ";
            } else if (charCode < 65 || charCode > 90 ){
                newWord += String.fromCharCode(charCode);
            } else {
                let newCharCode = charCode + this._number;
                if (newCharCode > 90) {
                    let difference = newCharCode - 90;
                    newCharCode = 64 + difference;
                }
                let newLetter = String.fromCharCode(newCharCode);
                newWord += newLetter;
            }
        }
        return console.log(newWord);
    }
    decrypt(string) {
        let changedWord = string.toLowerCase();
        //console.log(changedWord);
        let newWord = "";
        for (let i = 0; i <= string.length - 1; i++) {
            let charCode = changedWord.charCodeAt(i);
            if (charCode === 32) {
                newWord += " ";
            } else if (charCode < 97 || charCode > 122){
                newWord += String.fromCharCode(charCode);
            } else {
                let newCharCode = charCode - this._number;
                if (newCharCode < 97) {
                    newCharCode = 123 - this._number;
                }
                let newLetter = String.fromCharCode(newCharCode);
                newWord += newLetter;
            }
        }
        return console.log(newWord);
    }
}

const cipher = new ShiftCipher(1);
cipher.encrypt("Z");