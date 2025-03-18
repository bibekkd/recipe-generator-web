"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Utensils, Apple, Carrot, ChefHat, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden pt-20">
      {/* Background with floating food icons and gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/5"></div>
        <FloatingIcons />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">AI-Powered Cooking Assistant</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your <span className="text-primary">Ingredients</span> Into Delicious{" "}
              <span className="text-primary">Recipes</span>
            </h1>

            <p className="text-xl text-gray-700 mb-8">
              Discover new recipes instantly with AI. Just enter ingredients, and we will do the magic! No more food
              waste, no more recipe blocks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/recipeGenerate">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 rounded-lg text-lg transition-all duration-300 hover:shadow-lg"
              >
                Generate a Recipe
              </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 font-medium px-8 py-6 rounded-lg text-lg transition-all duration-300"
              >
                Watch Demo
              </Button>
            </div>

            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                    <Image src={`/placeholder.svg?height=32&width=32`} alt={`User ${i}`} width={32} height={32} />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600">Trusted by 10,000+ home cooks</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="absolute top-0 left-0 right-0 h-12 bg-gray-50 flex items-center px-4 border-b border-gray-100">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="pt-12 pb-4 px-4">
                <Image
                  src="/placeholder.svg?height=500&width=400"
                  alt="Recipe App Interface"
                  width={400}
                  height={500}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#F9FAFB"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

function FloatingIcons() {
  const icons = [
    { Icon: Utensils, x: "10%", y: "20%", size: 24, delay: 0 },
    { Icon: Apple, x: "85%", y: "15%", size: 28, delay: 1.5 },
    { Icon: Carrot, x: "75%", y: "75%", size: 32, delay: 0.8 },
    { Icon: ChefHat, x: "15%", y: "70%", size: 36, delay: 2.2 },
    { Icon: Utensils, x: "50%", y: "85%", size: 24, delay: 1.2 },
    { Icon: Apple, x: "25%", y: "40%", size: 20, delay: 0.5 },
    { Icon: Carrot, x: "60%", y: "30%", size: 26, delay: 1.8 },
    { Icon: ChefHat, x: "80%", y: "50%", size: 30, delay: 0.3 },
  ]

  return (
    <>
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/20"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            rotate: [0, 5, 0, -5, 0],
          }}
          transition={{
            duration: 6,
            delay: item.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <item.Icon size={item.size} />
        </motion.div>
      ))}
    </>
  )
}

