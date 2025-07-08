import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout/Layout";

const AcademyPage: React.FC = () => {
  const programs = [
    {
      title: "Beginner",
      icon: "🥅",
      description:
        "Fundamental skills, basic tactics, and building confidence on the pitch.",
      features: [
        "Ball control basics",
        "Passing and receiving",
        "Basic positioning",
        "Team play introduction",
      ],
    },
    {
      title: "Intermediate",
      icon: "⚽",
      description:
        "Advanced techniques, tactical awareness, and competitive preparation.",
      features: [
        "Advanced ball skills",
        "Tactical formations",
        "Match scenarios",
        "Leadership development",
      ],
      popular: true,
    },
    {
      title: "Advanced",
      icon: "🏆",
      description:
        "Elite performance training, pathway preparation, and scholarship guidance.",
      features: [
        "Elite skill mastery",
        "Professional preparation",
        "Mental conditioning",
        "Pathway guidance",
      ],
    },
  ];

  const modules = [
    {
      title: "Strength & Conditioning",
      icon: "💪",
      description:
        "Age-appropriate fitness training for optimal athletic development.",
    },
    {
      title: "Technical Skills",
      icon: "🎯",
      description:
        "Precision ball work, shooting, passing, and individual technique mastery.",
    },
    {
      title: "Tactical Sessions",
      icon: "🧠",
      description:
        "Game intelligence, positioning, and strategic understanding development.",
    },
    {
      title: "Team Play",
      icon: "👥",
      description:
        "Communication, leadership, and collaborative performance skills.",
    },
  ];

  return (
    <Layout
      title="Alphacore Academy - Youth Football Development"
      description="Comprehensive football training for youth and amateur athletes with year-round development cycles, competitive exposure, and pathway to elite performance."
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
              background: "rgba(59, 130, 246, 0.1)",
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
              background: "rgba(14, 165, 233, 0.1)",
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
                    background: "rgba(59, 130, 246, 0.2)",
                    color: "var(--electric-blue)",
                    fontSize: "0.8rem",
                    letterSpacing: "0.1em",
                    width: "fit-content",
                  }}
                >
                  Youth Football Development
                </Badge>
                <h1
                  className="font-heading fw-black"
                  style={{
                    fontSize: "clamp(3rem, 6vw, 5rem)",
                    lineHeight: "1.1",
                  }}
                >
                  <span className="gradient-text d-block">Alphacore</span>
                  <span className="text-white glow-text d-block">Academy</span>
                </h1>
                <p
                  className="fs-4 text-muted"
                  style={{ lineHeight: "1.6", maxWidth: "500px" }}
                >
                  Where champions are forged through discipline, skill
                  development, and tactical intelligence. We prepare youth and
                  amateur athletes for the demands of competitive football and
                  life.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3">
                  <Button
                    as={Link}
                    href="/contact"
                    size="lg"
                    className="px-4 py-3 fw-semibold hover-lift"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--electric-blue), var(--accent-blue))",
                      border: "none",
                      borderRadius: "0.75rem",
                      boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
                    }}
                  >
                    Schedule Tryout
                  </Button>
                  <Button
                    as={Link}
                    href="#programs"
                    variant="outline-light"
                    size="lg"
                    className="px-4 py-3 fw-semibold hover-lift d-flex align-items-center"
                    style={{ borderWidth: "2px", borderRadius: "0.75rem" }}
                  >
                    View Programs
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
                    src="https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Youth football training at Alphacore Academy"
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

      {/* Programs Overview */}
      <section
        id="programs"
        className="py-5 position-relative overflow-hidden"
        style={{
          background: "var(--secondary-bg)",
          paddingTop: "8rem !important",
          paddingBottom: "8rem !important",
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 grid-bg opacity-25"></div>

        <Container className="position-relative">
          <div className="text-center mb-5">
            <div
              className="font-mono text-primary text-uppercase mb-3"
              style={{ fontSize: "0.9rem", letterSpacing: "0.2em" }}
            >
              Development
            </div>
            <h2 className="font-heading fw-black display-2 gradient-text mb-4">
              Training Programs
            </h2>
            <p
              className="fs-4 text-muted mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Structured development through progressive training tiers designed
              to maximize potential at every level.
            </p>
          </div>

          <Row className="g-4">
            {programs.map((program, index) => (
              <Col md={4} key={index}>
                <Card
                  className={`h-100 glass border-0 text-center hover-lift ${
                    program.popular ? "border-primary" : ""
                  }`}
                  style={{
                    borderWidth: program.popular ? "2px !important" : "1px",
                    transform: program.popular ? "scale(1.05)" : "scale(1)",
                    boxShadow: program.popular
                      ? "0 20px 40px rgba(59, 130, 246, 0.2)"
                      : "none",
                  }}
                >
                  <Card.Body className="p-4">
                    <div
                      className="d-flex align-items-center justify-content-center mx-auto mb-4"
                      style={{
                        width: "5rem",
                        height: "5rem",
                        background: program.popular
                          ? "var(--electric-blue)"
                          : "rgba(59, 130, 246, 0.2)",
                        borderRadius: "1rem",
                        fontSize: "2rem",
                      }}
                    >
                      {program.icon}
                    </div>
                    <h3 className="font-heading fw-bold fs-3 text-white glow-text mb-3">
                      {program.title}
                    </h3>
                    {program.popular && (
                      <Badge
                        bg="primary"
                        className="mb-3 px-3 py-2 fw-medium"
                        style={{ borderRadius: "1rem" }}
                      >
                        MOST POPULAR
                      </Badge>
                    )}
                    <p className="text-muted mb-4">{program.description}</p>
                    <ul className="list-unstyled text-start">
                      {program.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="d-flex align-items-center mb-3 text-light"
                        >
                          <div
                            className="rounded-circle me-3 flex-shrink-0"
                            style={{
                              width: "8px",
                              height: "8px",
                              background: program.popular
                                ? "var(--electric-blue)"
                                : "rgba(59, 130, 246, 0.6)",
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

      {/* Training Modules */}
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
              className="font-mono text-primary text-uppercase mb-3"
              style={{ fontSize: "0.9rem", letterSpacing: "0.2em" }}
            >
              Comprehensive
            </div>
            <h2 className="font-heading fw-black display-2 gradient-text mb-4">
              Training Modules
            </h2>
            <p className="fs-4 text-muted">
              Development across all aspects of the game and personal growth.
            </p>
          </div>

          <Row className="g-4">
            {modules.map((module, index) => (
              <Col lg={3} md={6} key={index}>
                <div className="text-center">
                  <Card className="glass border-0 mb-4 hover-lift">
                    <Card.Body className="p-4">
                      <div
                        className="d-flex align-items-center justify-content-center mx-auto mb-4"
                        style={{
                          width: "4rem",
                          height: "4rem",
                          background: "rgba(59, 130, 246, 0.2)",
                          borderRadius: "1rem",
                          fontSize: "1.5rem",
                        }}
                      >
                        {module.icon}
                      </div>
                      <h3 className="font-heading fw-bold fs-5 text-white glow-text mb-3">
                        {module.title}
                      </h3>
                      <p className="text-muted small">{module.description}</p>
                    </Card.Body>
                  </Card>
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
            "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(10, 10, 10, 0.9), rgba(14, 165, 233, 0.1))",
          paddingTop: "8rem !important",
          paddingBottom: "8rem !important",
        }}
      >
        <Container className="position-relative text-center">
          <h2 className="font-heading fw-black display-2 gradient-text mb-4">
            Ready to Join the Academy?
          </h2>
          <p
            className="fs-4 text-muted mb-5 mx-auto"
            style={{ maxWidth: "600px", lineHeight: "1.6" }}
          >
            Take the first step toward unlocking your football potential. Our
            assessment process helps us create a personalized development plan
            for your journey.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-4 justify-content-center">
            <Button
              as={Link}
              href="/contact"
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
              Schedule Your Tryout
            </Button>
            <Button
              href="mailto:academy@alphacoredevt.com"
              variant="outline-light"
              size="lg"
              className="px-5 py-3 fw-semibold hover-lift"
              style={{ borderWidth: "2px", borderRadius: "0.75rem" }}
            >
              Contact Academy
            </Button>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default AcademyPage;
