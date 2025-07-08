import React from 'react';
import Head from 'next/head';
import { Container } from 'react-bootstrap';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = "Alphacore Development - Power, Concentration, Discipline",
  description = "Building more than athletes—we shape resilient humans through Power, Concentration, and Discipline. Discover our Academy, VitaCore Training, and Recovery Systems.",
  className = ""
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      
      <div className={`min-vh-100 d-flex flex-column ${className}`}>
        <Navigation />
        <main className="flex-grow-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;