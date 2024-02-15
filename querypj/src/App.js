import React from "react";
import "./App.css";
import MainProducts from "./components/MainProducts";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MainProducts />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
      ;
    </>
  );
}
