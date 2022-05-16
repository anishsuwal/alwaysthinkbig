

import { getAllCourses } from "content/courses/fetcher"
import { About, ContactUs, Hero, Metaverse, Partners, RoadMap } from "components/ui/common"
import { CourseCard, CourseList } from "components/ui/course"
import { BaseLayout } from "components/ui/layout"
import Nft from "components/ui/common/nft"
import Roadmap from "components/ui/common/roadmap"

export default function Home({ courses }) {

  return (
    <BaseLayout>
      <Hero />
      <Nft/>
      <Metaverse/>
      <Roadmap/>
      <About/>
      <Partners/>
      <ContactUs/>
    </BaseLayout>
  )
}

export function getStaticProps() {
  const { data } = getAllCourses()
  return {
    props: {
      courses: data
    }
  }
}

