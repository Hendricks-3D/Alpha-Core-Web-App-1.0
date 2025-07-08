import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout/Layout";

const RecoveryPage: React.FC = () => {
  const recoverySystems = [
    {
      title: "Percussive Therapy",
      icon: "🔨",
      description:
        "Advanced percussive massage technology for deep muscle recovery and tension release.",
      features: [
        "Muscle tension relief",
        "Improved circulation",
        "Faster recovery times",
        "Pain reduction",
      ],
      color: "gold",
    },
    {
      title: "Leg Compression Units",
      icon: "🦵",
      description:
        "Professional-grade pneumatic compression for enhanced lymphatic drainage and recovery.",
      features: [
        "Lymphatic drainage",
        "Reduced swelling",
        "Enhanced blood flow",
        "Faster metabolic waste removal",
      ],
      color: "electric",
    },
    {
      title: "Sound Frequency Reset",
      icon: "🔊",
      description:
        "Therapeutic sound frequencies for nervous system regulation and mental clarity.",
      features: [
        "Stress reduction",
        "Mental clarity",
        "Nervous system reset",
        "Enhanced focus",
      ],
      color: "accent",
    },
    {
      title: "Nutritional Recovery",
      icon: "🥗",
      description:
        "Strategic nutrition and hydration protocols for optimal recovery and performance.",
      features: [
        "Recovery nutrition planning",
        "Hydration optimization",
        "Supplement guidance",
        "Anti-inflammatory protocols",
      ],
      color: "gold",
    },
    {
      title: "Sleep Optimization",
      icon: "😴",
      description:
        "Comprehensive sleep hygiene and optimization strategies for peak recovery.",
      features: [
        "Sleep hygiene protocols",
        "Environment optimization",
        "Recovery tracking",
        "Circadian rhythm support",
      ],
      color: "electric",
    },
    {
      title: "Spiritual Recovery",
      icon: "🙏",
      description:
        "VitaCore integration with evening and morning reset modules for holistic wellness.",
      features: [
        "Evening wind-down protocols",
        "Morning activation routines",
        "Scripture reflection",
        "Breathwork integration",
      ],
      color: "accent",
      featured: true,
    },
  ];

  const beneficiaries = [
    {
      title: "Athletes",
      icon: "🏃",
      description:
        "Professional and amateur athletes seeking competitive edge through optimized recovery protocols.",
    },
    {
      title: "High-Stress Workers",
      icon: "💼",
      description:
        "Executives and professionals managing demanding schedules and high-pressure environments.",
    },
    {
      title: "Busy Parents",
      icon: "👨‍👩‍👧‍👦",
      description:
        "Parents balancing family responsibilities while maintaining their own health and wellness goals.",
    },
    {
      title: "Performance Seekers",
      icon: "🎯",
      description:
        "Anyone committed to maximizing their potential across all areas of life through strategic recovery.",
    },
  ];

  const getColorClass = (color: string) => {
    switch (color) {
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

  const getColorValue = (color: string) => {
    switch (color) {
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

  return (
    <Layout
      title="Recovery Systems - Integrated Recovery Solutions"
      description="Recovery is where growth begins. Comprehensive recovery systems including percussive therapy, compression, sound frequency, and spiritual reset for optimal performance."
    >
      {/* Hero Section */}
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
            className="position-absolute animate-float"
            style={{
              top: "25%",
              left: "25%",
              width: "24rem",
              height: "24rem",
              background: "rgba(245, 158, 11, 0.1)",
              borderRadius: "50%",
              filter: "blur(60px)",
            }}
          />
          <div
            className="position-absolute animate-float grid-bg opacity-25"
            style={{
              bottom: "25%",
              right: "25%",
              width: "24rem",
              height: "24rem",
              background: "rgba(59, 130, 246, 0.1)",
              borderRadius: "50%",
              filter: "blur(60px)",
              animationDelay: "-3s",
            }}
          />
        </div>

        <Container className="position-relative">
          <Row className="align-items-center">
            {/* Content */}
            <Col lg={6} className="mb-5 mb-lg-0">
              <div className="d-flex flex-column gap-4">
                <Badge
                  className="d-inline-block px-3 py-2 font-mono text-uppercase"
                  style={{
                    background: "rgba(245, 158, 11, 0.2)",
                    color: "var(--gold)",
                    fontSize: "0.8rem",
                    letterSpacing: "0.1em",
                    width: "fit-content",
                  }}
                >
                  Integrated Recovery Solutions
                </Badge>
                <h1
                  className="font-heading fw-black"
                  style={{
                    fontSize: "clamp(3rem, 6vw, 5rem)",
                    lineHeight: "1.1",
                  }}
                >
                  <span className="gradient-text d-block">Recovery</span>
                  <span className="text-white glow-text d-block">Systems</span>
                </h1>
                <p
                  className="fs-4 text-muted"
                  style={{ lineHeight: "1.6", maxWidth: "500px" }}
                >
                  Recovery is where growth begins. Our comprehensive systems
                  integrate physical therapy, mental reset, and spiritual
                  grounding to elevate your performance and well-being.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3">
                  <Link href="/contact" passHref legacyBehavior>
                    <Button
                      as="a"
                      size="lg"
                      className="px-4 py-3 fw-semibold hover-lift"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--gold), var(--electric-blue))",
                        border: "none",
                        borderRadius: "0.75rem",
                        boxShadow: "0 8px 25px rgba(245, 158, 11, 0.3)",
                      }}
                    >
                      Book Recovery Session
                    </Button>
                  </Link>
                  <Button
                    as="a"
                    href="#systems"
                    variant="outline-light"
                    size="lg"
                    className="px-4 py-3 fw-semibold hover-lift d-flex align-items-center"
                    style={{ borderWidth: "2px", borderRadius: "0.75rem" }}
                  >
                    Explore Systems
                    <svg
                      className="ms-2"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            </Col>

            {/* Image */}
            <Col lg={6}>
              <div className="position-relative">
                <div className="overflow-hidden rounded-4 hover-lift">
                  <Image
                    src="https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Recovery therapy and wellness systems"
                    width={600}
                    height={600}
                    style={{ objectFit: "cover" }}
                    className="w-100 rounded-4"
                  />
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 rounded-4"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(10, 10, 10, 0.4) 0%, transparent 60%)",
                    }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Recovery Systems */}
      <section
        id="systems"
        className="py-5 position-relative overflow-hidden"
        style={{
          background: "var(--primary-bg)",
          paddingTop: "8rem !important",
          paddingBottom: "8rem !important",
        }}
      >
        <Container className="position-relative">
          <div className="text-center mb-5">
            <div
              className="font-mono text-warning text-uppercase mb-3"
              style={{ fontSize: "0.9rem", letterSpacing: "0.2em" }}
            >
              Modalities
            </div>
            <h2 className="font-heading fw-black display-2 gradient-text mb-4">
              Recovery Systems
            </h2>
            <p
              className="fs-4 text-muted mx-auto"
              style={{ maxWidth: "700px" }}
            >
              Cutting-edge recovery modalities designed to accelerate healing,
              reduce stress, and optimize performance across all dimensions.
            </p>
          </div>

          <Row className="g-4">
            {recoverySystems.map((system, index) => (
              <Col lg={4} md={6} key={index}>
                <Card
                  className={`h-100 glass border-0 hover-lift ${
                    system.featured ? "border-info" : ""
                  }`}
                  style={{
                    borderWidth: system.featured ? "2px !important" : "1px",
                  }}
                >
                  <Card.Body className="p-4">
                    <div
                      className="d-flex align-items-center justify-content-center mx-auto mb-4"
                      style={{
                        width: "4rem",
                        height: "4rem",
                        background: getColorValue(system.color) + "40",
                        borderRadius: "1rem",
                        fontSize: "1.5rem",
                      }}
                    >
                      {system.icon}
                    </div>
                    <h3 className="font-heading fw-bold fs-5 text-white text-center glow-text mb-3">
                      {system.title}
                    </h3>
                    <p className="text-muted text-center mb-4">
                      {system.description}
                    </p>
                    <ul className="list-unstyled">
                      {system.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="d-flex align-items-center mb-3 text-light small"
                        >
                          <div
                            className="rounded-circle me-3 flex-shrink-0"
                            style={{
                              width: "6px",
                              height: "6px",
                              background: getColorValue(system.color),
                            }}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Who It's For */}
      <section
        className="py-5 position-relative overflow-hidden"
        style={{
          background: "var(--primary-bg)",
          paddingTop: "8rem !important",
          paddingBottom: "8rem !important",
        }}
      >
        <Container className="position-relative">
          <div className="text-center mb-5">
            <div
              className="font-mono text-warning text-uppercase mb-3"
              style={{ fontSize: "0.9rem", letterSpacing: "0.2em" }}
            >
              Audience
            </div>
            <h2 className="font-heading fw-black display-2 gradient-text mb-4">
              Who Benefits from Recovery Systems
            </h2>
            <p
              className="fs-4 text-muted mx-auto"
              style={{ maxWidth: "700px" }}
            >
              Our comprehensive recovery approach serves anyone seeking to
              optimize their performance, manage stress, and enhance their
              overall well-being.
            </p>
          </div>

          <Row className="g-4">
            {beneficiaries.map((beneficiary, index) => (
              <Col lg={3} md={6} key={index}>
                <div className="text-center">
                  <div
                    className="d-flex align-items-center justify-content-center mx-auto mb-4"
                    style={{
                      width: "5rem",
                      height: "5rem",
                      background: "rgba(59, 130, 246, 0.2)",
                      borderRadius: "1rem",
                      fontSize: "2rem",
                    }}
                  >
                    {beneficiary.icon}
                  </div>
                  <h3 className="font-heading fw-bold fs-5 text-white glow-text mb-3">
                    {beneficiary.title}
                  </h3>
                  <p className="text-muted">{beneficiary.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section
        className="py-5 position-relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(10, 10, 10, 0.9), rgba(59, 130, 246, 0.1))",
          paddingTop: "8rem !important",
          paddingBottom: "8rem !important",
        }}
      >
        <Container className="position-relative text-center">
          <h2 className="font-heading fw-black display-2 gradient-text mb-4">
            Begin Your Recovery Journey
          </h2>
          <p
            className="fs-4 text-muted mb-5 mx-auto"
            style={{ maxWidth: "700px", lineHeight: "1.6" }}
          >
            Recovery isn't a luxury—it's a necessity for anyone serious about
            peak performance. Experience the difference comprehensive recovery
            systems can make in your life.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-4 justify-content-center">
            <Link href="/contact" passHref legacyBehavior>
              <Button
                as="a"
                size="lg"
                className="px-5 py-3 fw-semibold hover-lift"
                style={{
                  background: "white",
                  color: "var(--primary-bg)",
                  border: "none",
                  borderRadius: "0.75rem",
                  boxShadow: "0 8px 25px rgba(255, 255, 255, 0.2)",
                }}
              >
                Book Recovery Session
              </Button>
            </Link>
            <Button
              href="mailto:info@alphacoredevt.com"
              variant="outline-light"
              size="lg"
              className="px-5 py-3 fw-semibold hover-lift"
              style={{ borderWidth: "2px", borderRadius: "0.75rem" }}
            >
              Learn More
            </Button>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default RecoveryPage;
