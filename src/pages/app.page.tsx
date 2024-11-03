import router from "@app/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";

import "./app.scss";

const queryClient = new QueryClient();
const helmetContext = {};

const AppPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider context={helmetContext}>
        <RouterProvider router={router} />
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default AppPage;
