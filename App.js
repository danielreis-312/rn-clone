import { ThemeProvider } from "styled-components";
import theme from "../src/global/style/theme";
import { AppRoutes } from "./src/routes/routes";
import { NavigationContainer } from "react-navigation/native";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
