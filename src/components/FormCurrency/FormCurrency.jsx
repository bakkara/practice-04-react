import React from "react";

export const FormCurrency = () => {
  const hendleSubmit = (evt) => {
    evt.preventDefault();

    const { currency } = evt.currentTarget.elements;

    const [amount, from, to] = currency.value.split(" ");
    console.log(amount, from, to);
  };

  return (
    <form onSubmit={hendleSubmit}>
      <label htmlFor="">
        <input
          name="currency"
          required
          type="text"
          placeholder="15 USD in UAH"
        />
      </label>
      <button type="submit">Convert</button>
    </form>
  );
};
