import { useWeb3React } from "@web3-react/core";
import { memo } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useWalletModalToggle } from "./WalletModal/state";

const WalletModal = dynamic(() => import("./WalletModal"), { ssr: false });

const Nav = () => {
  const { account } = useWeb3React();

  const toggleWalletModal = useWalletModalToggle();

  return (
    <>
      <div className="wrapper flex  z-4">
        <header className="container w-full">
          <nav className="flex justify-between items-center h-full">
            <Link href="/">
              <a>
                <div className="flex flex-row items-center">
                  <img src="/dSynth.png" alt="nft dao" />
                </div>
              </a>
            </Link>
            <div className="flex flex-row items-center">
              <Link href="/manage">
                <a className="text-xs md:text-lg text-white p-2 md:p-6 hover:text-green cursor-pointer font-bold">
                  Manage
                </a>
              </Link>
              <Link href="/loan">
                <a className="text-xs md:text-lg text-white p-2 md:p-6 hover:text-green cursor-pointer font-bold">
                  Loans
                </a>
              </Link>

              <button
                  className="py-1 px-2 rounded-full focus:outline-none hover:bg-btn-selected cursor-pointer border-2"
                  type="button" onClick={toggleWalletModal}>
                <p className="text-xs md:text-lg p-2 font-bold">{!!account ? "My Wallet" : "Unlock Wallet"}</p>
              </button>
            </div>
          </nav>
        </header>

        <WalletModal />

        <style jsx>{`
          .wrapper {
            min-height: 76px;
          }
          div > img {
            height: 50px;
            bottom: 2px;
          }
          button {
            // background-color: #078BFA;
          }
          button > p {
            color: white;
            opacity: 1;
          }
        `}</style>
      </div>
    </>
  );
};

export default memo(Nav);
