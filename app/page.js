import { Footer, Navbar } from '../components';
import { About, AllLevels, Donations, Timeline, Hero, Blogs, Upcomings,  } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Timeline />
    </div>
    <div className="relative">
      <AllLevels />
      <div className="z-0" />
      <Upcomings />
    </div>
    <div className="relative">
      <Blogs />
      <div className="gradient-04 z-0" />
      <Donations />
    </div>
    <Footer />
  </div>
);

export default Page;
