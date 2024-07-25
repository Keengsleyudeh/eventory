
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./provider/authProvider";
import Routes from "./routes";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import GlobalStyles from "./styles/GlobalStyles";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0 * 1000,
    },
  },
})

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false}/>
        <GlobalStyles />
        <Routes />
        <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{margin: "8px"}}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)"
          },
        }}
      />
      </QueryClientProvider>
    </AuthProvider>
  );
}

//https://dev.to/sanjayttg/jwt-authentication-in-react-with-react-router-1d03

export default App;