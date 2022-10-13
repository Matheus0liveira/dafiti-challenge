const assert = require("node:assert");
const data = require("./data.json");

const {
  verifyItemIfStartWithPlusOrMinus,
  removeFlagTheFlavor,
  find,
} = require("./helpers");

// verifyItemIfStartWithPlusOrMinus
// Should throw error if item not includes flag or include incorrect flag
{
  assert.throws(
    () => verifyItemIfStartWithPlusOrMinus("banana"),
    Error(`banana not valid`),
    "Should throw error if item not includes flag or include incorrect flag"
  );
}
// Should pass successfuly when pass item with correctly flag (+)
{
  assert.doesNotThrow(
    () => verifyItemIfStartWithPlusOrMinus("+banana"),
    "Should pass successfuly when pass item with correctly flag (+)"
  );
}
// Should pass successfuly when pass item with correctly flag (-)
{
  assert.doesNotThrow(
    () => verifyItemIfStartWithPlusOrMinus("-banana"),
    "Should pass successfuly when pass item with correctly flag (-)"
  );
}
// find
// Should flavors when pass exist flavor
{
  assert.deepStrictEqual(find(data, "Classic"), data.Classic);
  assert.deepStrictEqual(find(data, "Forest Berry"), data["Forest Berry"]);
  assert.deepStrictEqual(find(data, "Freezie"), data["Freezie"]);
  assert.deepStrictEqual(find(data, "Greenie"), data["Greenie"]);
  assert.deepStrictEqual(find(data, "Just Desserts"), data["Just Desserts"]);
  assert.deepStrictEqual(find(data, "Vegan Delite"), data["Vegan Delite"]);
}

// Should return undefined when pass incorrect flavor
{
  const result = find(data, "Incorrect");
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
