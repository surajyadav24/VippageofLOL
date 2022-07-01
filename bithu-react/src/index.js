import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./utils/ContextProvider";
import App from "./app/App";
import { SnackbarProvider} from 'notistack';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SnackbarProvider maxSnack={4} preventDuplicate>
  <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>
  </SnackbarProvider>
);
