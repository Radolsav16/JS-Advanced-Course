import { expect } from "chai";
import { recipeSelection } from "../recipeSelection.js";

describe("Test recipeSelection Object", function () {
  describe("Test isTypeSuitable Func", function () {
    it("It has uncorrect Values in parameters", () => {
      expect(() => recipeSelection.isTypeSuitable(1, "1")).to.throw(
        "Invalid input"
      );
      expect(() => recipeSelection.isTypeSuitable("2", 1)).to.throw(
        "Invalid input"
      );
      expect(() => recipeSelection.isTypeSuitable([], "str")).to.throw(
        "Invalid input"
      );
      expect(() => recipeSelection.isTypeSuitable({}, "str")).to.throw(
        "Invalid input"
      );
      expect(() => recipeSelection.isTypeSuitable("Meat", {})).to.throw(
        "Invalid input"
      );
      expect(() => recipeSelection.isTypeSuitable({}, {})).to.throw(
        "Invalid input"
      );
      expect(() => recipeSelection.isTypeSuitable([], [])).to.throw(
        "Invalid input"
      );
    });

    it("inccorrect values from restrictions", () => {
      expect(recipeSelection.isTypeSuitable("Meat", "Vegetarian")).to.equal(
        "This recipe is not suitable for vegetarians"
      );
      expect(recipeSelection.isTypeSuitable("Meat", "Vegan")).to.equal(
        "This recipe is not suitable for vegans"
      );
      expect(recipeSelection.isTypeSuitable("Dairy", "Vegan")).to.equal(
        "This recipe is not suitable for vegans"
      );
    });

    it("has correct inputs", () => {
      expect(recipeSelection.isTypeSuitable("Meat", "Keto")).to.equal(
        "This recipe is suitable for your dietary restriction"
      );
      expect(recipeSelection.isTypeSuitable("Strawberry", "Vegan")).to.equal(
        "This recipe is suitable for your dietary restriction"
      );
      expect(recipeSelection.isTypeSuitable("Cucumber", "Vegetarian")).to.equal(
        "This recipe is suitable for your dietary restriction"
      );
      expect(recipeSelection.isTypeSuitable("Salad", "Vegetarian")).to.equal(
        "This recipe is suitable for your dietary restriction"
      );
      expect(recipeSelection.isTypeSuitable("Beef", "Keto")).to.equal(
        "This recipe is suitable for your dietary restriction"
      );
      expect(recipeSelection.isTypeSuitable("Tomato", "Vegetarian")).to.equal(
        "This recipe is suitable for your dietary restriction"
      );
    });
  });

  describe("Test isAffordable Func", function () {
    it("has uncorect values", () => {
      expect(() => recipeSelection.isItAffordable("str", 1)).to.throw(
        "Invalid input"
      );
      expect(() => recipeSelection.isItAffordable(2, "str")).to.throw(
        "Invalid input"
      );
      expect(() => recipeSelection.isItAffordable({}, 1)).to.throw(
        "Invalid input"
      );
      expect(() => recipeSelection.isItAffordable([], 1)).to.throw(
        "Invalid input"
      );
      expect(() => recipeSelection.isItAffordable("str", "str1")).to.throw(
        "Invalid input"
      );
      expect(() => recipeSelection.isItAffordable("str", [])).to.throw(
        "Invalid input"
      );
      expect(() => recipeSelection.isItAffordable("str", {})).to.throw(
        "Invalid input"
      );
      expect(() => recipeSelection.isItAffordable([], [])).to.throw(
        "Invalid input"
      );
      expect(() => recipeSelection.isItAffordable({}, {})).to.throw(
        "Invalid input"
      );
    });

    it("has remaining budjet > 0", () => {
      expect(recipeSelection.isItAffordable(15, 30)).to.equal(
        "Recipe ingredients bought. You have 15$ left"
      );
      expect(recipeSelection.isItAffordable(20, 40)).to.equal(
        "Recipe ingredients bought. You have 20$ left"
      );
      expect(recipeSelection.isItAffordable(30, 50)).to.equal(
        "Recipe ingredients bought. You have 20$ left"
      );
    });

    it("has budjet < 0", () => {
      expect(recipeSelection.isItAffordable(30, 15)).to.equal(
        "You don't have enough budget to afford this recipe"
      );
      expect(recipeSelection.isItAffordable(40, 10)).to.equal(
        "You don't have enough budget to afford this recipe"
      );
      expect(recipeSelection.isItAffordable(25, 15)).to.equal(
        "You don't have enough budget to afford this recipe"
      );
    });
  });

  describe("Test getRecipesByCategory Func", function () {
    it("has invalid input", () => {
      expect(() => recipeSelection.getRecipesByCategory("str", 2)).to.throw(
        "Invalid input"
      );
      expect(() => recipeSelection.getRecipesByCategory(2, 2)).to.throw(
        "Invalid input"
      );
      expect(() => recipeSelection.getRecipesByCategory(2, "str")).to.throw(
        "Invalid input"
      );
      expect(() => recipeSelection.getRecipesByCategory({}, 2)).to.throw(
        "Invalid input"
      );
      expect(() => recipeSelection.getRecipesByCategory(2, {})).to.throw(
        "Invalid input"
      );
    });

    it("has correct values", () => {
      const testArray = [
        { title: "Spicy Tofu Stir-Fry ", category: "Asian" },
        { title: "Musaka", category: "Bulgarian" },
        { title: "Kiselo mlqko", category: "Bulgarian" },
        { title: "Burger", category: "America" },
        { title: "Pizaa", category: "Italia" },
        { title: "Shopska Salad", category: "Bulgarian" },
        { title: "Nuddles", category: "Asian" },
      ];

      const result1 = recipeSelection.getRecipesByCategory(testArray, "Asian");
      const result2 = recipeSelection.getRecipesByCategory(
        testArray,
        "Bulgarian"
      );
      const result3 = recipeSelection.getRecipesByCategory(
        testArray,
        "America"
      );

      expect(result1.length).to.equal(2);
      expect(result2.length).to.equal(3);
      expect(result3.length).to.equal(1);
      expect(result3).to.contain("Burger");
    });

    it("has uncorrect category", () => {
      const testArray = [
        { title: "Spicy Tofu Stir-Fry ", category: "Asian" },
        { title: "Musaka", category: "Bulgarian" },
        { title: "Kiselo mlqko", category: "Bulgarian" },
        { title: "Burger", category: "America" },
        { title: "Pizaa", category: "Italia" },
        { title: "Shopska Salad", category: "Bulgarian" },
        { title: "Nuddles", category: "Asian" },
      ];

      const result = recipeSelection.getRecipesByCategory(testArray, "Japan");
      expect(result.length).to.equal(0);
    });
  });
});
