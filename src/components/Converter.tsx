import { useEffect, useState } from "react";
import { getRate, getQuotes, StringArray } from "../api/service";

function Converter() {
  const [formData, setFormData] = useState<FormDataType>({} as FormDataType);
  const [rate, setRate] = useState<number>(0);
  const [quotes, setQuotes] = useState<StringArray>([]);

  useEffect(() => {
    let mounted: boolean = true;
    if (mounted) {
      getQuotes<StringArray>().then((data) => setQuotes(data));
    }
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <form className="2xl:w-2/4 md:w-3/4 mx-auto" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Convert</legend>
        <div className="flex items-center justify-between">
          <div className="mt-4">
            <label className="block" htmlFor="from">
              From
            </label>
          <select
            className="bg-transparent p-2"
            id="from"
            name="from"
            onChange={handleChange}
            value={formData.from || ""}
          >
            {quotes.map((quote) => (
              <option key={quote} value={quote}>
                {quote}
              </option>
            ))}
          </select>
          </div>
          <div className="mt-4">
            <label className="block" htmlFor="amount">Amount</label>
            <input
              className="border border-river-bed p-2 rounded"
              id="amount"
              min={0.0}
              name="amount"
              onChange={handleChange}
              step="any"
              type="number"
              value={formData.amount || 0}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="mt-4" >
            <label className="block" htmlFor="to">
          To
          </label>
          <select
            className="bg-transparent p-2"
            id="to"
            name="to"
            onChange={handleChange}
            value={formData.to || ""}
          >
            {quotes.map((quote) => (
              <option key={quote} value={quote}>
                {quote}
              </option>
            ))}
          </select>
          </div>
          <div className="mt-4">
            <label className="block" htmlFor="rate">Rate</label>
            <input
              className="border border-river-bed p-2 rounded"
              id="rate"
              readOnly
              step="any"
              type="number"
              value={rate}
            />
          </div>
        </div>
      </fieldset>
      <div className="flex justify-end my-4">
        <button
          className="bg-azure-radiance p-2 rounded text-white"
          type="submit"
        >
          See Rate
        </button>
      </div>
    </form>
  );

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
  ): void {
    const name: string = event.target.name;
    const value: string = event.target.value;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    getRate<number>(formData.amount, formData.from, formData.to).then((data) =>
      setRate(data)
    );
  }
}

interface FormDataType {
  amount: number;
  from: string;
  to: string;
}

export default Converter;
