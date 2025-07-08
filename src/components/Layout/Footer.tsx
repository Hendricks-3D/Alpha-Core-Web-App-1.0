import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { FaPinterest, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Alphacore Academy', href: '/academy' },
    { name: 'VitaCore Training', href: '/vitacore' },
    { name: 'Recovery Systems', href: '/recovery' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const services = [
    { name: 'Youth Football Development', href: '/academy' },
    { name: 'Adult Fitness Training', href: '/vitacore' },
    { name: 'Corporate Wellness', href: '/vitacore' },
    { name: 'Recovery Therapy', href: '/recovery' }
  ];

  const socialLinks = [
    { icon: FaPinterest, href: '#', label: 'Pinterest' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaYoutube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="footer py-5 mt-auto" style={{ background: 'var(--primary-bg)' }}>
      <div className="position-absolute top-0 start-0 w-100 h-100 grid-bg opacity-25"></div>
      
      <Container className="position-relative">
        <Row className="g-5">
          {/* Brand Section */}
          <Col lg={3} md={6}>
            <div className="d-flex align-items-center mb-4">
              <Image
                src="/Alphacore Devt Logo.jpg"
                alt="Alphacore Development"
                width={48}
                height={48}
                className="me-3 rounded"
                style={{ objectFit: 'cover' }}
              />
              <div>
                <div className="font-heading fw-bold fs-5 text-white">ALPHACORE</div>
                <div className="font-mono text-muted" style={{ fontSize: '0.7rem', letterSpacing: '0.1em' }}>
                  DEVELOPMENT
                </div>
              </div>
            </div>
            <p className="text-muted mb-4" style={{ lineHeight: '1.6' }}>
              Building more than athletes—we shape resilient humans through Power, Concentration, and Discipline.
            </p>
            <div className="d-flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="glass p-2 rounded text-muted hover-lift"
                  style={{ 
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6}>
            <h5 className="font-heading fw-semibold text-white mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-3">
                  <Link
                    href={link.href}
                    className="text-muted text-decoration-none"
                    style={{ transition: 'color 0.3s ease' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Services */}
          <Col lg={3} md={6}>
            <h5 className="font-heading fw-semibold text-white mb-4">Services</h5>
            <ul className="list-unstyled">
              {services.map((service, index) => (
                <li key={index} className="mb-3">
                  <Link
                    href={service.href}
                    className="text-muted text-decoration-none"
                    style={{ transition: 'color 0.3s ease' }}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>

          {/* Contact Info */}
          <Col lg={4} md={6}>
            <h5 className="font-heading fw-semibold text-white mb-4">Contact</h5>
            <div className="mb-4">
              <div className="mb-3">
                <p className="fw-medium text-white mb-1">General</p>
                <a
                  href="mailto:info@alphacoredevt.com"
                  className="text-muted text-decoration-none"
                  style={{ transition: 'color 0.3s ease' }}
                >
                  info@alphacoredevt.com
                </a>
              </div>
              <div className="mb-3">
                <p className="fw-medium text-white mb-1">Academy</p>
                <a
                  href="mailto:academy@alphacoredevt.com"
                  className="text-muted text-decoration-none"
                  style={{ transition: 'color 0.3s ease' }}
                >
                  academy@alphacoredevt.com
                </a>
              </div>
              <div className="mb-3">
                <p className="fw-medium text-white mb-1">VitaCore</p>
                <a
                  href="mailto:vitacore@alphacoredevt.com"
                  className="text-muted text-decoration-none"
                  style={{ transition: 'color 0.3s ease' }}
                >
                  vitacore@alphacoredevt.com
                </a>
              </div>
            </div>
          </Col>
        </Row>

        {/* Bottom Section */}
        <hr className="my-5" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }} />
        <Row className="align-items-center">
          <Col md={6}>
            <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>
              © 2025 Alphacore Development. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end mt-3 mt-md-0">
            <Button
              href="https://wa.me/business"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success d-inline-flex align-items-center px-4 py-2 fw-medium hover-lift"
              style={{
                background: '#25d366',
                border: 'none',
                borderRadius: '0.75rem',
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
              }}
            >
              <FaWhatsapp className="me-2" size={16} />
              WhatsApp
            </Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;