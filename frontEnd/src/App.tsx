import { ContactProvider } from "./providers/contactProvider";
import { UserProvider } from "./providers/userProvider";
import { RoutesMain } from "./routes";
import GlobalStyles from "./styles/globalStyles";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
