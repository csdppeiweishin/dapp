//overrides metamask v0.2 for our 1.0 version. 
//1.0 lets us use async and await instead of promises

import Web3 from "web3";
export default dappweb3;


//const web3 = new Web3(window.web3.currentProvider);

//const Web3 = require("web3");
async function Browser() {
	let web3;
	
    // Modern dapp browsers...
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            // Request account access if needed
            await window.ethereum.enable();
            // Acccounts now exposed
            return window.web3;
        } catch (error) {
            // User denied account access...
            console.log('User denied account access...',error);
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        return window.web3;
    }
    // Non-dapp browsers...
    else {
        const provider = new web3.providers.HttpProvider("http://127.0.0.1:8545");
        web3 = new Web3(provider);
        return web3;
    	}
	
};

async function dappweb3(){
	try{
		const web3 = await Browser();
		return web3;
	} catch (error){
		console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
	}
}
dappweb3();