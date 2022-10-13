const assert = require("node:assert");
const data = require("./base.json");

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
  assert.deepStrictEqual(findBaseFlavors(data, "Classic"), data.Classic);
  assert.deepStrictEqual(findBaseFlavors(data, "Forest Berry"), data["Forest Berry"]);
  assert.deepStrictEqual(findBaseFlavors(data, "Freezie"), data["Freezie"]);
  assert.deepStrictEqual(findBaseFlavors(data, "Greenie"), data["Greenie"]);
  assert.deepStrictEqual(findBaseFlavors(data, "Just Desserts"), data["Just Desserts"]);
  assert.deepStrictEqual(findBaseFlavors(data, "Vegan Delite"), data["Vegan Delite"]);
}

// Should return undefined when pass incorrect flavor
{
  const result = findBaseFlavors(data, "Incorrect");
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
