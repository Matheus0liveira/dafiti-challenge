## Ingredients Test

Create a function that receives a string and represents the name of a Smoothie, plus additionals or decrements for that smoothie like so: Classic,+chocolate,-strawberry and returns and array of strings with the ingredients of a given smoothie

```json

{
 "Classic": ["strawberry", "banana", "pineapple", "mango", "peach", "honey", "ice", "yogurt"],
 "Forest Berry": ["strawberry", "raspberry", "blueberry", "honey", "ice", "yogurt"],
 "Freezie": ["blackberry", "blueberry", "black currant", "grape juice", "frozen yogurt"],
 "Greenie": ["green apple", "kiwi", "lime", "avocado", "spinach", "ice", "apple juice"],
 "Vegan Delite": ["strawberry", "passion fruit", "pineapple", "mango", "peach", "ice", "soy milk"],
 "Just Desserts": ["banana", "ice cream", "chocolate", "peanut", "cherry"]
}

```

## Test Cases
it "create `Classic` plus `chocolate`"
 `Given` "Classic,+chocolate" `shouldBe` ["banana", "chocolate","honey","ice","mango","peach","pineapple","strawberry", "yogurt"]

it "create `Classic` plus `chocolate` minus `strawberry`"
 `Given` "Classic,+chocolate,-strawberry" `shouldBe` ["banana", "chocolate","honey","ice","mango","peach","pineapple","yogurt"]

it "create `Classic` smoothie"
 `Given` "Classic" `shouldBe` ["banana","honey","ice","mango","peach","pineapple","strawberry","yogurt"]

it "create `Classic` minus `strawberry`"
 `Given` "Classic,-strawberry" `shouldBe` ["banana","honey","ice","mango","peach","pineapple","yogurt"]

it "create `Just Desserts` smoothie"
 `Given` "Just Desserts" `shouldBe` ["banana","cherry","chocolate","ice cream","peanut"]

it "create `Just Desserts` smoothie without `ice cream` and `peanut`"
 `Given` "Just Desserts,-ice cream,-peanut" `shouldBe` ["banana","cherry","chocolate"]

it "create a smoothie without ingredients"
 `Given` "Just Desserts,-banana,-cherry,-chocolate,-ice cream,-peanut" `shouldBe` []

it "exclude unused ingredients"
 `Given` "Classic,-banana,-mango,-peanut" `shouldBe` ["honey","ice","peach","pineapple","strawberry","yogurt"]

