import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './Reducer';
import { useStateValue } from './StateProvider';
import './Subtotal.css';

function Subtotal() {

  const [{basket},dispatch]=useStateValue();

  return (
    <div className="subtotal">
        <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length}): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal