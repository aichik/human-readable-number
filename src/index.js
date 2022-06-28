module.exports = function toReadable(number) {
  let arrTo19 = ['zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'];
  let arrWholes = ['twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'];
  let readableText = '';

  if (number > 99) readableText += arrTo19[Math.floor(number / 100)] + ' hundred ';
  if (number % 100 > 19) {
    readableText += arrWholes[Math.floor(number % 100 / 10) - 2];
    if (number % 10 !== 0) {
      readableText += ' ' + arrTo19[Math.floor(number % 10)];
    }
  }
  if (number % 100 <= 19) readableText += arrTo19[Math.floor(number % 100)];
  if (readableText.indexOf('zero') > 0 && readableText.length > 4) readableText = readableText.slice(0, -5);
  return readableText;
}
