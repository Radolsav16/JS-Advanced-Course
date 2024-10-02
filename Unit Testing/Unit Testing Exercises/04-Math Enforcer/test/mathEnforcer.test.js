import { expect } from "chai";
import { mathEnforcer } from "../mathEnforcer.js";

describe("Test mathForcer Object Methods", function () {
  describe("Test ADD Method", function () {
    it("Should return correct value", () => {
      expect(mathEnforcer.addFive(10)).to.be.equal(15);
      expect(mathEnforcer.addFive(20)).to.be.equal(25);
      expect(mathEnforcer.addFive(12)).to.be.equal(17);
    });

    it("if it has incorrect input", () => {
      expect(mathEnforcer.addFive("str")).to.be.undefined;
      expect(mathEnforcer.addFive([1,2,3])).to.be.undefined;
      expect(mathEnforcer.addFive({name:"Dvid"})).to.be.undefined;
    });
  });

  describe("Test Subtract Method", function () {
   
    it("Should return correct value", () => {
      expect(mathEnforcer.subtractTen(15)).to.be.equal(5);
      expect(mathEnforcer.subtractTen(20)).to.be.equal(10);
      expect(mathEnforcer.subtractTen(12)).to.be.equal(2);
    });

    it("if it has incorrect input", () => {
    expect(mathEnforcer.addFive("str")).to.be.undefined;
      expect(mathEnforcer.addFive([1,2,3])).to.be.undefined;
      expect(mathEnforcer.addFive({name:"Dvid"})).to.be.undefined;
    });
  });

  describe("Test Sum Method", function () {
    it("Should return correct value", () => {
      expect(mathEnforcer.sum(15, 10)).to.be.equal(25);
      expect(mathEnforcer.sum(20, 20)).to.be.equal(40);
      expect(mathEnforcer.sum(12, 12)).to.be.equal(24);
    });

    it("if it has incorrect input", () => {
        expect(mathEnforcer.addFive("str",1)).to.be.undefined;
        expect(mathEnforcer.addFive(1,[1,2,3])).to.be.undefined;
        expect(mathEnforcer.addFive({name:"Dvid"},3)).to.be.undefined;
    });
  });
});
