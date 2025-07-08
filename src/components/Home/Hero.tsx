import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="position-relative d-flex align-items-center justify-content-center overflow-hidden grid-bg"
      style={{ minHeight: "100vh", paddingTop: "80px" }}
    >
      {/* Animated background elements */}
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
          className="position-absolute animate-float"
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

      {/* Main content */}
      <Container className="position-relative text-center">
        <div
          className={`animate-fade-in ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Logo showcase */}
          <div className="mb-5">
            <Image
              src="/alphacore-logo.jpg"
              alt="Alphacore Development"
              width={96}
              height={96}
              className="mb-4 rounded-3 shadow-lg"
              style={{ objectFit: "cover" }}
            />
            <div
              className="font-mono text-muted text-uppercase"
              style={{ fontSize: "0.9rem", letterSpacing: "0.2em" }}
            >
              Beyond Great
            </div>
          </div>

          {/* Main headline */}
          <h1
            className="font-heading fw-black mb-4"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: "1.1" }}
          >
            <span className="gradient-text d-block">Unleash Potential.</span>
            <span className="accent-gradient-text d-block">
              Train with Power.
            </span>
            <span className="text-white d-block glow-text">
              Recover with Purpose.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="fs-4 text-muted mb-5 mx-auto"
            style={{ maxWidth: "800px", lineHeight: "1.6" }}
          >
            We build more than athletes—we shape resilient humans through
            structured discipline, focused intensity, and active recovery.
          </p>

          {/* CTA Buttons */}
          <div className="d-flex flex-column flex-sm-row gap-4 justify-content-center align-items-center mb-5">
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
                  fontSize: "1.1rem",
                  boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                Start Your Journey
              </Button>
            </Link>
            <Link href="#pillars" passHref legacyBehavior>
              <Button
                as="a"
                variant="outline-light"
                size="lg"
                className="px-5 py-3 fw-semibold hover-lift d-flex align-items-center"
                style={{
                  borderWidth: "2px",
                  borderRadius: "0.75rem",
                  fontSize: "1.1rem",
                }}
              >
                Discover Our Pillars
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

          {/* Stats */}
          <Row className="justify-content-center">
            <Col sm={4} className="mb-4 mb-sm-0">
              <div className="glass rounded-4 p-4 hover-lift animate-slide-up">
                <div className="display-4 font-heading fw-bold accent-gradient-text mb-2">
                  3
                </div>
                <div className="text-muted fw-medium">Core Divisions</div>
              </div>
            </Col>
            <Col sm={4} className="mb-4 mb-sm-0">
              <div
                className="glass rounded-4 p-4 hover-lift animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="display-4 font-heading fw-bold accent-gradient-text mb-2">
                  100%
                </div>
                <div className="text-muted fw-medium">Commitment</div>
              </div>
            </Col>
            <Col sm={4}>
              <div
                className="glass rounded-4 p-4 hover-lift animate-slide-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="display-4 font-heading fw-bold accent-gradient-text mb-2">
                  ∞
                </div>
                <div className="text-muted fw-medium">Potential</div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div
        className="position-absolute text-muted"
        style={{
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          animation: "bounce 2s infinite",
        }}
      >
        <svg
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%,
          20%,
          53%,
          80%,
          100% {
            transform: translateX(-50%) translateY(0);
          }
          40%,
          43% {
            transform: translateX(-50%) translateY(-10px);
          }
          70% {
            transform: translateX(-50%) translateY(-5px);
          }
          90% {
            transform: translateX(-50%) translateY(-2px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
