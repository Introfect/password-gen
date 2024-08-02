import {  useState } from "react"
import GeneratedPass from "./GeneratedPass"
import InputControll from "./InputControll"
import PasswordScore from "./PasswordScore"
import generatePassword from "./hello"

type Props = {}

export default function PasswordModal({}: Props) {
    // const [generatedPassword, setGeneratedPassword]=useState('fqeiniend')
    // const [constraints, setConstraints]=useState({
    //     length:10,
    //     upperCase:false,
    //     lowerCase:false,
    //     symbols:true,
    //     numbers:false
    // })
    
    const [length,setLength]=useState<number>(10)
    
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [strength,setStrength] =useState<'weak' | 'medium' | 'strong' | "">('');


    const [generatedPassword, setGeneratedPassword]=useState<string>(generatePassword({length,includeLowercase,includeUppercase,includeNumbers,includeSymbols}))

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



    let genPass=''
    let passwordScore=''

function calculateStrength(password:string) {
    let score = 0;
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/\d/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) score++;
    if (score <= 2) {
      return "weak";
    } else if (score <= 4) {
      return "medium";
    } else {
      return "strong";
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
        onClick={()=>setGeneratedPassword(generatePassword({includeLowercase, includeNumbers, includeSymbols, includeUppercase, length}))}>
            <p>GENERATE </p>
        </button>
    </div>
  )
}