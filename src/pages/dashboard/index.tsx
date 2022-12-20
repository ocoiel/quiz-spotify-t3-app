import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import Image from "next/image";
import { getServerAuthSession } from "../../server/common/get-server-auth-session";

export default function Dashboard(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <div className="mt-40 flex h-screen flex-col items-center justify-evenly md:mt-0 md:flex-row">
      <div className="rounded-3xl bg-slate-800">
        <a href="#">
          <Image
            src="/ilustration1.svg"
            alt="Nutgly Roger"
            width={256}
            height={256}
          />
          <h1 className="text-center text-6xl">play</h1>
        </a>
      </div>
      <div>
        <Image
          src="/ilustration-winners.svg"
          alt="Nutgly Roger"
          width={256}
          height={256}
        />
        <h1 className="text-center text-6xl">play</h1>
      </div>
      <div>
        <Image
          src="/ilustration-leaderboard.svg"
          alt="Nutgly Roger"
          width={256}
          height={256}
        />
        <h1 className="text-center text-6xl">play</h1>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const session = await getServerAuthSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
