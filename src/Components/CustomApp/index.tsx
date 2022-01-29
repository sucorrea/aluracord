import { GlobalStyle } from "../GlobalStyles";

export const CustomApp = ({ Component, pageProps }) => {
  console.log("Roda em todas as páginas!");
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};
