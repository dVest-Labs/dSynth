import { Web3ReactProvider } from "@web3-react/core";
import Nav from "../components/nav";
import BottomNav from "../components/bottom_nav";
import App from "next/app";
import getLibrary from "../lib/getLibrary";
import "../styles/tailwind.css";

// min-w-0 min-h-0 bg-gradient-to-r from-teal-400 to-blue-600
function ConjureApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="flex min-h-screen flex-col bg-dSynth-background-image">
        <Nav />

        <div className="flex-auto ">
          <Component {...pageProps} />
        </div>
        <div>
          <h1 className="text-white text-2xl text-center font-bold">Powered by dVestLabs & Conjure Finance</h1>
          <div className="flex flex-row justify-center pt-1 pb-5">
            <a href="https://dvest.org/">
              <img width="70" height="70" src="/dVest.png" alt="dVest" />
            </a>
            <a href="https://conjure.finance/">
              <img src="/conjure.png" width="70" height="70" alt="conjure" />
            </a>
          </div>
        </div>
        <BottomNav />
      </div>

    </Web3ReactProvider>
  );
}

ConjureApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default ConjureApp;
