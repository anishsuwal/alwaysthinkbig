import Image from "next/image"
import aboutimg from "img/about-img.svg"


export default function About() {

    return (
        <section id="about-id">
            <div className=" px-40 p-24  ">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-28">
                <div>
                         <Image className="w-full aspect-video ..."
                        alt="ATB"
                        src={aboutimg}
                        layout="fixed"
                    /></div>
                    <div><h1 className="text-5xl font-semibold">About US</h1>
               
                <div className="text-xl pt-16">
                <strong>ATB Token</strong> is a joint project of the Secret Gaming Community and its founding members.
                 Since 2021, <strong>ATB</strong> project has been transacting in many fields, especially in Gaming, in United Kingdom and United State and in many countries of the world. Secret Gaming Community in on to Metaverse, thus the work efficiency, ease of communication in meetings, and time saving will be ensured.</div>
                <div className="mt-5 sm:mt-8 flex lg:justify-start">
                    <div className="rounded-md shadow">

                        <a href="#" className="w-full flex items-center justify-center px-5 py-2 border border-transparent 
                        text-base font-medium rounded-md bg-gradient-to-r from-green-500 to-green-400
                        hover:bg-red-900   ">
                            Register Now
                        </a>
                    </div>
                </div></div>
                   
                </div>

            </div>
        </section>

    )
}


