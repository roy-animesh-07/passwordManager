const crypto = require('crypto');
require('dotenv').config()
console.log(process.env.KEY)

// Generate 32-byte master key using SHA-256 hash of your passphrase
const masterKey = crypto.createHash('sha256').update('your-master-key-passphrase').digest();

// Generate a random 16-byte IV
const iv = crypto.randomBytes(16);

// AES encryption
function encryptPassword(password, key, iv) {
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(password, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return {
    iv: iv.toString('hex'),
    encryptedData: encrypted
  };
}

// AES decryption
function decryptPassword(encryptedData, key, ivHex) {
  const iv = Buffer.from(ivHex, 'hex');
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

// Example usage
console.log(masterKey);
const password = 'my-secret-password';
const encrypted = encryptPassword(password, masterKey, iv);
console.log('Encrypted:', encrypted);

const decrypted = decryptPassword(encrypted.encryptedData, masterKey, encrypted.iv);
console.log('Decrypted:', decrypted);