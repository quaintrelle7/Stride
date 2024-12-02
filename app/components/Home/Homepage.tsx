"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { FaRunning, FaTrophy, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

const HomePage = () => {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-purple-100">
      <header className="w-full py-6 px-4 bg-purple-600 text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-extrabold">Stride</h1>
          <button
            onClick={() => (session ? signOut() : signIn())}
            className={`flex items-center gap-2 border border-transparent rounded-lg px-4 py-2 transition-colors ${
              session
                ? "bg-red-500 hover:bg-red-700 text-white"
                : "bg-green-500 hover:bg-green-700 text-white"
            }`}
          >
            {session ? (
              <>
                <FaSignOutAlt /> Log Out
              </>
            ) : (
              <>
                <FaSignInAlt /> Log In with Google
              </>
            )}
          </button>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          {session ? (
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">
              {/* User Info */}
              <section className="bg-white shadow-xl rounded-xl p-6 space-y-4">
                <h2 className="text-2xl font-semibold flex items-center gap-2">
                  <FaRunning /> Welcome, {session.user?.name}
                </h2>
                <p className="text-lg">Your current points: <span className="font-bold">200</span></p>
                <p>Challenge progress: 3/5 challenges completed</p>
                <div className="mt-4 flex flex-col sm:flex-row sm:space-x-4">
                  <button className="flex items-center gap-2 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700 mb-2 sm:mb-0">
                    <FaTrophy /> Join 5K Challenge
                  </button>
                  <button className="flex items-center gap-2 bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-700">
                    <FaTrophy /> Join 10K Challenge
                  </button>
                </div>
              </section>

              {/* Challenges */}
              <section className="bg-white shadow-xl rounded-xl p-6 space-y-4">
                <h2 className="text-2xl font-semibold">Challenges</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">5K Run</span>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">10K Run</span>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "40%" }}></div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Leaderboard */}
              <section className="bg-white shadow-xl rounded-xl p-6 space-y-4">
                <h2 className="text-2xl font-semibold">Leaderboard</h2>
                <ul className="space-y-3">
                  <li className="flex justify-between py-2 border-b">
                    <span className="font-semibold">John Doe</span>
                    <span className="font-medium">500 points</span>
                  </li>
                  <li className="flex justify-between py-2 border-b">
                    <span className="font-semibold">Jane Smith</span>
                    <span className="font-medium">450 points</span>
                  </li>
                  <li className="flex justify-between py-2 border-b">
                    <span className="font-semibold">Alex Brown</span>
                    <span className="font-medium">400 points</span>
                  </li>
                </ul>
              </section>
            </div>
          ) : (
            <p className="text-lg text-white text-center">Please log in to track your fitness and rewards!</p>
          )}
        </div>
      </main>

     
    </div>
  );
};

export default HomePage;
