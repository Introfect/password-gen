import { Copy } from "lucide-react";

type Props = {
    pass:string
}

function GeneratedPass({pass}: Props) {
    const handleCopy = () => {
        try {
          navigator.clipboard.writeText(pass)
        } catch (error) {
          console.error('Unable to copy to clipboard:', error);
        }
      };
  return (
    <div  className="text-2xl font-mono mb-4 bg-gray-700 p-2 rounded flex justify-between">
    <div>{pass}</div>
    <button className="text-white" onClick={handleCopy}>
    <Copy />
    </button>

    </div>
 
  )
}

export default GeneratedPass