
import App from "components/App";
import { ProviderWrapper as ContextProviderWrapper } from "contexts/Contexte";
import { BrowserRouter as Router } from 'react-router-dom';
const AppLoader = () => {

  return (
    <Router>
    <ContextProviderWrapper>
      <App />
    </ContextProviderWrapper>
    </Router>
  );
};

export default AppLoader;
