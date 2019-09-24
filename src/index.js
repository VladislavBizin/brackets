module.exports = function check(str, bracketsConfig) {
  // your solution
    const brackets = new Map([...bracketsConfig]);

    const mainHelper = (str) => {

        if(str.length === 0) return true;
        if(str.length + 1 % 2 === 0) return false;

        const isOpeningSymbol = symbol => brackets.has(symbol);
        const getClosingSymbolFor = symbol => brackets.get(symbol);

        for (let i = 0; i < str.length; i += 1) {
            if(isOpeningSymbol(str[i]) && getClosingSymbolFor(str[i]) === str[i + 1]){
                let newString = [...str.slice(0,i),...str.slice(i+2)].join("");
                return mainHelper(newString);
            }
        }
        return false
    };
    return mainHelper(str);
};
