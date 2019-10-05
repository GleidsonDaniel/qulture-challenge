import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

let tron;

if (__DEV__) {
  tron = Reactotron.configure()
    .use(reactotronRedux())
    .connect();

  tron.clear();

  console.tron = tron;
}

export default tron;
