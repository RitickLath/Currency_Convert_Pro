import React, { memo } from "react";
import UseConverter from "./UseConverter";

function InputBox({
  label,
  amount,
  setAmount,
  currencyType = "inr",
  SetCurrencyType,
  disable,
}) {
  const currencyData = UseConverter(currencyType);
  const currencies = Object.keys(currencyData);

  const selectChange = (e) => {
    SetCurrencyType(e.target.value);
    if (disable) {
      setAmount(0);
    }
  };

  return (
    <div className="mb-8 rounded-md  bg-white border-2 border-white p-4 ">
      <div className="flex justify-between py-2 font-semibold text-lg">
        <label className="text-gray-400">{label}</label>
        <h2 className="text-gray-400">Currency Type</h2>
      </div>

      <div className="flex justify-between px-2 py-2 font-semibold text-lg">
        <input
          disabled={disable}
          className="px-4 border-[1px]  rounded-md w-[200px] h-[35px]"
          type="number"
          placeholder="Enter the Amount"
          value={amount}
          onChange={(e) => Number(setAmount(e.target.value))}
        />
        <select
          className="bg-gray-200 rounded-md p-2 w-[100px]"
          value={currencyType}
          onChange={(e) => selectChange(e)}
        >
          {currencies.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default memo(InputBox);
