import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { getDefaultNormalizer } from "@testing-library/dom";
import { cryptoApi } from "../services/cryptoApi";

export default configureStore({
  reducer: { [cryptoApi.reducerPath]: cryptoApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware),
});
