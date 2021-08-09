import Web3 from 'web3';
window.ethereum.enable();

let web3;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
    web3 = new Web3(window.web3.currentProvider);
}else{
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/9f8b8e49355f41e099f40f0bc9ba67d3'
    );
    web3 = new Web3(provider);
}

export default web3;