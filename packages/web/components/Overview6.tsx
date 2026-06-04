interface Item {
  header: string;
  /** May contain inline HTML (links). */
  content: string;
  icon: string;
}

interface Props {
  audience?: string;
  header: string;
  subheader?: string;
  items: Item[];
}

export default function Overview6({ audience, header, subheader, items }: Props) {
  return (
    <section id="overview">
      <div className="lg:mx-auto w-full lg:px-24 max-w-7xl md:px-12 items-center px-8 py-24 scroll-mt-12">
        <div className="lg:mx-auto max-w-3xl lg:text-center">
          <div>
            {audience ? (
              <p className="light12 font-extrabold lg:text-7xl text-6xl tracking-tighter">
                {audience}
              </p>
            ) : null}
            <p className="light12 font-extrabold lg:text-5xl text-4xl tracking-tighter max-w-2xl">
              {header}
            </p>
            {subheader ? (
              <p className="mt-4 text-lg max-w-xl tracking-tight text-light-11 mx-auto">
                {subheader}
              </p>
            ) : null}
          </div>
        </div>
        <div className="mx-auto pt-12">
          <div className="lg:mx-auto w-full max-w-xl lg:max-w-7xl gap-12 grid grid-cols-1 lg:gap-24 lg:text-center lg:grid-cols-3">
            {items.map((item, i) => (
              <div key={i}>
                <div>
                  <div className="items-center justify-center text-black bg-gray-100 rounded-xl flex h-10 w-10 lg:mx-auto">
                    <ion-icon
                      aria-label="scan outline"
                      className="hydrated md h-4 w-4"
                      name={item.icon}
                      role="img"
                    />
                  </div>
                  <p className="mt-4 text-lg font-semibold leading-6 text-black font-display tracking-tight">
                    {item.header}
                  </p>
                </div>
                <div
                  className="mt-4 text-gray-500 text-sm"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
