import React, { Component } from 'react';
import { StyleSheet, View, ListView, TouchableHighlight, FlatList, Image, TouchableOpacity } from 'react-native';
import Text from '../config/AppText';
import flatListData from '../data/flatListData';
import PropTypes from 'prop-types';

export default class FlatListItem extends Component {
    render() {          
        return (        
            <View style={styles.externalView}>            
                <View style={styles.internalView}>            
                    <View style={styles.viewText}>
                      <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                    </View>  
                    <Image 
                        source={require('../assets/img/arrow_right.png')}
                        style={styles.imageView}
                    />
                </View>
            </View>
        );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: '#FFFFFF',
    },
    title: {
      textAlign: 'center',
      fontSize: 32,
      fontWeight: '300',
      marginTop:10,
      marginBottom: 20,
      color:'#323BEA'
    },
    flatListItem: {
      color:'#323BEA',
      padding: 10,
      fontSize: 23, 
      textAlign: 'center' 
    },
    externalView: {
      flex: 1,
      flexDirection:'row',
      margin: 8
    },
    internalView: {
      flex: 1,
      flexDirection:'row',            
      backgroundColor: '#F8F9FE'
    },
    viewText: {
      flex: 1,
      flexDirection:'column',   
      height: 42
    },
    imageView: {
      width: 32, 
      height: 32, 
      margin: 5,
      alignContent:'flex-end'
    },
  });