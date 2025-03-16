"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import GooglePlacesAutoComplete from 'react-google-places-autocomplete';
import { Navbar } from "../components/Navbar";

type FormData = {
  destination: any;
  budget: string;
  travelDates: string;
  preferences: string;
};

const budgetOptions = [
  { money: "$", label: "Low-cost", description: "With this economy, lets be conscious of costs" },
  { money: "$$", label: "Average", description: "Let me splurge a little" },
  { money: "$$$", label: "Costly", description: "I am part of the 1%" }
];

const preferencesOptions = [
  { label: "Adventure", description: "Thrilling experiences like hiking and rafting." },
  { label: "Sightseeing", description: "Explore landmarks, cities, and nature." },
  { label: "Food & Culture", description: "Try local cuisines and experience traditions." },
  { label: "Relaxation", description: "Enjoy beaches, spas, and peaceful retreats." },
];

const CreateItineraryPage = () => {
  <Navbar />;
  const [formData, setFormData] = useState<FormData>({
    destination: null,
    budget: "",
    travelDates: "",
    preferences: "",
  });

  const router = useRouter();

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const itineraryId = Date.now();
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

  // Handle Google Places Autocomplete change
  const handlePlaceSelect = (place: any) => {
    setFormData({ ...formData, destination: place });
  };

  return (
    <div className="h-screen bg-[#241a1a] flex flex-col items-center">
      <h1 className="text-3xl text-white mb-8">Plan Your Travel Itinerary</h1>

      <div className="py-16 max-w-8xl w-full flex justify-center items-center">
        {/* Info Section on the Left */}
        <div className="w-1/3 pr-10">
          <h2 className="text-3xl font-bold py-4">Travel Preferences</h2>
          <p className="text-xl text-white">Enter your travel preferences and itinerary details here to plan your dream trip!</p>
        </div>

        {/* Main Form Section on the Right */}
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 w-full max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-8 w-full">
            {/* Destination Input */}
            <div>
              <label htmlFor="destination" className="block text-xl text-white mb-2">Where would you like to go?</label>
              <div className="w-full max-w-[600px] rounded-md">
                <GooglePlacesAutoComplete
                  apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
                  selectProps={{
                    value: formData.destination,
                    onChange: (place: any) => handlePlaceSelect(place),
                  }}
                />
              </div>
            </div>

            {/* Budget Input */}
            <div>
              <label className="block text-xl text-white mb-2">What is your budget?</label>
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
            </div>

            {/* Travel Dates Input */}
            <div>
              <label htmlFor="travelDates" className="block text-xl text-white mb-2">When do you plan to travel?</label>
              <input
                id="travelDates"
                type="text"
                name="travelDates"
                value={formData.travelDates}
                onChange={handleInputChange}
                placeholder="Enter travel dates"
                className="w-full text-lg p-4 border-2 border-white text-white bg-transparent rounded-md"
              />
            </div>

            {/* Preferences Input */}
            <div>
              <label className="block text-xl text-white mb-2">What are your preferences?</label>
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
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-4 py-2 bg-[#faf5e6] text-black hover:bg-[#faf5e6]/80"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateItineraryPage;
