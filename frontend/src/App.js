import { Route, Routes, useLocation } from "react-router-dom";
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
import ComapnyRegSheet from "./pages/Sheets/comapnyReg";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <div className="App bg-slate-50 h-full overflow-scroll">
      <Navbar />
      <Routes location={background || location}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset" element={<ResetPass />} />
        <Route
          path="/"
          element={
            <>
              <div></div>
              <Home />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <div></div>
              <div className="flex flex-col justify-center">
                <CompanyReg />
                <ComapnyRegSheet />
              </div>
            </>
          }
        />
        <Route
          path="/drregister"
          element={
            <>
              <div></div>
              <DirectorReg />
            </>
          }
        />
        <Route
          path="/drupload"
          element={
            <>
              <div></div>
              <DirectorFileUpload />
            </>
          }
        />
        <Route
          path="/other"
          element={
            <>
              <div></div>
              <OtherDocumentsUpload />
            </>
          }
        />
        <Route
          path="/details"
          element={
            <>
              <div></div>
              <CompanyDetailRegistration />
            </>
          }
        />
        <Route
          path="/qutation"
          element={
            <>
              <QuotationPage />
            </>
          }
        />
      </Routes>
      {background && (
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div></div>
                <Home />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <div></div>
                <div className="flex flex-col justify-center">
                  <CompanyReg />
                  <ComapnyRegSheet />
                </div>
              </>
            }
          />
          <Route
            path="/drregister"
            element={
              <>
                <div></div>
                <DirectorReg />
              </>
            }
          />
          <Route
            path="/drupload"
            element={
              <>
                <div></div>
                <DirectorFileUpload />
              </>
            }
          />
          <Route
            path="/other"
            element={
              <>
                <div></div>
                <OtherDocumentsUpload />
              </>
            }
          />
          <Route
            path="/details"
            element={
              <>
                <div></div>
                <CompanyDetailRegistration />
              </>
            }
          />
          <Route
            path="/qutation"
            element={
              <>
                <QuotationPage />
              </>
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
