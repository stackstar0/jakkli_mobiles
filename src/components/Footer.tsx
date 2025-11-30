import { Smartphone, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Smartphone className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-display font-bold text-gradient-primary">
                MobileMart
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for mobile sales and expert repair services in Gadag Betageri. Owned by Shamsuddin Jakkli.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Products</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Screen Repair</li>
              <li>Battery Replacement</li>
              <li>Software Updates</li>
              <li>Water Damage Repair</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors">
                <Twitter className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} MobileMart. All rights reserved. | Owner: Shamsuddin Jakkli | Gadag Betageri, Karnataka</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
