"use client";

import type { PropsWithChildren } from "react";
import CartridgeConnector from "@cartridge/connector";
import { mainnet } from "@starknet-react/chains";
import {
  argent,
  braavos,
  nethermindProvider,
  StarknetConfig,
  useInjectedConnectors,
  voyager,
} from "@starknet-react/core";
import { ArgentMobileConnector } from "starknetkit/argentMobile";
import { WebWalletConnector } from "starknetkit/webwallet";

import { env } from "~/env";

export function StarknetProvider({ children }: PropsWithChildren) {
  const provider = nethermindProvider({
    apiKey: env.NEXT_PUBLIC_RPC_API_KEY,
  });
  const { connectors: injectedConnectors } = useInjectedConnectors({
    recommended: [argent(), braavos()],
    includeRecommended: "onlyIfNoConnectors",
    order: "alphabetical",
  });

  return (
    <StarknetConfig
      chains={[mainnet]}
      provider={provider}
      connectors={[
        new CartridgeConnector({
          rpc: "https://api.cartridge.gg/x/starknet/mainnet",
        }),
        ...injectedConnectors,
        new WebWalletConnector({ url: "https://web.argent.xyz" }),
        new ArgentMobileConnector({
          projectId: env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
          dappName: "Realms.World",
          icons: [],
          description: "Realms.World",
        }),
      ]}
      explorer={voyager}
      autoConnect
    >
      {children}
    </StarknetConfig>
  );
}
