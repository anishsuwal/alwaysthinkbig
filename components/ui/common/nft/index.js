


import Image from "next/image"
import icon from "img/nft.png"

export default function Nft() {

    return (
        <section id="nft-id">

            <div className="flex flex-col justify-top ">
             <div className="animate-pulse mx-auto">
                  <Image 
                                alt="ATB"
                                src={icon}
                            />                        
                    </div>
                    </div>                   


        </section>

    )
}

