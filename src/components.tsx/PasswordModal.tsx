import { useReducer, useState } from "react";
import GeneratedPass from "./GeneratedPass";
import InputControll from "./InputControll";
import PasswordScore from "./PasswordScore";
import generatePassword from "./passwordGenerator";
import calculateStrength from "./strength";
import passwordConstraintsReducer from "./passwordConstraintsReducer";

type Props = {};
export type passwordConstraintsType = {
  passwordLength: number;
  includeUpperCase: boolean;
  includeLowerCase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
};
const initialConstraints: passwordConstraintsType = {
  passwordLength: 10,
  includeUpperCase: true,
  includeLowerCase: false,
  includeNumbers: true,
  includeSymbols: false,
};

export default function PasswordModal({}: Props) {
  const [passwordConstraints, dispatch] = useReducer(
    passwordConstraintsReducer,
    initialConstraints
  );

  const newPassword = generatePassword(passwordConstraints);
  const [generatedPassword, setGeneratedPassword] =
    useState<string>(newPassword);
  const strength = calculateStrength(generatedPassword);

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(passwordConstraints);
    setGeneratedPassword(newPassword);
  };

  return (
    <div className="text-white w-96">
      <GeneratedPass password={generatedPassword} />
      <InputControll
        dispatch={dispatch}
        passwordConstraints={passwordConstraints}
      >
        <PasswordScore score={strength} />
      </InputControll>

      <button
        className="w-full bg-green-300 py-2 font-mono text-blackcursor-pointer"
        onClick={handleGeneratePassword}
      >
        <p>GENERATE </p>
      </button>
    </div>
  );
}
