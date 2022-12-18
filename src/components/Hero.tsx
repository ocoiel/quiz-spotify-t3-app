interface IHero {
  title: string;
  subtitle: string;
}

export function Hero({ title, subtitle }: IHero) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
