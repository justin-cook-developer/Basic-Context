import React from 'react';
import { MyContext } from './Context';

const ConsumerWrapper = Component => {
  return props => (
    <MyContext.Consumer>
      {
        (value) => <Component value={value} {...props} />
      }
    </MyContext.Consumer>
  );
}

export default ConsumerWrapper;
