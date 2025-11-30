import { Button } from "@/components/ui/button";
import { Smartphone, Award, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-phones.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Latest smartphones"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-4 md:mb-6 text-gradient-primary leading-tight">
              Your Trusted Mobile Partner
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-4">
              Premium new & second-hand mobiles. Expert repairs. Unbeatable service.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 md:mb-12 px-4"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('products')}
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow min-h-[48px] w-full sm:w-auto"
            >
              <Smartphone className="mr-2 w-5 h-5" />
              Browse Mobiles
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('services')}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground min-h-[48px] w-full sm:w-auto"
            >
              View Services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto px-4"
          >
            {[
              { icon: Award, text: "5+ Years Experience" },
              { icon: ShieldCheck, text: "Certified Technicians" },
              { icon: Smartphone, text: "100% Quality Guarantee" },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center gap-3 p-3 md:p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border min-h-[60px]">
                <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-center">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
