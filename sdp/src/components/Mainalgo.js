import React from 'react'
let s
function Mainalgo(message, key) {
    s = "";
    let chenged = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        for (let j = 0; j < key; j++) {
            for (let i = 0; i < 25; i++) {
                let temp = chenged[i];
                chenged[i] = chenged[i + 1]
                chenged[i + 1] = temp;
            }
        }

        let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        
        for (let i = 0; i < message.length; i++) {
            for (let j = 0; j < 26; j++) {
                if (message.charAt(i) == alphabet[j]) {
                    s = s.concat(chenged[j]);
                }
            }
        }

        console.log(message);
        console.log(s);

        

        
}

export default s