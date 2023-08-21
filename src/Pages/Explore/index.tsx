import React from "react";
import ExploreLayout from "../../layouts/ExploreLayout";
import ExploreSec1 from "./components/1. ExploreBanner";
import ExploreSec2 from "./components/2. ExploreFeatures";
import ExploreSec3 from "./components/3. ExploreSearch";
import ExploreSec4 from "./components/4. ExploreDownloads";
// import Container from '../../../components/Container';

const ExploreIndex: React.FC = () => {
  return (
    // <Container>
    <ExploreLayout>
      <ExploreSec1 />
      <ExploreSec2 />
      <ExploreSec3 />
      <ExploreSec4 />
    </ExploreLayout>
    // </Container>
  );
};

export default ExploreIndex;
