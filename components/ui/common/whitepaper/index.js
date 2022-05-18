import Image from "next/image"
import wpaper from "img/whitepaper.png"


export default function Whitepaper() {

    return (
        <section id="whitepaper-id">
            <div className="pt-10 pb-10">

                <div className="ml-20 sm:ml-20  md:ml-20  lg:ml-40  grid grid-cols-1 md:grid-cols-2 gap-1">
                <div className="position: block">
                         <Image className="w-full aspect-video ..."
                        alt="ATB"
                        src={wpaper}
                        layout='responsive'                      
                        priority
                        
                    /></div>
                    <div>
                <h2 className="  text-4xl py-10">Read Our Whitepaper</h2>
            
                <div className="flex lg:justify-start">
                    <div className="rounded-md shadow">

                        <a href="#" className="w-full flex items-center justify-center px-5 py-2 border border-transparent 
                        text-base font-medium rounded-lg bg-gradient-to-r from-blue-800 to-blue-600
                        hover:bg-red-900   ">
                            White Paper
                        </a>
                    </div>
                </div></div>
                   
                </div>

            </div>
        </section>

    )
}


