import Navbar from "./shared/Navbar/Navbar";
import ProgressBar from "./shared/ProgressBar/ProgressBar";
import { Routes,Route } from 'react-router-dom'
import './App.css'
import ProgramDetails from "./pages/ProgramDetails/ProgramDetails";
import ApplicationForm from "./pages/ApplicationForm/ApplicationForm";
import Workflow from "./pages/Workflow/Workflow";
import Preview from "./pages/Preview/Preview";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="Container">
      <div className="NavbarContainer">
        <Navbar />
      </div>
      <div className="Main">
        <div className="ProgressBarContainer">
          <ProgressBar />
        </div>
        <div className="Pages">
          <Routes>
            <Route>
              <Route path="/" element={<ApplicationForm />} />
              <Route path="/program" element={<ProgramDetails />} />
              <Route path="/workflow" element={<Workflow />} />
              <Route path="/preview" element={<Preview />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
