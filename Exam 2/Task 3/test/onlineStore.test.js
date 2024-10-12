import { expect } from "chai";
import { onlineStore } from "../onlineStore.js";

describe("Test Online Store Object and His Functionality", function () {
  describe("Test isProductAvailable inside Functionality", function () {
    it("has wrong input", () => {
      expect(() => onlineStore.isProductAvailable(2, "str")).to.throw(
        "Invalid input."
      );
      expect(() => onlineStore.isProductAvailable([], "str")).to.throw(
        "Invalid input."
      );
      expect(() => onlineStore.isProductAvailable({}, "str")).to.throw(
        "Invalid input."
      );
      expect(() => onlineStore.isProductAvailable("str", [])).to.throw(
        "Invalid input."
      );
      expect(() => onlineStore.isProductAvailable("str", {})).to.throw(
        "Invalid input."
      );
      expect(() => onlineStore.isProductAvailable("str", "str")).to.throw(
        "Invalid input."
      );
      expect(() => onlineStore.isProductAvailable(2, 2)).to.throw(
        "Invalid input."
      );
      expect(() => onlineStore.isProductAvailable({}, {})).to.throw(
        "Invalid input."
      );
      expect(() => onlineStore.isProductAvailable([], [])).to.throw(
        "Invalid input."
      );
    });

    it("has correct values and stockQuantity is <= 0", () => {
      expect(onlineStore.isProductAvailable("socks", -4)).to.be.equal(
        "Sorry, socks is currently out of stock."
      );
      expect(onlineStore.isProductAvailable("pants", -4)).to.be.equal(
        "Sorry, pants is currently out of stock."
      );
      expect(onlineStore.isProductAvailable("t-shirt", -4)).to.be.equal(
        "Sorry, t-shirt is currently out of stock."
      );
    });

    it("has stockquantity > 0", () => {
      expect(onlineStore.isProductAvailable("socks", 5)).to.be.equal(
        "Great! socks is available for purchase."
      );
      expect(onlineStore.isProductAvailable("pants", 5)).to.be.equal(
        "Great! pants is available for purchase."
      );
      expect(onlineStore.isProductAvailable("t-shirt", 5)).to.be.equal(
        "Great! t-shirt is available for purchase."
      );
    });
  });

  describe("Test canAffordProduct inside Functionality", function () {
    it("has wrong input", () => {
      expect(() => onlineStore.canAffordProduct("str", "str")).to.throw(
        "Invalid input."
      );
      expect(() => onlineStore.canAffordProduct(1, "str")).to.throw(
        "Invalid input."
      );
      expect(() => onlineStore.canAffordProduct("str", 1)).to.throw(
        "Invalid input."
      );
      expect(() => onlineStore.canAffordProduct(1, [])).to.throw(
        "Invalid input."
      );
      expect(() => onlineStore.canAffordProduct([], [])).to.throw(
        "Invalid input."
      );
      expect(() => onlineStore.canAffordProduct([], 1)).to.throw(
        "Invalid input."
      );
      expect(() => onlineStore.canAffordProduct({}, 1)).to.throw(
        "Invalid input."
      );
      expect(() => onlineStore.canAffordProduct(1, {})).to.throw(
        "Invalid input."
      );
      expect(() => onlineStore.canAffordProduct({}, {})).to.throw(
        "Invalid input."
      );
    });

    it("has remainingBalance < 0", () => {
      expect(onlineStore.canAffordProduct(20, 10)).to.be.equal(
        "You don't have sufficient funds to buy this product."
      );
      expect(onlineStore.canAffordProduct(50, 20)).to.be.equal(
        "You don't have sufficient funds to buy this product."
      );
      expect(onlineStore.canAffordProduct(70, 40)).to.be.equal(
        "You don't have sufficient funds to buy this product."
      );
    });

    it("has remainingBalance > 0", () => {
      expect(onlineStore.canAffordProduct(20, 70)).to.be.equal(
        "Product purchased. Your remaining balance is $50."
      );
      expect(onlineStore.canAffordProduct(50, 80)).to.be.equal(
        "Product purchased. Your remaining balance is $30."
      );
      expect(onlineStore.canAffordProduct(30, 50)).to.be.equal(
        "Product purchased. Your remaining balance is $20."
      );
    });

    it("has remainingBalance = 0", () => {
      expect(onlineStore.canAffordProduct(70, 70)).to.be.equal(
        "Product purchased. Your remaining balance is $0."
      );
      expect(onlineStore.canAffordProduct(80, 80)).to.be.equal(
        "Product purchased. Your remaining balance is $0."
      );
      expect(onlineStore.canAffordProduct(50, 50)).to.be.equal(
        "Product purchased. Your remaining balance is $0."
      );
    });
  });

  describe("Test getRecomendedProduct inside Functionality", function () {
    it("has wrong input", () => {
      expect(() => onlineStore.getRecommendedProducts("str", 1)).to.throw(
        "Invalid input."
      );
      expect(() => onlineStore.getRecommendedProducts({}, 1)).to.throw(
        "Invalid input."
      );
      expect(() => onlineStore.getRecommendedProducts([], 1)).to.throw(
        "Invalid input."
      );
      expect(() => onlineStore.getRecommendedProducts(1, {})).to.throw(
        "Invalid input."
      );
      expect(() => onlineStore.getRecommendedProducts({}, {})).to.throw(
        "Invalid input."
      );
      expect(() => onlineStore.getRecommendedProducts("str", "str")).to.throw(
        "Invalid input."
      );
      expect(() => onlineStore.getRecommendedProducts({}, "str")).to.throw(
        "Invalid input."
      );
      expect(() => onlineStore.getRecommendedProducts("str", {})).to.throw(
        "Invalid input."
      );
      expect(() => onlineStore.getRecommendedProducts("str", [])).to.throw(
        "Invalid input."
      );
    });

    const productListDemo = [
      { name: "Camera", category: "Photo" },
      { name: "Laptop", category: "Tech" },
      { name: "Television", category: "Home" },
      { name: "Mouse", category: "Computer" },
      { name: "keyboard", category: "Computer" },
    ];

    it("has 0 recomendedProducts", () => {
      const result = onlineStore.getRecommendedProducts(productListDemo, "New");
      const result2 = onlineStore.getRecommendedProducts(
        productListDemo,
        "Room"
      );
      expect(result).to.be.equal(
        "Sorry, we currently have no recommended products in the New category."
      );
      expect(result2).to.be.equal(
        "Sorry, we currently have no recommended products in the Room category."
      );
    });

    it("has remainingProducts 1", () => {
      const result = onlineStore.getRecommendedProducts(
        productListDemo,
        "Tech"
      );
      const result2 = onlineStore.getRecommendedProducts(
        productListDemo,
        "Photo"
      );
      expect(result).to.be.equal(
        "Recommended products in the Tech category: Laptop"
      );
      expect(result2).to.be.equal(
        "Recommended products in the Photo category: Camera"
      );
    });

    it("has remainingProducts more than one", () => {
      const result = onlineStore.getRecommendedProducts(
        productListDemo,
        "Computer"
      );
      expect(result).to.be.equal(
        "Recommended products in the Computer category: Mouse, keyboard"
      );
    });
  });
});
