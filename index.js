const data = require("./base.json");
const {
  removeFlagTheFlavor,
  findBaseFlavors,
  verifyFlavorIfStartWithAddOrRemoveFlag,
} = require("./helpers");

module.exports = function app(flavor = "", ...flavors) {
  flavors.forEach(verifyFlavorIfStartWithAddOrRemoveFlag);

  const flavorsToAdd = [...new Set(removeFlagTheFlavor(flavors, '+'))];
  const flavorsToRemove = [...new Set(removeFlagTheFlavor(flavors, '-'))];
  const smoothieFlavors = findBaseFlavors(data, flavor);

  return flavorsToAdd.concat(smoothieFlavors.filter((i) => !flavorsToRemove.includes(i))).sort();
};
