import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import Image from "next/image";
import CardDash from "../../components/CardDash";
import { Container } from "../../components/Container";
import Footer from "../../components/DefaultFooter";
import { getServerAuthSession } from "../../server/common/get-server-auth-session";

export default function Dashboard(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <Container>
      <div className="mt-[19.2rem] flex h-screen flex-col items-center justify-center gap-4 md:mt-0 md:flex-row">
        <CardDash
          title="Jogar"
          description="Será que você está com essa bola toda?"
          image="ilustration1"
          modal
        />
        <CardDash
          title="Multiplayer"
          description="Desafie seus amigos num quiz personalizado!"
          image="ilustration2"
          link="#"
        />
        <CardDash
          title="Ranking"
          description="Alguém já ouviu dos melhores? Aqui estão eles..."
          image="ilustration3"
          link="#"
        />
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
