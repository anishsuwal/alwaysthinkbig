
import logo from "img/white-logo.png"
import Image from "next/image"



export default function Footer() {

    return (

        <footer>
            <div className="container mx-auto  border-t-2">
                <div className=" flex flex-col ">
                    <div className=" px-40 pt-10 text-white  bg-partners pb-8">
                        <div className="grid grid-cols-3 gap-1 ">
                            <div>
                                <div className=" text-white pb-6">
                                    <Image
                                        alt="ATB"
                                        src={logo}
                                        layout="fixed"
                                    />
                                </div>
                                <p >The trusted brand in cryptocurrency Cryptocurrency, perfect investment</p>
                                <div >
                                    <ul>
                                        <li><a href="#"><i className="lni lni-facebook-filled"></i></a></li>
                                        <li><a href="#"><i className="lni lni-twitter-filled"></i></a></li>
                                        <li><a href="#"><i className="lni lni-linkedin-original"></i></a></li>
                                        <li><a href="#"><i className="lni lni-instagram-original"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="px-40 pt-3">
                                <span className="text-3xl font-bold">Company </span>
                                <ul className="pt-6">
                                    <li>
                                        <a href="">Home</a>
                                    </li>
                                    <li>
                                        <a href="">About</a>
                                    </li>
                                    <li>
                                        <a href="">Service</a>
                                    </li>
                                    <li>
                                        <a href="">Team</a>
                                    </li>
                                    <li>
                                        <a href="">Contact</a>
                                    </li>
                                </ul></div>
                            <div className="px-40 pt-3">
                                <span className="text-3xl font-bold">Resources </span>
                                <ul className="pt-6">
                                    <li>
                                        <a href="">Documentation</a>
                                    </li>

                                    <li>
                                        <a href="">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="">Support Forum</a>
                                    </li>

                                </ul></div>

                        </div>
                        <div className=" animate-bounce  flex justify-end">
                            <a href="#home-id" className="bg-green-500 rounded scroll-top p-2">Go Up</a>
                        </div>
                    </div>

                </div>

            </div>



        </footer>

    )
}