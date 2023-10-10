import { useState } from "react";
import InputBox from "./InputBox";
import UseConverter from "./UseConverter";

function App() {
  const [amount1, setAmount1] = useState("");
  const [converted, setconverted] = useState(0);
  const [currencyType1, SetCurrencyType1] = useState("usd");
  const [currencyType2, SetCurrencyType2] = useState("inr");

  const ans = UseConverter(currencyType1)[currencyType2];

  return (
    <div className="bg-[#4D5F94]  p-6 rounded-md bg-opacity-50 text-center sm:w-[550px] md:w-[650px] lg:w-[700px] max-h-md overflow-hidden mx-auto my-auto border-2 border-white">
      <InputBox
        className="bg-white"
        label="From"
        amount={amount1}
        setAmount={setAmount1}
        currencyType={currencyType1}
        SetCurrencyType={SetCurrencyType1}
        disable={false}
      />

      <InputBox
        label="To"
        amount={converted}
        setAmount={setconverted}
        currencyType={currencyType2}
        SetCurrencyType={SetCurrencyType2}
        disable={true}
      />
      <button
        onClick={() => setconverted(ans * amount1)}
        className="bg-blue-600 hover:bg-blue-700 text-white w-[400px] px-4 py-2 font-serif text-lg font-semibold border-[1px] border-blue-200 rounded-md"
      >
        Convert {currencyType1.toUpperCase()} to {currencyType2.toUpperCase()}
      </button>
    </div>
  );
}

export default App;
