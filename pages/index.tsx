import type { NextPage } from "next"
import CustomHead from "../components/head"
import Footer from "../components/footer"
import Main from "../components/main"

const Home: NextPage = () => {
  return (
    <div className="pr-8 pl-8">
      <CustomHead />
      <Main />
      <Footer />
    </div>
  )
}

export default Home
