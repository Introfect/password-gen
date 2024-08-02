import {  useState } from "react"
import GeneratedPass from "./GeneratedPass"
import InputControll from "./InputControll"
import PasswordScore from "./PasswordScore"
import generatePassword from "./hello"
import calculateStrength from "./strength"

type Props = {}

export default function PasswordModal({}: Props) { 
    const [length,setLength]=useState<number>(10)
    
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [generatedPassword, setGeneratedPassword]=useState<string>(generatePassword({length,includeLowercase,includeUppercase,includeNumbers,includeSymbols}))
    const [strength,setStrength] =useState<'weak' | 'medium' | 'strong' | "">(calculateStrength(generatedPassword));
    const handleConstraints=(type:string| number)=>{
        if(type==="upper"){
            setIncludeUppercase(!includeUppercase)
        }else if(type==="number"){
            setIncludeNumbers(!includeNumbers)
        }else if(type==="symbols"){
            setIncludeSymbols(!includeSymbols)
        }else if(type==="lower"){
            setIncludeLowercase(!includeLowercase)
        }else if(typeof type =="number"){
            setLength(type)
        }else {
            return
        }
    }
  return (
      <div className="text-white w-96">
        <GeneratedPass pass={generatedPassword}/>
        <InputControll 
        length={length} 
        includeUppercase={includeUppercase} 
        includeLowercase={includeLowercase} 
        includeNumbers={includeNumbers} 
        includeSymbols={includeSymbols} 
        handleConstraints={handleConstraints}
        >
        <PasswordScore score={strength}/>
        </InputControll>

        <button 
        className="w-full bg-green-300 py-2 font-mono text-blackcursor-pointer"
        onClick={()=>{
            const newPassword=generatePassword({includeLowercase, includeNumbers, includeSymbols, includeUppercase, length})
            setGeneratedPassword(newPassword)
            setStrength(calculateStrength(newPassword))
            }}>
            <p>GENERATE </p>
        </button>
    </div>
  )
}