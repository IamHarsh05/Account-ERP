import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/login";
import Signup from "./pages/Auth/signup";
import ResetPass from "./pages/Auth/reset";
import CompanyReg from "./pages/Forms/companyreg";
import DirectorReg from "./pages/Forms/directorReg";
import DirectorFileUpload from "./pages/Forms/directorFileUpload";
import OtherDocumentsUpload from "./pages/Forms/otherUpload";
import CompanyDetailRegistration from "./pages/Forms/companyDetails";
import QuotationPage from "./pages/Forms/qutation";
import Navbar from "./pages/Navbar/navbar";
import Home from "./pages/Dashboard/home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset" element={<ResetPass />} />
          <Route
            path="/"
            element={
              <>
                <div className="fixed top-0 left-0 right-0 w-screen z-50">
                  <Navbar />
                </div>
                <Home />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <div className="fixed top-0 left-0 right-0 w-screen z-50">
                  <Navbar />
                </div>
                <CompanyReg />
              </>
            }
          />
          <Route
            path="/drregister"
            element={
              <>
                <div className="fixed top-0 left-0 right-0 w-screen z-50">
                  <Navbar />
                </div>
                <DirectorReg />
              </>
            }
          />
          <Route
            path="/drupload"
            element={
              <>
                <div className="fixed top-0 left-0 right-0 w-screen z-50">
                  <Navbar />
                </div>
                <DirectorFileUpload />
              </>
            }
          />
          <Route
            path="/other"
            element={
              <>
                <div className="fixed top-0 left-0 right-0 w-screen z-50">
                  <Navbar />
                </div>
                <OtherDocumentsUpload />
              </>
            }
          />
          <Route
            path="/details"
            element={
              <>
                <div className="fixed top-0 left-0 right-0 w-screen z-50">
                  <Navbar />
                </div>
                <CompanyDetailRegistration />
              </>
            }
          />
          <Route
            path="/qutation"
            element={
              <>
                <div className="fixed top-0 left-0 right-0 w-screen z-50">
                  <Navbar />
                </div>
                <QuotationPage />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
