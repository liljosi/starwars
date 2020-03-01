import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
    sectionContainer: {
      flex: 1,
      width: '100%',
      backgroundColor: Colors.black,
      marginTop: 20
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.white,
    },
    title: {
      fontSize: 36,
      fontWeight: '600',
      color: Colors.white,
    },
    card: {
      width: '100%',
    },
    infoContainer: {
      backgroundColor: '#303030',
      padding: 10,
      borderWidth: 1,
      borderColor: '#9e4f60',
    },
    titleContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.white,
    },
    highlight: {
      fontWeight: '700',
    },
    loaderContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.white,
    },
    moreContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    more: {
      fontSize: 36,
      fontWeight: 'bold',
      color: Colors.white,
    }
  });

  export default styles;