import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const AboutTitle = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const AboutDescription = styled.p`
  margin-bottom: 16px;
`;

const CPCAbout = () => {
  return (
    <AboutContainer>
      <AboutTitle>Central Packaging Central</AboutTitle>
      <AboutDescription>
        Central Packaging Central is a leading provider of innovative packaging solutions for businesses across various industries. With years of experience and a commitment to quality, we specialize in creating customized packaging solutions that meet the unique needs of our clients.
      </AboutDescription>
      <AboutDescription>
        Our team of experts works closely with clients to understand their specific requirements and develop packaging designs that are functional, visually appealing, and environmentally friendly. We offer a wide range of packaging options, including boxes, containers, bags, labels, and more.
      </AboutDescription>
      <AboutDescription>
        At Central Packaging Central, we prioritize sustainability and are constantly exploring eco-friendly materials and practices. We strive to minimize our environmental impact and help our clients achieve their sustainability goals through innovative packaging solutions.
      </AboutDescription>
      <AboutDescription>
        Our dedication to quality is evident in every aspect of our work. We ensure that our packaging is durable, protects the products during transit, and enhances the overall brand experience. Our state-of-the-art manufacturing facilities and rigorous quality control processes guarantee the highest standards for our clients.
      </AboutDescription>
      <AboutDescription>
        In addition to our packaging expertise, we provide comprehensive services that include graphic design, branding consultation, and supply chain management. We aim to be a trusted partner for our clients, supporting them from concept to delivery.
      </AboutDescription>
    </AboutContainer>
  );
};

export default CPCAbout;