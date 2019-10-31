import React from "react"
import Helmet from "react-helmet"

export default () =>
  <>
    <Helmet>
      <script src="//use.typekit.net/sxe8oni.js"></script>
      <style type="text/css">{`
        .tk-adobe-text-pro{
          font-family:"adobe-text-pro",sans-serif;
        }
        .tk-lust-script{
          font-family:"lust-script",sans-serif;
        }
      `}</style>
      <style type="text/css">{`
        @font-face{font-family:adobe-text-pro;src:url(https://use.typekit.net/af/b53991/000000000000000000012d6b/23/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3) format("woff2"),url(https://use.typekit.net/af/b53991/000000000000000000012d6b/23/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3) format("woff"),url(https://use.typekit.net/af/b53991/000000000000000000012d6b/23/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3) format("opentype");font-weight:700;font-style:normal;}@font-face{font-family:adobe-text-pro;src:url(https://use.typekit.net/af/a33937/000000000000000000012d6e/23/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3) format("woff2"),url(https://use.typekit.net/af/a33937/000000000000000000012d6e/23/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3) format("woff"),url(https://use.typekit.net/af/a33937/000000000000000000012d6e/23/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3) format("opentype");font-weight:400;font-style:normal;}@font-face{font-family:lust-script;src:url(https://use.typekit.net/af/906a59/000000000000000000014696/23/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3) format("woff2"),url(https://use.typekit.net/af/906a59/000000000000000000014696/23/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3) format("woff"),url(https://use.typekit.net/af/906a59/000000000000000000014696/23/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3) format("opentype");font-weight:400;font-style:normal;}
      `}</style>
      <script>{`try{Typekit.load();}catch(e){}`}</script>
    </Helmet>
  </>
