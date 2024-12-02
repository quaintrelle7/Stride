"use client";

import Link from "next/link";
import {LoginButton} from "../LoginButton";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 text-gray-800">
      {/* Header Section */}
      <header className="bg-white shadow">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-600">Stride</h1>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-full shadow hover:bg-purple-700">
            <LoginButton />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap items-center">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-4xl font-extrabold text-purple-800 mb-4">
              Achieve Your Fitness Goals Like Never Before!
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Stride is designed to gamify your fitness journey. Earn rewards, compete in challenges, and track your progress seamlessly.
            </p>
            <ul className="list-disc pl-5 mb-6">
              <li>Join fitness challenges and stake rewards</li>
              <li>Track your steps and running achievements</li>
              <li>Win NFTs for completing milestones</li>
            </ul>
            <Link href="/challenges" className="bg-purple-600 text-white px-6 py-2 rounded-full shadow hover:bg-purple-700 mr-4">
              Explore Challenges
            </Link>
            <Link href="/dashboard" className="bg-purple-600 text-white px-6 py-2 rounded-full shadow hover:bg-purple-700">
             My Dashboard
            </Link>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486218119243-13883505764c?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Fitness Journey"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-purple-800 mb-8">
            Why Choose Stride?
          </h3>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-6">
              <div className="p-6 bg-purple-100 rounded-lg text-center">
                <h4 className="text-xl font-bold text-purple-700 mb-2">
                  Gamify Your Fitness
                </h4>
                <p>
                  Turn your workouts into exciting challenges with real rewards.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-6">
              <div className="p-6 bg-purple-100 rounded-lg text-center">
                <h4 className="text-xl font-bold text-purple-700 mb-2">
                  Earn Rewards
                </h4>
                <p>Stake and win prizes for completing challenges.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-6">
              <div className="p-6 bg-purple-100 rounded-lg text-center">
                <h4 className="text-xl font-bold text-purple-700 mb-2">
                  Track Progress
                </h4>
                <p>Monitor your milestones and see how far you’ve come.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Stride. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
