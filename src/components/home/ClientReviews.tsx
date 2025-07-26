import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

const reviews = [
  {
    name: "Espada",
    role: "CEO, TimeSculptai, Europe",
    content:
      "Neolance delivered our e-commerce platform ahead of schedule. Their attention to detail and commitment to quality is outstanding.",
    rating: 5,
  },
  {
    name: "Sophie",
    content:
      "The printful api automation was deliverd by neolance with in the 2 days. It's impossible but they took it as a challange and complete it.",
    rating: 5,
  },
  {
    name: "Manoj",
    content: "The reddit MCP created by neolance is working good.",
    rating: 5,
  },
];

const ClientReviews: React.FC = () => {
  return (
    <section className="section-padding bg-neolance-dark-blue/50">
      <SectionTitle
        title="Client Reviews"
        subtitle="Don't just take our word for it. Here's what our clients have to say about working with us."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="glass-effect p-6 rounded-xl relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Quote className="absolute top-4 right-4 text-neolance-cyan opacity-20 w-8 h-8" />

            <div className="flex items-center space-x-4 mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold">{review.name}</h4>
                <p className="text-neolance-cyan text-sm">{review.role}</p>
              </div>
            </div>

            <div className="flex mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                />
              ))}
            </div>

            <p className="text-gray-300">{review.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ClientReviews;

