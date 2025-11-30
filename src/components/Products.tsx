import { Smartphone, Tag, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import shopImage from "@/assets/shop.jpg";
import viewImage from "@/assets/view.png";

const Products = () => {
  const categories = [
    {
      icon: TrendingUp,
      title: "Latest Flagship Phones",
      description: "Brand new smartphones from Apple, Samsung, OnePlus, and more",
      badge: "New Arrivals",
      badgeVariant: "default" as const,
    },
    {
      icon: Tag,
      title: "Certified Pre-Owned",
      description: "Quality second-hand phones thoroughly tested and verified",
      badge: "Best Value",
      badgeVariant: "secondary" as const,
    },
    {
      icon: Smartphone,
      title: "Budget-Friendly Options",
      description: "Affordable smartphones without compromising on quality",
      badge: "Hot Deals",
      badgeVariant: "outline" as const,
    },
  ];

  const popularBrands = [
    "Apple", "Samsung", "OnePlus", "Xiaomi", "Oppo", "Vivo", "Realme", "Motorola"
  ];

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gradient-primary">
            Mobile Phones for Every Need
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From the latest flagships to budget-friendly options, find your perfect phone
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card hover:bg-card/80 transition-all hover:shadow-glow border-border group cursor-pointer">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <category.icon className="w-8 h-8 text-primary" />
                    </div>
                    <Badge variant={category.badgeVariant} className="text-xs">
                      {category.badge}
                    </Badge>
                  </div>
                  <h3 className="font-display font-semibold mb-3 text-xl">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-card"
          >
            <img
              src={shopImage}
              alt="Jakkli Mobiles shop exterior"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-8">
              <div>
                <h3 className="text-2xl font-display font-bold mb-2">Visit Our Store</h3>
                <p className="text-muted-foreground">Located in the heart of Gadag Betageri</p>
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
              src={viewImage}
              alt="Beautiful view from our location"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-8">
              <div>
                <h3 className="text-2xl font-display font-bold mb-2">Prime Location</h3>
                <p className="text-muted-foreground">Easy to find and accessible location</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-secondary/30 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-display font-bold mb-6 text-center">Popular Brands Available</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {popularBrands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Badge
                  variant="outline"
                  className="px-6 py-2 text-base border-primary/50 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  {brand}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
