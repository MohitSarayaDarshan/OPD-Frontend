import React from "react";
import { useState } from "react";
import "./App.css";

import DiagnosisTypeMaster from "./components/DiagnosisTypeMaster";
import DoctorMaster from "./components/DoctorMaster";

import HospitalMaster from "./components/HospitalMaster";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";

import Login from "./components/Login";

import HospitalDetails from "./components/HospitalDetails";
import PatientMaster from "./components/PatientMaster";
import PatientDetails from "./components/PatientDetails";
import DoctorDetails from "./components/DoctorDetails";
// import StaffMaster from "./components/StaffMaster";
import StaffMaster from "./components/StaffMaster";
import StaffDetails from "./components/StaffDetails";
import ReceiptDetails from "./components/ReceiptDetailsStaff";
import DiagnosisTypeDetails from "./components/DiagnosisTypeDetails";
import OPDDetails from "./components/OPDDetails";
import OPDMaster from "./components/OPDMaster";
import TreatmentTypeMaster from "./components/TreatmentTypeMaster";

import TreatmentTypeDetails from "./components/TreatmentTypeDetails";
import SubTreatmentTypeMaster from "./components/SubTreatmentTypeMaster";
import SubTreatmentTypeDetails from "./components/SubTreatmentTypeDetails";
import Layout from "./components/AdminLayout";
import AddPatient from "./components/AddPatient";
import HospitalUI from "./components/HospitalUI";
import DashboardAdmin from "./components/DashboardAdmin";
import DashboardStaff from "./components/DashboardStaff";
import AdminLayout from "./components/AdminLayout";
import StaffLayout from "./components/StaffLayout";
import DoctorAdd from "./components/DoctorAdd";

import OPDAdd from "./components/AddOPD";
import ReceiptMasterStaff from "./components/ReceiptMasterStaff";
import ReceiptDetailsStaff from "./components/ReceiptDetailsStaff";
import ReceiptMasterAdmin from "./components/ReceiptMasterAdmin";
import DoctorMasterPatient from "./components/DoctorMasterPatient";
import PatientLayout from "./components/PatientLayout";

import PatientVisits from "./components/PatientVisits";
import AddReceipt from "./components/AddReceipt";
import AddHospital from "./components/AddHospital";
import DashboardPatient from "./components/DashboardPatient";
import AddTreatmentType from "./components/AddTreatmentType";
import AddDiagnosis from "./components/AddDiagnosis";
import AddSubTreatmentType from "./components/AddSubTreatmentType";
import AddOPD from "./components/AddOPD";
import ReceiptDetailsAdmin from "./components/ReceiptDetailsAdmin";
import Register from "./components/Register";
import LandingPage from "./components/LandingPage";
import AddStaff from "./components/AddStaff";
import { useEffect } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import Unauthorized from "./components/Unauthorized";

