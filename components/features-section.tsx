"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Carrot, Utensils, BarChart, BookOpen } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      title: "Ingredient-based Recipes",
      description: "Enter ingredients you have, and our AI will suggest delicious meals you can make.",
      icon: Carrot,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Customizable Diet Plans",
      description: "Vegan, Keto, High-Protein, or any other diet preference - we've got you covered.",
      icon: Utensils,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      title: "Nutritional Insights",
      description: "Get detailed information about calories, macros, and other nutritional values.",
      icon: BarChart,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Step-by-Step Cooking Guide",
      description: "Follow interactive instructions to prepare your meal with confidence.",
      icon: BookOpen,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Our AI-powered platform makes cooking easier and more enjoyable than ever before.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-full ${feature.bgColor} flex items-center justify-center mb-4`}>
                    <feature.icon className={`${feature.color}`} size={24} />
                  </div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

