import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t mt-10 bg-white dark:bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-zinc-500">
        <p className="mb-2 sm:mb-0">&copy; {new Date().getFullYear()} GoGoComponent. All rights reserved.</p>

        <div className="flex space-x-4">
          <a
            href="https://github.com/rakesh709"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            <FaGithub size={30} />
          </a>

          <a
            href="https://www.linkedin.com/in/rakesh-kumar-6b3228145/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}
