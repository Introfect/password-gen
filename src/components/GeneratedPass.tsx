import { Copy } from "lucide-react";

type Props = {
  password: string;
};

function GeneratedPass({ password }: Props) {
  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(password);
    } catch (error) {
      console.error("Unable to copy to clipboard:", error);
    }
  };
  return (
    <div className="text-2xl font-mono mb-4 bg-gray-700 p-2 rounded flex justify-between">
      <div>{password}</div>
      <button className="text-white" onClick={handleCopy}>
        <Copy />
      </button>
    </div>
  );
}

export default GeneratedPass;
