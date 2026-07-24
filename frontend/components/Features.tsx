export default function Features() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10">
      <div className="p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold">Resume Analyzer</h2>
        <p className="mt-2 text-gray-600">
          Get ATS score and personalized feedback.
        </p>
      </div>

      <div className="p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold">AI Mock Interview</h2>
        <p className="mt-2 text-gray-600">
          Practice interviews with an AI interviewer.
        </p>
      </div>

      <div className="p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold">Performance Report</h2>
        <p className="mt-2 text-gray-600">
          Track your progress and improve weak areas.
        </p>
      </div>
    </section>
  );
}