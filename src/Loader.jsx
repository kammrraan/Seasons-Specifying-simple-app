import React from "react";

function Loader(props) {
  return (
    <div class="ui active dimmer">
      <div class="ui big text loader">{props.message}..</div>
    </div>
  );
}

Loader.defaultProps = {
    message : 'Loadin...'
}

export default Loader;
