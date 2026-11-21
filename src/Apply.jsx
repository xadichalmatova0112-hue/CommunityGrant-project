import { FiPlus } from "react-icons/fi";

export default function Apply() {
  const items = [
    "Relevance",
    "Benefit",
    "Feasibility",
    "Execution",
    "Qualification",
    "Originality",
    "Cost",
  ];

  return (
    <div className="bg-[#1C1C28] text-white px-[20px] md:px-[60px] py-[60px]">
      <div className="max-w-[760px] mx-auto flex flex-col items-center">
        <h1 className="text-[36px] md:text-[52px] font-bold text-center mb-[12px]">
          Apply for a grant
        </h1>
        <p className="text-[#C8C7D8] text-[15px] text-center mb-[60px]">
          Please complete the application below for Grant consideration!
        </p>

        <div className="w-full flex flex-col mb-[64px]">
          <h2 className="text-[22px] font-bold mb-[8px]">How are grants selected?</h2>
          <p className="text-[#C8C7D8] text-[14px] leading-[22px] mb-[24px]">
            When assessing applications, the Grants team follows standard criteria using the questions below to guide our decision making.
          </p>

          <div className="flex flex-col border-t border-[#2E2E3F]">
            {items.map((title, index) => (
              <div
                key={index}
                className="border-b border-[#2E2E3F] py-[18px] flex items-center justify-between text-[16px]"
              >
                <span>{title}</span>
                <FiPlus className="text-[#C8C7D8]" />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full flex flex-col">
          <h2 className="text-[28px] font-bold mb-[24px]">Grant application</h2>

          <form className="w-full bg-white text-[#1C1C28] rounded-[16px] p-[24px] sm:p-[48px] flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[8px]">
              <label className="text-[14px] font-semibold">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="input input-bordered bg-white border-[#D1D5DB] w-full h-[44px] rounded-[8px]"
              />
            </div>

            <div className="flex flex-col gap-[4px]">
              <label className="text-[14px] font-semibold">
                Email <span className="text-red-500">*</span>
              </label>
              <span className="text-[12px] text-gray-500 mb-[4px]">
                Primary contact if applying as a team/company
              </span>
              <input
                type="email"
                className="input input-bordered bg-white border-[#D1D5DB] w-full h-[44px] rounded-[8px]"
              />
            </div>

            <div className="flex flex-col gap-[4px]">
              <label className="text-[14px] font-semibold">
                About You <span className="text-red-500">*</span>
              </label>
              <span className="text-[12px] text-gray-500 mb-[4px]">
                Tell us about yourself and/or your team
              </span>
              <textarea
                className="textarea textarea-bordered bg-white border-[#D1D5DB] w-full h-[100px] rounded-[8px]"
              ></textarea>
            </div>

            <div className="flex flex-col gap-[4px]">
              <label className="text-[14px] font-semibold">Additional Links</label>
              <span className="text-[12px] text-gray-500 mb-[4px]">
                If helpful, please share any links about you (e.g. Website, GitHub, Twitter)
              </span>
              <textarea
                className="textarea textarea-bordered bg-white border-[#D1D5DB] w-full h-[100px] rounded-[8px]"
              ></textarea>
            </div>

            <button
              type="button"
              className="btn bg-[#6966FF] hover:bg-[#5754e8] text-white border-none rounded-[8px] h-[46px] mt-[8px] w-full sm:w-[180px]"
            >
              Submit application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}