function App() {

  const [loading,setLoading]=useState(true)

  const [user,setUser]=useState(null)

  useEffect(()=>{
    async function initAuth(){
      try{
         const res=await fetch('http://localhost:3000/api/me',{credentials:'include'})
        
         if(res.status==200){
         const json=await res.json()

         console.log(json)
        setUser((json.data)[0])
      }

      }
      catch(e)
      {
        console.error("Auth check failed")
      }
      finally{
        setLoading(false);
        
      }
    }

    initAuth()
  },[])

  useEffect(() => {
  console.log("User updated:", user);
}, [user]);

  if(loading){
    return <div className="spinner">Loading your session.......</div>
  }
  else{
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
  // Use optional chaining (?.) to prevent crashes 
  // if user is still null/undefined during the first millisecond
   user?.Role ? (<Navigate to={`/${user.Role.toLowerCase()}/dashboard`}  replace/>) : <LandingPage />
} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/unauthorized" element={<Unauthorized/>}/>
                    <Route path="/admin" element={
                      <ProtectedRoute allowedRoutes={['admin']}> 
                      <AdminLayout />
                       </ProtectedRoute>}>
                        
                        <Route path="dashboard" element={<DashboardAdmin />} />
                        <Route path="/admin/getAllHospitals" element={<HospitalMaster />} />
                        <Route path="/admin/getHospital/:id" element={<HospitalDetails />} />
                        <Route path="/admin/addHospital" element={<AddHospital/>} />
                        <Route path="/admin/editHospital/:id" element={<HospitalDetails />} />
                        <Route path="/admin/deleteHospital/:id" element={<HospitalDetails />} />


                       
                          <Route path="/admin/getAllDoctors" element={<DoctorMaster />} />
                          <Route path="/admin/getDoctor/:id" element={<DoctorDetails />} />
                          <Route path="/admin/addDoctor" element={<DoctorAdd />} />
                          <Route path="/admin/editDoctor/:id" element={<DoctorAdd />} />
                          <Route path="/admin/deleteDoctor/:id" element={<DoctorDetails />} />

                          <Route path="/admin/getAllStaffs" element={<StaffMaster />} />
                          <Route path="/admin/getStaff/:id" element={<StaffDetails />} />
                          <Route path="/admin/addStaff" element={<AddStaff />} />
                          <Route path="/admin/editStaff/:id" element={<AddStaff />} />
                          <Route path="/admin/deleteStaff/:id" element={<StaffDetails />} />

                          <Route path="/admin/getAllTreatments" element={<TreatmentTypeMaster />} />
                          <Route path="/admin/getTreatment/:id" element={<TreatmentTypeDetails/>} />
                          <Route path="/admin/addTreatmentType" element={<AddTreatmentType />} />
                          <Route path="/admin/editTreatment/:id" element={<TreatmentTypeDetails />} />
                          <Route path="/admin/deleteTreatment/:id" element={<TreatmentTypeDetails />} />

                          <Route path="/admin/getAllDiagnosisTypes" element={<DiagnosisTypeMaster />} />
                          <Route path="/admin/getDiagnosisType/:id" element={<DiagnosisTypeDetails />} />
                          <Route path="/admin/addDiagnosisType" element={<AddDiagnosis/>} />
                          <Route path="/admin/editDiagnosisType/:id" element={<DiagnosisTypeDetails />} />
                          <Route path="/admin/deleteDiagnosisType/:id" element={<DiagnosisTypeDetails />} />

                          <Route path="/admin/getAllSubTreatments" element={<SubTreatmentTypeMaster />} />
                          <Route path="/admin/getSubTreatment/:id" element={<SubTreatmentTypeDetails />} />
                          <Route path="/admin/addSubTreatment" element={<AddSubTreatmentType />} />
                          <Route path="/admin/editSubTreatment/:id" element={<SubTreatmentTypeDetails />} />
                          <Route path="/admin/deleteSubTreatment/:id" element={<SubTreatmentTypeDetails />} />

                        
                        <Route path="/admin/getAllPatients" element={<PatientMaster />} />
                        <Route path="/admin/getPatient/:id" element={<PatientDetails />} />
                        <Route path="/admin/addPatient" element={<AddPatient />} />
                        <Route path="/admin/editPatient/:id" element={<PatientDetails />} />
                        <Route path="/admin/deletePatient/:id" element={<PatientDetails />} />


                        <Route path="/admin/getAllOPDs" element={<OPDMaster />} />
                        <Route path="/admin/getOPD/:id" element={<OPDDetails />} />
                        <Route path="/admin/addOPD" element={<AddOPD/>} />
                        <Route path="/admin/editOPD/:id" element={<OPDDetails />} />
                        <Route path="/admin/deleteOPD/:id" element={<OPDDetails />} />


                        <Route path="/admin/getAllReceipts" element={<ReceiptMasterAdmin />} />
                        <Route path="/admin/getReceipt/:id" element={<ReceiptDetailsAdmin />} />
                        <Route path="/admin/addReceipt" element={<AddReceipt />} />
                        <Route path="/admin/editReceipt/:id" element={<ReceiptDetails />} />
                        <Route path="/admin/deleteReceipt/:id" element={<ReceiptDetails />} />
                    
                    </Route>

                    <Route path="/staff" element={
                      <ProtectedRoute allowedRoutes={['staff']}>
                      <StaffLayout/>
                      </ProtectedRoute>}>

                  
                        <Route path="/staff/dashboard" element={<DashboardStaff />} />


                        <Route path="/staff/getAllReceipts" element={<ReceiptMasterStaff />} />
                        <Route path="/staff/getReceipt/:id" element={<ReceiptDetailsStaff />} />
                        <Route path="/staff/addReceipt" element={<AddReceipt />} />
                        <Route path="/staff/editReceipt/:id" element={<ReceiptDetails />} />
                        <Route path="/staff/deleteReceipt/:id" element={<ReceiptDetails />} />
                      
                    </Route>

                    <Route path='/patient' element={
                      <ProtectedRoute allowedRoutes={['patient']}>
                      <PatientLayout/>
                      </ProtectedRoute>}>
                    
                          <Route path="/patient/dashboard" element={<DashboardPatient/>}/>
                          <Route path="/patient/bookAppointment" element={<DoctorMasterPatient/>} />
                          <Route path="/patient/getAllVisits" element={<PatientVisits/>}/>
                    
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
  }
  
}

export default App;

/* import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";

function ProtectedRoute({isLoggedIn,children}){
    
    if(!isLoggedIn)
    {
      return <Navigate to='/' replace />
      
    }
    return children
}

function Login({onLogin}){
  const navigate=useNavigate();
  return(
    <>
      <p>You have to login!</p>
      <button onClick={()=>{onLogin();
        navigate('/dashboard');
      }}>Login</button>
    </>
  )
}

function Dashboard({onLogout})
{
  return(
    <>
      <p>You are already logged in!</p>
      <button onClick={()=>{onLogout()}}>Logout</button>
    </>
  )
}


export default function App(){

  const[isLoggedIn,setIsLoggedIn]=useState(false);
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login onLogin={()=>{setIsLoggedIn(true)}}/>}/>
        <Route path="/dashboard"
            element={<ProtectedRoute isLoggedIn={isLoggedIn}>
                <Dashboard onLogout={()=>{setIsLoggedIn(false)}}/>
            </ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  )
} */