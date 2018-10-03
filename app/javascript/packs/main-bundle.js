import ReactOnRails from 'react-on-rails';

import MainApp from '../bundles/Main/startup/MainApp';

// This is how react_on_rails can see the Main in the browser.
ReactOnRails.register({
  MainApp,
});
