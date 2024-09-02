import Header from "../components/Header";
import WorkContent from "../components/WorkContent";
import WorkDisplay from "../components/WorkDisplay";
import WorkHero from "../components/WorkHero";
import Works from "../components/Works";
import {
  buildsImagesData,
  imagesData,
  popcornImagesData,
  websitesData,
} from "../data/WorksData";

const WorkPage = () => {
  return (
    <>
      <div className="glow glow__work glow__work-primary"></div>
      <div className="glow glow__work glow__work-accent"></div>
      <Header className="align--center work__header" badge="My Works">
        What I've Made
      </Header>
      <WorkHero />
      <Works heading="My Websites" worksData={websitesData} />
      <WorkContent />
      <Works
        className="work__images"
        heading="My Edits & Builds"
        worksData={imagesData}
      />
      <WorkDisplay images={popcornImagesData} callout="Lovy Popcorn" />
      <WorkDisplay
        className="display__builds"
        images={buildsImagesData}
        callout="Roblox Builds"
      />
    </>
  );
};

export default WorkPage;
