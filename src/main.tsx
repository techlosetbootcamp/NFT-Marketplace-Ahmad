import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home/Home";
import Collections from "./pages/collections/Collections";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Nfts from "./pages/nfts/Nfts";
import NftDetails from "./pages/nftDetails/NftDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/collection/:slug" element={<Nfts />} />
      <Route path="/nft/:chain/:address/:id" element={<NftDetails />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
