import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const injectScript = `
    // window.addEventListener('error', event => {
    //   event.stopImmediatePropagation()
    // })
  
    // window.addEventListener('unhandledrejection', event => {
    //   event.stopImmediatePropagation()
    // })
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-6R6GMN7NPT");

    // segment
    !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="jhJCiNxW2XEoWADRhyfkKGvCfBX09ox7";;analytics.SNIPPET_VERSION="4.15.3";
    analytics.load("jhJCiNxW2XEoWADRhyfkKGvCfBX09ox7");
    analytics.page();
    }}();
  `;

  // in a <Head> component:

  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link rel="shortcut icon" href="/favicon.ico" />
        <meta property="og:site_name" content="DeSci Labs" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.desci.com" />
        <meta property="og:title" content="DeSci Labs" />
        <meta
          property="og:description"
          content="Building tools to grow open science."
        />
        <meta
          property="og:image"
          content="https://d3ibh1pfr1vlpk.cloudfront.net/desci-labs-cover-share-text.jpg"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.desci.com" />
        <meta property="twitter:title" content="DeSci Labs" />
        <meta
          property="twitter:description"
          content="Building tools to grow open science."
        />
        <meta
          property="twitter:image"
          content="https://d3ibh1pfr1vlpk.cloudfront.net/desci-labs-cover-share-text.jpg"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-6R6GMN7NPT"
        ></script>
        {/* {process.env.NODE_ENV !== "production" && ( */}
        <script dangerouslySetInnerHTML={{ __html: injectScript }} />
        {/* )} */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}