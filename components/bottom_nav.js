import { memo } from "react";
import Link from "next/link";
import {CONJURE_FACTORY_ADDRESS} from "../constants";

const hyperlink = "https://etherscan.io/address/" + CONJURE_FACTORY_ADDRESS + "#code"

const BottomNav = () => {
    return (
        <>
            <div className="wrapper flex z-4">
                <footer className="container w-full text-center">

                    <div className=" flex-row items-center text-center">
                        <Link href=" https://docs.dvest.org/">
                            <a className="text-xs md:text-lg text-white p-2 md:p-6 hover:text-green cursor-pointer font-bold" target="_blank">
                                Docs
                            </a>
                        </Link>
                        <Link href=" https://dvest.org/">
                            <a className="text-xs md:text-lg text-white p-2 md:p-6 hover:text-green cursor-pointer font-bold" target="_blank">
                                dVest Labs
                            </a>
                        </Link>
                        <Link href="https://main.ddexx.io/">
                            <a className="text-xs md:text-lg text-white p-2 md:p-6 hover:text-green cursor-pointer font-bold" target="_blank">
                                dDEXX
                            </a>
                        </Link>
                        <Link href="https://defivest.io/">
                            <a className="text-xs md:text-lg text-white p-2 md:p-6 hover:text-green cursor-pointer font-bold" target="_blank">
                                DeFiVest
                            </a>
                        </Link>
                        <Link href=" mailto:info@ddexx.io">
                            <a className="text-xs md:text-lg text-white p-2 md:p-6 hover:text-green cursor-pointer font-bold" target="_blank">
                                Contact
                            </a>
                        </Link>
                        <Link href=" https://twitter.com/dVestProject">
                            <a className="text-xs md:text-lg text-white p-2 md:p-6 hover:text-green cursor-pointer font-bold" target="_blank">
                                Twitter
                            </a>
                        </Link>
                        <Link href="https://discord.gg/zypXRbUBpw">
                            <a className="text-xs md:text-lg text-white p-2 md:p-6 hover:text-green cursor-pointer font-bold" target="_blank">
                                Discord
                            </a>
                        </Link>
                        <Link href={hyperlink}>
                            <a className="text-xs md:text-lg text-white p-2 md:p-6 hover:text-green cursor-pointer font-bold" target="_blank">
                                View Contract
                            </a>
                        </Link>
                        <Link href="https://rinkeby.conjure.finance">
                            <a className="text-xs md:text-lg text-white p-2 md:p-6 hover:text-green cursor-pointer font-bold" target="_blank">
                                Rinkeby Dapp
                            </a>
                        </Link>
                    </div>
                </footer>

                <style jsx>{`
          .wrapper {
            min-height: 76px;
          }
        `}</style>
            </div>
        </>
    );
};

export default memo(BottomNav);