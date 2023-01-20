// Do not work as soon as one descendant page uses a dynamic route parameter
// export const generateStaticParams = () => [{ lang: "fr" }, { lang: "de" }];

export default function LangLayout({ children, params }: any) {
  console.log("Rerendering LangLayout", { params });
  return (
    <div>
      <p>Params from layout: {JSON.stringify(params)}</p>
      <div>{children}</div>
    </div>
  );
}
