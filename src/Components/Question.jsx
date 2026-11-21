import { FiPlus } from "react-icons/fi";

export default function Question() {
    return (
        <section className="w-full max-w-[820px] mx-auto pt-[96px] flex flex-col items-center">
            <h2 className="text-[28px] md:text-[36px] font-bold text-white text-center mb-[16px]">
                Frequently asked
                <span className="border-[2px] ml-3 border-[#6966FF] rounded-[50px] px-[14px] py-[2px]">
                    questions
                </span>
            </h2>
            <p className="text-[#C8C7D8] text-[15px] md:text-[16px] max-w-[540px] text-center leading-[24px] mb-[48px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla risus, consectetur ut bibendum non, gravida non libero.
            </p>

            <div className="w-full flex flex-col border-t border-[#2E2E3F]">
                <div className="border-b border-[#2E2E3F] py-[22px] flex items-center justify-between gap-[16px] text-[16px] sm:text-[18px] text-white">
                    <span>How do I apply?</span>
                    <FiPlus className="text-[20px] text-white shrink-0" />
                </div>

                <div className="border-b border-[#2E2E3F] py-[22px] flex items-center justify-between gap-[16px] text-[16px] sm:text-[18px] text-white">
                    <span>How will I be compensated?</span>
                    <FiPlus className="text-[20px] text-white shrink-0" />
                </div>

                <div className="border-b border-[#2E2E3F] py-[22px] flex items-center justify-between gap-[16px] text-[16px] sm:text-[18px] text-white">
                    <span>What type of project will qualify for a Grant?</span>
                    <FiPlus className="text-[20px] text-white shrink-0" />
                </div>

                <div className="border-b border-[#2E2E3F] py-[22px] flex items-center justify-between gap-[16px] text-[16px] sm:text-[18px] text-white">
                    <span>What is the application timeline? When can I expect to hear back?</span>
                    <FiPlus className="text-[20px] text-white shrink-0" />
                </div>

                <div className="border-b border-[#2E2E3F] py-[22px] flex items-center justify-between gap-[16px] text-[16px] sm:text-[18px] text-white">
                    <span>How can I increase my chances of getting funded?</span>
                    <FiPlus className="text-[20px] text-white shrink-0" />
                </div>

                <div className="border-b border-[#2E2E3F] py-[22px] flex items-center justify-between gap-[16px] text-[16px] sm:text-[18px] text-white">
                    <span>How often do you approve new Rounds of funding?</span>
                    <FiPlus className="text-[20px] text-white shrink-0" />
                </div>
            </div>
        </section>
    );
}
