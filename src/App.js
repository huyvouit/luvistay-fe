import "./App.scss";
import "./main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import AppRoutes from "./routes/routes";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from "./redux/store";
import AuthContextProvider from "./hooks/contexts/auth_context";

library.add(fas);

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AuthContextProvider>
          <AppRoutes />
        </AuthContextProvider>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
