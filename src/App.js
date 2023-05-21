import React from "react";
import { BrowserRouter as Router, Routes, Route, Nav, Link } from 'react-router-dom';
import Login from "./components/Login/Login"
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import NewApplication from './components/NewApplication/NewApplication';
import ApplicationStatus from './components/ApplicationStatus/ApplicationStatus'
import ProductList from './components/ProductList/ProductList'
import EnlistedVendor from './components/EnlistedVendor/EnlistedVendor'
import DepartmentalDashboard from './components/DepartmentalDashboard/DepartmentalDashboard'
import Policy from "./components/Policy/Policy";
import Guideline from "./components/Guideline/Guideline";
import DocumentUploaded from "./components/DocumentUploaded/DocumentUploaded";
import Registration from "./components/Registration/Registration";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PublicRoute />} />
          <Route path="/Dashboard" element={<PrivateRoute />} />
          <Route path="/DepartmentalDashboard" element={<DepartmentalDashboard />} />
          <Route path="/NewApplication" element={<NewApplication />} />
          <Route path="/ApplicationStatus" element={<ApplicationStatus />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/EnlistedVendor" element={<EnlistedVendor />} />
          <Route path="/Policy" element={<Policy />} />
          <Route path="/Guideline" element={<Guideline />} />
          <Route path="/DocumentUploaded" element={<DocumentUploaded />} />
          <Route path="/Registration" element={<Registration />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
