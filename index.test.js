const assert = require("node:assert");
const app = require(".");

// it "create `Classic` plus `chocolate`"
// `Given` "Classic,+chocolate" `shouldBe` ["banana", "chocolate","honey","ice","mango","peach","pineapple","strawberry", "yogurt"]
{
  const result = app("Classic", "+chocolate");
  assert.deepStrictEqual(result, [
    "banana",
    "chocolate",
    "honey",
    "ice",
    "mango",
    "peach",
    "pineapple",
    "strawberry",
    "yogurt",
  ],
   'create `Classic` plus `chocolate`');
}

// it "create `Classic` plus `chocolate` minus `strawberry`"
// `Given` "Classic,+chocolate,-strawberry" `shouldBe` ["banana", "chocolate","honey","ice","mango","peach","pineapple","yogurt"]
{
  const result = app("Classic", "+chocolate", "-strawberry");
  assert.deepStrictEqual(result, [
    "banana",
    "chocolate",
    "honey",
    "ice",
    "mango",
    "peach",
    "pineapple",
    "yogurt",
  ],
  'create `Classic` plus `chocolate` minus `strawberry`');
}

// it "create `Classic` smoothie"
// `Given` "Classic" `shouldBe` ["banana","honey","ice","mango","peach","pineapple","strawberry","yogurt"]
{
  const result = app("Classic");
  assert.deepStrictEqual(result, [
    "banana",
    "honey",
    "ice",
    "mango",
    "peach",
    "pineapple",
    "strawberry",
    "yogurt",
  ],
  'create `Classic` smoothie');
}

// it "create `Classic` minus `strawberry`"
// `Given` "Classic,-strawberry" `shouldBe` ["banana","honey","ice","mango","peach","pineapple","yogurt"]
{
  const result = app("Classic", "-strawberry");
  assert.deepStrictEqual(result, [
    "banana",
    "honey",
    "ice",
    "mango",
    "peach",
    "pineapple",
    "yogurt",
  ],
  'create `Classic` minus `strawberry`');
}

// it "create `Just Desserts` smoothie"
//  `Given` "Just Desserts" `shouldBe` ["banana","cherry","chocolate","ice cream","peanut"]
{
  const result = app("Just Desserts");
  assert.deepStrictEqual(result, [
    "banana",
    "cherry",
    "chocolate",
    "ice cream",
    "peanut",
  ],
  'create `Just Desserts` smoothie');
}

// it "create `Just Desserts` smoothie without `ice cream` and `peanut`"
//  `Given` "Just Desserts,-ice cream,-peanut" `shouldBe` ["banana","cherry","chocolate"]
{
  const result = app("Just Desserts", "-ice cream", "-peanut");
  assert.deepStrictEqual(result, ["banana", "cherry", "chocolate"], 'create `Just Desserts` smoothie without `ice cream` and `peanut`');
}

// it "create a smoothie without ingredients"
// `Given` "Just Desserts,-banana,-cherry,-chocolate,-ice cream,-peanut" `shouldBe` []
{
  const result = app(
    "Just Desserts",
    "-banana",
    "-cherry",
    "-chocolate",
    "-ice cream",
    "-peanut"
  );
  assert.deepStrictEqual(result, [], 'create a smoothie without ingredients');
}

// it "exclude unused ingredients"
//  `Given` "Classic,-banana,-mango,-peanut" `shouldBe` ["honey","ice","peach","pineapple","strawberry","yogurt"]
{
  const result = app("Classic", "-banana", "-mango", "-peanut");
  assert.deepStrictEqual(result, [
    "honey",
    "ice",
    "peach",
    "pineapple",
    "strawberry",
    "yogurt",
  ],
  'exclude unused ingredients');
}
