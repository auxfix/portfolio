import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {
        technologies.map(t => (
          <div className="h-28 w-28"
            key={t.name}
          >
            <BallCanvas icon={t.icon}/>
          </div>
        ))
      }
    </div>
  )
}

export default SectionWrapper(Tech, '');