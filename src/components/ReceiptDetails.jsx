import React, { useContext } from 'react'
import { SidebarContext } from '../contexts/Sidebar'

function ReceiptDetails() {
  const {expanded}=useContext(SidebarContext)
  return (
    <div className={` flex-1 ${expanded? "ml-64":"ml-16"} h-screen  transition-all duration-1000 items-center justify-center flex `}>
        <div  className={` my-10 mx-28  border-6 border-black p-8 group transition-all duration-500 shadow-[10px_10px_0px_0px_rgb(0,0,0)] hover:translate-x-[-10px] hover:translate-y-[-10px] hover:shadow-[20px_20px_0px_0px_rgb(0,0,0)]`}>
          <div className={`font-extrabold text-5xl text-center my-8`}>
            <span>
                REC-2026-001
                <div className={`w-full h-[3px] bg-black group-hover:w-0 transition-all duration-500 `}></div> 
            </span>
          </div>
          
          <div className={`flex justify-evenly`}>
          <div className={'table-auto border-collapse border-spacing-2 bg-gray-300 p-3'}>
            <thead>
              <tr>
              <th className={`p-1.5 border-b-4 border-b-gray-500`}>Field</th>
              <th className={`p-1.5 border-b-4 border-b-gray-500`}>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr className={`py-4`}>
                <td className={`p-1.5 font-bold `}>Reference No</td>
                <td className={`p-1.5 pl-5`}>1</td>
              </tr>
               <tr className={`py-4`}>
                <td className={`p-1.5 font-bold `}>Reference Date</td>
                <td className={`p-1.5 pl-5`}>2026-01-02</td>
              </tr>
              <tr className={`py-4`}>
                <td className={`p-1.5 font-bold `}>Reference Date</td>
                <td className={`p-1.5 pl-5`}>2026-01-02</td>
              </tr>
              <tr className={`py-4`}>
                <td className={`p-1.5 font-bold `}>Cancellation Date Time</td>
                <td className={`p-1.5 pl-5`}>-</td>
              </tr>
              <tr className={`py-4`}>
                <td className={`p-1.5 font-bold `}>Cancellation By UserID</td>
                <td className={`p-1.5 pl-5`}>-</td>
              </tr>
              <tr className={`py-4`}>
                <td className={`p-1.5 font-bold `}>Cancellation Remarks</td>
                <td className={`p-1.5 pl-5`}>-</td>
              </tr>
            </tbody>
          </div>
          <div className={'table-auto  border-collapse border-spacing-2 bg-gray-300 p-3'}>
            <thead>
              <tr>
              <th className={`p-1.5 border-b-4 border-b-gray-500`}>Field</th>
              <th className={`p-1.5 border-b-4 border-b-gray-500`}>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr className={`py-4`}>
                <td className={`p-1.5 font-bold `}>Receipt ID</td>
                <td className={`p-1.5 pl-5`}>1001</td>
              </tr>
              <tr className={`py-4`}>
                <td className={`p-1.5 font-bold `}>Receipt Date</td>
                <td className={`p-1.5 pl-5`}>2026-01-02</td>
              </tr>
              <tr className={`py-4`}>
                <td className={`p-1.5 font-bold `}>OPD ID</td>
                <td className={`p-1.5 pl-5`}>5001</td>
              </tr>
              <tr className={`py-4`}>
                <td className={`p-1.5 font-bold `}>Amount</td>
                <td className={`p-1.5 pl-5`}>500.00</td>
              </tr>
              <tr className={`py-4`}>
                <td className={`p-1.5 font-bold `}>Description</td>
                <td className={`p-1.5 pl-5`}>OPD Consultation</td>
              </tr>
              <tr className={`py-4`}>
                <td className={`p-1.5 font-bold `}>User ID</td>
                <td className={`p-1.5 pl-5`}>101</td>
              </tr>
              <tr className={`py-4`}>
                <td className={`p-1.5 font-bold `}>Payment Mode ID</td>
                <td className={`p-1.5 pl-5`}>1</td>
              </tr>
            </tbody>
          </div>
        </div>
          <div className={`flex justify-center my-5`}>
            <button className={`px-4 mx-1 py-2 border-2 border-black  bg-black text-white font-bold cursor-pointer hover:bg-[#5ad641] hover:text-black`} >EDIT</button>
          </div>
        </div>
      </div>
  )
}

export default ReceiptDetails