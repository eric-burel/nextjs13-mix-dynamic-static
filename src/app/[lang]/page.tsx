import Link from "next/link";

// works but I would rather have the layout handle this
// because I need to reproduce this code on all static descendant of [lang]
export const generateStaticParams = () => [{ lang: "fr" }, { lang: "de" }];

export default function LangHome({ params }: any) {
  console.log("Rendering LangHome", { params });
  return (
    <div>
      <p>Params from LangHome: {JSON.stringify(params)}</p>
      <Link href={`${params.lang}/1`}>Go to user 1</Link>
      <Link href={`${params.lang}/2`}>Go to user 2</Link>
      <Link href={`/de`}>Switch to German</Link>
      <Link href={`/fr`}>Switch to French</Link>
    </div>
  );
}
