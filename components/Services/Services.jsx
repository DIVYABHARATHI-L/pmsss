import React from 'react';
import './Services.css';
import service1 from '../../assets/service1.png';
import service2 from '../../assets/service2.png';
import service3 from '../../assets/service3.png';


const Services = () => {
  const services = [
    {
      image: service1,
      title: 'Apply for Scholarship',
      description:
        'Submit your application online and access financial support easily. Our streamlined process ensures quick document submission, verification, and disbursement, helping you focus on your education.',
    },
    {
      image: service2,
      title: 'Check your status',
      description:
        'Track the progress of your scholarship application in real-time. Stay updated on verification, approval, and payment statuses with ease.',
    },
    {
      image: service3,
      title: 'Admin Dashboard',
      description:
        'Access comprehensive tools for data analytics and website monitoring. Manage performance, track metrics, and oversee operations efficiently from a centralized interface.',
    },
  ];

  return (
    <section className="services">
      <h2 className="services-title">SERVICES</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
