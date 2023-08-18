import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={320}
    height={500}
    viewBox="0 0 380 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="125" cy="117" r="103" />
    <circle cx="121" cy="155" r="2" />
    <rect x="105" y="163" rx="0" ry="0" width="16" height="1" />
    <rect x="30" y="236" rx="9" ry="9" width="214" height="35" />
    <rect x="148" y="375" rx="7" ry="7" width="95" height="35" />
    <rect x="31" y="379" rx="6" ry="6" width="63" height="25" />
    <rect x="38" y="245" rx="0" ry="0" width="5" height="3" />
    <rect x="30" y="278" rx="8" ry="8" width="213" height="80" />
  </ContentLoader>
);

export default Skeleton;
