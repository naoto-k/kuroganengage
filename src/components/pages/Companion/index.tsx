import { CompanionContextProvider } from "~/components/pages/Companion/Context";
import { CompanionTemplate } from "~/components/pages/Companion/Template";
import { CloseBar } from "~/components/parts/CloseBar";

export const Companion = () => (
  <CompanionContextProvider>
    <CloseBar title="EDIT COMPANION" />
    <CompanionTemplate />
  </CompanionContextProvider>
);
