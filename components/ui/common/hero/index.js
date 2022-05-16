import Image from "next/image"
import logo from "img/hero-img.png"


export default function Hero() {

    return (
        <section id="home-id">
            <div className=" px-40 p-24 text-white bg-gradient-to-r from-blue-700 to-blue-900">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-28">
                    <div><h1 className="text-xl">Start Investing & Earn Money</h1>
                <h2 className="subtitle mb-5 text-5xl py-10">Say Goodbye To <br/>Idle #Money.</h2>
               
                <div className="text-xl">
                Invest your spare change in <strong>ATB Token </strong> and save with
                crypto to earn interest in real time.</div>
                <div className="mt-5 sm:mt-8 flex lg:justify-start">
                    <div className="rounded-md shadow">

                        <a href="#" className="w-full flex items-center justify-center px-5 py-2 border border-transparent 
                        text-base font-medium rounded-md bg-gradient-to-r from-green-500 to-green-400
                        hover:bg-red-900   ">
                            Register Now
                        </a>
                    </div>
                </div></div>
                    <div>
                         <Image className="w-full aspect-video ..."
                        alt="ATB"
                        src={logo}
                        layout="fixed" priority
                    /></div>
                </div>

            </div>
        </section>

    )
}


