"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export default function CtaSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Start Cooking with AI Today!</h2>
          <p className="text-xl text-gray-700 mb-8">
            Join our community of food enthusiasts and transform your cooking experience. Sign up for early access and
            exclusive recipes.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 text-base border-2 border-gray-200 focus:border-primary"
            />
            <Button className="bg-primary hover:bg-primary/90 text-white h-12 px-6 whitespace-nowrap">
              Get Early Access
            </Button>
          </motion.div>

          <p className="text-sm text-gray-500 mt-4">We respect your privacy and will never share your information.</p>
        </motion.div>
      </div>
    </section>
  )
}

