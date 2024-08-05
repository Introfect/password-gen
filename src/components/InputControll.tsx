import { Dispatch, ReactNode } from "react";
import { passwordConstraintsType } from "./PasswordModal";

type Props = {
  dispatch: Dispatch<{ type: string; value: number }>;
  passwordConstraints: passwordConstraintsType;
  children: ReactNode;
};

function InputControll({ dispatch, passwordConstraints, children }: Props) {
  const handleDispatch = (type: string, value: number) => {
    dispatch({
      type,
      value,
    });
  };
  const constraintsConstants = [
    {
      text: "Include Uppercase Letters",
      checked: passwordConstraints.includeUpperCase,
      dispatchValue: {
        type: "includeUpperCase",
        value: 0,
      },
    },
    {
      text: "Include Lower Case",
      checked: passwordConstraints.includeLowerCase,
      dispatchValue: {
        type: "includeLowerCase",
        value: 0,
      },
    },
    {
      text: "Include Numbers",
      checked: passwordConstraints.includeNumbers,
      dispatchValue: {
        type: "includeNumbers",
        value: 0,
      },
    },
    {
      text: "Include Symbols",
      checked: passwordConstraints.includeSymbols,
      dispatchValue: {
        type: "includeSymbols",
        value: 0,
      },
    },
  ];
  return (
    <div className="text-md px-4 font-mono w-full mb-4 bg-gray-700 p-2 rounded">
      <div className="mb-4">
        <div className="flex justify-between">
          <label className="block mb-2">Character Length</label>
          <span className="text-green-300 font-bold text-xl items-center">
            {passwordConstraints.passwordLength}
          </span>
        </div>
        <input
          type="range"
          min="1"
          max="20"
          value={passwordConstraints.passwordLength}
          onChange={(e) =>
            handleDispatch("changeLength", Number(e.target.value))
          }
          className="w-full"
        />
      </div>

      <div className="space-y-2 mb-4">
        {constraintsConstants.map((item) => {
          return (
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() =>
                  handleDispatch(
                    item.dispatchValue.type,
                    item.dispatchValue.value
                  )
                }
                className="w-4 h-4 mr-2 accent-green-300"
              />
              {item.text}
            </label>
          );
        })}
      </div>
      {children}
    </div>
  );
}

export default InputControll;
