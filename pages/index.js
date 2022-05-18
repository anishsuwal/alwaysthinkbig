

import { getAllCourses } from "content/courses/fetcher"
import { About, ContactUs, Hero, Metaverse, Partners, RoadMap, Whitepaper } from "components/ui/common"
import { CourseCard, CourseList } from "components/ui/course"
import { BaseLayout } from "components/ui/layout"
import Nft from "components/ui/common/nft"

export default function Home({ courses }) {

  return (
    <BaseLayout>
     <Hero/>
     <Nft/>
     <Metaverse/>
     <Whitepaper/>
     <RoadMap/>
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

