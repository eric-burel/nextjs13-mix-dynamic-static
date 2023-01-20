import Link from "next/link";

// will trigger ISR = 1 page is stored per user
export const generateStaticParams = () => [];

// will produce Error: A required parameter (userId) was not provided as a string in generateStaticParams for /[lang]/[userId]
// export const dynamic = "force-dynamic";

export default function UserProfile({ params }: any) {
  console.log("Rerendering user profile page");
  return (
    <div>
      <p>Params from UserProfile: {JSON.stringify(params)}</p>
      <Link href={`${params.lang}`}>Back to home</Link>
    </div>
  );
}
