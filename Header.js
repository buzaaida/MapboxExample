import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const Header = ({ children }) => {
    return (
      <View style={styles.header}>
        {children}
      </View>
    );
  }


  const styles = StyleSheet.create({
    header: {
      width: "100%",
      height: "10%",
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#797979'    
    },
  });

  export default Header;