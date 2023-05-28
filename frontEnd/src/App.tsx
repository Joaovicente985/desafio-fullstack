import { UserProvider } from "./providers/userProvider";
import { RoutesMain } from "./routes";
import GlobalStyles from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <UserProvider>
        <RoutesMain />
      </UserProvider>
    </>
  );
}

export { App };
