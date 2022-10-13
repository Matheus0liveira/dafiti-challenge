function verifyFlavorIfStartWithAddOrRemoveFlag(flavor = '') {
  if (!flavor.startsWith('-') && !flavor.startsWith('+'))
    throw Error(`${flavor} not valid`);
}

function findBaseFlavors(data = {}, flavor = '') {
  return data[flavor];
}

function removeFlagTheFlavor(flavors = [], flag) {
  return flavors.filter((i) => i.startsWith(flag)).map((i) => i.replace(flag, ''));
}

module.exports = {
  verifyFlavorIfStartWithAddOrRemoveFlag,
  findBaseFlavors,
  removeFlagTheFlavor
}