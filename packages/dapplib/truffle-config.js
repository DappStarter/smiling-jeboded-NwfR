require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note praise proof hunt case flip genuine'; 
let testAccounts = [
"0x6e81d7c3b335d0b90a61cf92fdcc609b6e7a37eed701734fa7236fd9c69f6736",
"0xdde572fee71a78ade415393535e3be47f93c003559e914d67a3d560fca772c8b",
"0x9e4c058287e9f0319f2542d8b16b21f81280ca1e3eb66c5148217517772307ab",
"0x7b538e853723da797eeba973668ecebe412717cb5a729ffd83a5b0cc5dd945b9",
"0x783471db649785b1d10f727c759890ac9793ff565a067ba4ef050099966f65b2",
"0x4cb6e1a1d91fd11e96de6e339720d12afc7c4fc746139ddce714f9d0aa5c80bd",
"0x8ce2214d4914bf72b9c250bafef7be91f4a77a1a58d35638807cc94eb6078a29",
"0x37e1c39233f1e260cdd138f7fe703522b3f288ce9aee3f00f825b5b20a7ab67d",
"0xdafed364b128bd96a47cac81b3e564832639d3233f5876f1e8e09a3723c6ff02",
"0x208f1f58d034c360a7f69fbf7c3d8a3530331e55735c6312b9d5ccb0ac5074af"
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

