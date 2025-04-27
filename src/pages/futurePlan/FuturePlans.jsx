import React from 'react';
import './FuturePlans.css';

const FuturePlans = () => {
  return (
    <section id="future-plans" className="future-plans-section section">
      <h2>Future Plans</h2>
      <div className="plans-container">
        <div className="plan-box plan-box-1">
          <h3>Scalable Microservices</h3>
          <p>We aim to develop scalable microservices using Google Kubernetes Engine (GKE) to ensure high availability and reliability of applications.</p>
        </div>
        <div className="plan-box plan-box-2">
          <h3>Serverless Solutions</h3>
          <p>Implementing serverless solutions with Cloud Functions and Cloud Run to streamline deployments and reduce operational overhead.</p>
        </div>
        <div className="plan-box plan-box-3">
          <h3>Data Analytics</h3>
          <p>Leveraging BigQuery for advanced data analytics and insights to make informed business decisions efficiently.</p>
        </div>
        <div className="plan-box plan-box-4">
          <h3>AI/ML Pipelines</h3>
          <p>Building robust AI/ML pipelines using AI Platform and TensorFlow to enable predictive analytics and automation.</p>
        </div>
      </div>
    </section>
  );
};

export default FuturePlans;