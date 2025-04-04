import { useState } from "react";

function Dashboard() {
  const [progress, setProgress] = useState(50);
  const leaderboard = [
    { name: "Ankit", score: 95 },
    { name: "Priya", score: 92 },
    { name: "Rahul", score: 89 },
  ];

  const recommendations = [
    "Revise React Hooks",
    "Try Quiz on JavaScript",
    "Watch AI in EdTech video",
  ];

  return (
    <div className="p-10 space-y-10">
      <div>
        <h2 className="text-2xl font-bold mb-4">Your Learning Progress</h2>
        <div className="bg-gray-300 w-full h-6 rounded overflow-hidden">
          <div className="bg-green-500 h-full" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Leaderboard</h3>
        <ul className="bg-white p-4 rounded shadow">
          {leaderboard.map((item, index) => (
            <li key={index} className="flex justify-between py-1">
              <span>{item.name}</span>
              <span>{item.score}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">AI Recommendations</h3>
        <ul className="bg-white p-4 rounded shadow list-disc list-inside">
          {recommendations.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
