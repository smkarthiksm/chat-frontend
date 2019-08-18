import React from 'react';

const NotFoundComponent = (props) => {
  return (
    <div>
      <h3>
        No match for <code>{props.location.pathname}</code>
      </h3>
    </div>
  );
}

export default NotFoundComponent;