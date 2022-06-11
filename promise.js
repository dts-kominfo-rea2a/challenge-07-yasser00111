const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async(emosi) => {
    let i = await promiseTheaterIXX();
    let j = await promiseTheaterVGC();
    let k = x.concat(y);
    let totalEmosi = 0;
    k.map(i => i.hasil === emosi && (totalEmosi += 1));
    return totalEmosi;
};
module.exports = {
    promiseOutput,
};