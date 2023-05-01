[<img alt="TAI Lab." width="59px" src="https://github.com/ladooniani/Terbinari-CBM-Robot/blob/main/images/dropsuit.png" />](https://github.com/ladooniani/dropsuit#readme)

[![npm version](https://img.shields.io/npm/v/dropsuit-tok.svg?style=flat)](https://www.npmjs.com/package/dropsuit-tok) [![npm](https://img.shields.io/npm/dt/dropsuit-tok.svg?style=flat-square)](https://www.npmjs.com/package/dropsuit-tok) [![License](https://img.shields.io/npm/l/dropsuit-tok.svg)](https://www.npmjs.com/package/dropsuit-tok)

# Overview of [DropSuit](https://github.com/ladooniani/dropsuit#readme) NLP and the tok Function

[DropSuit](https://github.com/ladooniani/dropsuit#readme) NLP is an open-source JavaScript and Node.js library offering diverse functions for natural language processing and data manipulation. The tok function is one of its modules, designed for tokenizing array text and returning tokenized words number, tokenized words array and tokenized words concatenated string. It is available under the Apache License 2.0.

## DropSuit NLP Method: tok - A JavaScript and Node.js function for tokenizing text

The tok function is a part of the DropSuit NLP library, it's a JavaScript and Node.js function that processes object instance from data.json key value 'requests' intent and tokenizes array text returning tokenized words number, tokenized words array and tokenized words concatenated string. It's open-source and available under the Apache License 2.0.

### Installation

Add the library function by installing it via npm:

```
npm install dropsuit-tok
```

### Usage

Import the library in your project:

```
const dropsuit_tok = require("dropsuit-tok");

```

Process [intents.json](https://github.com/ladooniani/dropsuit-tok/blob/main/test/intents.json) using 'jsonIntStrct' function:

```
const json_data = require("dropsuit-tok/jsobj.js");
let intentData = json_data.jsonIntStrct("assets/json/intents.json");

```

insert 'intentData' and set boolean parameter (true/false) argument value to display console log processing results output information in terminal:

```
let dstok = new dropsuit_tok(intentData.req_arr, false);

```

#### tok(input: string|array|null, filter: number)

- **array**: Processes default object instance key value _(req_arr: requests)_.
- **filter**: (0) Keep duplicate, (1) Remove duplicate.

#### Return type option:

- **tokNmb()** Tokenized words number.
- **tokArr()** Tokenized words array.
- **tokStr()** Tokenized words concatenated string.

```

let out = dstok.tok(null, 1);
console.log(out);

```

Return object instance:

```
Input:

 [
  'hi there, hi, hello to you, hello',
  'take care, bye bye, see you later, later ill be around',
  'thanks a lot, thanks, many thanks, thank you'
]

Object:

 {
  tkNmb: 18,
  tkArr: [
    'hi',     'there',  'hello',
    'to',     'you',    'take',
    'care',   'bye',    'see',
    'later',  'ill',    'be',
    'around', 'thanks', 'a',
    'lot',    'many',   'thank'
  ],
  tkStr: 'hi there hello to you take care bye see later ill be around thanks a lot many thank',
  tokNmb: [Function: tokNmb],
  tokArr: [Function: tokArr],
  tokStr: [Function: tokStr]
}
```

## Links

- npm: https://www.npmjs.com/package/dropsuit-tok

## Supporting DropSuit

DropSuit is an open-source library and I am dedicated to ensuring its continued development and improvement. If you have any questions, feedback, or encounter any issues, please reach out through the [support via PayPal](https://www.paypal.com/paypalme/dropsuit?country.x=GE&locale.x=en_US), and read more about [support details](https://github.com/ladooniani/dropsuit/blob/main/Support.md).

Your support is crucial for the library's success. You can also contribute to the project by submitting bug reports, feature requests, or by providing feedback. Sharing the library with others who may find it useful and giving it a star on GitHub are also great ways to show your support. Thank you for using DropSuit!

## License

[Apache License 2.0](LICENSE.txt)