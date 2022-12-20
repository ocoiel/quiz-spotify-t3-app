import { GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { useSession } from "next-auth/react";
import { Button, IconWrapper } from "../components/Button";
import { ButtonLab } from "../components/ButtonLab";
import { Container } from "../components/Container";
import { Hero, HeroSubtitle, HeroTitle } from "../components/Hero";
import { HeroImage } from "../components/HeroImage";
import { IndexFooter } from "../components/IndexFooter";
import { getServerAuthSession } from "../server/common/get-server-auth-session";

export default function Homepage(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { data: session } = useSession();

  return (
    <div className="overflow-hidden">
      <Container className=" py-[6.4rem]">
        <Hero>
          <Button
            className="translate-y-[-1rem] animate-fade-in opacity-0"
            href="/"
            variant="secondary"
            size="small"
          >
            Beta v0.0.1 –{" "}
            <span className="ml-1 hover:underline hover:decoration-wavy hover:transition-transform hover:duration-300">
              Sinta-se livre para contribuir
            </span>
            <IconWrapper>→</IconWrapper>
          </Button>
          <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Você <span className="">realmente</span>
            <br className="hidden md:block" /> conhece suas músicas?
          </HeroTitle>
          <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            Conheça o quanto você sabe sobre suas próprias músicas
            <br className="hidden md:block" /> Através do sistema de pontuação
            do{" "}
            <span className="cursor-cell font-bold italic hover:text-green-400">
              Quiz Play
            </span>
          </HeroSubtitle>
          <ButtonLab />
          <HeroImage />
        </Hero>
        <IndexFooter />
      </Container>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const session = await getServerAuthSession(ctx);

  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
