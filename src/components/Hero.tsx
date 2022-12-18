interface IHero {
  children: React.ReactNode;
}

interface IHeroElement {
  children: React.ReactNode;
}

export function HeroTitle({ children }: IHeroElement) {
  return <h1 className="my-5 text-5xl">{children}</h1>;
}

export function HeroSubitle({ children }: IHeroElement) {
  return <p className="mb-8 text-lg">{children}</p>;
}

export function Hero({ children }: IHero) {
  return <div className="text-center">{children}</div>;
}
