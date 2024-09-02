import {
  chopsImagesData,
  doomsdayImagesData,
  masterizedImagesData,
  oceanImagesData,
  restoImagesData,
  spikeImagesData,
  veritasImagesData,
} from "../data/WorksData";
import WorkColumn from "./WorkColumn";
import WorkGrid from "./WorkGrid";

const WorkContent = () => {
  return (
    <section className="block container work__contents">
      <WorkColumn
        className="work__masterized"
        images={masterizedImagesData}
        callout="Masterized"
      />
      <WorkGrid
        callout="Veritas"
        images={veritasImagesData}
        gridClass="grid--1x2"
        workClass="work__veritas"
      />
      <WorkGrid
        callout="Chicken Chops"
        images={chopsImagesData}
        gridClass="content__grid"
        workClass="work__chicken-chops"
      />
      <WorkGrid
        callout="Ocean Cravings"
        images={oceanImagesData}
        gridClass="content__grid"
        workClass="work__ocean-cravings"
      />
      <WorkGrid
        callout="Honesto Resto"
        images={restoImagesData}
        gridClass="content__grid"
        workClass="work__honesto-resto"
      />
      <WorkGrid
        callout="Spike"
        images={spikeImagesData}
        gridClass="content__grid"
        workClass="work__spike"
      />
      <WorkGrid
        callout="Taste of Doomsday"
        images={doomsdayImagesData}
        gridClass="content__grid"
        workClass="work__doomsday"
      />
    </section>
  );
};

export default WorkContent;
