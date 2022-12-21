import { ThemeProvider } from "./styles/themeProvider";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </BrowserRouter>    
  )
}

export default App
