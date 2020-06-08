const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`Enter your test string:   `, (test) => {
    checker(test)
    readline.close()
})


const checker = (string) => {
    const parens = [] // array will act as a stack
    let balanced = true;
    string.split('').forEach(char => {
        if (balanced && (char === '(' || char === ')')) { // discard all characters that aren't parenthesis
            if (char === '(') {
                parens.push(char)
            } else if (parens.length === 0) {
                balanced = false
            } else {
                parens.pop()
            }
        }
    })
    if (balanced && parens.length === 0) { // parenthesis are balanced
        console.log('true')
    } else {                               // unbalanced
        console.log('false')
    }
}
