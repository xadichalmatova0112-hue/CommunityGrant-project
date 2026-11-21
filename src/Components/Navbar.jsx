import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
    return (
        <header className="w-full bg-[#1C1C28] px-[20px] md:px-[60px] py-[24px]">
            <div className="max-w-[1220px] mx-auto flex items-center justify-between">
                <Link to="/" className="flex flex-col leading-none">
                    <span className="text-[24px] font-bold text-white">dYdX</span>
                    <span className="text-[12px] text-[#6966FF] font-mono tracking-widest">grants</span>
                </Link>

                <nav className="hidden lg:flex items-center gap-[32px] text-[14px] font-mono text-[#C8C7D8]">
                    <Link to="/" className="hover:text-white">Discover initiatives</Link>
                    <Link to="/" className="hover:text-white">Funded grants</Link>
                    <Link to="/" className="hover:text-white">Program expenses</Link>
                    <Link to="/" className="hover:text-white">Blog</Link>
                    <Link to="/" className="hover:text-white">FAQ</Link>
                    <Link
                        to="/apply"
                        className="btn bg-[#6966FF] hover:bg-[#5754e8] text-white font-sans border-none rounded-[8px] px-[20px] h-[42px] min-h-[42px]"
                    >
                        Apply for grant
                    </Link>
                </nav>

                <div className="dropdown dropdown-end lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost text-white text-[24px]">
                        <FiMenu />
                    </label>
                    <ul tabIndex={0} className="menu dropdown-content mt-[12px] p-[16px] shadow bg-[#262636] text-white rounded-[12px] w-[220px] flex flex-col gap-[8px] z-50">
                        <li><Link to="/">Discover initiatives</Link></li>
                        <li><Link to="/">Funded grants</Link></li>
                        <li><Link to="/">Program expenses</Link></li>
                        <li><Link to="/">Blog</Link></li>
                        <li><Link to="/">FAQ</Link></li>
                        <li>
                            <Link to="/apply" className="btn bg-[#6966FF] text-white border-none btn-sm mt-[8px]">
                                Apply for grant
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}