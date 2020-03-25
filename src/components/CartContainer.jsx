import React from 'react';
import CartItem from './CartItem';
import { connect } from 'react-redux';
import { clearItem } from '../redux/cart/cart-action';

const CartContainer = ({ cart, clearItem }) => {
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <article>
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </article>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total{' '}
            <span>
              ${cart.reduce((acc, item) => item.price * item.quantity + acc, 0)}
            </span>
          </h4>
        </div>
        <button onClick={() => clearItem()} className="btn clear-btn">
          clear cart
        </button>
      </footer>
    </section>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
  clearItem: () => dispatch(clearItem()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
