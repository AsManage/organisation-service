import * as CryptoJS from 'crypto-js';

export const encrypt = (message: string) => {
  const keyUtf = CryptoJS.enc.Utf8.parse(process.env.CRYPTO_SECRET_KEY);
  const iv = CryptoJS.enc.Base64.parse(process.env.CRYPTO_SECRET_KEY);
  return CryptoJS.AES.encrypt(message, keyUtf, { iv: iv }).toString();
};

export const decrypt = (message: any) => {
  const keyUtf = CryptoJS.enc.Utf8.parse(process.env.CRYPTO_SECRET_KEY);
  const iv = CryptoJS.enc.Base64.parse(process.env.CRYPTO_SECRET_KEY);
  const bytes = CryptoJS.AES.decrypt(message, keyUtf, { iv: iv });
  return bytes.toString(CryptoJS.enc.Utf8);
};
