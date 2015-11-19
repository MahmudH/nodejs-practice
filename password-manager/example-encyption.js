var crypto = require('crypto-js');

var secretMessage = {
  name: 'Mahmud',
  secretName: '007'
}
var secretKey = '123abc';

//Encrypt
var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage), secretKey);

console.log('Encryped message is : ' + encryptedMessage);

//Decrypt
var byte = crypto.AES.decrypt(encryptedMessage, secretKey);
var decryptedMessage = JSON.parse(byte.toString(crypto.enc.Utf8));

console.log(decryptedMessage);
console.log(decryptedMessage.secretKey);
