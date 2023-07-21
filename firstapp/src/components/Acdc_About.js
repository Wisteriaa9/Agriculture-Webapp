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

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>Aggregation and Distribution Center</AboutTitle>
      <AboutDescription>
        Distribution and aggregation is a crucial stage in the food supply chain
        where food products are gathered, sorted, and moved to their respective
        distribution points. It plays a vital role in ensuring the efficient
        movement of food from producers to consumers.
      </AboutDescription>
      <AboutDescription>
        At our Aggregation and Distribution Center, we work closely with farmers,
        distributors, and retailers to streamline the distribution process. We
        provide comprehensive services and resources to support the food and
        agriculture supply chain, ensuring fresh and quality products reach
        consumers reliably and sustainably.
      </AboutDescription>
      <AboutDescription>
        Our center focuses on optimizing logistics, storage, quality control,
        and timely delivery. By consolidating products from various sources, we
        maximize efficiency, reduce costs, and minimize food waste. With our
        state-of-the-art facilities and expert team, we are committed to
        improving the overall distribution process and fostering a resilient
        food system.
      </AboutDescription>
      <AboutDescription>
        Join us in our mission to create a more efficient and sustainable
        distribution network that benefits all stakeholders in the food supply
        chain. Together, we can ensure a steady and reliable flow of fresh
        produce and products to meet the demands of consumers and support the
        growth of the agricultural industry.
      </AboutDescription>
    </AboutContainer>
  );
};

export default About;