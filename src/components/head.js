import React from "react"
import { Helmet } from "react-helmet"

import favicon from "../images/favicon.png"

const Head = () => {
  return (
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />

      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
      />

      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Lato&display=swap"
        rel="stylesheet">
      </link>

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
      />

      <link rel="shortcut icon" href={favicon} />

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

      <script type="application/ld+json">
      {`{
        "@context": "https://schema.org",
        "@type": "Person",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Southampton",
          "addressCounty": "Hampshire",
          "postalCode": "SO17 1NW",
          "streetAddress": "17 Abbotts Way"
        },
        "email": "colinsinclairsmith2@gmail.com",
        "image": "about-me-pic.png",
        "jobTitle": "Frontend Developer",
        "name": "Colin Sinclair - Smith",
        "nationality": "British",
        "telephone": "07788930354",
        "url": "https://colinsinclair-smith.netlify.app/",}`}
    </script>
      <title>Colin Sinclair - Smith</title>
    </Helmet>
  )
}

export default Head
