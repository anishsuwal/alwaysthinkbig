
import { Web3Provider } from "components/providers"
import { Navbar, Footer } from "components/ui/common"

export default function BaseLayout({children}) {

    return (

        <Web3Provider>
            <div>
                <Navbar/>
                <div>
                    {children}
                </div>
                <Footer/>
            </div>            
        </Web3Provider>
    )
}