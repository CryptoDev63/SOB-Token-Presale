import { base, baseSepolia } from "wagmi/chains"

const MODE = 1
const chain = MODE ? base : baseSepolia

const contribute = MODE ? "0xEaA4d71718Ac136aBE59E4EC0453239f7ac380dd" : "0x6462de13901Ac34388D704067479ee3a59B380bE"

const Config = {
  siteTitle: "PEPE + BASE = $BEPE",
  social: {
    twitter: "https://twitter.com/BepeOnBASE",
    telegram: "https://telegram.com/BepeOnBASE",
  },
  description: "PEPE + BASE = $BEPE",
  REFETCH_INTERVAL: 10000,
  PUBLIC_URL: 'https://bepe.live/',
  API_URL: 'https://projects.cryptosnowprince.com/api',
  PROJECT: 'bepe',
  ACTION: true,
  CHAIN: chain,
  POLICY_LINK: "https://bepe.live/privacy-policy",
  BEPE_DEC: 9,
  CONTRIBUTE: contribute,
  ETH_PRICE_API: "https://api.etherscan.io/api?module=stats&action=ethprice&apikey=3TEWVV2EK19S1Y6SV8EECZAGQ7W3362RCN",
  DEFAULT_GAS: 0.001,
};

export default Config