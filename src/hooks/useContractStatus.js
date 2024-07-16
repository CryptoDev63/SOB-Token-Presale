import { useEffect, useState } from "react";
import axios from "axios"
import contributeABI from "src/abi/contribute.json";
import Config from "src/settings/config";
import { useAccount, useConfig } from "wagmi";
import { multicall, getBalance } from '@wagmi/core'
import { formatUnits } from "viem";

const getEthPriceInUSD = async () => {
  const ethPriceInUSD = parseFloat((await axios.get(Config.ETH_PRICE_API)).data.result.ethusd)
  return ethPriceInUSD
}

export function useContractStatus(refresh) {
  const [data, setData] = useState({
    ethPriceInUSD: 0,
    ethBal: 0,
    userAmount: 0,
    userLimit: 0,
  })
  const account = useAccount()
  const config = useConfig()

  const [refetch, setRefetch] = useState(false)

  useEffect(() => {
    const timerID = setInterval(() => {
      setRefetch((prevData) => {
        return !prevData;
      })
    }, Config.REFETCH_INTERVAL);

    return () => {
      clearInterval(timerID);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contracts = []

        if (account.address) {
          contracts.push({
            address: Config.CONTRIBUTE,
            abi: contributeABI,
            functionName: 'userInfo',
            args: [account.address],
          })
        }

        const _d = await multicall(config, {
          contracts
        })
        // console.log('_d', _d)

        let ethBal = 0;
        if (account.address) {
          const ethRawBalance = await getBalance(config, { address: account.address })
          ethBal = parseFloat(formatUnits(ethRawBalance.value, ethRawBalance.decimals))
          // console.log('ethBal', ethBal)
        }

        const ethPriceInUSD = await getEthPriceInUSD();

        setData({
          ethPriceInUSD,
          ethBal,
          userAmount: account.address && _d[0].status === "success" ? parseFloat(formatUnits(_d[0].result[0], Config.BEPE_DEC)) : 0,
          userLimit: account.address && _d[0].status === "success" ? parseFloat(formatUnits(_d[0].result[1], Config.BEPE_DEC)) : 0,
        })
      } catch (error) {
        console.log('useContractStatus err', error)
      }
    };
    fetchData();
  }, [account.address, refetch, refresh, config])

  return data
}
