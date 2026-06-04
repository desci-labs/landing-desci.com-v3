import FeatureTabs, { FeatureTab } from "./FeatureTabs";

interface Props {
  header: string;
  tabs: FeatureTab[];
}

export default function Features({ header, tabs }: Props) {
  return <FeatureTabs header={header} tabs={tabs} showAppButtons />;
}
