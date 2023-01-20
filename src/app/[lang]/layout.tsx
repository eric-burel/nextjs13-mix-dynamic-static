export const generateStaticParams = () => [{ lang: "fr" }, { lang: "de" }];
export default function LangLayout({ children, params }: any) {
  return (
    <div>
      <p>Params from layout: {JSON.stringify(params)}</p>
      <div>{children}</div>
    </div>
  );
}
