import React, { Component } from 'react';
import Layout from '../components/Layout';
import Hero from '../sections/Hero';
import BuildTogether from '../sections/BuildTogether';
import Gallery from '../sections/Gallery';
import Contact from '../sections/Contact';

const sections = ['hero', 'build-together', 'gallery', 'contact'];

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSection: sections[0],
    };
  }

  onArrowClick = section => {
    this.scrollTo(section);
  };

  scrollTo = i => {
    const el = document.getElementById(sections[i]);
    el.scrollIntoView({
      behavior: 'smooth',
    });
    this.setState({ currentSection: sections[i] });
  };

  render() {
    return (
      <Layout>
        <Hero onArrowClick={() => this.onArrowClick(1)} />
        <BuildTogether />
        <Gallery />
        <Contact onArrowClick={() => this.onArrowClick(0)} />
      </Layout>
    );
  }
}

export default Home;
