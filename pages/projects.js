import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProjectList from '../components/Projects/ProjectList';
import Spacing from '../components/Spacing';

export default function projects() {
  return (
    <>
        <Navbar />
        <Spacing />
        <ProjectList />
        <Footer />
    </>
  );
}
