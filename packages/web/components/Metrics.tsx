import LiveRecordCounter from "./LiveRecordCounter";

interface MetricCard {
  caption: string;
  value: string;
  subheader: string;
}

interface Props {
  header: string;
  subheader: string;
  cards: MetricCard[];
}

export default function Metrics({ header, subheader, cards }: Props) {
  return (
    <section id="metrics">
      <div className="mx-auto w-full lg:px-24 max-w-7xl md:px-12 items-center px-8 py-24 scroll-mt-12">
        <div className="lg:mx-auto max-w-3xl lg:text-center">
          <div>
            <p className="light12 font-extrabold lg:text-5xl text-4xl tracking-tighter lg:pb-8">
              {header}
            </p>
            <p className="lg:mx-auto mt-4 text-lg max-w-xl tracking-tight text-dark-11">
              {subheader}{" "}
              <a
                href="https://codex.desci.com"
                target="_blank"
                className="text-dark-12 font-semibold hover:text-dark-11"
              >
                {" "}
                Learn more.
              </a>
            </p>
          </div>
        </div>

        {/* Live, real-time count of indexed research records */}
        <div className="mx-auto pt-16">
          <div
            className="relative mx-auto w-full max-w-4xl rounded-3xl border px-6 py-16 text-center overflow-hidden"
            style={{ borderColor: "var(--gray-a4)" }}
          >
            <LiveRecordCounter />
            <p className="mt-6 text-lg font-semibold text-dark-12 font-display">
              Research records indexed &mdash; and climbing
            </p>
            <p className="mt-2 text-sm text-dark-11 max-w-xl mx-auto">
              Every scholarly work ingested, scored for novelty, and made
              searchable across the DeSci index. Counted straight from the
              database, updating in real time.
            </p>
          </div>
        </div>

        <div className="mx-auto pt-12">
          <div className="mx-auto w-full gap-8 grid grid-cols-1 xl:grid-cols-3">
            {cards.map((card, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 border rounded-xl px-6 py-6"
                style={{ borderColor: "var(--gray-a4)" }}
              >
                <p className="mt-2 text-lg font-semibold leading-6 text-dark-12 font-display lg:mt-0">
                  {card.caption}
                </p>
                <p className="mt-2 text-3xl font-semibold leading-6 text-dark-12 font-display">
                  {card.value}
                </p>
                <p className="mt-2 text-dark-11 text-sm">{card.subheader}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
