import { useEffect, useState } from "react";
import ContextProvider from "src/utils/ContextProvider";
import "@assets/styles/style.css";
import Image from "next/image";

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
  lightTheme,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import Config from "src/settings/config";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const config = getDefaultConfig({
  appName: 'bepe',
  projectId: '757d1cece59093a0645ebab02cd6c102',
  chains: [Config.CHAIN],
  ssr: true,
});

const Disclaimer = ({ Link, Text }) => {
  return (
    <Text>
      <div style={{ fontSize: "20px", padding: "2px" }}>By connecting your wallet, you agree to our{' '}
        <Link href={Config.POLICY_LINK}>Terms of Service & Privacy Policy</Link>
      </div>
    </Text>
  );
};

const customTheme = {
  ...lightTheme({
    borderRadius: "none",
    overlayBlur: "large",
  }),
  fonts: {
    body: 'Orbitron',
  },
}

const queryClient = new QueryClient();

const App = ({ Component, pageProps }) => {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          appInfo={{
            appName: 'Bepe',
            disclaimer: Disclaimer
          }}
          // showRecentTransactions={true}
          modalSize="compact"
          theme={customTheme}>
          <ContextProvider>
            <Component {...pageProps} />
            <ToastContainer pauseOnFocusLoss={true} position="top-right" />
          </ContextProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;
