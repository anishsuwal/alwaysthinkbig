


import Image from "next/image"
import icon from "img/roadmap.png"


export default function Roadmap() {

    return (
        <section id="roadmap-id">
            
            <div className="flex flex-col justify-top ">
             <div className="mx-auto">
                  <Image 
                                alt="ATB"
                                src={icon}
                            />                        
                    </div>
                    </div>        
        </section>
    )
}

