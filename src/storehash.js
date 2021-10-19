import dappweb3 from './dappweb3';

async function storehash() 
{
//access our local copy to contract deployed on rinkeby testnet
//use your own contract address
const address = '0x307C4DbdF38EaA7930E4D6551FCA053428D5bc09';
//my contact = 0x307C4DbdF38EaA7930E4D6551FCA053428D5bc0
//use the ABI from your contract
const abi =[ 
  {
      //"constant": true,
      "inputs": [],
      "name": "getHash",
      "outputs": [
        {
  	"internalType": "string",
          "name": "x",
          "type": "string"
        }
      ],
      //"payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      //"constant": false,
      "inputs": [
        {
      	"internalType": "string",
        "name": "x",
        "type": "string"
        }
      ],
      "name": "sendHash",
      "outputs": [],
      //"payable": false,
      "stateMutability": "nonpayable",
      "type": "function"}
      ];

      const web3 = await dappweb3();
      return new web3.eth.Contract(abi, address);

}

storehash();

export default storehash;