export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 shadow-md bg-white sticky top-0">
      <h1 className="text-2xl font-bold text-blue-600">
        InterviewIQ
      </h1>

      <div className="flex gap-8">
        <a href="#" className="hover:text-blue-600">Home</a>
        <a href="#" className="hover:text-blue-600">Features</a>
        <a href="#" className="hover:text-blue-600">About</a>
        <a href="#" className="hover:text-blue-600">Contact</a>
      </div>
    </nav>
  );
}