const Pass = require("../models/password");
const crypto = require('crypto');
require('dotenv').config()


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

async function handlepasswordsave(req,res) {
    console.log(req.body);
    const {domain , username , password} = req.body;
    const iv = crypto.randomBytes(16);
    const masterKey = crypto.createHash('sha256').update(process.env.KEY.toString()).digest();
    const encrypted = encryptPassword(password, masterKey, iv);
    const data = {
        domain,
        username,
        iv:encrypted.iv,
        encryptedPass:encrypted.encryptedData
    }
    await Pass.create(data);
    return res.status(200).json({
        message:"success"
    })
}
async function handlegetallpasswords(req,res) {
    try{
        const masterKey = crypto.createHash('sha256').update(process.env.KEY.toString()).digest();
        const data = await Pass.find({});
        let response = [];
        data.forEach(dat => {
            let temp_password = decryptPassword(dat.encryptedPass, masterKey, dat.iv);
            let temp = {
                domain:dat.domain,
                username:dat.username,
                password:temp_password
            }
            response.push(temp);
        })
        return res.status(200).json(response);
    }catch(err) {
        console.error(err);
        return res.status(500).json({
            message: "Something went wrong"
        })
    }
    
}

module.exports = {
    handlegetallpasswords,
    handlepasswordsave
}