import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  // "0xC53FE8c8b0C33D55827eCC2da6b57E89F16c5b1F"
  // "0x933e6a7CF21EA1816926347a5e4949d325f8A0b1"
  "0x871bdA0510a24494C5603Dc8a2945Bf33f9b6725"
);
//0xEC2D2894299a9cfB5F306ec7Cc7d1457f484645A
export default instance;