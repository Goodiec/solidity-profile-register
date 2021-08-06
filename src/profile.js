import web3 from './web3';

const address = '0x006F599c0920A5b369dE668E0810e53a9F8b216D';
const abi = 
[
    {
        "anonymous":false,
        "inputs":[{"indexed":false,"internalType":"string","name":"lastname","type":"string"},
        {"indexed":false,"internalType":"string","name":"firstname","type":"string"},
        {"indexed":true,"internalType":"address","name":"from","type":"address"},
        {"indexed":true,"internalType":"uint256","name":"userId","type":"uint256"}],
        "name":"NewProfile","type":"event"
    },
    {
        "constant":true,
        "inputs":[{"internalType":"address","name":"","type":"address"}],
        "name":"ProfileIds",
        "outputs":[{"internalType":"uint256","name":"","type":"uint256"}],
        "payable":false,"stateMutability":"view","type":"function"
    },
    {
        "constant":true,
        "inputs":[{"internalType":"address","name":"","type":"address"}],
        "name":"Profiles",
        "outputs":[{"internalType":"string","name":"lastname","type":"string"},
        {"internalType":"string","name":"firstname","type":"string"},
        {"internalType":"uint256","name":"userId","type":"uint256"}],
        "payable":false,"stateMutability":"view","type":"function"
    },
    {
        "constant":true,
        "inputs":[],
        "name":"REGISTRATION_FEE",
        "outputs":[{"internalType":"uint256","name":"","type":"uint256"}],
        "payable":false,"stateMutability":"view","type":"function"},
    {
        "constant":false,
        "inputs":[{"internalType":"string","name":"lastname","type":"string"},{"internalType":"string","name":"firstname","type":"string"}],
        "name":"createProfile",
        "outputs":[],
        "payable":true,
        "stateMutability":"payable",
        "type":"function"
    },
    {
        "constant":true,
        "inputs":[{"internalType":"address","name":"user","type":"address"}],
        "name":"getProfile",
        "outputs":[{"components":[{"internalType":"string","name":"lastname","type":"string"},{"internalType":"string","name":"firstname","type":"string"},{"internalType":"uint256","name":"userId","type":"uint256"}],
        "internalType":"struct Register.Profile","name":"","type":"tuple"}],
        "payable":false,
        "stateMutability":"view",
        "type":"function"
    },
    {
        "constant":true,
        "inputs":[],
        "name":"profileId",
        "outputs":[{"internalType":"uint256","name":"","type":"uint256"}],
        "payable":false,
        "stateMutability":"view",
        "type":"function"
    }
];

export default new web3.eth.Contract(abi, address);
