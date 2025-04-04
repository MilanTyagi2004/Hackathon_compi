function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white p-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to AI-Driven EdTech</h1>
      <p className="text-lg max-w-lg text-center mb-6">
        Learn smarter with AI-powered personalized education. Explore interactive courses and track your progress effortlessly!
      </p>
      <a href="/dashboard" className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition">
        Get Started
      </a>
    </div>
  );
}

export default Home;
