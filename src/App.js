import React from 'react';

import ConsumerWrapper from './ContextConsumerWrapper';
import Title from './Title';
import ToggleColor from './ToggleColor';

const App = ({ value }) => (
  <div style={{ backgroundColor: value.backgroundColor }}>
    <Title />
    <ToggleColor />
  </div>
);

export default ConsumerWrapper(App);
