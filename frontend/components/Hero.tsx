import Link from "next/link";
import Button from "./Button";
export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-[70vh] text-center">
      <h1 className="text-5xl font-bold">
        AI Interview Preparation Platform
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        Practice interviews, analyze resumes, and improve your skills with AI.
      </p>

      <Link href="/login">
        <Button text="Get Started" />
      </Link>
    </section>
  );
}