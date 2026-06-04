interface Item {
  header: string;
  content: string;
}

interface Props {
  audience?: string;
  header?: string;
  subheader?: string;
  items: Item[];
}

export default function Overview3({ audience, header, subheader, items }: Props) {
  return (
    <section id="overview" className="bg-dark-1">
      <div className="mx-auto w-full lg:px-24 max-w-7xl md:px-12 items-center px-8 py-24 scroll-mt-12 border-b border-light-6">
        <div className="mx-auto max-w-5xl lg:text-center">
          <div>
            {audience ? (
              <p className="text-light-12 font-extrabold lg:text-7xl text-6xl tracking-tighter">
                {audience}
              </p>
            ) : null}
            {header ? (
              <p className="text-light-12 font-extrabold lg:text-5xl text-4xl tracking-tighter max-w-2xl mx-auto">
                {header}
              </p>
            ) : null}
            {subheader ? (
              <p className="mt-4 text-lg max-w-xl tracking-tight text-light-11 mx-auto">
                {subheader}
              </p>
            ) : null}
          </div>
        </div>
        <div className="mx-auto pt-12">
          <div className="lg:mx-auto w-full max-w-xl lg:max-w-7xl gap-12 grid grid-cols-1 lg:gap-24 lg:grid-cols-3">
            {items.map((item, i) => (
              <div key={i}>
                <div className="gap-3 lg:inline-flex lg:items-center">
                  <p className="mt-4 text-lg font-semibold leading-6 text-light-12 font-display lg:mt-0">
                    {item.header}
                  </p>
                </div>
                <p className="text-light-11 text-sm mt-4">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
