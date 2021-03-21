import React from "react"
import discord from "../images/Discord-Logo-White.svg"
const BuyNow = () => {
  return (
    <div className="bg-gray-700 p-4 mb-8 border-red-400 border-solid border-2 shadow-2xl text-center space-y-10 md:w-1/2 mx-auto rounded-xl">
      <p className="text-4xl font-semibold font-alpha text-white">
        Join The Alpha Pack Today!
      </p>
      <p className="text-4xl line-through text-red-600 font-dancing">
        Normally $1,997
      </p>
      <p className="text-green-400 text-3xl font-bold font-dancing">
        Only $497! (use promo code 'MasterSniper')
      </p>
      <div className="flex justify-center items-center">
        <button className="font-alpha bg-gradient-to-r from-blue-400 to-blue-900 rounded-xl p-4 text-white text-2xl font-semibold shadow-md uppercase flex ">
          run with the pack
          <img src={discord} className="h-8 ml-2" />
        </button>
      </div>
      <p className="text-xs"> </p>
    </div>
  )
}

export default BuyNow
