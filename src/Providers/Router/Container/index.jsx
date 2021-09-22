import React from "react";

const Container = (props) => {
  return (
    <div>
      <header>header</header>

      <main>
        <React.Fragment>{props.children}</React.Fragment>
      </main>

      <footer>footer</footer>
    </div>
  );
};

export { Container };
