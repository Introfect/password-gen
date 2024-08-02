export default function generatePassword({includeLowercase, includeNumbers, includeSymbols, includeUppercase, length } : {length:number,includeLowercase:boolean, includeUppercase:boolean,includeNumbers:boolean,includeSymbols:boolean}):string{

    let genPass=''
    if(!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols){
        return ""
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
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        genPass += characters[randomIndex];
      }
    //   setGeneratedPassword(genPass)
    //   setStrength(calculateStrength(genPass))
    let newPass=genPass
      return newPass
      
      
}