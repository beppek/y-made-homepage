import React from 'react';
import Layout from '../components/Layout';
import Hero from '../sections/Hero';
import BuildTogether from '../sections/BuildTogether';
import Gallery from '../sections/Gallery';
import Contact from '../sections/Contact';

export default () => (
  <Layout>
    <Hero />
    <BuildTogether />
    <Gallery />
    <Contact />
  </Layout>
);
