
import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
const CurrencyMenu = () => {
    const { dispatch } = useContext(AppContext);
    const [currency, setCurrency] = useState('Pound');

    function handleChange(value) {
        setCurrency(value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value
        });
    }

    function getCurrency(c) {
        switch (c) {
            case "£":
                return "Pound";
            case "$":
                return "Dollar";
            case "€":
                return "Euro";
            case "₹":
                return "Ruppee";

        }

    }
    return (
        <>
            <select id="inputGroupSelect03" style={{ color: 'white', backgroundColor: "green", }} onChange={(event) => handleChange(event.target.value)}>
                <option defaultValue value="none" disabled >Currency ({getCurrency(currency)})</option>
                <option value="£" name="Pound" style={{ color: 'white', backgroundColor: "red", }} >£ Pound</option>
                <option value="$" name="Dollar">$ Dollar</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Ruppee">₹ Ruppee</option>
            </select>

        </>
    );
};
export default CurrencyMenu;