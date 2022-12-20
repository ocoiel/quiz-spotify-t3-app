import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import NextProgressBar from "nextjs-progressbar";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <NextProgressBar color="#1DB954" />
      <Header />
      <div className="bg-page-gradient pt-navigation-height">
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
