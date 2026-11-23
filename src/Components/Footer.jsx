import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { FaTwitter, FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1C1C28] mt-20">
      <div className="max-w-[1220px] mx-auto flex flex-col md:flex-row items-center justify-between gap-[24px] pb-5">
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-[24px] sm:gap-[32px] text-[14px] font-mono text-[#C8C7D8]">
          <Link
            to="/"
            className="w-[44px] h-[44px] rounded-full border border-dashed border-[#393953] flex items-center justify-center text-white font-sans font-bold text-[20px]"
          >
            X
          </Link>
          <Link to="/" className="hover:text-white">About</Link>
          <Link to="/" className="hover:text-white">FAQ</Link>
          <Link to="/" className="hover:text-white">Brand assets</Link>
          <a href="https://dydx.foundation" target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-[6px]">
            dYdX Foundation <FiExternalLink className="text-[14px]" />
          </a>
          <a href="https://dydx.exchange" target="_blank" rel="noreferrer" className="hover:text-white flex items-center gap-[6px]">
            dYdX trading <FiExternalLink className="text-[14px]" />
          </a>
        </div>

        <div className="flex items-center gap-[24px] text-[20px] text-[#C8C7D8]">
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white">
            <FaTwitter />
          </a>
          <a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-white">
            <FaDiscord />
          </a>
        </div> 
      </div>
    </footer>
  );
}
