import { FC, ReactNode } from "react";

import { TeamContextProvider } from "~/contexts/TeamContext";

type ProviderComponentType = FC<{ children: ReactNode }>;

const buildProvidersTree = (
  providers: ProviderComponentType[]
): ProviderComponentType => {
  if (providers.length === 1) {
    return providers[0];
  }

  const FirstProvider = providers.shift();
  const SecondProvider = providers.shift();

  if (FirstProvider === undefined || SecondProvider === undefined) {
    throw new Error("ContextProviderが不足しています");
  }

  return buildProvidersTree([
    ({ children }) => (
      <FirstProvider>
        <SecondProvider>{children}</SecondProvider>
      </FirstProvider>
    ),
    ...providers,
  ]);
};
export const ProviderTree = buildProvidersTree([TeamContextProvider]);
