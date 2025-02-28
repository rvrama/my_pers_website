import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-foreground/90 hover:text-foreground transition-colors"
        >
          {item.label}
        </a>
      ))}
    </>
  );

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : ""
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" className="font-bold text-xl text-primary">
          Portfolio
        </a>

        {isMobile ? (
          <>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <div className="flex flex-col space-y-4 mt-8">
                    <NavLinks />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </>
        ) : (
          <div className="flex items-center gap-4">
            <nav className="flex items-center space-x-8">
              <NavLinks />
            </nav>
            <ThemeToggle />
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;