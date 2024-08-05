import { Dispatch, ReactNode } from "react"
import { A } from "./PasswordModal"

type Props = {
    dispatch: Dispatch<{type: string; value: number}>
    passwordConstraints:A
    children:ReactNode

}

function InputControll({dispatch,passwordConstraints,children}: Props) {
  return (
    <div className="text-md px-4 font-mono w-full mb-4 bg-gray-700 p-2 rounded">
   <div className="mb-4">
    <div className="flex justify-between">
    <label className="block mb-2">Character Length</label>
    <span className="text-green-300 font-bold text-xl items-center">{passwordConstraints.length}</span>

    </div>
    
    <div></div>
    <input 
      type="range" 
      min="1" 
      max="20" 
      value={passwordConstraints.length}
      onChange={(e) =>
        dispatch({
          type:"changeLength",
          value:Number(e.target.value)
      }) 

      }
      className="w-full"
    />
    
  </div>

  <div className="space-y-2 mb-4">
    <label className="flex items-center">
      <input 
        type="checkbox" 
        checked={passwordConstraints.includeUpperCase} 
        onChange={() => dispatch({
          type:"includeUpperCase",
          value:0
      })}
        className="w-4 h-4 mr-2 accent-green-300"
      />
      Include Uppercase Letters
    </label>
    <label className="flex items-center">
      <input 
        type="checkbox" 
        checked={passwordConstraints.includeLowerCase} 
        onChange={() => dispatch({
          type:"includeLowerCase",
          value:0
      })}
        className="w-4 h-4 mr-2 accent-green-300"
      />
      Include Lowercase Letters
    </label>
    <label className="flex items-center">
      <input 
        type="checkbox" 
        checked={passwordConstraints.includeNumbers} 
        onChange={() => dispatch({
          type:"includeNumbers",
          value:0
      })}
        className="w-4 h-4 mr-2 accent-green-300"
      />
      Include Numbers
    </label>
    <label className="flex items-center">
      <input 
        type="checkbox" 
        checked={passwordConstraints.includeSymbols} 
        onChange={() => dispatch({
          type:"includeSymbols",
          value:0
      })}
        className="w-4 h-4 mr-2 accent-green-300"
      />
      Include Symbols
    </label>
  </div>
  {children}
    </div>
 
  )
}

export default InputControll