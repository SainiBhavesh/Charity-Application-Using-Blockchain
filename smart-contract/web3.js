import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // we are in the browser and meta mask is installed
  web3 = new Web3(window.web3.currentProvider);
} else {
  // we are on the server *OR* meta mask is not running
  // creating our own provider
  const provider = new Web3.providers.HttpProvider(
    // "https://sepolia.infura.io/v3/76d17515afb849daabbaa16defa24a93"
    "https://sepolia.infura.io/v3/b63aaf78b0b1449ab4c67d2c58fa27e6"
  );

  web3 = new Web3(provider);
}

export default web3;
