"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { motion } from "framer-motion"
import Image from "next/image"

export default function DemoSection() {
  const [isTyping, setIsTyping] = useState(true)
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showDialog, setShowDialog] = useState(false)

  const sampleInputs = [
    "chicken, broccoli, rice",
    "pasta, tomatoes, basil",
    "eggs, spinach, cheese",
    "tofu, bell peppers, soy sauce",
  ]

  useEffect(() => {
    if (isTyping) {
      const timeout = setTimeout(() => {
        if (currentText.length < sampleInputs[currentIndex].length) {
          setCurrentText(sampleInputs[currentIndex].substring(0, currentText.length + 1))
        } else {
          setTimeout(() => {
            setCurrentText("")
            setCurrentIndex((currentIndex + 1) % sampleInputs.length)
          }, 2000)
        }
      }, 100)

      return () => clearTimeout(timeout)
    }
  }, [currentText, currentIndex, isTyping, sampleInputs])

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">See It In Action</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Type your ingredients and let our AI create the perfect recipe for you.
          </p>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <Input
              type="text"
              placeholder="Enter ingredients..."
              className="flex-1 border-2 border-gray-200 focus:border-orange-400 h-12 text-lg"
              value={currentText}
              onChange={(e) => {
                setIsTyping(false)
                setCurrentText(e.target.value)
              }}
              onFocus={() => setIsTyping(false)}
            />
            <Button className="bg-primary hover:bg-primary/90 text-white h-12 px-6" onClick={() => setShowDialog(true)}>
              Generate Recipe
            </Button>
          </div>
          <p className="text-gray-500 text-sm text-center">
            Try typing: "chicken, rice, carrots" or "tofu, broccoli, soy sauce"
          </p>
        </motion.div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Chicken Stir-Fry with Broccoli</DialogTitle>
            <DialogDescription className="text-base text-gray-700">
              Generated based on your ingredients
            </DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Recipe preview"
                width={400}
                height={300}
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Ingredients:</h3>
              <ul className="list-disc pl-5 mb-4 space-y-1">
                <li>2 chicken breasts, sliced</li>
                <li>2 cups broccoli florets</li>
                <li>1 cup rice</li>
                <li>3 tbsp soy sauce</li>
                <li>2 cloves garlic, minced</li>
                <li>1 tbsp olive oil</li>
              </ul>
              <h3 className="font-semibold text-lg mb-2">Instructions:</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Cook rice according to package instructions</li>
                <li>Heat oil in a large pan over medium-high heat</li>
                <li>Add chicken and cook until golden, about 5 minutes</li>
                <li>Add garlic and broccoli, cook for 3 minutes</li>
                <li>Pour in soy sauce and stir to combine</li>
                <li>Serve hot over rice</li>
              </ol>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Button className="bg-primary hover:bg-primary/90 text-white">Save Recipe</Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

