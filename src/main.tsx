import { createRoot } from "react-dom/client";

import { App } from "./App.tsx";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "~/assets/style.css";

const root = document.getElementById("root")!;

createRoot(root).render(<App />);
