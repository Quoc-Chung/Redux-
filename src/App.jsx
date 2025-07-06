import React from "react";
import { connect } from "react-redux";
import { inCreaseCounter, deCreaseCounter } from "./action/actions";

function App(props) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>XIN CHÀO QUỐC CHUNG</h1>
      <h2>Count: {props.count}</h2>
      <button onClick={props.inCreaseCounter}>Increment</button>
      <button onClick={props.deCreaseCounter}>Decrement</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.counter.count,
});

const mapDispatchToProps = {
  inCreaseCounter,
  deCreaseCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
