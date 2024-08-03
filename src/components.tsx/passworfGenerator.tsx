import { A } from "./PasswordModal";

export default function generatePassword(passwordConstraints  : A):string{

    if(!passwordConstraints.includeLowerCase && !passwordConstraints.includeUpperCase && !passwordConstraints.includeNumbers && !passwordConstraints.includeSymbols){
        return ""
    }
  
    const lowerCase="abcdefghijklmnopqrstuvwxyz"
    const upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    let characters = "";
    
    if (passwordConstraints.includeNumbers) characters += numbers;
    if (passwordConstraints.includeSymbols) characters += symbols;
    if(passwordConstraints.includeUpperCase) characters+=upperCase;
    if(passwordConstraints.includeLowerCase) characters+=lowerCase;
    let genPass=''
    for (let i = 0; i < passwordConstraints.length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        genPass += characters[randomIndex];
      }
      return genPass
    
      
}

