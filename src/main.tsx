import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./stores";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey="6LfN2kEsAAAAAOqJ24k0n4VPuX2qepdzY6AEh8zT">
      <Provider store={store}>
        <App />
      </Provider>
    </GoogleReCaptchaProvider>
  </StrictMode>
);
