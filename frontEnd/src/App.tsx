import { ContactProvider } from "./providers/contactProvider";
import { UserProvider } from "./providers/userProvider";
import { RoutesMain } from "./routes";
import GlobalStyles from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <UserProvider>
        <ContactProvider>
          <RoutesMain />
        </ContactProvider>
      </UserProvider>
    </>
  );
}

export { App };
