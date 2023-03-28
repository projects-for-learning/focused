import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <h1>Focused</h1>
      </div>

      <GlobalStyle />
    </ThemeProvider>
  );
}
