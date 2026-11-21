import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function WhatsNew() {
  return (
    <section className="w-full max-w-[920px] mx-auto pt-[96px] flex flex-col items-center">
      <h2 className="text-[28px] md:text-[36px] font-bold text-white text-center mb-[16px]">
        What’s new?
      </h2>
      <p className="text-[#C8C7D8] text-[15px] md:text-[16px] max-w-[540px] text-center leading-[24px] mb-[20px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.
      </p>
      <Link
        to="/"
        className="text-[#6966FF] text-[15px] flex items-center gap-[8px] mb-[48px] hover:underline"
      >
        Read more on our blog <FiArrowRight />
      </Link>

      <div className="w-full flex flex-wrap justify-center gap-[24px]">
        <Link
          to="/"
          className="w-full md:w-[440px] bg-[#393953] hover:bg-[#434361] rounded-[16px] overflow-hidden flex flex-col justify-between"
        >
          <div className="w-full h-[220px] bg-[#1C1C28] border-[3px] border-[#6966FF] rounded-t-[16px] p-[32px] flex flex-col justify-center">
            <span className="text-[12px] font-mono text-[#A59EBA] mb-[6px]">
              Funding round
            </span>
            <h3 className="text-[28px] sm:text-[32px] font-bold text-white leading-[36px]">
              Round 9 <br /> of approvals
            </h3>
          </div>

          <div className="p-[28px] flex flex-col justify-between min-h-[180px]">
            <div>
              <span className="text-[13px] font-mono text-[#C8C7D8]">
                Funding round
              </span>
              <h4 className="text-[22px] font-bold text-white mt-[8px]">
                Round 9 of approvals
              </h4>
            </div>
            <span className="text-[13px] font-mono text-[#C8C7D8] mt-[32px]">
              January 1, 2022
            </span>
          </div>
        </Link>

        <Link
          to="/"
          className="w-full md:w-[440px] bg-[#393953] hover:bg-[#434361] rounded-[16px] overflow-hidden flex flex-col justify-between"
        >
          <div className="w-full h-[220px] bg-[#1C1C28] border-[3px] border-[#6966FF] rounded-t-[16px] p-[32px] flex flex-col justify-center">
            <span className="text-[12px] font-mono text-[#A59EBA] mb-[6px]">
              Funding round
            </span>
            <h3 className="text-[28px] sm:text-[32px] font-bold text-white leading-[36px]">
              Round 8 <br /> of approvals
            </h3>
          </div>

          <div className="p-[28px] flex flex-col justify-between min-h-[180px]">
            <div>
              <span className="text-[13px] font-mono text-[#C8C7D8]">
                Funding round
              </span>
              <h4 className="text-[22px] font-bold text-white mt-[8px]">
                Round 8 of approvals
              </h4>
            </div>
            <span className="text-[13px] font-mono text-[#C8C7D8] mt-[32px]">
              January 1, 2022
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
