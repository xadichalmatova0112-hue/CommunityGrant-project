import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

export default function ProjectCards() {
  return (
    <div className="w-full max-w-[1220px] mx-auto mt-[40px] relative">
      <div className="flex flex-wrap lg:flex-nowrap justify-center gap-[24px] mt-20">
        <Link
          to="/"
          className="w-full md:w-[380px] bg-[#262636] hover:bg-[#2e2e42] rounded-[16px] p-[28px] flex flex-col justify-between min-h-[440px]"
        >
          <div className="flex flex-col">
            <span className="text-[13px] font-mono text-[#A59EBA]">Crowdfund</span>
            <h3 className="text-[22px] font-bold text-white mt-[8px] mb-[12px]">
              Funding rates page
            </h3>
            <span className="text-[13px] font-mono text-[#A59EBA] mb-[20px]">
              Funding amount: $5,000 - $6,000
            </span>
            <p className="text-[15px] text-[#C8C7D8] leading-[24px]">
              Grant will be used to build a dedicated web app to give traders a view of all dYdX asset funding rates across multiple timeframes. The page will be interactive to include deep diving across different assets and historical analysis of changing rates. It will also include API functionalities to allow developer access.
            </p>
          </div>

          <div className="avatar-group -space-x-[10px] mt-[28px]">
            <div className="avatar border-[#262636]">
              <div className="w-[36px] h-[36px] bg-[#6966FF] text-white flex items-center justify-center text-[13px] font-bold">
                JD
              </div>
            </div>
            <div className="avatar border-[#262636]">
              <div className="w-[36px] h-[36px] bg-[#FF6680] text-white flex items-center justify-center text-[13px] font-bold">
                AK
              </div>
            </div>
          </div>
        </Link>

        <Link
          to="/"
          className="w-full md:w-[380px] bg-[#262636] hover:bg-[#2e2e42] rounded-[16px] overflow-hidden flex flex-col justify-between min-h-[440px]"
        >
          <div>
            <div className="w-full h-[140px] bg-[#1E1E2B]"></div>
            <div className="p-[28px] flex flex-col">
              <span className="text-[13px] font-mono text-[#A59EBA]">Edition</span>
              <h3 className="text-[22px] font-bold text-white mt-[8px] mb-[12px]">
                Tradingview integration
              </h3>
              <span className="text-[13px] font-mono text-[#A59EBA] mb-[20px]">
                Funding amount: $5,000 - $6,000
              </span>
              <p className="text-[15px] text-[#C8C7D8] leading-[24px]">
                The grant will be used to build a web application that integrates Tradingview strategies into a dYdX Trading account to execute trades directly through a strategy. Users will be able to tap into Tradingview resources and test out different ...
              </p>
            </div>
          </div>

          <div className="avatar-group -space-x-[10px] px-[28px] pb-[28px]">
            <div className="avatar border-[#262636]">
              <div className="w-[36px] h-[36px] bg-[#16B57F] text-white flex items-center justify-center text-[13px] font-bold">
                MK
              </div>
            </div>
            <div className="avatar border-[#262636]">
              <div className="w-[36px] h-[36px] bg-[#F59E0B] text-white flex items-center justify-center text-[13px] font-bold">
                SL
              </div>
            </div>
            <div className="avatar border-[#262636]">
              <div className="w-[36px] h-[36px] bg-[#6966FF] text-white flex items-center justify-center text-[13px] font-bold">
                TR
              </div>
            </div>
          </div>
        </Link>

        <Link
          to="/"
          className="w-full md:w-[380px] bg-[#262636] hover:bg-[#2e2e42] rounded-[16px] p-[28px] flex flex-col justify-between min-h-[440px]"
        >
          <div className="flex flex-col">
            <span className="text-[13px] font-mono text-[#A59EBA]">Entry</span>
            <h3 className="text-[22px] font-bold text-white mt-[8px] mb-[12px]">
              Rewards optimization research and paper
            </h3>
            <span className="text-[13px] font-mono text-[#A59EBA] mb-[20px]">
              Funding amount: $5,000 - $6,000
            </span>
            <p className="text-[15px] text-[#C8C7D8] leading-[24px]">
              The Grant will be used to write a full research report and code samples that will determine optimal trading strategies for rewards maximization. The paper will be marketed across several platforms and shared among trading circles to help readership.
            </p>
          </div>

          <div className="avatar-group -space-x-[10px] mt-[28px]">
            <div className="avatar border-[#262636]">
              <div className="w-[36px] h-[36px] bg-[#EC4899] text-white flex items-center justify-center text-[13px] font-bold">
                AN
              </div>
            </div>
            <div className="avatar border-[#262636]">
              <div className="w-[36px] h-[36px] bg-[#3B82F6] text-white flex items-center justify-center text-[13px] font-bold">
                DM
              </div>
            </div>
            <div className="avatar border-[#262636]">
              <div className="w-[36px] h-[36px] bg-[#8B5CF6] text-white flex items-center justify-center text-[13px] font-bold">
                KL
              </div>
            </div>
          </div>
        </Link>
      </div>

      <button className="btn btn-circle bg-white hover:bg-gray-200 text-[#1C1C28] border-none shadow-lg hidden lg:flex items-center justify-center absolute right-[-20px] top-[50%] -translate-y-[50%]">
        <FiArrowRight className="text-[20px]" />
      </button>
    </div>
  );
}
