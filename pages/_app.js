import "@/styles/globals.css";
import ScrollToTop from "react-scroll-to-top";
import { ChakraProvider } from "@chakra-ui/react";
export default function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Component {...pageProps} />{" "}
        <ScrollToTop
          smooth
          component={<img src={"top-up.png"} alt="Custom Image" />}
        />
      </ChakraProvider>
    </>
  );
}
