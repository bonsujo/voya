"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Navbar } from "../components/Navbar";

// Define the shape of formData with specific fields
type FormData = {
  destination: string;
  budget: string;
  travelDates: string;
  preferences: string;
};

// Define the questions type
type Question = {
    id: number;
    question: string;
    type: "text" | "budget" | "preferences"; 
  };
  

// Array of questions for the form
const questions: Question[] = [
    { id: 1, question: "Where would you like to go?", type: "text" },
    { id: 2, question: "What is your budget?", type: "budget" },
    { id: 3, question: "When do you plan to travel?", type: "text" },
    { id: 4, question: "What are your preferences?", type: "preferences" },
  ];

const budgetOptions = [
    {money:  "$", label:"Low-cost", description: "With this economy, lets be concious of costs" },
    {money: "$$", label:"Average",description: "Let me splurge a little" },
    {money: "$$$", label:"Costly",description: "I am part of the 1%"}
]
const preferencesOptions = [
  { label: "Adventure", description: "Thrilling experiences like hiking and rafting." },
  { label: "Sightseeing", description: "Explore landmarks, cities, and nature." },
  { label: "Food & Culture", description: "Try local cuisines and experience traditions." },
  { label: "Relaxation", description: "Enjoy beaches, spas, and peaceful retreats." },
];

const CreateItineraryPage = () => {
    <Navbar/>
  const [currentStep, setCurrentStep] = useState(0); // Track the current step
  const [formData, setFormData] = useState<FormData>({
    destination: "",
    budget: "",
    travelDates: "",
    preferences: "",
  });


const router = useRouter(); 

// Function to handle form submission
const handleSubmit = () => {
    // Generate a unique ID (or use a real one from a database)
    const itineraryId = Date.now(); 

    // Navigate to the itinerary page
    router.push(`/itinerary/${itineraryId}`);
};

// Handle text input changes
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle budget selection
  const handleBudgetSelect = (budget: string) => {
    setFormData({ ...formData, budget });
  };

  // Handle preferences selection
  const handlePreferencesSelect = (preference: string) => {
    setFormData({ ...formData, preferences: preference });
  };

  // Handle navigation between steps
  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };


  return (
    <div className="h-screen bg-[#241a1a] flex flex-col items-center">
      <h1 className="text-3xl text-white mb-8">Plan Your Travel Itinerary</h1>
      {/* Progress Indicator */}
      <div className="py-32 max-w-8xl">
       
            {/* Progress Indicator */}
                <div className="flex items-center justify-center space-x-4 mb-8">
                    {questions.map((_, index) => (
                <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${index <= currentStep ? "bg-[#faf5e6]" : "bg-[#faf5e6]/20"}`}
                />
                ))}
                </div>
        {/* Main form section */}
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 w-full max-w-7xl">
            <div className="flex justify-center items-center">
            {/* Question Section */}
            <motion.div
                key={questions[currentStep].id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl md:text-4xl lg:text-7xl text-white"
            >
                {questions[currentStep].question}
            </motion.div>
            </div>

            <div className="flex justify-center items-center ">
            {/* Input Section */}
            <motion.div
                key={questions[currentStep].id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-[600px] rounded-md"
            >
                {questions[currentStep].type === "text" && (
                    <input
                    type="text"
                    name={questions[currentStep].question.toLowerCase().replace(/ /g, "")}
                    value={formData[questions[currentStep].question.toLowerCase().replace(/ /g, "") as keyof FormData]}
                    onChange={handleInputChange}
                    className="w-full text-lg p-4 border-2 border-white text-white bg-transparent rounded-md"
                    placeholder={questions[currentStep].question}
                    />
                )}

                {questions[currentStep].type === "budget" && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {budgetOptions.map((option) => (
                                <div
                                key={option.label}
                                className={`p-4 border-2 rounded-lg cursor-pointer ${
                                    formData.budget === option.label ? "bg-[#faf5e6]/50 text-black" : "border-white text-white"
                                }`}
                                onClick={() => handleBudgetSelect(option.label)}
                                >
                                <h3 className="text-xl font-bold">{option.label}</h3>
                                <p className="text-sm">{option.description}</p>
                                </div>
                            ))}
                            </div>
                        )}
                {questions[currentStep].type === "preferences" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {preferencesOptions.map((option) => (
                            <div
                            key={option.label}
                            className={`p-4 border-2 rounded-lg cursor-pointer ${
                                formData.preferences === option.label ? "bg-[#faf5e6]/50 text-black" : "border-white text-white"
                            }`}
                            onClick={() => handlePreferencesSelect(option.label)}
                            >
                            <h3 className="text-xl font-bold">{option.label}</h3>
                            <p className="text-sm">{option.description}</p>
                            </div>
                        ))}
                        </div>
                    )}
            </motion.div>
            </div>
            </div>

        {/* Navigation buttons */}
        <div className="flex w-full mt-8">
            <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="px-4 py-2 hover:bg-[#faf5e6]/20 text-[#faf5e6] disabled:bg-[#faf5e6]/20"
            >     
            Back
            </button>
            {currentStep === questions.length - 1 ? (
                 <button
                 onClick={handleSubmit}
                 className="px-4 py-2 bg-[#faf5e6] text-black hover:bg-[#faf5e6]/80 ml-auto"
                >
                 Submit
             </button>
            ) : (
                <button
                    onClick={handleNext}
                    className="px-4 py-2 hover:bg-[#faf5e6]/20 text-[#faf5e6] disabled:bg-[#faf5e6]/20 ml-auto"
                >
            Next
        </button>
        )}
        </div>
        </div>
    </div>
  );
};

export default CreateItineraryPage;
