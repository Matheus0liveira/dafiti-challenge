const data = require("./data.json");
const {
  removeFlagTheFlavor,
  find,
  verifyItemIfStartWithPlusOrMinus,
} = require("./helpers");

module.exports = function app(flavor = "", ...items) {
  items.forEach(verifyItemIfStartWithPlusOrMinus);

  const plusItems = [...new Set(removeFlagTheFlavor(items, '+'))];
  const minusItems = [...new Set(removeFlagTheFlavor(items, '-'))];
  const list = find(data, flavor);

  return plusItems.concat(list.filter((i) => !minusItems.includes(i))).sort();
};
