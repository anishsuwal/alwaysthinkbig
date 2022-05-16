
import { useEthPrice, COURSE_PRICE } from "components/hooks/useEthPrice"
import { Loader } from "components/ui/common"
import Image from "next/image"

export default function EthRates() {
  const { eth } = useEthPrice()

  return (
    <div className="flex flex-col xs:flex-row  text-center pt-5 ">
      <div className="p-6 border drop-shadow bg-white rounded-md mr-2 shadow-md">
        <div className="flex items-center justify-center">
          {eth.data ?
            <>
              <Image
                layout="fixed"
                height="35"
                width="35"
                src="/small-eth.webp"
                alt=""
              />
              <span className="text-xl font-bold">
                = {eth.data}$
              </span>
            </> :
            <div className="w-full flex justify-center">
              <Loader size="md" />
            </div>
          }
        </div>
        <p className="text-lg text-gray-500">Current eth Price</p>
      </div>
      <div className="p-6 border drop-shadow bg-white rounded-md shadow-md">
        <div className="flex items-center justify-center">
          {eth.data ?
            <>
              <span className="text-xl font-bold">
                {eth.perItem}
              </span>
              <Image
                layout="fixed"
                height="35"
                width="35"
                src="/small-eth.webp"
                alt=""
              />
              <span className="text-xl font-bold">
                = {COURSE_PRICE}$
              </span>
            </> :
            <div className="w-full flex justify-center">
              <Loader size="md" />
            </div>
          }
        </div>
        <p className="text-lg text-gray-500">Price per course</p>
      </div>
    </div>
  )
}
