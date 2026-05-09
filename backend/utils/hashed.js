const argon2 = require("arg on2");

const hashpassword = async (password) => {
  if (!password) throw new Error("password required");
  return await argon2.hash(password, {
    type: argon2.argon2id,
    memoryCost: 2 ** 16,
    timeCost: 3,
    parallelism: 1,
  });
};

const verifypassword = async (hash, password) => {
  return await argon2.verify(hash, password);
};

module.exports = {
  hashpassword: hashpassword,
  verifypassword: verifypassword,
};
 