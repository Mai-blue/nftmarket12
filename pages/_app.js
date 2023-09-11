import "../styles/globals.css";

//INTRNAL IMPORT
import { NavBar, Footer } from "../components/componentsindex";
import { nftMarketplaceProvider } from "../context/NFTMarketplaceContext";

const MyApp = ({ Component, pageProps }) => (
  <div>
  <nftMarketplaceProvider>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
  </nftMarketplaceProvider>
  </div>
);

export default MyApp;
