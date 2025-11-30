import { Wrench, ShieldCheck, RefreshCw, Zap, Battery, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import repairImage from "@/assets/repair-service.jpg";
import insideShopImage from "@/assets/inside-shop.png";
import workerOwnerImage from "@/assets/worker and owner.jpg";
import ownerImage from "@/assets/owner.jpg";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "Screen Repair",
      description: "Expert screen replacement for all major brands. Quick turnaround time.",
    },
    {
      icon: Battery,
      title: "Battery Replacement",
      description: "Genuine batteries with warranty. Restore your phone's battery life.",
    },
    {
      icon: RefreshCw,
      title: "Software Updates",
      description: "Latest OS updates, app installation, and system optimization.",
    },
    {
      icon: Zap,
      title: "Charging Port Repair",
      description: "Fix charging issues and port replacements for all models.",
    },
    {
      icon: ShieldCheck,
      title: "Water Damage Repair",
      description: "Professional liquid damage repair with advanced techniques.",
    },
    {
      icon: Smartphone,
      title: "Full Device Diagnostics",
      description: "Complete phone check-up and performance optimization.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gradient-primary">
            Expert Repair Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional mobile repair services with certified technicians and genuine parts
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-card"
          >
            <img
              src={repairImage}
              alt="Mobile repair service"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-8">
              <div>
                <h3 className="text-2xl font-display font-bold mb-2">Professional Care</h3>
                <p className="text-muted-foreground">Every repair handled with precision and care</p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-card hover:bg-card/80 transition-all hover:shadow-glow border-border group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold mb-2 text-lg">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl p-8 md:p-12 mb-12 border border-border"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-display font-bold mb-4 text-gradient-primary">Meet the Owner</h3>
              <h4 className="text-xl font-semibold mb-4">Shamsuddin Jakkli</h4>
              <p className="text-muted-foreground mb-4">
                With over 15+ years of experience in the mobile industry, Shamsuddin Jakkli has built MobileMart
                into a trusted name in Gadag Betageri. His commitment to quality service and customer satisfaction
                has made us the go-to destination for mobile sales and repairs.
              </p>
              <p className="text-muted-foreground">
                "We believe every customer deserves the best service and genuine products. That's our promise to you."
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <div className="text-sm">
                  <strong>📧 Email:</strong> shamsuddinjakkli@gmail.com
                </div>
                <div className="text-sm">
                  <strong>📱 Phone:</strong> +91 78996 63920
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <img
                  src={ownerImage}
                  alt="Shamsuddin Jakkli - Owner of MobileMart"
                  className="w-full h-96 object-cover object-[center_20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-card"
          >
            <img
              src={insideShopImage}
              alt="Inside our mobile shop"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-xl font-display font-bold mb-1">Modern Shop Interior</h3>
                <p className="text-muted-foreground text-sm">Browse our extensive collection in comfort</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-card"
          >
            <img
              src={workerOwnerImage}
              alt="Our expert team - Shamsuddin Jakkli and staff"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-xl font-display font-bold mb-1">Expert Team</h3>
                <p className="text-muted-foreground text-sm">Shamsuddin Jakkli & certified technicians</p>
              </div>
            </div>
          </motion.div>
        </div>        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Card className="inline-block bg-gradient-accent border-0 shadow-glow">
            <CardContent className="p-6">
              <p className="text-accent-foreground font-semibold text-lg">
                📱 Premium Second-Hand Mobile Phones Available for Sale
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
