import { A } from "./PasswordModal";

export default function passwordConstraintsReducer(constraints: A, action: { type: string; value:number}): A{
    switch(action.type){
        case 'includeUpperCase':{
            return{
                ...constraints,
                includeUpperCase:!constraints.includeUpperCase
            }
        }
        case 'includeLowerCase':{
            return{
                ...constraints,
                includeLowerCase:!constraints.includeLowerCase
            }
        }
        case 'includeSymbols':{
            return{
                ...constraints,
                includeSymbols:!constraints.includeSymbols
            }
        }
        case 'includeNumbers':{
            return{
                ...constraints,
                includeNumbers:!constraints.includeNumbers
            }
        }
        case 'changeLength':{
            return{
                ...constraints,
                length:action.value

            }
        }
        default:{
            throw new Error("case not defined")
        }
    }
}