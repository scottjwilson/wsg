import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const Hero = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center container mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-700 text-center leading-10 my-8">
        {title}
      </h1>
      <div className="h-full lg:w-2/3">
        <StaticImage
          src="../images/OS-bundle.png"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Hero"
          style={{ marginBottom: `1.45rem` }}
          fullWidth
        />
      </div>
    </div>
  )
}

export default Hero
