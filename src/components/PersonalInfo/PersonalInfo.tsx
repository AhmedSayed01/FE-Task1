import './PersonalInfo.css'
import { useState, useEffect } from 'react';
// import axios from 'axios';
import FormMainContainer from './forms/mainContainer';
const PersonalInfo = () => {
    const [showStates, setShowStates] = useState<boolean[]>([false, false, false]);
    const [openForm, setOpenForm] = useState<boolean>(false)
    const [questions, setQuestions] = useState<any>([])
    const [selected, setSelected] = useState<any>()

    // Function to toggle the visibility of a specific span based on index
    const toggleVisibility = (index: number) => {
        setShowStates((prevStates) => {
            const newStates = [...prevStates];
            newStates[index] = !newStates[index];
            return newStates;
        });
    };
    // var a:any= [];
    // const getData = async ()=>{
    //     setNewQState(a);
    //     console.log(a);
    // }

    // useEffect(() => {
    //     axios.get('http://127.0.0.1:4010/api/402.05227295662337/programs/sint/application-form')
    //     .then((res)=>{
    //         console.log(res.data.data.attributes.personalInformation);
    //         setNewQState(res.data.data.attributes.personalInformation[0]);

    //     })
    // },[])
    // a = [...a,res.data.data.attributes.personalInformation]

    // getData();
    // const addQuestion = () =>{
    //     setNewQState(['<div><h1>hello</h1></div>']);
    // }

    useEffect(() => {
        console.log(questions)
    }, [questions])


    const handleQuestions = (element: any) => {
        const findQuestion = questions.filter((item: any) => item.id !== element.id)
        findQuestion.push(element)
        setQuestions(findQuestion)
    }

    const handleQuestionsDelete = (id: any) => {
        const findQuestion = questions.filter((item: any) => item.id !== id)
        setQuestions(findQuestion)
    }

    return (
        <div className="formContainer">
            <div className='formHeaderCover'>
                <h2 className='formHeader'>Personal Information</h2>
            </div>
            <div className='formDetails'>
                <form action="">
                    <label htmlFor="firstName">First Name</label>
                    <br />
                    <input type="text" id="firstName" />
                    <br />
                    <br />
                    <label htmlFor="lastName">Last Name</label>
                    <br />
                    <input type="text" id="lastName" />
                    <br />
                    <br />
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="text" id="email" />
                    <br />
                    <br />
                    <div className="labelsContainer">
                        <div className='firstSec'>
                            <label htmlFor="phone">Phone <span style={{ fontSize: '12px' }}>(without dial code)</span></label>
                        </div>
                        <div className='secSec'>
                            <label className="check-container">
                                <input type="checkbox" className="check" />
                                <span>Internal</span>
                            </label>
                            <label className='cont'>
                                <input type="checkbox" />
                                <div onClick={() => toggleVisibility(0)} className='switch'></div>
                            </label>
                            <span>{showStates[0] ? 'Show' : 'Hide'}</span>
                        </div>
                    </div>
                    <input type="text" id="phone" />
                    <br />
                    <br />
                    <div className="labelsContainer">
                        <div className='firstSec'>
                            <label htmlFor="nation">Nationality</label>
                        </div>
                        <div className='secSec'>
                            <label className="check-container">
                                <input type="checkbox" className="check" />
                                <span>Internal</span>
                            </label>
                            <label className='cont'>
                                <input type="checkbox" />
                                <div onClick={() => toggleVisibility(1)} className='switch'></div>
                            </label>
                            <span>{showStates[1] ? 'Show' : 'Hide'}</span>
                        </div>
                    </div>
                    <input type="text" id="nation" />
                    <br />
                    <br />
                    <div className="labelsContainer">
                        <div className='firstSec'>
                            <label htmlFor="curRes">Current Residence</label>
                        </div>
                        <div className='secSec'>
                            <label className="check-container">
                                <input type="checkbox" className="check" />
                                <span>Internal</span>
                            </label>
                            <label className='cont'>
                                <input type="checkbox" />
                                <div onClick={() => toggleVisibility(2)} className='switch'></div>
                            </label>
                            <span>{showStates[2] ? 'Show' : 'Hide'}</span>
                        </div>
                    </div>
                    <input type="text" id="curRes" />
                    <br />
                    <br />
                    <div className="labelsContainer">
                        <div className='firstSec'>
                            <label htmlFor="idNum">ID Number</label>
                        </div>
                        <div className='secSec'>
                            <label className="check-container">
                                <input type="checkbox" className="check" />
                                <span>Internal</span>
                            </label>
                            <label className='cont'>
                                <input type="checkbox" />
                                <div onClick={() => toggleVisibility(3)} className='switch'></div>
                            </label>
                            <span>{showStates[3] ? 'Show' : 'Hide'}</span>
                        </div>
                    </div>
                    <input type="text" id="idNum" />
                    <br />
                    <br />
                    <div className="labelsContainer">
                        <div className='firstSec'>
                            <label htmlFor="dob">Date of Birth</label>
                        </div>
                        <div className='secSec'>
                            <label className="check-container">
                                <input type="checkbox" className="check" />
                                <span>Internal</span>
                            </label>
                            <label className='cont'>
                                <input type="checkbox" />
                                <div onClick={() => toggleVisibility(4)} className='switch'></div>
                            </label>
                            <span>{showStates[4] ? 'Show' : 'Hide'}</span>
                        </div>
                    </div>
                    <input type="text" id="dob" />
                    <br />
                    <br />
                    <div className="labelsContainer">
                        <div className='firstSec'>
                            <label htmlFor="gender">Gender</label>
                        </div>
                        <div className='secSec'>
                            <label className="check-container">
                                <input type="checkbox" className="check" />
                                <span>Internal</span>
                            </label>
                            <label className='cont'>
                                <input type="checkbox" />
                                <div onClick={() => toggleVisibility(5)} className='switch'></div>
                            </label>
                            <span>{showStates[5] ? 'Show' : 'Hide'}</span>
                        </div>
                    </div>
                    <input type="text" id="gender" />
                    <br />
                    <br />
                    <div className='addedQues'>
                        {questions.length > 0 ? questions.map((item: any, index: number) => <div key={index}>
                            <p>{item.value}</p>
                            <div className='addedQuesSec'>
                                {item.inputs.map((q: any) => q.name === "question" ? <h3>{q.values}</h3> : null)}
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
                    {/* <div className='addQ'>
                        <h1>
                            {newQState && newQState.map((q:any)=>{
                                <div key={q.id}>
                                    <h1>{q.firstName}</h1>
                                </div>
                            })}
                        </h1>
                    </div> */}
                </form>
            </div>
        </div>
    )
}

export default PersonalInfo