import React from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout/Layout";

const VitaCorePage: React.FC = () => {
  const tiers = [
    {
      title: "MILD",
      icon: "🌱",
      description:
        "Gentle movement and wellness for those beginning their fitness journey or seeking active recovery.",
      features: [
        "Mobility & flexibility focus",
        "Stress relief techniques",
        "Mindfulness integration",
        "Low-impact movements",
      ],
      perfectFor: "Beginners, seniors, injury recovery, stress management",
      color: "neutral",
    },
    {
      title: "MODERATE",
      icon: "🔥",
      description:
        "Balanced training combining strength, endurance, and functional movement for everyday performance.",
      features: [
        "Strength & conditioning",
        "Cardiovascular training",
        "Functional movements",
        "Nutrition guidance",
      ],
      perfectFor: "Working professionals, active adults, fitness enthusiasts",
      color: "accent",
      popular: true,
    },
    {
      title: "EXTREME",
      icon: "⚡",
      description:
        "High-intensity training for peak performance athletes and those seeking maximum physical challenge.",
      features: [
        "Elite performance training",
        "Mental conditioning",
        "Advanced recovery protocols",
        "Performance analytics",
      ],
      perfectFor: "Athletes, competitive fitness, military/first responders",
      color: "electric",
    },
  ];

  const corporateServices = [
    {
      title: "Executive Fitness",
      icon: "👔",
      description:
        "Customized programs for busy executives focused on energy, focus, and stress management.",
    },
    {
      title: "Team Building",
      icon: "👥",
      description:
        "Fitness challenges and group activities that strengthen team bonds and communication.",
    },
    {
      title: "Workplace Wellness",
      icon: "🏢",
      description:
        "On-site programs including desk ergonomics, movement breaks, and stress relief sessions.",
    },
    {
      title: "Corporate Retreats",
      icon: "🏝️",
      description:
        "Multi-day wellness retreats combining fitness, mindfulness, and strategic planning.",
    },
    {
      title: "Performance Metrics",
      icon: "📊",
      description:
        "Data-driven wellness programs with measurable ROI on employee health and productivity.",
    },
    {
      title: "Custom Solutions",
      icon: "🎯",
      description:
        "Tailored programs designed to meet your organization's specific goals and challenges.",
    },
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case "electric":
        return "text-primary";
      case "accent":
        return "text-info";
      case "neutral":
        return "text-secondary";
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
      case "neutral":
        return "var(--text-muted)";
      default:
        return "var(--electric-blue)";
    }
  };

  return (
    <Layout
      title="VitaCore Training - Adult Lifestyle Fitness"
      description="Movement for life. Strength for performance. VitaCore offers three training tiers for adults and corporate wellness programs designed for optimal performance and wellness."
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
              right: "25%",
              width: "24rem",
              height: "24rem",
              background: "rgba(14, 165, 233, 0.1)",
              borderRadius: "50%",
              filter: "blur(60px)",
            }}
          />
          <div
            className="position-absolute animate-float grid-bg opacity-25"
            style={{
              bottom: "25%",
              left: "25%",
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
                    background: "rgba(14, 165, 233, 0.2)",
                    color: "var(--accent-blue)",
                    fontSize: "0.8rem",
                    letterSpacing: "0.1em",
                    width: "fit-content",
                  }}
                >
                  Adult Lifestyle Fitness
                </Badge>
                <h1
                  className="font-heading fw-black"
                  style={{
                    fontSize: "clamp(3rem, 6vw, 5rem)",
                    lineHeight: "1.1",
                  }}
                >
                  <span className="gradient-text d-block">VitaCore</span>
                  <span className="text-white glow-text d-block">Training</span>
                </h1>
                <p
                  className="fs-4 text-muted"
                  style={{ lineHeight: "1.6", maxWidth: "500px" }}
                >
                  Movement for Life. Strength for Performance. More than
                  fitness—it's a movement system designed to restore balance,
                  renew strength, and revive your purpose every single day.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3">
                  <Link href="/contact" passHref legacyBehavior>
                    <Button
                      as="a"
                      size="lg"
                      className="px-4 py-3 fw-semibold hover-lift"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--accent-blue), var(--electric-blue))",
                        border: "none",
                        borderRadius: "0.75rem",
                        boxShadow: "0 8px 25px rgba(14, 165, 233, 0.3)",
                      }}
                    >
                      Start Your Journey
                    </Button>
                  </Link>
                  <Link href="#tiers" passHref legacyBehavior>
                    <Button
                      as="a"
                      variant="outline-light"
                      size="lg"
                      className="px-4 py-3 fw-semibold hover-lift d-flex align-items-center"
                      style={{ borderWidth: "2px", borderRadius: "0.75rem" }}
                    >
                      View Training Tiers
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
                  </Link>
                </div>
              </div>
            </Col>

            {/* Image */}
            <Col lg={6}>
              <div className="position-relative">
                <div className="overflow-hidden rounded-4 hover-lift">
                  <Image
                    src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="VitaCore adult fitness training"
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

      {/* Training Tiers */}
      <section
        id="tiers"
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
              className="font-mono text-info text-uppercase mb-3"
              style={{ fontSize: "0.9rem", letterSpacing: "0.2em" }}
            >
              Intensity
            </div>
            <h2 className="font-heading fw-black display-2 gradient-text mb-4">
              Training Tiers
            </h2>
            <p
              className="fs-4 text-muted mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Three intensity levels designed to meet you exactly where you are
              and take you where you want to go.
            </p>
          </div>

          <Row className="g-4">
            {tiers.map((tier, index) => (
              <Col lg={4} key={index}>
                <Card
                  className={`h-100 glass border-0 hover-lift ${
                    tier.popular ? "border-info" : ""
                  }`}
                  style={{
                    borderWidth: tier.popular ? "2px !important" : "1px",
                    transform: tier.popular ? "scale(1.05)" : "scale(1)",
                    boxShadow: tier.popular
                      ? "0 20px 40px rgba(14, 165, 233, 0.2)"
                      : "none",
                  }}
                >
                  <Card.Body className="p-4 text-center">
                    <div
                      className="d-flex align-items-center justify-content-center mx-auto mb-4"
                      style={{
                        width: "5rem",
                        height: "5rem",
                        background: tier.popular
                          ? "var(--accent-blue)"
                          : getColorValue(tier.color) + "40",
                        borderRadius: "1rem",
                        fontSize: "2rem",
                      }}
                    >
                      {tier.icon}
                    </div>
                    <h3 className="font-heading fw-bold fs-3 text-white glow-text mb-3">
                      {tier.title}
                    </h3>
                    {tier.popular && (
                      <Badge
                        bg="info"
                        className="mb-3 px-3 py-2 fw-medium"
                        style={{ borderRadius: "1rem" }}
                      >
                        MOST POPULAR
                      </Badge>
                    )}
                    <p className="text-muted mb-4">{tier.description}</p>

                    <div className="mb-4">
                      {tier.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="d-flex align-items-center mb-3 text-light"
                        >
                          <div
                            className="rounded-circle me-3 flex-shrink-0"
                            style={{
                              width: "8px",
                              height: "8px",
                              background: getColorValue(tier.color),
                            }}
                          />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="text-center">
                      <div
                        className={`fs-5 font-heading fw-bold ${getColorClass(
                          tier.color
                        )} mb-2`}
                      >
                        Perfect for:
                      </div>
                      <p className="text-muted small">{tier.perfectFor}</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Corporate Wellness */}
      <section
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
              className="font-mono text-info text-uppercase mb-3"
              style={{ fontSize: "0.9rem", letterSpacing: "0.2em" }}
            >
              Enterprise
            </div>
            <h2 className="font-heading fw-black display-2 gradient-text mb-4">
              Corporate Wellness
            </h2>
            <p
              className="fs-4 text-muted mx-auto"
              style={{ maxWidth: "700px" }}
            >
              Transform your workplace culture with comprehensive wellness
              programs that boost productivity, reduce stress, and enhance team
              cohesion.
            </p>
          </div>

          <Row className="g-4">
            {corporateServices.map((service, index) => (
              <Col lg={4} md={6} key={index}>
                <div className="text-center">
                  <Card className="glass border-0 h-100 hover-lift">
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
                        {service.icon}
                      </div>
                      <h3 className="font-heading fw-bold fs-5 text-white glow-text mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted">{service.description}</p>
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
            "linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(10, 10, 10, 0.9), rgba(59, 130, 246, 0.1))",
          paddingTop: "8rem !important",
          paddingBottom: "8rem !important",
        }}
      >
        <Container className="position-relative text-center">
          <h2 className="font-heading fw-black display-2 gradient-text mb-4">
            Start Your VitaCore Journey Today
          </h2>
          <p
            className="fs-4 text-muted mb-5 mx-auto"
            style={{ maxWidth: "700px", lineHeight: "1.6" }}
          >
            Whether you're just beginning your fitness journey or seeking to
            optimize peak performance, VitaCore has a path designed for you. Let
            us help you discover your optimal training tier.
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
                Schedule Free Assessment
              </Button>
            </Link>
            <Button
              href="mailto:vitacore@alphacoredevt.com"
              variant="outline-light"
              size="lg"
              className="px-5 py-3 fw-semibold hover-lift"
              style={{ borderWidth: "2px", borderRadius: "0.75rem" }}
            >
              Contact VitaCore
            </Button>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default VitaCorePage;
