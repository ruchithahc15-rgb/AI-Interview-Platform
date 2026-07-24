export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-[70vh] text-center">
      <h1 className="text-5xl font-bold">
        AI Interview Preparation Platform
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        Practice interviews, analyze resumes, and improve your skills with AI.
      </p>

      <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Get Started
      </button>
    </section>
  );
}