import { StaticImageData } from "next/image"
import ExperienceTimelineItem from "./ExperienceTimelineItem"

type TExperienceTimelineProps = {
  experienceItems: TExperienceTimelineItem[]
  title: string
}

export type TExperienceTimelineItem = {
  id: number
  icon: StaticImageData
  title: string
  years: string
}

const ExperienceTimeline = ({
  experienceItems,
  title,
}: TExperienceTimelineProps) => {
  return (
    <div className="container mx-auto px-[20px] sm:px-0 mb-3">
      <h2 className="font-bold text-2xl pb-2">{title}</h2>
      <div className="max-w-[550px]">
        {experienceItems.map((item, index) => (
          <ExperienceTimelineItem
            key={item.id}
            item={item}
            isFirst={index === 0}
          />
        ))}
      </div>
    </div>
  )
}

export default ExperienceTimeline
