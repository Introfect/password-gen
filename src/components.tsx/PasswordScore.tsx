
type Props = {
    score:Strength
}
type Strength = 'weak' | 'medium' | 'strong';
function PasswordScore({score}: Props) {
  const getStrengthColor = (): string => {
    switch (score) {
      case 'weak': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'strong': return 'bg-green-500';
      default: return 'bg-gray-300';
    }
  };


  const filledBars: Record<Strength, number> = {
    weak: 1,
    medium: 3,
    strong: 4
  };


  return (
    <div className="flex items-center justify-between bg-gray-800 p-2 rounded">
      <span className="text-gray-400 uppercase text-sm">Strength</span>
      <div className="flex items-center space-x-2">
        <span className="text-white uppercase">{score}</span>
        <div className="flex space-x-1">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className={`w-2 h-5 ${index < filledBars[score] ? getStrengthColor() : 'bg-gray-600'}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PasswordScore