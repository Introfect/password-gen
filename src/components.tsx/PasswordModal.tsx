import {  useReducer, useState } from "react"
import GeneratedPass from "./GeneratedPass"
import InputControll from "./InputControll"
import PasswordScore from "./PasswordScore"
import generatePassword from "./passworfGenerator"
import calculateStrength from "./strength"
import passwordConstraintsReducer from "./passwordConstraintsReducer"

type Props = {}
export type A = {
    length:number,
    includeUpperCase:boolean,
    includeLowerCase:boolean,
    includeNumbers:boolean,
    includeSymbols:boolean
}
const initialConstraints:A ={
    length:10,
    includeUpperCase:true,
    includeLowerCase:false,
    includeNumbers:true,
    includeSymbols:false,

}


export default function PasswordModal({}: Props) { 
    const [passwordConstraints, dispatch] = useReducer(passwordConstraintsReducer, initialConstraints)
    const [generatedPassword, setGeneratedPassword]=useState<string>(generatePassword(passwordConstraints))
    const strength=calculateStrength(generatedPassword)
    
  return (
      <div className="text-white w-96">
        <GeneratedPass pass={generatedPassword}/>
        <InputControll 
        dispatch={dispatch}
        passwordConstraints={passwordConstraints}
        >
        <PasswordScore score={strength}/>
        </InputControll>

        <button 
        className="w-full bg-green-300 py-2 font-mono text-blackcursor-pointer"
        onClick={()=>{
            const newPassword=generatePassword(passwordConstraints)
            setGeneratedPassword(newPassword)
            }}>
            <p>GENERATE </p>
        </button>
    </div>
  )
}