import Body from "./components/Body";
import "./App.css";
import { AuthProvider } from "./components/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Body />
    </AuthProvider>
    
  );
}

export default App;
