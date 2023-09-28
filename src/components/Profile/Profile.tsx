import { useState } from 'react'
import FormMainContainer from '../PersonalInfo/forms/mainContainer';

const Profile = () => {
    const [showStates, setShowStates] = useState<boolean[]>([false, false, false]);
    const [openForm, setOpenForm] = useState<boolean>(false)
    const [selected, setSelected] = useState<any>()
    const [questions,setQuestions] = useState<any>([])

    const handleQuestions = (element: any) => {
        const findQuestion = questions.filter((item: any) => item.id !== element.id)
        findQuestion.push(element)
        setQuestions(findQuestion)
    }

    const handleQuestionsDelete = (id: any) => {
        const findQuestion = questions.filter((item: any) => item.id !== id)
        setQuestions(findQuestion)
    }
    const toggleVisibility = (index: number) => {

        setShowStates((prevStates: any) => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };
    return (
        <div className="formContainer">
            <div className='formHeaderCover'>
                <h2 className='formHeader'>Profile</h2>
            </div>
            <div className='formDetails'>
                <form action="">

                    <div className="labelsContainer">
                        <div className='firstSec'>
                            <label htmlFor="education">Education </label>
                        </div>
                        <div className='secSec'>
                            <label className="check-container">
                                <input type="checkbox" className="check" />
                                <span>Mandatory</span>
                            </label>
                            <label className='cont'>
                                <input type="checkbox" />
                                <div onClick={() => toggleVisibility(0)} className='switch'></div>
                            </label>
                            <span>{showStates[0] ? 'Show' : 'Hide'}</span>
                        </div>
                    </div>
                    <input type="text" id="education" />
                    <br />
                    <br />
                    <div className="labelsContainer">
                        <div className='firstSec'>
                            <label htmlFor="experience">Experience </label>
                        </div>
                        <div className='secSec'>
                            <label className="check-container">
                                <input type="checkbox" className="check" />
                                <span>Mandatory</span>
                            </label>
                            <label className='cont'>
                                <input type="checkbox" />
                                <div onClick={() => toggleVisibility(0)} className='switch'></div>
                            </label>
                            <span>{showStates[1] ? 'Show' : 'Hide'}</span>
                        </div>
                    </div>
                    <input type="text" id="experience" />
                    <br />
                    <br />
                    <div className="labelsContainer">
                        <div className='firstSec'>
                            <label htmlFor="resume">Resume </label>
                        </div>
                        <div className='secSec'>
                            <label className="check-container">
                                <input type="checkbox" className="check" />
                                <span>Mandatory</span>
                            </label>
                            <label className='cont'>
                                <input type="checkbox" />
                                <div onClick={() => toggleVisibility(0)} className='switch'></div>
                            </label>
                            <span>{showStates[2] ? 'Show' : 'Hide'}</span>

                        </div>
                    </div>
                    <br />
                    <div className='addedQues'>
                        {questions.length > 0 ? questions.map((item: any, index: number) => <div key={index}>
                            <p>{item.value}</p>
                            <div className='addedQuesSec'>
                                {item.inputs.map((q: any, i: number) => q.name === "question" ? <h3>{q.values}</h3> : null)}
                                <button onClick={() => {
                                    setOpenForm(true)
                                    setSelected(item)
                                }
                                } >edit</button>
                            </div>
                            <hr />
                        </div>) : null}
                    </div>
                    <div className='addQ'>
                        
                        {openForm ? <FormMainContainer edit={selected} close={() => setOpenForm(false)} handleQuestions={(e: any) => handleQuestions(e)} deleteItem={(e: any) => handleQuestionsDelete(e)} /> : <span onClick={() => setOpenForm(true)}><span>+</span> Add a question</span>}
                    </div>
                </form>
                <br />
                <br />
            </div >
        </div >
    )
}

export default Profile