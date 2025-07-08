import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Navigation: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Academy", href: "/academy" },
    { name: "VitaCore", href: "/vitacore" },
    { name: "Recovery", href: "/recovery" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setExpanded(false);
  };

  const isActiveRoute = (href: string) => {
    return router.pathname === href;
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
      className={`py-3 transition-all ${scrolled ? "shadow-lg" : ""}`}
      style={{
        background: scrolled
          ? "rgba(10, 10, 10, 0.95)"
          : "rgba(10, 10, 10, 0.8)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Container>
        <Navbar.Brand as={Link} href="/" className="d-flex align-items-center">
          <Image
            src="/Alphacore Devt Logo.jpg"
            alt="Alphacore Development"
            width={40}
            height={40}
            className="me-3 rounded"
            style={{ objectFit: "cover" }}
          />
          <div className="d-none d-sm-block">
            <div className="font-heading fw-bold fs-5 text-white">
              ALPHACORE
            </div>
            <div
              className="font-mono text-muted"
              style={{ fontSize: "0.7rem", letterSpacing: "0.1em" }}
            >
              DEVELOPMENT
            </div>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-0 text-white"
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {navItems.map((item) => (
              <Link href={item.href} passHref legacyBehavior key={item.name}>
                <Nav.Link
                  as="a"
                  onClick={handleNavClick}
                  className={`mx-2 fw-medium position-relative ${
                    isActiveRoute(item.href) ? "text-white" : "text-secondary"
                  }`}
                  style={{
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                  }}
                >
                  {item.name}
                  {isActiveRoute(item.href) && (
                    <span
                      className="position-absolute bottom-0 start-0 w-100"
                      style={{
                        height: "2px",
                        background:
                          "linear-gradient(135deg, var(--electric-blue), var(--accent-blue))",
                        borderRadius: "1px",
                      }}
                    />
                  )}
                </Nav.Link>
              </Link>
            ))}
          </Nav>

          <div className="d-flex">
            <Link href="/contact" passHref legacyBehavior>
              <Button
                as="a"
                variant="primary"
                className="fw-semibold px-4 py-2"
                style={{
                  background:
                    "linear-gradient(135deg, var(--electric-blue), var(--accent-blue))",
                  border: "none",
                  borderRadius: "0.75rem",
                  boxShadow: "0 4px 15px rgba(59, 130, 246, 0.3)",
                }}
              >
                Start Today
              </Button>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
