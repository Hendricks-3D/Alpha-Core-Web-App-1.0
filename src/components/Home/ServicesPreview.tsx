import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

interface Service {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  image: string;
  accent: string;
}

const ServicesPreview: React.FC = () => {
  const services: Service[] = [
    {
      title: "Alphacore Academy",
      subtitle: "Youth Football Development",
      description:
        "Comprehensive football training for youth and amateur athletes with year-round development cycles and competitive exposure.",
      features: [
        "Technical Skills",
        "Tactical Training",
        "Physical Conditioning",
        "Mental Preparation",
      ],
      cta: "Explore Academy",
      href: "/academy",
      image:
        "https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800",
      accent: "electric",
    },
    {
      title: "VitaCore Training",
      subtitle: "Adult Lifestyle Fitness",
      description:
        "Movement for life with three intensity tiers designed for professionals and adults seeking optimal performance and wellness.",
      features: [
        "Mild Training",
        "Moderate Intensity",
        "Extreme Performance",
        "Corporate Wellness",
      ],
      cta: "Start VitaCore",
      href: "/vitacore",
      image:
        "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
      accent: "accent",
    },
    {
      title: "Recovery Systems",
      subtitle: "Integrated Recovery Solutions",
      description:
        "Where growth begins. Comprehensive recovery systems including percussive therapy, compression, sound frequency, and spiritual reset.",
      features: [
        "Percussive Therapy",
        "Compression Systems",
        "Sound Frequency",
        "Spiritual Recovery",
      ],
      cta: "Book Recovery",
      href: "/recovery",
      image:
        "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=800",
      accent: "gold",
    },
  ];

  const getAccentColor = (accent: string) => {
    switch (accent) {
      case "electric":
        return "var(--electric-blue)";
      case "accent":
        return "var(--accent-blue)";
      case "gold":
        return "var(--gold)";
      default:
        return "var(--electric-blue)";
    }
  };

  const getAccentClass = (accent: string) => {
    switch (accent) {
      case "electric":
        return "text-primary";
      case "accent":
        return "text-info";
      case "gold":
        return "text-warning";
      default:
        return "text-primary";
    }
  };

  return (
    <section
      className="py-5 position-relative overflow-hidden"
      style={{
        background: "var(--primary-bg)",
        paddingTop: "8rem !important",
        paddingBottom: "8rem !important",
      }}
    >
      {/* Background elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <div
          className="position-absolute"
          style={{
            top: "0",
            left: "33%",
            width: "24rem",
            height: "24rem",
            background: "rgba(59, 130, 246, 0.05)",
            borderRadius: "50%",
            filter: "blur(60px)",
          }}
        />
        <div
          className="position-absolute"
          style={{
            bottom: "0",
            right: "33%",
            width: "24rem",
            height: "24rem",
            background: "rgba(14, 165, 233, 0.05)",
            borderRadius: "50%",
            filter: "blur(60px)",
          }}
        />
      </div>

      <Container className="position-relative">
        {/* Section Header */}
        <div className="text-center mb-5">
          <div
            className="font-mono text-primary text-uppercase mb-3"
            style={{ fontSize: "0.9rem", letterSpacing: "0.2em" }}
          >
            Divisions
          </div>
          <h2 className="font-heading fw-black display-2 gradient-text mb-4">
            Our Services
          </h2>
          <p
            className="fs-4 text-muted mx-auto"
            style={{ maxWidth: "600px", lineHeight: "1.6" }}
          >
            Three specialized divisions designed to meet you exactly where you
            are in your journey toward peak performance.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className="d-flex flex-column gap-5"
          style={{ gap: "8rem !important" }}
        >
          {services.map((service, index) => (
            <Row
              key={index}
              className={`align-items-center animate-fade-in ${
                index % 2 === 1 ? "flex-lg-row-reverse" : ""
              }`}
            >
              {/* Image Section */}
              <Col lg={6} className="mb-4 mb-lg-0">
                <div className="position-relative overflow-hidden rounded-4 hover-lift">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={500}
                    style={{ objectFit: "cover" }}
                    className="w-100 rounded-4"
                  />
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 rounded-4"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(10, 10, 10, 0.6) 0%, transparent 50%, transparent 100%)",
                    }}
                  />
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 rounded-4 opacity-0 transition-opacity"
                    style={{
                      background: `${getAccentColor(service.accent)}20`,
                      transition: "opacity 0.5s ease",
                    }}
                  />
                </div>
              </Col>

              {/* Content Section */}
              <Col lg={6}>
                <div className="d-flex flex-column gap-4">
                  <div
                    className="d-inline-block px-3 py-2 rounded-pill font-mono fw-medium text-uppercase"
                    style={{
                      background: `${getAccentColor(service.accent)}20`,
                      color: getAccentColor(service.accent),
                      fontSize: "0.8rem",
                      letterSpacing: "0.1em",
                      width: "fit-content",
                    }}
                  >
                    {service.subtitle}
                  </div>

                  <h3 className="font-heading fw-black display-4 gradient-text">
                    {service.title}
                  </h3>

                  <p className="fs-5 text-light" style={{ lineHeight: "1.6" }}>
                    {service.description}
                  </p>

                  {/* Features Grid */}
                  <Row className="g-3">
                    {service.features.map((feature, featureIndex) => (
                      <Col sm={6} key={featureIndex}>
                        <div className="d-flex align-items-center">
                          <div
                            className="rounded-circle me-3 flex-shrink-0"
                            style={{
                              width: "8px",
                              height: "8px",
                              background: getAccentColor(service.accent),
                            }}
                          />
                          <span className="text-muted fw-medium">
                            {feature}
                          </span>
                        </div>
                      </Col>
                    ))}
                  </Row>

                  {/* CTA Button */}
                  <div className="pt-3">
                    <Link href={service.href} passHref legacyBehavior>
                      <Button
                        as="a"
                        size="lg"
                        className="px-5 py-3 fw-semibold hover-lift d-inline-flex align-items-center"
                        style={{
                          background: `linear-gradient(135deg, ${getAccentColor(
                            service.accent
                          )}, ${getAccentColor(service.accent)}dd)`,
                          border: "none",
                          borderRadius: "0.75rem",
                          boxShadow: `0 8px 25px ${getAccentColor(
                            service.accent
                          )}40`,
                        }}
                      >
                        {service.cta}
                        <svg
                          className="ms-2"
                          width="20"
                          height="20"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          style={{ transition: "transform 0.3s ease" }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Button>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesPreview;
