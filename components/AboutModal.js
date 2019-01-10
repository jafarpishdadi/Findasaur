import React, { Component } from 'react'
import { Modal, View, Text, ScrollView, Linking, TouchableHighlight, Image } from 'react-native';
import { Font, LinearGradient  } from 'expo';

import AboutModalStyle from '../Stylesheets/AboutModalStyle.js';

export default class AboutModal extends Component {
  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.aboutModalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View>

        <LinearGradient
        colors={['#a0cac8', '#a0cac8']}
        style={{ padding: 25 }}>

          <View style={AboutModalStyle.aboutModal}>

          {
            this.props.fontLoaded ? (

              <ScrollView>

                <Text style= {[AboutModalStyle.aboutModalHeading, { fontFamily: 'PoiretOne-Regular'}]}>LevelApps</Text>

                  <View style={{alignItems: "center"}}>
                    <Image source={require('../assets/coffee.gif')} style={{height: 150, width: 225}}/>
                  </View>

                <Text style= {[AboutModalStyle.aboutModalText, { fontFamily: 'PoiretOne-Regular'}]}>Findasaur - an app from 'LevelApps':- <Text style={{fontSize: 17, fontFamily: 'PoiretOne-Regular', color: '#2f0f07'}} onPress={()=>Linking.openURL('https://github.com/jah1603')}>James Henderson</Text>,
                <Text style={{fontSize: 18, color: '#2f0f07'}} onPress={()=>Linking.openURL('https://github.com/DavidAPears')}> David Pears</Text><Text style= {[AboutModalStyle.aboutModalText, { fontFamily: 'PoiretOne-Regular'}]}></Text> & <Text style={{fontSize: 17, color: '#2f0f07'}} onPress={()=>Linking.openURL('https://github.com/SFR1981')}>Stephen Rooney.</Text>
                <Text></Text>

                <Text>These three creators can usually be found in an Edinburgh cafe, trying to figure out <Text style={{fontSize: 18, color: '#2f0f07'}} onPress={()=>Linking.openURL('https://www.reactnative.com')}>ReactNative</Text>. All three are potentailly available to hire for your team or project.</Text></Text>

                <Text style= {[AboutModalStyle.aboutModalText, { fontFamily: 'PoiretOne-Regular'}]}>LevelApp by DJS</Text>
                <Text style= {[AboutModalStyle.aboutModalText, { fontFamily: 'PoiretOne-Regular'}]}>January 2019</Text>

                <TouchableHighlight
                  onPress={() => {
                    this.props.setAboutModalVisible();
                  }}>
                <Image source={require('../assets/icons/close.png')} style={{height: 25, width: 25, marginBottom: 10, marginLeft: '50%'}}/>
                </TouchableHighlight>

              </ScrollView>

            ) : null
        }
            </View>
          </LinearGradient>
        </View>
      </Modal>

    </View>
    )
  }
}