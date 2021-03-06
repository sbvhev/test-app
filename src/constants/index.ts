import { ChainId, Currency, WETH as _WETH } from '@uniswap/sdk';

import { Token } from 'web3/tokens';

export { default as tokenIcons } from './tokenIcons';
export { default as tokenCallIcons } from './tokenCallIcons';
export { default as tokenPutIcons } from './tokenPutIcons';
export { default as wallets } from './wallets';

export const AVG_BLOCK_TIME = 13;
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
export const DEFAULT_DECIMALS = 18;

export const UNISWAP_FACTORY: { [chainId in ChainId | 56 | 137]: string } = {
  [ChainId.MAINNET]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  [ChainId.RINKEBY]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  [ChainId.ROPSTEN]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  [ChainId.GÖRLI]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  [ChainId.KOVAN]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  56: '0xbcfccbde45ce874adcb698cc183debcf17952812',
  137: '0x1b02da8cb0d097eb8d57a175b88c7d8b47997506',
};

export const ETH: Currency = {
  decimals: 18,
  symbol: 'ETH',
  name: 'Ether',
};

export const BNB: Currency = {
  decimals: 18,
  symbol: 'BNB',
  name: 'Binance Coin',
};

export const MATIC: Currency = {
  decimals: 18,
  symbol: 'MATIC',
  name: 'Matic',
};

export const WBNB: Token = {
  id: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  decimals: 18,
  symbol: 'WBNB',
  name: 'Wrapped BNB',
};

export const BUSD: Token = {
  id: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  address: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  decimals: 18,
  symbol: 'BUSD',
  name: 'Binance USD',
};

export const WMATIC: Token = {
  id: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
  address: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
  decimals: 18,
  symbol: 'WMATIC',
  name: 'Wrapped Matic',
};

export const DAI: { [chainId in ChainId | 56 | 137]: Token } = {
  [ChainId.MAINNET]: {
    id: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    decimals: 18,
    symbol: 'DAI',
    name: 'Dai Stablecoin',
  },
  [ChainId.RINKEBY]: {
    id: '0xfEb940BAfD4a552BAeBE86f56d6D31E4DCd95e53',
    address: '0xfEb940BAfD4a552BAeBE86f56d6D31E4DCd95e53',
    decimals: 18,
    symbol: 'DAI',
    name: 'Dai Stablecoin',
  },
  [ChainId.ROPSTEN]: {
    id: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    decimals: 18,
    symbol: 'DAI',
    name: 'Dai Stablecoin',
  },
  [ChainId.GÖRLI]: {
    id: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    decimals: 18,
    symbol: 'DAI',
    name: 'Dai Stablecoin',
  },
  [ChainId.KOVAN]: {
    id: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    decimals: 18,
    symbol: 'DAI',
    name: 'Dai Stablecoin',
  },
  56: BUSD,
  137: {
    id: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
    address: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
    decimals: 18,
    symbol: 'DAI',
    name: 'Dai Stablecoin',
  },
};

export const WETH: { [chainId in ChainId | 56 | 137]: Token } = {
  [ChainId.MAINNET]: {
    id: _WETH[ChainId.MAINNET].address,
    address: _WETH[ChainId.MAINNET].address,
    decimals: 18,
    symbol: 'WETH',
    name: 'Wrapped Ether',
  },
  [ChainId.RINKEBY]: {
    id: '0x227dA5Feb8b55E1dF54322026149A6b4eAC0b295', // _WETH[ChainId.RINKEBY].address,
    address: '0x227dA5Feb8b55E1dF54322026149A6b4eAC0b295', // _WETH[ChainId.RINKEBY].address,
    decimals: 18,
    symbol: 'WETH',
    name: 'Wrapped Ether',
  },
  [ChainId.ROPSTEN]: {
    id: _WETH[ChainId.ROPSTEN].address,
    address: _WETH[ChainId.ROPSTEN].address,
    decimals: 18,
    symbol: 'WETH',
    name: 'Wrapped Ether',
  },
  [ChainId.GÖRLI]: {
    id: _WETH[ChainId.GÖRLI].address,
    address: _WETH[ChainId.GÖRLI].address,
    decimals: 18,
    symbol: 'WETH',
    name: 'Wrapped Ether',
  },
  [ChainId.KOVAN]: {
    id: _WETH[ChainId.KOVAN].address,
    address: _WETH[ChainId.KOVAN].address,
    decimals: 18,
    symbol: 'WETH',
    name: 'Wrapped Ether',
  },
  56: WBNB,
  137: WMATIC,
};

export const defaultSwapPath = (
  tokenAddress: string,
  chainId: ChainId,
): string[] => [tokenAddress, WETH[chainId].address];

export const swapPaths: { [tokenAddress: string]: string[] } = {
  // Mainnet
  // WETH
  '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2': [
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  ],
  // BADGER
  '0x3472A5A71965499acd81997a54BBA8D852C6E53d': [
    '0x3472A5A71965499acd81997a54BBA8D852C6E53d',
    '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  ],

  // Rinkeby
  // WETH
  '0xc778417E063141139Fce010982780140Aa0cD5Ab': [
    '0xc778417E063141139Fce010982780140Aa0cD5Ab',
  ],
  // ROPE
  '0xc427c5B9bE1dfd0FaB70ac42F8cE52Fe77A3c51E': [
    '0xc427c5B9bE1dfd0FaB70ac42F8cE52Fe77A3c51E',
    '0x577d296678535e4903d59a4c929b718e1d575e0a',
    '0xc778417E063141139Fce010982780140Aa0cD5Ab',
  ],

  // Rinkeby
  // WBNB
  '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c': [
    '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
  ],
};
