import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import Image from "next/image";
import { Container } from "../../components/Container";
import Footer from "../../components/DefaultFooter";
import { getServerAuthSession } from "../../server/common/get-server-auth-session";

export default function Dashboard(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <Container>
      <div className="mt-[19.2rem] flex h-screen flex-col items-center justify-center gap-4 md:mt-0 md:flex-row">
        <a
          className="delay-50 group min-h-max w-[26rem] rounded-2xl bg-zinc-900 p-4 duration-150 hover:-translate-y-2 hover:bg-zinc-700 hover:shadow-md "
          href=""
        >
          <Image
            src="/ilustration1.svg"
            className="w-full rounded-xl shadow"
            width={228}
            height={228}
            alt="Play Quiz"
          />

          <h3 className="mt-5 text-2xl font-bold text-gray-200"> Jogar</h3>

          <p className="mt-2 text-sm font-light text-gray-400">
            {" "}
            Será que você está com essa bola toda?
          </p>
        </a>
        <a
          className="delay-50 group min-h-max w-[26rem] rounded-2xl bg-zinc-900 p-4 duration-150 hover:-translate-y-2 hover:bg-zinc-700 hover:shadow-md "
          href=""
        >
          <Image
            src="/ilustration1.svg"
            className="w-full rounded-xl shadow"
            width={228}
            height={228}
            alt="Play Quiz"
          />

          <h3 className="mt-5 text-2xl font-bold text-gray-200"> Jogar</h3>

          <p className="mt-2 text-sm font-light text-gray-400">
            {" "}
            Será que você está com essa bola toda?
          </p>
        </a>
        <a
          className="delay-50 group min-h-max w-[26rem] rounded-2xl bg-zinc-900 p-4 duration-150 hover:-translate-y-2 hover:bg-zinc-700 hover:shadow-md "
          href=""
        >
          <Image
            src="/ilustration1.svg"
            className="w-full rounded-xl shadow"
            width={228}
            height={228}
            alt="Play Quiz"
          />

          <h3 className="mt-5 text-2xl font-bold text-gray-200"> Jogar</h3>

          <p className="mt-2 text-sm font-light text-gray-400">
            {" "}
            Será que você está com essa bola toda?
          </p>
        </a>
      </div>
      <Footer />
    </Container>
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
