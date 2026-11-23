import React from 'react'
import { FiCheck } from 'react-icons/fi'

const InitiativesList = () => {
  return (
    <section className="bg-[#1C1C28] text-white px-[20px] pb-[80px]">
      <ul className="max-w-[800px] mx-auto flex flex-col gap-[16px]">
        <li className="bg-[#393953] rounded-[16px] p-[24px] flex flex-col sm:flex-row justify-between items-start gap-[16px]">
          <div>
            <h3 className="text-[20px] font-bold mb-[8px]">Funding Rate Page</h3>
            <p className="text-[14px] text-[#C8C7D8] mb-[16px]">
              Page that provides a live look at all funding rates with popular timeframes in annualized format
            </p>
            <p className="text-[14px] font-mono text-[#A5A6B4]">Funding amount: $45,000 - $85,000</p>
          </div>
          <span className="badge bg-[#1C1C28] text-white border-none h-[28px] px-[14px] rounded-[999px] text-[13px] shrink-0">
            Funded
          </span>
        </li>

        <li className="bg-[#393953] rounded-[16px] p-[24px] flex flex-col sm:flex-row justify-between items-start gap-[16px]">
          <div>
            <h3 className="text-[20px] font-bold mb-[8px]">CLI Trading Tool</h3>
            <p className="text-[14px] text-[#C8C7D8] mb-[16px]">
              Self-hosted CLI tool leveraging the dYdX API to allow all functionalities from a terminal
            </p>
            <p className="text-[14px] font-mono text-[#A5A6B4]">Funding amount: $25,000 - $40,000</p>
          </div>
          <span className="badge bg-[#1C1C28] text-white border-none h-[28px] px-[14px] rounded-[999px] text-[13px] shrink-0">
            Funded
          </span>
        </li>

        <li className="bg-[#393953] rounded-[16px] p-[24px] flex flex-col sm:flex-row justify-between items-start gap-[16px]">
          <div>
            <h3 className="text-[20px] font-bold mb-[8px]">New Language SDKs</h3>
            <p className="text-[14px] text-[#C8C7D8] mb-[16px]">
              Replicate existing Python SDK to new programming languages with all the same features
            </p>
            <p className="text-[14px] font-mono text-[#A5A6B4]">Funding amount: $25,000 - $40,000</p>
          </div>
          <span className="badge bg-[#6966FF] text-white border-none h-[28px] px-[14px] rounded-[999px] text-[13px] shrink-0">
            Open
          </span>
        </li>

        <li className="bg-[#393953] rounded-[16px] p-[24px] flex flex-col sm:flex-row justify-between items-start gap-[16px]">
          <div>
            <h3 className="text-[20px] font-bold mb-[8px]">Liquidation Alert Tool</h3>
            <p className="text-[14px] text-[#C8C7D8] mb-[16px]">
              Self-hosted tool that alerts the trader of upcoming liquidation prices across multiple messaging venues
            </p>
            <p className="text-[14px] font-mono text-[#A5A6B4]">Funding amount: $30,000 - $50,000</p>
          </div>
          <span className="badge bg-[#10B981] text-white border-none h-[28px] px-[14px] rounded-[999px] text-[13px] flex items-center gap-[4px] shrink-0">
            Completed <FiCheck />
          </span>
        </li>

        <li className="bg-[#393953] rounded-[16px] p-[24px] flex flex-col sm:flex-row justify-between items-start gap-[16px]">
          <div>
            <h3 className="text-[20px] font-bold mb-[8px]">Governance Dashboard</h3>
            <p className="text-[14px] text-[#C8C7D8] mb-[16px]">
              Governance page to promote discussions, proposals, delegation and voting
            </p>
            <p className="text-[14px] font-mono text-[#A5A6B4]">Funding amount: $15,000 - $30,000</p>
          </div>
          <span className="badge bg-[#1C1C28] text-white border-none h-[28px] px-[14px] rounded-[999px] text-[13px] shrink-0">
            Funded
          </span>
        </li>

        <li className="bg-[#393953] rounded-[16px] p-[24px] flex flex-col sm:flex-row justify-between items-start gap-[16px]">
          <div>
            <h3 className="text-[20px] font-bold mb-[8px]">Delegation Tool</h3>
            <p className="text-[14px] text-[#C8C7D8] mb-[16px]">
              Webpage to allow active participants to market their voting and enable direct delegation from DYDX holders
            </p>
            <p className="text-[14px] font-mono text-[#A5A6B4]">Funding amount: $15,000 - $30,000</p>
          </div>
          <span className="badge bg-[#1C1C28] text-white border-none h-[28px] px-[14px] rounded-[999px] text-[13px] shrink-0">
            Funded
          </span>
        </li>

        <li className="bg-[#393953] rounded-[16px] p-[24px] flex flex-col sm:flex-row justify-between items-start gap-[16px]">
          <div>
            <h3 className="text-[20px] font-bold mb-[8px]">Newsletter</h3>
            <p className="text-[14px] text-[#C8C7D8] mb-[16px]">
              Weekly or Monthly newsletters promoting and educating the dYdX platform
            </p>
            <p className="text-[14px] font-mono text-[#A5A6B4]">Funding amount: $10,000 - $20,000</p>
          </div>
          <span className="badge bg-[#1C1C28] text-white border-none h-[28px] px-[14px] rounded-[999px] text-[13px] shrink-0">
            Funded
          </span>
        </li>

        <li className="bg-[#393953] rounded-[16px] p-[24px] flex flex-col sm:flex-row justify-between items-start gap-[16px]">
          <div>
            <h3 className="text-[20px] font-bold mb-[8px]">Academy Contributions</h3>
            <p className="text-[14px] text-[#C8C7D8] mb-[16px]">
              Webpages, Courses, Glossaries and Youtube libraries educating new users on dYdX
            </p>
            <p className="text-[14px] font-mono text-[#A5A6B4]">Funding amount: $10,000 - $25,000</p>
          </div>
          <span className="badge bg-[#1C1C28] text-white border-none h-[28px] px-[14px] rounded-[999px] text-[13px] shrink-0">
            Funded
          </span>
        </li>

        <li className="bg-[#393953] rounded-[16px] p-[24px] flex flex-col sm:flex-row justify-between items-start gap-[16px]">
          <div>
            <h3 className="text-[20px] font-bold mb-[8px]">Discord bots</h3>
            <p className="text-[14px] text-[#C8C7D8] mb-[16px]">
              Additional Discord bots that notify members of activity on dYdX and governance
            </p>
            <p className="text-[14px] font-mono text-[#A5A6B4]">Funding amount: $5,000 - $10,000</p>
          </div>
          <span className="badge bg-[#6966FF] text-white border-none h-[28px] px-[14px] rounded-[999px] text-[13px] shrink-0">
            Open
          </span>
        </li>

        <li className="bg-[#393953] rounded-[16px] p-[24px] flex flex-col sm:flex-row justify-between items-start gap-[16px]">
          <div>
            <h3 className="text-[20px] font-bold mb-[8px]">Reward tracking & Simulator</h3>
            <p className="text-[14px] text-[#C8C7D8] mb-[16px]">
              Page or tool that allows traders to calculate future rewards and simulate earnings from activity
            </p>
            <p className="text-[14px] font-mono text-[#A5A6B4]">Funding amount: $20,000 - $30,000</p>
          </div>
          <span className="badge bg-[#1C1C28] text-white border-none h-[28px] px-[14px] rounded-[999px] text-[13px] shrink-0">
            Funded
          </span>
        </li>
      </ul>
    </section>
  )
}

export default InitiativesList
