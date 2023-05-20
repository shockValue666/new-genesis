import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'GenesisEggs',
  tokenName: 'GenesisEggs',
  tokenSymbol: 'GE',
  hiddenMetadataUri: 'ipfs://QmRLXVmxGBuxjDTHTP4kKzHewYFK2XWkF3tVRNjFifznUr/hidden.json',
  maxSupply: 610,
  whitelistSale: {
    price: 0.006,
    maxMintAmountPerTx: 3,
  },
  preSale: {
    price: 0,
    maxMintAmountPerTx: 1,
  },
  publicSale: {
    price: 0.01,
    maxMintAmountPerTx: 3,
  },
  contractAddress: null,
  marketplaceIdentifier: 'my-nft-token',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
