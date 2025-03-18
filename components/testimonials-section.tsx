"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { useState } from "react"

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Home Cook",
      rating: 5,
      text: "This app has completely transformed my cooking routine. I used to waste so much food, but now I can create delicious meals with whatever I have in my fridge!",
    },
    {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Food Blogger",
      rating: 5,
      text: "As someone who creates recipes for a living, this AI tool has become my secret weapon for inspiration. It suggests combinations I would never have thought of!",
    },
    {
      name: "Emily Rodriguez",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Busy Parent",
      rating: 4,
      text: "With three kids and a full-time job, meal planning was always stressful. This app helps me create nutritious meals my whole family enjoys.",
    },
    {
      name: "David Wilson",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Fitness Enthusiast",
      rating: 5,
      text: "I'm following a strict diet plan, and this app makes it so easy to find recipes that fit my macros while still tasting amazing!",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Join thousands of happy cooks who have transformed their kitchen experience.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center p-4">
                  <Avatar className="w-20 h-20 mb-4 border-4 border-primary/10">
                    <AvatarImage src={testimonials[activeIndex].avatar} alt={testimonials[activeIndex].name} />
                    <AvatarFallback>{testimonials[activeIndex].name.charAt(0)}</AvatarFallback>
                  </Avatar>

                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < testimonials[activeIndex].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>

                  <p className="text-lg text-gray-700 mb-6 italic">"{testimonials[activeIndex].text}"</p>

                  <h3 className="font-bold text-lg">{testimonials[activeIndex].name}</h3>
                  <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    activeIndex === index ? "bg-primary" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

