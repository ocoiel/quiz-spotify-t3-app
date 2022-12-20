import Image from "next/image";

interface ICardDash {
  image: string;
  modal?: boolean;
  title: string;
  description: string;
  link?: string;
}

export default function CardDash({
  image,
  modal,
  title,
  description,
  link,
}: ICardDash) {
  return (
    <a
      className="delay-50 group min-h-max w-[26rem] rounded-2xl bg-zinc-900 p-4 duration-150 hover:-translate-y-2 hover:bg-zinc-700 hover:shadow-md "
      href={`${link}`}
    >
      <Image
        src={`/${image}.svg`}
        className="w-full rounded-xl shadow"
        width={228}
        height={228}
        alt={`${title}-${description}`}
      />
      <h3 className="mt-5 text-2xl font-bold text-gray-200">{title}</h3>
      <p className="mt-2 text-sm font-light text-gray-400"> {description}</p>
    </a>
  );
}
