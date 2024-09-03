import { TExperienceTimelineItem } from "./ExperienceTimeline"
import Image from "next/image"

type TExperienceTimelineItemProps = {
  item: TExperienceTimelineItem
  isFirst: boolean
}

const ExperienceTimelineItem = ({
  item,
  isFirst,
}: TExperienceTimelineItemProps) => {
  return (
    <div className={`flex justify-start gap-4 ${!isFirst ? "mt-2" : ""}`}>
      <div>
        <Image
          src={item.icon.src}
          alt="Experience Icon"
          width={50}
          height={50}
          className="w-[35px] sm:w-[50px]"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-bold">{item.title}</h3>
        <p className="text-gray-600">{item.years}</p>
      </div>
    </div>
  )
}

export default ExperienceTimelineItem
