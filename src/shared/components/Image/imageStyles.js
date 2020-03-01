import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const win = Dimensions.get('window');
const ratio = win.width/1400;


const styles = StyleSheet.create({
    logo: {
      width: '60%',
    },
    card: {
      width: '100%',
      height: 785 * ratio,
    }
  });

  export default styles;