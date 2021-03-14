const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    return chain.length;
  },
  addLink(value) {
   this.chain.push();
   return this;
  },
  removeLink(position) {
    this.chain.pop();
   return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    return this.chain.length;
  }
};

module.exports = chainMaker;
