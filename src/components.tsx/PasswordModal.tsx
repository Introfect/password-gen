import {  useState } from "react"
import GeneratedPass from "./GeneratedPass"
import InputControll from "./InputControll"
import PasswordScore from "./PasswordScore"

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
    const [generatedPassword, setGeneratedPassword]=useState<string>("")
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(false);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const [strength,setStrength] =useState<'weak' | 'medium' | 'strong' | "">('');
    const handleConstraints=(type:any)=>{
        if(type==="upper"){
            setIncludeUppercase(!includeUppercase)
        }else if(type==="number"){
            setIncludeNumbers(!includeNumbers)
        }else if(type==="symbols"){
            setIncludeSymbols(!includeSymbols)
        }else if(type==="lower"){
            setIncludeLowercase(!includeLowercase)
        }else{
            setLength(type)
        }
    }

    const alphabet = '';
    const lowerCase="abcdefghijklmnopqrstuvwxyz"
    const upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    let characters = alphabet;
    
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;
    if(includeUppercase) characters+=upperCase;
    if(includeLowercase) characters+=lowerCase;

    let genPass=''
    let passwordScore=''
const generatePassword=()=>{
    console.log("click")
    if(!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols){
        console.log("no")
        return
    }
  
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        genPass += characters[randomIndex];
      }
      setGeneratedPassword(genPass)
      setStrength(calculateStrength(genPass))
      genPass=''
      
}
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
  
  console.log(passwordScore,"scoress")
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
        onClick={generatePassword}>
            <p>GENERATE </p>
        </button>
    </div>
  )
}