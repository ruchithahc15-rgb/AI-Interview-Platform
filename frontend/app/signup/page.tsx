import Link from "next/link";
export default function Signup() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-6"
        />

        <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
          Create Account
        </button>
        <p className="text-center mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
            Login
            </Link>
        </p>
      </div>
    </main>
  );
}