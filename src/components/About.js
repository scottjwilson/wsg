import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const About = () => {
  return (
    <div className="p-4">
      <h1 className="text-4xl text-center mb-6">
        24/7 Lifetime Access. Work at Your Own Pace.
      </h1>
      <h4 className="text-center font-bold mb-2 text-lg">
        INTRODUCING OPTIONS SNIPERS ACADEMY
      </h4>
      <p className="font-light text-center">
        Options Snipers Academy & Coaching Program is the only program of it's
        kind Specifically Designed and Tailored to the Options Trader of Today
        to make a full-time income trading options with-OUT years of experience
        or a math degree!
      </p>
      <div className="h-full lg:w-2/3">
        <StaticImage
          src="../images/OS-module-bundle.png"
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Hero"
          style={{ marginBottom: `1.45rem` }}
          fullWidth
        />
      </div>

      <h4 className="text-center font-bold mb-2 text-lg">
        Who is Options Snipers Academy For?
      </h4>
      <div className="text-center space-y-4 font-light">
        <p>
          <span className="font-semibold"> ✔ Options Traders</span> looking to
          make consistent profits without years of trading experience or spend
          countless hours in front of a screen.
        </p>
        <p>
          <span className="font-semibold"> ✔ Options Traders</span> who’ve tried
          the old methods but are having a hard time gaining positive momentum
          and want to escape the “feast or famine” cycle.
        </p>
        <p>
          <span className="font-semibold"> ✔ Investors</span> tired of watching
          from the sideline and want to learn how to earn consistent profits
          without spending countless hours trading.ining
        </p>
        <p>
          <span className="font-semibold"> ✔ Options Traders</span> who wants to
          earn a full time income without spending hours looking at charts and
          YouTube videos
        </p>
      </div>
    </div>
  )
}

export default About
