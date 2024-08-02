import { ReactNode } from "react"

type Props = {
    length:number,
    includeUppercase:boolean,
    includeLowercase:boolean,
    includeNumbers:boolean,
    includeSymbols:boolean,
    handleConstraints:Function,
    children:ReactNode

}

function InputControll({length,includeUppercase,includeLowercase,includeNumbers,includeSymbols,handleConstraints,children}: Props) {;
  return (
    <div className="text-md px-4 font-mono w-full mb-4 bg-gray-700 p-2 rounded">
   <div className="mb-4">
    <div className="flex justify-between">
    <label className="block mb-2">Character Length</label>
    <span className="text-green-300 font-bold text-xl items-center">{length}</span>

    </div>
    
    <div></div>
    <input 
      type="range" 
      min="1" 
      max="20" 
      value={length}
      onChange={(e) => handleConstraints(Number(e.target.value))}
      className="w-full"
    />
    
  </div>

  <div className="space-y-2 mb-4">
    <label className="flex items-center">
      <input 
        type="checkbox" 
        checked={includeUppercase} 
        onChange={() => handleConstraints("upper")}
        className="w-4 h-4 mr-2 accent-green-300"
      />
      Include Uppercase Letters
    </label>
    <label className="flex items-center">
      <input 
        type="checkbox" 
        checked={includeLowercase} 
        onChange={() => handleConstraints("lower")}
        className="w-4 h-4 mr-2 accent-green-300"
      />
      Include Lowercase Letters
    </label>
    <label className="flex items-center">
      <input 
        type="checkbox" 
        checked={includeNumbers} 
        onChange={() => handleConstraints("number")}
        className="w-4 h-4 mr-2 accent-green-300"
      />
      Include Numbers
    </label>
    <label className="flex items-center">
      <input 
        type="checkbox" 
        checked={includeSymbols} 
        onChange={() => handleConstraints("symbols")}
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