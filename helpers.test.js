const assert = require("node:assert");
const baseFlavors = require("./base.json");

const {
  verifyFlavorIfStartWithAddOrRemoveFlag,
  removeFlagTheFlavor,
  findBaseFlavors,
} = require("./helpers");

// verifyFlavorIfStartWithAddOrRemoveFlag
// Should throw error if item not includes flag or include incorrect flag
{
  assert.throws(
    () => verifyFlavorIfStartWithAddOrRemoveFlag("banana"),
    Error(`banana not valid`),
    "Should throw error if item not includes flag or include incorrect flag"
  );
}
// Should pass successfuly when pass item with correctly flag (+)
{
  assert.doesNotThrow(
    () => verifyFlavorIfStartWithAddOrRemoveFlag("+banana"),
    "Should pass successfuly when pass item with correctly flag (+)"
  );
}
// Should pass successfuly when pass item with correctly flag (-)
{
  assert.doesNotThrow(
    () => verifyFlavorIfStartWithAddOrRemoveFlag("-banana"),
    "Should pass successfuly when pass item with correctly flag (-)"
  );
}
// findBaseFlavors
// Should flavors when pass exist flavor
{
  assert.deepStrictEqual(findBaseFlavors(baseFlavors, "Classic"), baseFlavors.Classic);
  assert.deepStrictEqual(findBaseFlavors(baseFlavors, "Forest Berry"), baseFlavors["Forest Berry"]);
  assert.deepStrictEqual(findBaseFlavors(baseFlavors, "Freezie"), baseFlavors["Freezie"]);
  assert.deepStrictEqual(findBaseFlavors(baseFlavors, "Greenie"), baseFlavors["Greenie"]);
  assert.deepStrictEqual(findBaseFlavors(baseFlavors, "Just Desserts"), baseFlavors["Just Desserts"]);
  assert.deepStrictEqual(findBaseFlavors(baseFlavors, "Vegan Delite"), baseFlavors["Vegan Delite"]);
}

// Should return undefined when pass incorrect flavor
{
  const result = findBaseFlavors(baseFlavors, "Incorrect");
  assert.deepStrictEqual(
    result,
    undefined,
    "Should return undefined when pass incorrect flavor"
  );
}

// removeFlagTheFlavor
// Should flavors when pass exist flavor
{
  const resultWithMoreFlag = removeFlagTheFlavor(["+banana", "+kiwi"], "+");
  const resultWithLessFlag = removeFlagTheFlavor(["-banana", "-kiwi"], "-");

  assert.deepStrictEqual(resultWithMoreFlag, ["banana", "kiwi"]);
  assert.deepStrictEqual(resultWithLessFlag, ["banana", "kiwi"]);
}
