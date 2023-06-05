const CryptoJS = require("crypto-js");

const KEY = "OC7tZYFJw6DuXEtbMXAUprVxuEy9n8kXvBqT/hQ5RDk=";


const encryptedValue = "eyJpdiI6Imt3alFKdWYzbmVadEtGK0QyTWJRRnc9PSIsInZhbHVlIjoiTjd5azdEbnVGSUs3KzFQNHlRMnZsZz09IiwibWFjIjoiYWRhY2EwMGI1NWMyOTc5ODZkNGMyZDkwODY1MDBiOWRjNWRlYmY0ZDJjMmFjZmQ1YjJiODZiNzlhMWVlYjNhYyIsInRhZyI6IiJ9";




const Crypto = () => {

//   const encryptedBytes = CryptoJS.enc.Base64.parse(encryptedValue);
//   const iv = encryptedBytes.slice(0, 16);
//   const ciphertext = encryptedBytes.slice(16);
//   const key = CryptoJS.enc.Utf8.parse(KEY);
  
//   const decryptedBytes = CryptoJS.AES.decrypt({ ciphertext: ciphertext }, key, { iv: iv });
//   const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8).replace(/\0+$/, '');

// console.log(decryptedData , "decryptedData")

//   function Encrypt(data) {
//     const ciphertext = CryptoJS.AES.encrypt(data, KEY).toString();
//     return ciphertext;
//   }

//   function Decrypt(ciphertext) {
    
//     var decrypted = CryptoJS.AES.decrypt(ciphertext, KEY); 
// console.log(decrypted);

//   }

//   function EncryptObj(data) {
//     var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), KEY).toString();
//     return ciphertext;
//   }

//   function DecryptObj(ciphertext) {
//     var bytes = CryptoJS.AES.decrypt(ciphertext, KEY);
//     var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
//     return decryptedData;
//   }

//   return {
//     Encrypt,
//     Decrypt,
//     EncryptObj,
//     DecryptObj,
//   };
};

export default Crypto;
