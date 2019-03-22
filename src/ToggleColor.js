import React from 'react';

import ConsumerWrapper from './ContextConsumerWrapper';

const ToggleColor = ({ value }) => (
  <button onClick={value.toggleBackgroundColor}>Change the Color</button>
);

export default ConsumerWrapper(ToggleColor);
