import FeatureTabs, { FeatureTab } from "./FeatureTabs";

interface IntegrateItem {
  header: string;
  content: string;
  icon: string;
}

interface Props {
  header: string;
  tabs: FeatureTab[];
  integrateSubheader: string;
  integrateItems: IntegrateItem[];
}

export default function FeaturesJournals({
  header,
  tabs,
  integrateSubheader,
  integrateItems,
}: Props) {
  return (
    <div style={{ backgroundColor: "#161616" }}>
      <FeatureTabs header={header} tabs={tabs} />
      <div className="mx-auto w-full lg:px-24 max-w-7xl md:px-12 items-center px-8 pb-40 scroll-mt-12 border-b border-light-6">
        <p className="mt-4 font-extrabold lg:text-3xl text-2xl w-full tracking-tight text-light-12 flex">
          {integrateSubheader}
        </p>
        <div className="mx-auto pt-12">
          <div className="lg:mx-auto w-full max-w-xl lg:max-w-7xl gap-12 grid grid-cols-1 lg:gap-24 lg:grid-cols-3">
            {integrateItems.map((item, i) => (
              <div key={i}>
                <div className="gap-3 lg:inline-flex lg:items-center">
                  <div className="items-center justify-center text-light-11 bg-light-4 rounded-xl flex h-10 w-10">
                    <ion-icon
                      aria-label="scan outline"
                      className="hydrated md h-5 w-5"
                      name={item.icon}
                      role="img"
                    />
                  </div>
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
    </div>
  );
}
