import Head from 'next/head';
import React from 'react';
import Chat from '../components/Chat';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ProjectList from '../components/Projects/ProjectList';
import Spacing from '../components/Spacing';

export default function projects() {
  return (
    <>
        <Head>
          <title>Projects | PT Art Cool</title>
        </Head>
        <Navbar />
        <Spacing />
        <Chat />
        <ProjectList />
        <Footer />
    </>
  );
}
