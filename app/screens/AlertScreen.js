import React from 'react';
import { StyleSheet, View, Button, ScrollView, TouchableOpacity, Image, Icon} from 'react-native';
import Text from '../config/AppText';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';

export class AlertScreen extends React.Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    headerLeft: ( 
        <TouchableOpacity
            key={"alert"}
            onPress={() => navigation.navigate('DrawerOpen')}
        >
        <Image
        resizeMode='cover'
        style={styles.headerLeft}
        source={require('../assets/img/menu.png')}
        />
        </TouchableOpacity>
    ),
    headerTitle: (
        <Image
        resizeMode='cover'
        style={styles.headerTitle}
        source={require('../assets/img/logo_1.png')}
        /> 
    ),
    headerStyle: {backgroundColor:'#F8F9FE',borderColor:'#F8F9FE'}, 
    headerTintColor: '#000000', 
    headerTitleStyle: {textAlign:'center', alignSelf:'center',flex:1,fontSize: 24,fontWeight: "normal",width: "35%" },
    headerRight: (
        <TouchableOpacity
            key={"alert"}
            onPress={() => navigation.navigate('AlertScreen')}
        >
        <Image
        resizeMode='cover'
        style={styles.headerRight}
        source={require('../assets/img/alarm.png')}
        /> 
        </TouchableOpacity>
    ),

})

  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Alert Screen!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerLeft: {
    margin: 10,
    width: 24,
    height: 24,
    resizeMode: 'contain',
    alignSelf: 'center'
},
headerTitle: {
    fontWeight: 'normal',
    width: 85,
    height: 85,
    resizeMode: 'contain',
    alignSelf: 'center'
},
headerRight: {
    margin: 8,
    width: 24,
    height: 24,
    resizeMode: 'contain',
    alignSelf: 'center'
},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});