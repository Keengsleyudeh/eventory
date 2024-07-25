
import AuthProvider from "./provider/authProvider";
import Routes from "./routes";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

//https://dev.to/sanjayttg/jwt-authentication-in-react-with-react-router-1d03

export default App;