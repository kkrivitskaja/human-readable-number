module.exports = function toReadable(number) {

    if (number == 0 || number == undefined) return 'zero';

    let un = ['', 'one', 'two', 'three', 'four',
        'five', 'six', 'seven', 'eight', 'nine'
    ];
    let tn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'
    ];
    let sc = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];
    let str = '';

    if (Math.trunc(number / 100) != 0) {
        str += un[Math.trunc(number / 100)] + ' ' + 'hundred';
    }

    number = number % 100;

    if (number != 0) {
        if (number >= 20) {
            str += ' ' + sc[Math.trunc(number / 10)-2] + ' ' + un[(number % 10)];
        } else if (number >= 10) {
            str += ' ' + tn[(number % 10)]
        } else {
            str += ' ' + un[number];
        }
    }
    return str.trim();
}