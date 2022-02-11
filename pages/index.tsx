import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/footer';
import SectionCover from '../components/section-cover';
import SectionHeader from '../components/section-header';
import SectionTestimonial from '../components/section-testimonial';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Suite Landing Page</title>
      </Head>
      <main>
        <SectionHeader />
        <SectionCover />
        <SectionTestimonial />
      </main>
      <Footer />
    </>
  );
};

export default Home;
