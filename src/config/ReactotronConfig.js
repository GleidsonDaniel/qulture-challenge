import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

let tron;

if (__DEV__) {
  tron = Reactotron.configure({host: '192.168.10.107', name: 'Qulture'})
    .use(reactotronRedux())
    .connect();

  tron.clear();

  console.tron = tron;
}

export default tron;
