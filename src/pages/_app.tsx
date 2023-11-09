import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavLayout from "../components/organisms/NavLayout";
import { Inter } from "@next/font/google";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { useEffect } from "react";

import * as amplitude from "@amplitude/analytics-browser";
import mixpanel from "mixpanel-browser";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    mixpanel.init("ada665789bf672f91af2c0ef437c1c1b", { debug: true });
    mixpanel.set_config({ persistence: "localStorage" });
    mixpanel.track("View Page", { page: window.location.pathname });

    amplitude.init("bebdc4f38433bb6f9f5e7f8f546fa6b1", undefined, {
      defaultTracking: {
        sessions: true,
        pageViews: true,
        formInteractions: true,
        fileDownloads: true,
      },
    });
  }, []);
  return (
    <GoogleReCaptchaProvider reCaptchaKey="6Lf55G4dAAAAAKdDmcJLricOy92qfYr5wsAui5lF">
      <NavLayout className={inter.className}>
        <Component {...pageProps} />
      </NavLayout>
    </GoogleReCaptchaProvider>
  );
}

export default MyApp;