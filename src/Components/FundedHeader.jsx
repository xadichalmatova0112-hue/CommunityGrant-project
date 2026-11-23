import React from 'react'

const FundedHeader = () => {
  return (
    <section className="bg-[#1C1C28] text-white pt-[64px] pb-[40px] px-[20px]">
      <div className="max-w-[1160px] mx-auto">
        <h1 className="text-[36px] md:text-[56px] font-bold text-center mb-[48px]">
          Funded grants
        </h1>

        <ul className="flex flex-wrap items-center gap-[12px] md:gap-[24px] mb-[28px]">
          <li>
            <button className="btn bg-[#393953] text-white border-none rounded-[8px] px-[20px] h-[44px]">
              All
            </button>
          </li>
          <li>
            <button className="btn btn-ghost text-[#C8C7D8] rounded-[8px] px-[16px] h-[44px]">
              Technical / Tool Development
            </button>
          </li>
          <li>
            <button className="btn btn-ghost text-[#C8C7D8] rounded-[8px] px-[16px] h-[44px]">
              Governance
            </button>
          </li>
          <li>
            <button className="btn btn-ghost text-[#C8C7D8] rounded-[8px] px-[16px] h-[44px]">
              Growth / Marketing
            </button>
          </li>
          <li>
            <button className="btn btn-ghost text-[#C8C7D8] rounded-[8px] px-[16px] h-[44px]">
              Analytics
            </button>
          </li>
          <li>
            <button className="btn btn-ghost text-[#C8C7D8] rounded-[8px] px-[16px] h-[44px]">
              Third Party Provider
            </button>
          </li>
        </ul>

        <label className="inline-flex items-center gap-[12px] cursor-pointer">
          <input
            type="checkbox"
            defaultChecked
            className="toggle toggle-primary bg-[#393953] border-none checked:bg-[#6966FF]"
          />
          <span className="text-[15px] text-white">Show only completed</span>
        </label>
      </div>
    </section>
  )
}

export default FundedHeader
