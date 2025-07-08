import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Alert } from 'react-bootstrap';
import Link from 'next/link';
import Layout from '@/components/Layout/Layout';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  goals: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    goals: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      title: "General Inquiries",
      icon: FaEnvelope,
      description: "For general questions and information about all our services.",
      contact: "info@alphacoredevt.com",
      href: "mailto:info@alphacoredevt.com"
    },
    {
      title: "Academy Program",
      icon: "⚽",
      description: "Youth football development, tryouts, and program enrollment.",
      contact: "academy@alphacoredevt.com",
      href: "mailto:academy@alphacoredevt.com"
    },
    {
      title: "VitaCore Training",
      icon: "💪",
      description: "Adult fitness programs and corporate wellness solutions.",
      contact: "vitacore@alphacoredevt.com",
      href: "mailto:vitacore@alphacoredevt.com"
    }
  ];

  const faqs = [
    {
      question: "What age groups do you serve?",
      answer: "Our Academy serves youth and amateur football players of all skill levels. VitaCore Training is designed for adults 18+, and our Recovery Systems serve athletes and adults of all ages."
    },
    {
      question: "Do I need prior experience to join?",
      answer: "Not at all! We welcome beginners and experienced athletes alike. Our assessment process helps us create the right program for your current level and goals."
    },
    {
      question: "What makes Alphacore different?",
      answer: "Our holistic approach integrates physical training, mental conditioning, and spiritual grounding. We focus on building complete humans, not just athletes."
    },
    {
      question: "Do you offer corporate programs?",
      answer: "Yes! Our VitaCore division offers comprehensive corporate wellness programs, team building activities, and executive fitness solutions."
    },
    {
      question: "How do I get started?",
      answer: "Simply fill out our contact form or reach out directly via email or WhatsApp. We'll schedule a free consultation to discuss your goals and recommend the best program for you."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setShowSuccess(true);
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        goals: '',
        message: ''
      });
    }, 1000);
  };

  const handleNewInquiry = () => {
    setShowSuccess(false);
  };

  return (
    <Layout 
      title="Contact Alphacore Development"
      description="Get in touch with Alphacore Development. Contact our Academy, VitaCore Training, or Recovery Systems divisions. Schedule your free assessment today."
    >
      {/* Hero Section */}
      <section 
        className="py-5 position-relative overflow-hidden"
        style={{ 
          background: 'var(--primary-bg)',
          paddingTop: '8rem !important',
          paddingBottom: '8rem !important'
        }}
      >
        {/* Background elements */}
        <div className="position-absolute top-0 start-0 w-100 h-100">
          <div 
            className="position-absolute animate-float"
            style={{
              top: '25%',
              left: '25%',
              width: '24rem',
              height: '24rem',
              background: 'rgba(59, 130, 246, 0.1)',
              borderRadius: '50%',
              filter: 'blur(60px)'
            }}
          />
          <div 
            className="position-absolute animate-float grid-bg opacity-25"
            style={{
              bottom: '25%',
              right: '25%',
              width: '24rem',
              height: '24rem',
              background: 'rgba(14, 165, 233, 0.1)',
              borderRadius: '50%',
              filter: 'blur(60px)',
              animationDelay: '-3s'
            }}
          />
        </div>
        
        <Container className="position-relative text-center">
          <div className="d-flex flex-column gap-4">
            <div 
              className="d-inline-block px-3 py-2 font-mono text-uppercase mx-auto"
              style={{ 
                background: 'rgba(59, 130, 246, 0.2)',
                color: 'var(--electric-blue)',
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                width: 'fit-content',
                borderRadius: '1rem'
              }}
            >
              Get In Touch
            </div>
            <h1 className="font-heading fw-black" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: '1.1' }}>
              <span className="gradient-text d-block">Let's Start Your</span>
              <span className="text-white glow-text d-block">Journey</span>
            </h1>
            <p className="fs-4 text-muted mx-auto" style={{ maxWidth: '800px', lineHeight: '1.6' }}>
              Ready to unlock your potential through Power, Concentration, and Discipline? Contact us today to discover which Alphacore division aligns with your goals.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section 
        className="py-5 position-relative overflow-hidden"
        style={{ 
          background: 'var(--secondary-bg)',
          paddingTop: '8rem !important',
          paddingBottom: '8rem !important'
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 grid-bg opacity-25"></div>
        
        <Container className="position-relative">
          <Row className="justify-content-center">
            <Col lg={8}>
              <Card className="glass border-0">
                <Card.Body className="p-5">
                  <div className="text-center mb-5">
                    <h2 className="font-heading fw-black display-4 gradient-text mb-4">Get In Touch</h2>
                    <p className="fs-5 text-muted">
                      Fill out the form below and we'll get back to you within 24 hours to discuss your goals and recommend the best path forward.
                    </p>
                  </div>

                  {!showSuccess ? (
                    <Form onSubmit={handleSubmit}>
                      <Row className="g-4">
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label className="fw-medium text-white glow-text mb-3">
                              First Name *
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                              placeholder="Enter your first name"
                              className="py-3"
                              style={{ borderRadius: '0.75rem' }}
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group>
                            <Form.Label className="fw-medium text-white glow-text mb-3">
                              Last Name *
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                              placeholder="Enter your last name"
                              className="py-3"
                              style={{ borderRadius: '0.75rem' }}
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row className="g-4 mt-3">
                        <Col>
                          <Form.Group>
                            <Form.Label className="fw-medium text-white glow-text mb-3">
                              Email Address *
                            </Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              placeholder="Enter your email address"
                              className="py-3"
                              style={{ borderRadius: '0.75rem' }}
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row className="g-4 mt-3">
                        <Col>
                          <Form.Group>
                            <Form.Label className="fw-medium text-white glow-text mb-3">
                              Phone Number
                            </Form.Label>
                            <Form.Control
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="Enter your phone number"
                              className="py-3"
                              style={{ borderRadius: '0.75rem' }}
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row className="g-4 mt-3">
                        <Col>
                          <Form.Group>
                            <Form.Label className="fw-medium text-white glow-text mb-3">
                              Service Area of Interest *
                            </Form.Label>
                            <Form.Select
                              name="service"
                              value={formData.service}
                              onChange={handleInputChange}
                              required
                              className="py-3"
                              style={{ borderRadius: '0.75rem' }}
                            >
                              <option value="">Select a service area</option>
                              <option value="academy">Alphacore Academy (Youth Football)</option>
                              <option value="vitacore">VitaCore Training (Adult Fitness)</option>
                              <option value="recovery">Recovery Systems</option>
                              <option value="corporate">Corporate Wellness</option>
                              <option value="consultation">General Consultation</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row className="g-4 mt-3">
                        <Col>
                          <Form.Group>
                            <Form.Label className="fw-medium text-white glow-text mb-3">
                              Your Goals & Objectives
                            </Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={4}
                              name="goals"
                              value={formData.goals}
                              onChange={handleInputChange}
                              placeholder="Tell us about your fitness goals, experience level, or specific needs..."
                              className="py-3"
                              style={{ borderRadius: '0.75rem' }}
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row className="g-4 mt-3">
                        <Col>
                          <Form.Group>
                            <Form.Label className="fw-medium text-white glow-text mb-3">
                              Additional Message
                            </Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={4}
                              name="message"
                              value={formData.message}
                              onChange={handleInputChange}
                              placeholder="Any additional information or questions..."
                              className="py-3"
                              style={{ borderRadius: '0.75rem' }}
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <div className="text-center mt-5">
                        <Button
                          type="submit"
                          size="lg"
                          disabled={isSubmitting}
                          className="px-5 py-3 fw-semibold hover-lift"
                          style={{
                            background: 'linear-gradient(135deg, var(--electric-blue), var(--accent-blue))',
                            border: 'none',
                            borderRadius: '0.75rem',
                            boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3)'
                          }}
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button>
                      </div>
                    </Form>
                  ) : (
                    <div>
                      <Alert variant="success" className="mb-4 p-4 rounded-4">
                        <strong>Thank you for your message!</strong> We'll get back to you within 24 hours.
                      </Alert>

                      {/* Disclaimer */}
                      <Card className="glass border-secondary mb-4">
                        <Card.Body className="p-4">
                          <h5 className="fw-semibold text-white mb-3 text-uppercase glow-text" style={{ fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                            Disclaimer & Waiver of Liability
                          </h5>
                          
                          <div className="text-muted small" style={{ lineHeight: '1.4' }}>
                            <p><strong>1. Business Acknowledgment:</strong> You acknowledge that Alphacore Development operates as a sole proprietorship, not a limited liability company (LLC), and services are provided solely by the owner.</p>
                            <p><strong>2. Limitation of Liability:</strong> To the fullest extent permitted by Jamaican law, Alphacore Development and its owner shall not be liable for any damages arising from the use of our services.</p>
                            <p><strong>3. No Guarantees:</strong> All services are provided "as is", with no express or implied warranties.</p>
                            <p><strong>4. Waiver of Legal Claims:</strong> By engaging our services, you voluntarily waive any right to pursue legal action against the owner personally.</p>
                            <p><strong>5. Jurisdiction:</strong> This disclaimer is governed by the laws of Jamaica.</p>
                          </div>

                          <div className="mt-3 pt-3 border-top border-secondary">
                            <p className="text-muted small fst-italic">
                              By submitting your contact information and engaging with Alphacore Development services, you acknowledge that you have read, understood, and agree to be bound by this Disclaimer & Waiver of Liability.
                            </p>
                          </div>
                        </Card.Body>
                      </Card>

                      <div className="text-center">
                        <Button
                          onClick={handleNewInquiry}
                          variant="outline-primary"
                          className="px-4 py-3 fw-medium hover-lift"
                          style={{ borderRadius: '0.75rem' }}
                        >
                          Submit New Inquiry
                        </Button>
                      </div>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Information */}
      <section 
        className="py-5 position-relative overflow-hidden"
        style={{ 
          background: 'var(--primary-bg)',
          paddingTop: '8rem !important',
          paddingBottom: '8rem !important'
        }}
      >
        <Container className="position-relative">
          <div className="text-center mb-5">
            <div className="font-mono text-primary text-uppercase mb-3" style={{ fontSize: '0.9rem', letterSpacing: '0.2em' }}>
              Connect
            </div>
            <h2 className="font-heading fw-black display-2 gradient-text mb-4">Contact Information</h2>
            <p className="fs-4 text-muted">Multiple ways to connect with our team and get started on your journey.</p>
          </div>

          <Row className="g-4 mb-5">
            {contactInfo.map((info, index) => (
              <Col lg={4} key={index}>
                <Card className="glass border-0 text-center h-100 hover-lift">
                  <Card.Body className="p-4">
                    <div 
                      className="d-flex align-items-center justify-content-center mx-auto mb-4"
                      style={{
                        width: '4rem',
                        height: '4rem',
                        background: 'rgba(59, 130, 246, 0.2)',
                        borderRadius: '1rem',
                        fontSize: '1.5rem'
                      }}
                    >
                      {typeof info.icon === 'string' ? info.icon : <info.icon />}
                    </div>
                    <h3 className="font-heading fw-bold fs-5 text-white glow-text mb-3">
                      {info.title}
                    </h3>
                    <p className="text-muted mb-4">{info.description}</p>
                    <a
                      href={info.href}
                      className="text-primary text-decoration-none fw-medium"
                      style={{ transition: 'color 0.3s ease' }}
                    >
                      {info.contact}
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Quick Actions */}
          <div className="text-center">
            <Card className="glass border-0 p-5 mx-auto" style={{ maxWidth: '600px' }}>
              <h3 className="font-heading fw-bold fs-2 gradient-text mb-4">Quick Actions</h3>
              <div className="d-flex flex-column flex-sm-row gap-4 justify-content-center">
                <Button
                  href="https://wa.me/business"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-inline-flex align-items-center px-4 py-3 fw-medium hover-lift"
                  style={{
                    background: '#25d366',
                    border: 'none',
                    borderRadius: '0.75rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
                  }}
                >
                  <FaWhatsapp className="me-2" size={16} />
                  WhatsApp Chat
                </Button>
                <Button
                  href="tel:+1234567890"
                  variant="outline-primary"
                  className="d-inline-flex align-items-center px-4 py-3 fw-medium hover-lift"
                  style={{ borderRadius: '0.75rem' }}
                >
                  <FaPhone className="me-2" size={16} />
                  Call Now
                </Button>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section 
        className="py-5 position-relative overflow-hidden"
        style={{ 
          background: 'var(--primary-bg)',
          paddingTop: '8rem !important',
          paddingBottom: '8rem !important'
        }}
      >
        <Container className="position-relative">
          <div className="text-center mb-5">
            <div className="font-mono text-primary text-uppercase mb-3" style={{ fontSize: '0.9rem', letterSpacing: '0.2em' }}>
              FAQ
            </div>
            <h2 className="font-heading fw-black display-2 gradient-text mb-4">Frequently Asked Questions</h2>
            <p className="fs-4 text-muted">Common questions about our programs and services.</p>
          </div>

          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="d-flex flex-column gap-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="glass border-0 hover-lift">
                    <Card.Body className="p-4">
                      <h3 className="font-heading fw-semibold fs-5 text-white glow-text mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-muted mb-0">{faq.answer}</p>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default ContactPage;