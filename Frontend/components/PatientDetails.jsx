import React, { useContext } from 'react'
import { SidebarContext } from '../contexts/Sidebar'

function PatientDetails() {
  const{expanded}=useContext(SidebarContext);
  return (
    <div className={` flex-1 ${expanded? "ml-64":"ml-16"}  transition-all duration-1000 items-center justify-center flex `}>
        <div  className={` my-10 mx-28  border-6 border-black p-8 group transition-all duration-500 `}>
        <div className={`font-extrabold text-5xl text-center my-8`}>
          <span>
              Smit Gohel
              <div className={`w-full h-[3px] bg-black group-hover:w-0 transition-all duration-500 `}></div> 
          </span>
          </div>
          <div className={`rounded-lg border border-2 border-gray-300 bg-blue-50 `}>
          <table className={`table-auto `}>
            <thead>
              <tr className={`border border-0 border-b-4 border-b-gray-500`}>
                <th className={`text-3xl p-4`}>Field</th>
                <th className={`text-3xl p-4`}>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={`font-bold p-2`}>Patient ID: </td>
                <td className={`py-2 px-28`}>5001</td>
              </tr>
               <tr>
                <td className={`font-bold p-2`}>Patient No: </td>
                <td className={`py-2 px-28`}>PAT-24-001</td>
              </tr>
               <tr>
                <td className={`font-bold p-2`}>Registration DateTime: </td>
                <td className={`py-2 px-28`}>2024-01-10 10:00:00</td>
              </tr>
               <tr>
                <td className={`font-bold p-2`}>Age: </td>
                <td className={`py-2 px-28`}>34</td>
              </tr>
               <tr>
                <td className={`font-bold p-2`}>Blood Group: </td>
                <td className={`py-2 px-28`}>B+</td>
              </tr>
               <tr>
                <td className={`font-bold p-2`}>Gender: </td>
                <td className={`py-2 px-28`}>Male</td>
              </tr>

               <tr>
                <td className={`font-bold p-2`}>Occupation: </td>
                <td className={`py-2 px-28`}>Software Engineer</td>
              </tr>
               <tr>
                <td className={`font-bold p-2`}>Address: </td>
                <td className={`py-2 px-28`}>12, Shanti Nagar, MG Road</td>
              </tr>
               <tr>
                <td className={`font-bold p-2`}>Hospital ID: </td>
                <td className={`py-2 px-28`}>1</td>
              </tr>
               <tr>
                <td className={`font-bold p-2`}>State ID: </td>
                <td className={`py-2 px-28`}>12</td>
              </tr>
               <tr>
                <td className={`font-bold p-2`}>City ID: </td>
                <td className={`py-2 px-28`}>101</td>
              </tr>
               <tr>
                <td className={`font-bold p-2`}>PinCode: </td>
                <td className={`py-2 px-28`}>400001</td>
              </tr>
               <tr>
                <td className={`font-bold p-2`}>Mobile No: </td>
                <td className={`py-2 px-28`}>9876543210</td>
              </tr>
               <tr>
                <td className={`font-bold p-2`}>ReferredBy: </td>
                <td className={`py-2 px-28`}>Self</td>
              </tr>
               <tr>
                <td className={`font-bold p-2`}>Description: </td>
                <td className={`py-2 px-28`}>No prior major surgeries. Allergic to penicillin.</td>
              </tr>
              <tr>
                <td className={`font-bold p-2`}>User ID: </td>
                <td className={`py-2 px-28`}>10</td>
              </tr>
              <tr>
                <td className={`font-bold p-2`}>Created: </td>
                <td className={`py-2 px-28`}>2024-01-10 10:00:00</td>
              </tr>
              <tr>
                <td className={`font-bold p-2`}>Modified: </td>
                <td className={`py-2 px-28`}>2024-10-15 09:00:00</td>
              </tr>
              <tr>
                <td className={`font-bold p-2`}>Emergency Contact No: </td>
                <td className={`py-2 px-28`}>9876500001</td>
              </tr>
              </tbody>
          </table>
          </div>
        <div className={`flex justify-center my-5`}>
        <button className={`px-6 mx-1 py-4 border-2 border-black text-2xl bg-black text-white font-bold cursor-pointer hover:bg-[#5ad641] hover:text-black`} >EDIT</button>
        <button className={`px-6 py-4 border-2 border-black text-2xl bg-black text-white font-bold cursor-pointer hover:bg-red-600 hover:text-black`} >DELETE</button>
        </div>
        </div>
    </div>
  )
}

export default PatientDetails