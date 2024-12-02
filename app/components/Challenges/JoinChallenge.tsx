"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { FaRunning, FaDollarSign, FaUsers } from "react-icons/fa";

interface ChallengeProps {
  distance: number; // Distance in kilometers
  timeFrame: string; // Time frame (e.g., '1 hour', '3 days', etc.)
  endDate: number; // UNIX timestamp for the end date
}

const JoinChallenge = ({ distance, timeFrame, endDate }: ChallengeProps) => {
  const [participants, setParticipants] = useState<number>(100); // Placeholder value for participants count
  const [timeLeft, setTimeLeft] = useState<number>(0); // Time left in seconds
  const [timeLeftFormatted, setTimeLeftFormatted] = useState<string>("");

  // Function to calculate the time left
  const calculateTimeLeft = (endDate: number) => {
    const currentTime = Math.floor(Date.now() / 1000); // Current time in UNIX timestamp
    return endDate - currentTime; // Time remaining in seconds
  };

  // Format the time into days, hours, minutes, and seconds
  const formatTimeLeft = (timeInSeconds: number) => {
    const days = Math.floor(timeInSeconds / (3600 * 24));
    const hours = Math.floor((timeInSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  useEffect(() => {
    // Initial time calculation
    const remainingTime = calculateTimeLeft(endDate);
    setTimeLeft(remainingTime);
    setTimeLeftFormatted(formatTimeLeft(remainingTime));

    // Set up an interval to update the time left every second
    const timer = setInterval(() => {
      const remainingTime = calculateTimeLeft(endDate);
      setTimeLeft(remainingTime);
      setTimeLeftFormatted(formatTimeLeft(remainingTime));
    }, 1000);

    return () => clearInterval(timer); // Clean up the timer on component unmount
  }, [endDate]);

  const handleJoinChallenge = () => {
    alert(`You have successfully joined the ${distance}K challenge!`);
    setParticipants((prev) => prev + 1); // Increment participants for the UI
  };

  return (
    <div className="min-h-screen bg-purple-50">
      <header className="w-full py-6 px-4 bg-purple-600 text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h3 className="font-bold text-white">Join {distance}K Challenge</h3>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
            {/* Challenge Details */}
            <Card className="bg-white shadow-xl rounded-xl p-6 space-y-4">
              <CardHeader>
                <h5 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                  <FaRunning /> {distance}K Challenge Details
                </h5>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  Stake to join the {distance}K challenge and win rewards based on your completion time!
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-600">Time Left</span>
                    <span className="text-lg font-bold">{timeLeftFormatted}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-600">Total Participants</span>
                    <span className="text-lg font-bold">{participants}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-600">Time Frame</span>
                    <span className="text-lg font-bold">{timeFrame}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Staking Section */}
            <Card className="bg-white shadow-xl rounded-xl p-6 space-y-4">
              <CardHeader>
                <h5 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                  <FaDollarSign /> Staking Information
                </h5>
              </CardHeader>
              <CardContent>
                <p className="text-lg">Everyone stakes the same amount to join the challenge.</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-600">Stake Amount</span>
                    <span className="text-lg font-bold">$10</span>
                  </div>
                  <Button onClick={handleJoinChallenge} className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-700">
                    Join Challenge
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-purple-600 text-white py-4">
        <p className="text-center">Made with ❤️ for your fitness journey</p>
      </footer>
    </div>
  );
};

export default JoinChallenge;
