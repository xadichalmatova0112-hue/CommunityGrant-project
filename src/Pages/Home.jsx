import { Link } from "react-router-dom";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";

export default function Home() {
  return (
    <div className="bg-[#1C1C28] text-white px-[20px] md:px-[60px] pb-[80px]">
      <section className="max-w-[840px] mx-auto pt-[60px] md:pt-[80px] flex flex-col items-center text-center">
        <h1 className="text-[36px] sm:text-[52px] md:text-[64px] font-bold leading-[44px] sm:leading-[60px] md:leading-[74px] mb-[36px]">
          Powering the future of dYdX through{" "}
          <span className="border-b-[4px] border-[#6966FF] pb-[2px]">community</span> grants
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-[16px] w-full sm:w-auto">
          <Link
            to="/"
            className="btn bg-[#393953] hover:bg-[#494968] text-white border-none rounded-[8px] w-full sm:w-[180px] h-[48px]"
          >
            Discover RFPs
          </Link>
          <Link
            to="/apply"
            className="btn bg-[#6966FF] hover:bg-[#5754e8] text-white border-none rounded-[8px] w-full sm:w-[180px] h-[48px] flex items-center justify-center gap-[8px]"
          >
            Apply for grant <FiArrowRight />
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-[40px] md:gap-[90px] mt-[64px] font-mono">
          <div className="flex flex-col items-center">
            <span className="text-[20px] font-bold text-white">100+</span>
            <span className="text-[14px] text-[#C8C7D8] mt-[4px]">projects funded</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[20px] font-bold text-white">$3+ milion</span>
            <span className="text-[14px] text-[#C8C7D8] mt-[4px]">awarded</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[20px] font-bold text-white">400+</span>
            <span className="text-[14px] text-[#C8C7D8] mt-[4px]">projects funded</span>
          </div>
        </div>

        <FiArrowDown className="text-[28px] text-[#6966FF] mt-[48px] mb-[48px]" />

        <h2 className="text-[28px] md:text-[36px] font-bold mb-[16px]">
          Projects built with grants
        </h2>
        <p className="text-[#C8C7D8] text-[15px] md:text-[16px] max-w-[540px] leading-[24px] mb-[24px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.
        </p>
        <Link to="/" className="text-[#6966FF] text-[15px] flex items-center gap-[8px] hover:underline">
          View all funded projects <FiArrowRight />
        </Link>
      </section>
    </div>
  );
}
