import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CopyrightLinearBanner } from "../components/CopyrightLinearBanner";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Header />
      <div className="bg-page-gradient pt-navigation-height">
        <Component {...pageProps} />
      </div>
      <Footer />
      <CopyrightLinearBanner />
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
