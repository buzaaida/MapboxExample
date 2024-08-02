import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const Box = ({ children }) => {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.inner}>
            {children}
          </View>                      
        </View>
      </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "80%",
      alignItems: "center",
      flexDirection: 'row',
      flexWrap: 'wrap'    
    },
    box: {
      width: "100%",
      height: "50%",
      padding: 1
    },
    inner: {
      flex: 1,
      backgroundColor: "#D3D3D3",
      alignItems: 'center',
      justifyContent: 'center'
    }
  });

  export default Box;