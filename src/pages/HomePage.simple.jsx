import React from 'react';
import styled from 'styled-components';
import MetaTags from '../components/MetaTags';
import { Section, Container } from '../components/Elements';

const HomePage = () => {
  return (
    <div className="page-wrapper page-transition-container">
      <MetaTags 
        title="FLID - Fundacja Ludzie-Innowacje-Design"
        description="FLID to fundacja zajmująca się innowacyjnymi projektami z zakresu designu, technologii i usług dla społeczeństwa."
        keywords="design thinking, innowacje, projektowanie usług, bielsko-biała, design"
        canonical="/"
      />

      <Section>
        <Container>
          <h1>Fundacja FLID</h1>
          <p>Witamy na stronie głównej Fundacji Ludzie-Innowacje-Design</p>
          <div style={{ padding: '2rem', background: '#f0f0f0', margin: '2rem 0' }}>
            <h2>O nas</h2>
            <p>FLID to fundacja zajmująca się innowacyjnymi projektami z zakresu designu, technologii i usług dla społeczeństwa.</p>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default HomePage;
