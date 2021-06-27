require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace arctic sun tone stomach rival situate cluster hard light army general'; 
let testAccounts = [
"0x347e34b43a4ca55094bf891b97168779f5303edcc6278dc0eab5135226b332b3",
"0x646556399dd2b3bc51e59e829df4f07974c961a69cfce4555dfe6226fe7f5e9f",
"0x176a05484cd10455a106df058a47716b07008f8748ce0d5560244dc415282dd4",
"0x68d63b3ccf3c6fbcb701cbb21097970384280c0efebeada1caf2d2e5421c881a",
"0x96dfbd8b49a679a19428d89c21cf2e810d2576533646d78b53f0822c560e5e26",
"0xc7652fe62cac47ecf4560c22e37c79851228354cf76d3b6c8ca177569abfd3fa",
"0x2241a15af4bf2e8bb2f3e90287e8b4a53e3ccf639a25a29f685519a9f56ef521",
"0x75ef28d2eda121a0e76c7bce7e61f14c203bbe562eeefe1c9e167e24f5556ee5",
"0x656f0f041be3e13c140c30fa6cdc7fe3adee9e404abbef65008a3b58189d1cb0",
"0xed62e175ab6dd272a2dd2b88b8e4042beec12d8715a4ced6305300dfa26fb7b1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

