import React from "react";
import { createRoot } from "react-dom/client";
import Root from "./Root";
import AppProviders from "./providers/AppProviders";

const root = createRoot(document.getElementById("root"));
root.render(
  <AppProviders>
    <Root tab="home" />
  </AppProviders>
);
