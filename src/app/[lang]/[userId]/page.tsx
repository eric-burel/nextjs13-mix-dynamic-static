import Link from "next/link";

export default function UserProfile({ params }: any) {
  return (
    <div>
      <p>Params from UserProfile: {JSON.stringify(params)}</p>
      <Link href={`${params.lang}`}>Back to home</Link>
    </div>
  );
}
