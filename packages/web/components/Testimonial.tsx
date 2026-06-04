interface Testimonial {
  name: string;
  position: string;
  content: string;
  image: string;
  link: string;
}

interface Props {
  header: string;
  items: Testimonial[];
}

export default function Testimonial({ header, items }: Props) {
  return (
    <section>
      <div className="mx-auto w-full lg:px-24 max-w-7xl md:px-12 items-center px-8 py-24">
        <div className="max-w-2xl mx-auto md:text-center">
          <h2 className="text-black font-extrabold lg:text-5xl text-4xl tracking-tight">
            {header}
          </h2>
        </div>
        <ul
          role="list"
          className="grid max-w-2xl grid-cols-1 gap-6 mx-auto mt-16 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-2"
        >
          {items.map((item, i) => (
            <li key={i}>
              <figure className="relative h-full flex flex-col justify-between p-6 bg-dark-3 rounded-3xl">
                <blockquote className="relative">
                  <p className="text-base text-dark-11">{item.content}</p>
                </blockquote>
                <div>
                  <figcaption className="relative flex justify-between gap-6 pt-6 mt-6 border-t border-dark-3 h-24">
                    <div>
                      <div className="text-lg font-semibold leading-6 text-dark-12 font-display">
                        {item.name}
                      </div>
                      <div className="mt-1 text-sm text-dark-11">
                        {item.position}
                      </div>
                    </div>
                    <div className="profile-image flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        alt=""
                        src={item.image}
                        loading="lazy"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </figcaption>
                  <a
                    className="button-primary-black mt-6 md:w-1/2 lg:w-full"
                    href={item.link}
                    target="_blank"
                  >
                    View Node
                  </a>
                </div>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
