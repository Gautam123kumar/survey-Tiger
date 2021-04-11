import React, { useState } from 'react'
import Options from './Options'
import Questions from './Questions'
import TypeSelector from './TypeSelector'

function CreateSurvey({squestion}) {

    const getRandom = () =>{return Math.floor((Math.random()*1000) + 1);}
    const [qText , setQtext] = useState('');
    const[qType , setQtype] = useState(0);
    const[options,setOptions] = useState([{uid:getRandom(),value:''},
    {uid:getRandom(),value:''}]
    );


    const addOptions = () => {
        let newOption = {
            uid : getRandom(),
            value :''
        }
        let updatedOptions = [...options];
        updatedOptions.push(newOption);
        setOptions(updatedOptions);
    }
    const deletOptions = ()=>{
        if(options.length == 2){
            alert("Enter A select type question should have atleast 2 questions")
        }else{
            let updatedOptions =[...options];
            updatedOptions.pop();
            setOptions(updatedOptions);
        }
    }
    const updateOptionText =(id,text)=>{
        let updatedOptions = {...options};
        let changeIndex = updatedOptions.findIndex(x=>x.uid==id);
        updatedOptions[changeIndex].value = text;
        setOptions(updatedOptions);
    }

    return (
        <>
            <TypeSelector qType={qType} setQtype={setQtype } />
            {qType !== 0 ? 
            <>
                <Questions />
                {options.map((opt , key)=>(
                    <>
                        <Options
                            key ={key}
                            uid = {opt.uid} 
                            addOptions={addOptions}
                            deletOptions  = {deletOptions}
                            updateText = {updateOptionText}
                        />
                    </>
                ))}
                
                
            </>
            : null}
            
        </>
    )
}

export default CreateSurvey
