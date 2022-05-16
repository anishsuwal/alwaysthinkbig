import Image from "next/image"
import countdown from "img/countdown-img.svg"

import partners1 from "img/binance.png"
import partners2 from "img/indoex.png"
import partners3 from "img/opensea.png"
import partners4 from "img/coinsbit.png"
import partners5 from "img/coingecko.png"
import partners6 from "img/finebox.png"
import partners7 from "img/coinmarketcap.png"
import Button from "../button"





export default function Partners() {

    return (
        <section id="partners-id">
            <div className=" px-40 p-6 text-white  bg-partners">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-28">
                    <div>
                        <Image className="w-full aspect-video ..."
                            alt="ATB"
                            src={countdown}
                            layout="responsive" priority
                        />
                    </div>
                    <div id="main" className="m-8 grid grid-cols-4 gap-1 ">
                        <div className="text-4xl font-bold">89</div>
                        <div className="text-4xl font-bold">53</div>
                        <div className="text-4xl font-bold">34</div>
                        <div className="text-4xl font-bold">55</div>
                        <div className="text-xl ">DAYS</div>
                        <div className="text-xl">HOUR</div>
                        <div className="text-xl">MINS</div>
                        <div className="text-xl">SECS</div>


                        <div className="text-4xl font-bold col-span-4 pt-16">Smart and Secure Way
                            to Invest in Crypto</div>
                        <div className="text-xl  col-span-4 pt-10">“Trust me, I get it - there is so much to absorb in the crypto space, but I am here to help you along the way.”
                            You can invest in <strong>ATB Token</strong> directly by clicking the button below
                        </div>
                        <div className="col-span-2 pt-5"><a href="#" className="w-full flex items-center justify-center px-5 py-2 border border-transparent 
                        text-base font-bold rounded-md bg-gradient-to-r from-green-500 to-green-400
                        hover:bg-red-900   ">
                            Buy Token Now
                        </a></div>
                    </div>

                </div>
                <div className="pt-12  ">
                    <a className="px-2">
                        <Image
                            alt="ATB"
                            src={partners1}
                            layout="fixed" priority
                        /></a>
                    <a className="px-2">
                        <Image
                            alt="ATB"
                            src={partners3}
                            layout="fixed" priority
                        /></a>
                    <a className="px-2">
                        <Image
                            alt="ATB"
                            src={partners2}
                            layout="fixed" priority
                        /></a>

                    <a className="px-2">
                        <Image
                            alt="ATB"
                            src={partners4}
                            layout="fixed" priority
                        /></a>
                    <a className="px-2">
                        <Image
                            alt="ATB"
                            src={partners5}
                            layout="fixed" priority
                        /></a>
                    <a className="px-2">
                        <Image
                            alt="ATB"
                            src={partners6}
                            layout="fixed" priority
                        />
                    </a>
                    <a className="px-2">
                        <Image
                            alt="ATB"
                            src={partners7}
                            layout="fixed" priority
                        />
                    </a>
                </div>
            </div>
        </section>
    )
}


