import ProjectCards from "../Components/ProjectCards";
import FirstSecction from "../Components/FirstSecction";
import WhatsNew from "../Components/WhatsNew";
import Question from "../Components/Question";
import ApplicationProcess from "../Components/ApplicationProcess";
import Banner from "../Components/Banner";

export default function Home() {
  return (
    <div className="bg-[#1C1C28] text-white px-[20px] md:px-[60px] pb-[80px]">
      <FirstSecction />
      <ProjectCards />
      <WhatsNew />
      <Question />
      <ApplicationProcess/>
      <Banner/>
    </div>
  );
}
