import Layout from "./components/Layout/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
const App = () => {
  const queryClient = new QueryClient()
  return <QueryClientProvider client={queryClient}>
  <Layout />
  </QueryClientProvider> 
  ;
};

export default App;
