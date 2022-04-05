import Blogs from "@/components/home/Blogs";
import Heading from "@/components/home/Heading";
import Projects from "@/components/home/Projects";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {

  return (
    <div className="">
      <Head>
        <title>Dev Usmaarn</title>
      </Head>
      <Navbar />
      <Heading />
      <Projects />
      <Blogs />
    </div>
  )
}
