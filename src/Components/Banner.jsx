import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function Banner() {
  return (
    <section className="w-full max-w-[1220px] mx-auto pt-[96px]">
      <div className="w-full bg-gradient-to-r from-[#5653D6] to-[#6966FF] rounded-[16px] py-[56px] px-[24px] flex flex-col items-center text-center">
        <span className="text-[14px] sm:text-[16px] text-white/80 mb-[8px]">
          Have a project in mind?
        </span>
        <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold text-white mb-[28px]">
          Let’s create something awesome.
        </h2>
        <Link
          to="/apply"
          className="btn bg-white hover:bg-gray-100 text-[#6966FF] border-none rounded-[8px] px-[24px] h-[48px] flex items-center gap-[8px]"
        >
          Apply for grant <FiArrowRight />
        </Link>
      </div>
    </section>
  );
}
