import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ProgressBar.css'

const ProgressBar = () => {
    const [page, setPage] = useState(1);
    return (
        <div className="ProgressBar">
            <Link className={page === 0 ? 'green' : 'notGreen'} onClick={() => setPage(0)} to="/program"><section><h3> Program Details</h3></section></Link>
            <Link className={page === 1 ? 'green' : 'notGreen'} onClick={() => setPage(1)} to="/"><section><h3>Application Form</h3></section></Link>
            <Link className={page === 2 ? 'green' : 'notGreen'} onClick={() => setPage(2)} to="/workflow"><section><h3>Workflow</h3></section></Link>
            <Link className={page === 3 ? 'lastGreen' : 'notGreen'} onClick={() => setPage(3)} to="/preview"><section><h3>Preview</h3></section></Link>
        </div>
    )
}

export default ProgressBar