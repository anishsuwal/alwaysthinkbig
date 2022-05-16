


import Image from "next/image"
import icon from "img/icon.png"

export default function Nft() {

    return (
        <section id="nft-id">
            
            <div className="
                space-y-4                 
                justify-between">
                <div className="bg-no-repeat bg-cover bg-center 
                 h-screen w-full  bg-nft">     

                <div className="text-8xl text-white pt-16 text-bold text-center">
                <Image className="w-full aspect-video ..."
                        alt="ATB"
                        src={icon}
                        layout="fixed" priority
                    />
                </div>
                <div className=" text-6xl text-yellow-300 pt-72 text-center">Coming Soon...</div>

                </div>

            </div>

        </section>

    )
}

