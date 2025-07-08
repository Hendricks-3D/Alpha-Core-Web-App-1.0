import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

interface Pillar {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  image: string;
}

const PillarsSection: React.FC = () => {
  const pillars: Pillar[] = [
    {
      title: "POWER",
      subtitle: "Strength, Endurance, Physicality",
      description:
        "Unleash your physical potential through scientifically-backed training methodologies that build real-world strength and endurance.",
      icon: "⚡",
      color: "electric",
      image:
        "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "CONCENTRATION",
      subtitle: "Tactical Intelligence, Focus, Mindset",
      description:
        "Develop unwavering mental focus and tactical awareness that translates into peak performance in all areas of life.",
      icon: "🎯",
      color: "accent",
      image:
        "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "DISCIPLINE",
      subtitle: "Consistency, Lifestyle Habits, Integrity",
      description:
        "Build the character foundation that sustains long-term success through consistent daily practices and unwavering integrity.",
      icon: "🏆",
      color: "gold",
      image:
        "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800",
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

  return (
    <section
      id="pillars"
      className="py-5 position-relative overflow-hidden"
      style={{
        background: "var(--secondary-bg)",
        paddingTop: "8rem !important",
        paddingBottom: "8rem !important",
      }}
    >
      {/* Background pattern */}
      <div className="position-absolute top-0 start-0 w-100 h-100 grid-bg opacity-25"></div>

      <Container className="position-relative">
        {/* Section Header */}
        <div className="text-center mb-5 animate-fade-in">
          <div
            className="font-mono text-primary text-uppercase mb-3"
            style={{ fontSize: "0.9rem", letterSpacing: "0.2em" }}
          >
            Foundation
          </div>
          <h2 className="font-heading fw-black display-2 gradient-text mb-4">
            Our Pillars
          </h2>
          <p
            className="fs-4 text-muted mx-auto"
            style={{ maxWidth: "600px", lineHeight: "1.6" }}
          >
            Three fundamental principles that guide every aspect of our training
            philosophy and shape the complete athlete experience.
          </p>
        </div>

        {/* Pillars Grid */}
        <Row className="g-4">
          {pillars.map((pillar, index) => (
            <Col lg={4} md={6} key={index}>
              <Card
                className="h-100 glass border-0 hover-lift animate-scale-in overflow-hidden"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  transition: "all 0.3s ease",
                }}
              >
                {/* Image Section */}
                <div
                  className="position-relative overflow-hidden"
                  style={{ height: "320px" }}
                >
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform"
                  />
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(10, 10, 10, 0.9) 0%, rgba(10, 10, 10, 0.3) 50%, transparent 100%)",
                    }}
                  />

                  {/* Icon Overlay */}
                  <div
                    className="position-absolute glass rounded-3 d-flex align-items-center justify-content-center"
                    style={{
                      top: "1.5rem",
                      right: "1.5rem",
                      width: "4rem",
                      height: "4rem",
                      fontSize: "2rem",
                    }}
                  >
                    {pillar.icon}
                  </div>
                </div>

                {/* Content Section */}
                <Card.Body className="p-4">
                  <h3
                    className={`font-heading fw-bold fs-2 ${getColorClass(
                      pillar.color
                    )} mb-3`}
                  >
                    {pillar.title}
                  </h3>
                  <p
                    className="text-muted fw-medium mb-3 text-uppercase font-mono"
                    style={{ fontSize: "0.8rem", letterSpacing: "0.1em" }}
                  >
                    {pillar.subtitle}
                  </p>
                  <p className="text-light mb-4" style={{ lineHeight: "1.6" }}>
                    {pillar.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="mt-4">
                    <Link
                      href="#"
                      className={`text-decoration-none fw-medium d-inline-flex align-items-center ${getColorClass(
                        pillar.color
                      )}`}
                      style={{ transition: "all 0.3s ease" }}
                    >
                      Explore This Pillar
                      <svg
                        className="ms-2"
                        width="16"
                        height="16"
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
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Bottom CTA */}
        <div className="text-center mt-5">
          <div
            className="glass rounded-4 p-5 mx-auto"
            style={{ maxWidth: "800px" }}
          >
            <h3 className="font-heading fw-bold fs-2 gradient-text mb-4">
              Ready to Build Your Foundation?
            </h3>
            <p
              className="text-muted mb-4 mx-auto"
              style={{ maxWidth: "500px", lineHeight: "1.6" }}
            >
              Every journey begins with a single step. Let us help you discover
              which of our divisions aligns with your goals and aspirations.
            </p>
            <Link href="/contact" passHref legacyBehavior>
              <Button
                as="a"
                size="lg"
                className="px-5 py-3 fw-semibold hover-lift"
                style={{
                  background:
                    "linear-gradient(135deg, var(--electric-blue), var(--accent-blue))",
                  border: "none",
                  borderRadius: "0.75rem",
                  boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
                }}
              >
                Schedule Your Free Assessment
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PillarsSection;
