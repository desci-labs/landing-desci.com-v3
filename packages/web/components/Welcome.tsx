interface Item {
  header: string;
  content: string;
}

interface Props {
  header: string;
  subheader: string;
  items: Item[];
}

export default function Welcome({ header, subheader, items }: Props) {
  return (
    <section id="overview">
      <div className="mx-auto w-full lg:px-24 max-w-7xl md:px-12 items-center px-8 py-24 scroll-mt-12">
        <div className="lg:mx-auto max-w-3xl lg:text-center">
          <div>
            <p className="text-dark-12 font-extrabold lg:text-5xl text-4xl tracking-tighter lg:pb-8">
              {header}
            </p>
            <p className="mt-4 text-lg max-w-xl tracking-tight text-dark-11 lg:mx-auto lg:pb-8">
              {subheader}
            </p>
          </div>
        </div>
        <div className="mx-auto pt-12">
          <div className="lg:mx-auto w-full max-w-xl lg:max-w-7xl gap-3 lg:gap-12 grid grid-cols-1 lg:gap-16 lg:grid-cols-4">
            {items.map((item, i) => (
              <div key={i}>
                <div className="gap-3 lg:inline-flex lg:items-center">
                  <p className="mt-4 text-lg font-semibold leading-6 text-dark-12 font-display lg:mt-0">
                    {item.header}
                  </p>
                </div>
                <p className="text-dark-11 text-sm mt-4">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
