import { type NextPage } from "next";
import Head from "next/head";
import { Container } from "../components/Container";
import { Hero, HeroSubitle, HeroTitle } from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Spotify Quiz</title>
        <meta name="description" content="Spotify quiz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Container>Header</Container>
      </header>
      <main>
        <Container>
          <Hero>
            <HeroTitle>Linear is a better way to build products</HeroTitle>
            <HeroSubitle>
              Meet the new standard for modern software development. Streamline
              issues, sprints, and product roadmaps.
            </HeroSubitle>
          </Hero>
        </Container>
      </main>
      <footer>
        <Container>Footer</Container>
      </footer>
    </>
  );
};

export default Home;
