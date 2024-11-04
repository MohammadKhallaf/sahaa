import router from "@app/router";
import store from "@store/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import "./app.scss";

const queryClient = new QueryClient();
const helmetContext = {};

const AppPage = () => {
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider context={helmetContext}>
          <RouterProvider router={router} />
        </HelmetProvider>
      </QueryClientProvider>
    </ReduxProvider>
  );
};

export default AppPage;
