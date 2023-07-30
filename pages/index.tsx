import Head from "next/head";
import Navbar from "../components/Navbar/DesktopNav";
import Hero from "../components/LandingPage/Hero";
import Entreplin from "../components/LandingPage/Entreplin";
import MobileNav from "../components/Navbar/MobileNav";
import Buss from "../components/LandingPage/Buss";
import Entrepreneurs from "../components/LandingPage/Entrepreneurs";
import Collection from "../components/LandingPage/Collection";
import Join from "../components/LandingPage/Join";
import Review from "../components/LandingPage/Review";
import Faq from "../components/LandingPage/Faq";
import Support from "../components/LandingPage/Support";
import Footer from "../components/Footer"

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Entreplin</title>
        <meta
          name="description"
          content="Connecting entrepreneurs all over the places to buy and sell businesses, partner, give and receive support"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/entreplin-logo.png" />
      </Head>

      <div className="w-full flex flex-col bg-white h-full min-h-screen overflow-x-hidden">
        <Navbar />
        <MobileNav />
        <Hero />
        <Entreplin />
        <Buss />
        <Entrepreneurs />
        <Collection />
        <Join />
        <Review />
        <Faq />
        <Support />
        <Footer />
      </div>
    </>
  );
}
