import { FiCornerUpRight, FiCornerDownRight } from "react-icons/fi";

export default function ApplicationProcess() {
  return (
    <section className="w-full max-w-[1220px] mx-auto pt-[96px] flex flex-col items-center">
      <h2 className="text-[28px] md:text-[36px] font-bold text-white text-center mb-[16px]">
        Application{" "}
        <span className="border-b-[4px] border-[#6966FF] pb-[2px]">process</span>
      </h2>
      <p className="text-[#C8C7D8] text-[15px] md:text-[16px] max-w-[540px] text-center leading-[24px] mb-[56px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.
      </p>

      <div className="w-full flex flex-wrap lg:flex-nowrap justify-center items-center gap-[24px] relative">
        <div className="w-full md:w-[370px] bg-[#393953] rounded-[16px] p-[32px] min-h-[380px] flex flex-col lg:-rotate-[2deg]">
          <span className="text-[48px] font-mono font-bold text-white mb-[32px]">
            1
          </span>
          <h3 className="text-[22px] font-bold text-white mb-[14px]">Apply</h3>
          <p className="text-[15px] text-[#C8C7D8] leading-[24px]">
            Submit a complete application to the dYdX Grants Team including as many details as possible about the proposed idea and their background.
          </p>
        </div>

        <FiCornerUpRight className="hidden lg:block text-[40px] text-[#6966FF] shrink-0" />

        <div className="w-full md:w-[370px] bg-[#393953] rounded-[16px] p-[32px] min-h-[380px] flex flex-col lg:rotate-[2deg] lg:mt-[32px]">
          <span className="text-[48px] font-mono font-bold text-white mb-[32px]">
            2
          </span>
          <h3 className="text-[22px] font-bold text-white mb-[14px]">Interview</h3>
          <p className="text-[15px] text-[#C8C7D8] leading-[24px]">
            If your application is selected, the dYdX Grants will conduct 1-2 interviews to collect more information on the Applicant's background and the proposal.
          </p>
        </div>

        <FiCornerDownRight className="hidden lg:block text-[40px] text-[#6966FF] shrink-0" />

        <div className="w-full md:w-[370px] bg-[#393953] rounded-[16px] p-[32px] min-h-[380px] flex flex-col lg:-rotate-[2deg]">
          <span className="text-[48px] font-mono font-bold text-white mb-[32px]">
            3
          </span>
          <h3 className="text-[22px] font-bold text-white mb-[14px]">Grant offer</h3>
          <p className="text-[15px] text-[#C8C7D8] leading-[24px]">
            The dYdX Grants team will determine if the proposal fits into the grant program. A vesting schedule and timeline for product development reports will also be determined in the offer;
          </p>
        </div>
      </div>
    </section>
  );
}
