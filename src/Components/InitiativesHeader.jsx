import React from 'react'

const InitiativesHeader = () => {
  return (
    <section className="bg-[#1C1C28] text-white text-center py-[64px] px-[20px]">
      <div className="max-w-[760px] mx-auto">
        <h1 className="text-[36px] md:text-[56px] font-bold mb-[16px]">
          Discover initiatives (RFPs)
        </h1>

        <p className="text-[16px] md:text-[18px] text-[#C8C7D8] mb-[40px]">
          The list below includes initial ideas that we think could make excellent Grants. This is a living list that will continue to update as ideas popup.
        </p>

        <ul className="flex flex-wrap justify-center gap-[12px]">
          <li>
            <button className="btn bg-[#393953] text-white border-none rounded-[8px] px-[20px] h-[44px]">
              All
            </button>
          </li>
          <li>
            <button className="btn btn-ghost text-[#C8C7D8] rounded-[8px] px-[20px] h-[44px]">
              Open
            </button>
          </li>
          <li>
            <button className="btn btn-ghost text-[#C8C7D8] rounded-[8px] px-[20px] h-[44px]">
              Funded
            </button>
          </li>
          <li>
            <button className="btn btn-ghost text-[#C8C7D8] rounded-[8px] px-[20px] h-[44px]">
              Completed
            </button>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default InitiativesHeader
