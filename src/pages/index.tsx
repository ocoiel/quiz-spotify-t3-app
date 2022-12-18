import { Button, IconWrapper } from "../components/Button";
import { ButtonLab } from "../components/ButtonLab";
import { Container } from "../components/Container";
import { Hero, HeroSubtitle, HeroTitle } from "../components/Hero";
import { HeroImage } from "../components/HeroImage";
import { ChevronIcon } from "../components/icons/chevron";

const Homepage = () => {
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
            Linear 2022 Release – Built for scale
            <IconWrapper>→</IconWrapper>
          </Button>
          <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Linear is a better way
            <br className="hidden md:block" /> to build products
          </HeroTitle>
          <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            Meet the new standard for modern software development.
            <br className="hidden md:block" /> Streamline issues, sprints, and
            product roadmaps.
          </HeroSubtitle>
          <ButtonLab />
          <HeroImage />
        </Hero>
      </Container>
    </div>
  );
};

export default Homepage;
