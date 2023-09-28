import { useEffect, useState } from 'react'
import './mainContainer.css'
interface IFormType {
    close: any;
    handleQuestions: any;
    edit?: any;
    deleteItem: any;

}

interface IFormInputs {
    value: string;
    inputs: {
        inputType: string;
        name: string;
        options?: string[];
    }[]

}





const FormMainContainer = ({ close, handleQuestions, edit, deleteItem }: IFormType) => {

    const [selected, setSelected] = useState<any>(null)
    const [finalValue, setFinalValue] = useState<any>(null)

    const ListValues: IFormInputs[] = [{

        value: "Paragraph",
        inputs: [
            {
                inputType: "text",
                name: "question"
            }
        ]
    },
    {
        value: "Video",
        inputs: [{
            inputType: "text",
            name: "question"
        },
        {
            inputType: "text",
            name: "additionalInfo",
        },
        {
            inputType: "number",
            name: "duration"
        },
        {
            inputType: "select",
            name: "time",
            options: ["Minutes", "Seconds"]
        }
        ]
    },
    {
        value: "Multiple Choice",
        inputs: [{
            inputType: "text",
            name: "question"
        },
        {
            inputType: "text",
            name: "additionalInfo",
        },
        ]
    },

    ]

    const handleChange = (value: any, form: any, selected: any) => {
        let entity;

        if (finalValue === null) {
            entity = {
                id: edit ? edit.id : Math.floor(Math.random() * 10),
                value: selected.value,
                inputs: [{
                    name: form.name,
                    values: value
                }]
            }
        }
        else {
            if (finalValue.value === selected.value) {
                const newForm = finalValue.inputs.filter((item: any) => item.name !== form.name)
                newForm.push({
                    name: form.name,
                    values: value
                })

                entity = {
                    id: edit ? edit.id : Math.floor(Math.random() * 10),
                    value: selected.value,
                    inputs: newForm
                }
            }
            else {
                entity = {
                    id: edit ? edit.id : Math.floor(Math.random() * 10),
                    value: selected.value,
                    inputs: [{
                        name: form.name,
                        values: value
                    }]
                }
            }
        }

        setFinalValue(entity)

    }

    const handleSelect = (value: string) => {
        const getData = ListValues.find(item => item.value === value)
        if (getData) {
            setSelected(getData)
        }
    }



    const handleSubmit = () => {
        handleQuestions(finalValue)
        close()
    }

    useEffect(() => {
        if (edit) {
            console.log(edit)
            const getData = ListValues.find((item: any) => item.value === edit.value)
            setSelected(getData)
            setFinalValue(edit)
        }
    }, [])


    return (
        <div className='mainContainer'>
            <div className='selectCont'>
                <select onChange={(e) => handleSelect(e.target.value)} value={selected && selected.value}>
                    <option value={""} >Select</option>
                    {ListValues.map(item => <option value={item.value} key={item.value}>{item.value}</option>)}
                </select>
            </div>

            <div>
                {selected ? selected?.inputs?.map((form: any, index: number) => form.inputType === "select" ?
                    <div style={{ color: 'red' }}>

                        <select key={index} onChange={(e) => handleChange(e.target.value, form, selected)} value={finalValue?.inputs.find((value: any) => value.name === form.name)?.values}>
                            {form.options.map((item: any) => <option value={item} key={item}>{item}</option>)}
                        </select>
                    </div>
                    : <input key={index} type={form.inputType} onChange={(e) => handleChange(e.target.value, form, selected)} value={finalValue?.inputs?.find((value: any) => value.name === form.name)?.values} />

                ) : <input type='text' disabled={true} />}
                {edit && <span onClick={() => {
                    deleteItem(edit.id)
                    close()
                }}>Delete</span>}
            </div>
            <div className='buttonCont'>
                <span className='saveButton' onClick={() => handleSubmit()}>Save</span>

            </div>
        </div>
    )
}

export default FormMainContainer