function verifyItemIfStartWithPlusOrMinus(item = '') {
  if (!item.startsWith('-') && !item.startsWith('+'))
    throw Error(`${item} not valid`);
}

function find(data = {}, flavor = '') {
  return data[flavor];
}

function removeFlagTheFlavor(flavors = [], flag) {
  return flavors
    .filter((item) => item.startsWith(flag))
    .map((i) => i.replace(flag, ''));
}

module.exports = {
  verifyItemIfStartWithPlusOrMinus,
  find,
  removeFlagTheFlavor
}