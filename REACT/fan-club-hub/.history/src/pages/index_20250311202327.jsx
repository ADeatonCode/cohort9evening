import React from 'react';

function Pages() {
  return (
    <div>
      Pages
    </div>
  );
}

export default Pages;

import React from 'react';
import { Helmet } from 'react-helmet';

const MyComponent = () => (
  <div>
    <Helmet>
      <title>My New Tab Title</title>
    </Helmet>
    {/* Your component code */}
  </div>
);

export default MyComponent;
