import { Navbar } from "@/components/atomic/organisms/navbar/navbar"
import { SectionIdeas } from "@/components/atomic/organisms/sectionIdeas/sectionIdeas"
import { SectionSimilar } from "@/components/atomic/organisms/sectionSimilar/sectionSimilar"
import { SectionTeamBrainStorming } from "@/components/atomic/organisms/sectionTeamBrainStorming/sectionTeamBrainStorming"
import { SectionTopics } from "@/components/atomic/organisms/sectionTopics/sectionTopics"
import { SectionBusiness } from "@/components/atomic/organisms/sectionBusiness/sectionBusiness"
import Head from "next/head"
import { SectionBusinessGallery } from "@/components/atomic/organisms/sectionBusinessGallery/sectionBusinessGallery"

export default function Home() {
  return (
    <>
      <Head>
        <title>wrapp</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <SectionIdeas />
      <SectionTopics/>
      <SectionTeamBrainStorming/>
      <SectionSimilar/>
      <SectionBusiness/>
      <SectionBusinessGallery/>
    </>
  )
}
