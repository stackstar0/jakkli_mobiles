import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Gadag Betageri, Karnataka, India",
      link: "https://maps.app.goo.gl/uzoNVnyEBgRP6P5r7",
      action: "Get Directions",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 78996 63920",
      link: "tel:+917899663920",
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "shamsuddinjakkli@gmail.com",
      link: "mailto:shamsuddinjakkli@gmail.com",
      action: "Send Email",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon - Sat: 10:00 AM - 9:00 PM",
      link: null,
      action: null,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gradient-primary">
            Visit Us Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Come experience our exceptional service and explore our wide range of mobiles
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 md:space-y-6"
          >
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-glow transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-semibold mb-2">{info.title}</h3>
                      <p className="text-muted-foreground mb-3">{info.content}</p>
                      {info.link && info.action && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(info.link!, '_blank')}
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          {info.action}
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-card h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15468.634889!2d75.0129394!3d15.4293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d344e5a66d91%3A0x42c7d23e6d8e7b0!2sGadag%2C%20Karnataka%20582101!5e0!3m2!1sen!2sin!4v1701234567890!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-primary border-0 shadow-glow">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-display font-bold mb-4 text-primary-foreground">
                Ready to Upgrade Your Mobile Experience?
              </h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Visit our store today or call us for expert advice on choosing the perfect phone for your needs
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                <Button
                  size="lg"
                  onClick={() => window.open('https://maps.app.goo.gl/uzoNVnyEBgRP6P5r7', '_blank')}
                  className="bg-background text-foreground hover:bg-background/90 min-h-[48px] w-full sm:w-auto"
                >
                  <MapPin className="mr-2 w-5 h-5" />
                  Get Directions
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => window.open('tel:+917899663920', '_blank')}
                  className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary font-semibold min-h-[48px] w-full sm:w-auto"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
