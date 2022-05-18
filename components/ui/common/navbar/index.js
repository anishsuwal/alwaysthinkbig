

import { useWeb3 } from "components/providers"
import { ActiveLink, Button } from "components/ui/common"
import { useAccount } from "components/hooks/web3"
import { useRouter } from "next/router"
import logo from "img/white-logo.png"
import Image from "next/image"
import { Link } from "react-router-dom"

export default function Navbar() {
  const { connect, isLoading, requireInstall } = useWeb3()
  const { account } = useAccount()
  const { pathname } = useRouter()

  return (
    <section className="sticky top-0 z-50">
      <nav className="flex items-center justify-between flex-wrap  p-3 bg-gradient-to-r from-blue-700 to-blue-800">
        <div className="flex items-center flex-shrink-0  text-white ml-6 lg:ml-40">
          <a href="#home-id">
          <Image 
            alt="ATB"
            src={logo}
            layout="fixed" priority
          />
          </a>
        </div>

        <div className="w-full block  lg:flex lg:items-center lg:w-auto ">
          <div className="text-sm lg:flex-grow  p-6 lg:ml-40">
            <a href="#nft-id" className="block mt-4 lg:inline-block lg:mt-0 text-sm  mr-5 text-slate-100 hover:text-gray-900">
              NFTS
            </a>
            <a href="#metaverse-id" className="block mt-4 lg:inline-block lg:mt-0 text-sm  mr-5 text-slate-100 hover:text-gray-900">
              METAVERSE
            </a>
            <a href="#whitepaper-id" className="block mt-4 lg:inline-block lg:mt-0 text-sm  mr-5 text-slate-100 hover:text-gray-900">
              WHITPAPER
            </a>
            <a href="#roadmap-id" className="block mt-4 lg:inline-block lg:mt-0 text-sm  mr-5 text-slate-100 hover:text-gray-900">
              ROADMAP
            </a>
            <a href="#about-id" className="block mt-4 lg:inline-block lg:mt-0 text-sm  mr-5 text-slate-100 hover:text-gray-900">
              ABOUT
            </a>
            <a href="#partners-id" className="block mt-4 lg:inline-block lg:mt-0 text-sm  mr-5 text-slate-100 hover:text-gray-900">
              PARTNERS
            </a>
            <a href="#contactus-id" className="page-scroll block mt-4 lg:inline-block lg:mt-0 text-sm   text-slate-100 hover:text-gray-900">
              CONTACT US
            </a>

          </div>
          <div className="inline-block text-sm  py-4 p-6   mr-20 leading-none  rounded">

            {isLoading ?
              <Button
                disabled={true}
                onClick={connect}>
                Loading...
              </Button> :
              account.data ?
                <Button
                  hoverable={false}
                  className="cursor-default">
                  Hi there {account.isAdmin && "Admin"}
                </Button> :
                requireInstall ?
                  <Button
                    onClick={() => window.open("https://metamask.io/download.html", "_blank")}>
                    Install Metamask
                  </Button> :
                  <Button
                    onClick={connect}>
                    Connect
                  </Button>
            }
          </div>

        </div>
      </nav>
      {account.data &&
        !pathname.includes("/marketplace") &&
        <div className="flex justify-end bg-gradient-to-r from-blue-700 to-blue-900 pt-2 pr-40">
          <div className="text-white bg-gradient-to-r from-green-500 to-green-400 rounded-md shadow-md p-3">
            {account.data}
          </div>
        </div>
      }
    </section>
  )
}
