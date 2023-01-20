import Link from "next/link";

export default function LangHome({ params }: any) {
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
