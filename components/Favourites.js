import React, { Component } from 'react'
import { Alert, Modal, View, Text, ScrollView, Linking, TouchableHighlight, TouchableOpacity, Image } from 'react-native';
import { Font, LinearGradient  } from 'expo';
import { AsyncStorage } from "react-native"
import FavouriteModal from './FavouriteModal.js';
import FavouritesStyle from '../Stylesheets/FavouritesStyle.js';
import * as ImageFinder from './ImageFinder.js'

export default class Favourites extends Component {

  constructor(props) {
    super(props);
    this.state = {
      favourites: null,
      favouriteModalVisible: false
    };
    this.toggleFavouriteModal = this.toggleFavouriteModal.bind(this);
  }

  componentDidMount(){
    this.retrieveFavourites()
  }

  toggleFavouriteModal(){
    this.setState({
      favouriteModalVisible: !this.state.favouriteModalVisible
    })
  }

  deleteFavourite(dinoToDelete){
    AsyncStorage.getItem('favourite_dinos').then((dinos) => {
      console.log("DINOS", dinos);
      var modifiedDinosaurs = JSON.parse(dinos).splice(dinos.indexOf((dinosaur) => dinosaur.name === dinoToDelete.name), 1)
      console.log("Dinosaurs after deletion", dinos);
      Alert.alert(
             `${dinoToDelete.name} has been deleted from your favourites.`
          )
    }).catch((error) => {
      console.log(error)
  }
)
}

  retrieveFavourites(){
      AsyncStorage.getItem('favourite_dinos').then((dinos) => {
        this.setState({
          favourites: dinos
        })
      }).catch((error) => {
        console.log(error)
       }
     )
      }

  renderFavourites(){

    var favourites = JSON.parse(this.state.favourites);

    return favourites.map((favourite, i) =>
      <View key={i} style={FavouritesStyle.modalHeader}>
      <TouchableOpacity onPress={() => this.setState({clickedFavourite: favourites[i]}, function(){ this.toggleFavouriteModal() })} key={i}>
        <Text key={i} style={FavouritesStyle.modalFavourite}> {favourite.name} </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => this.setState({deletedFavourite: favourites[i]}, function(){ this.deleteFavourite(this.state.deletedFavourite) })} key={Date.now()}>
        <Text key={Date.now()} style={FavouritesStyle.deleteFavourite}> Delete </Text>
      </TouchableOpacity>
      </View>
    )
  }

  render() {

    var self = this;

    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.favouritesVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View>

        <LinearGradient
        colors={['black', '#1e932d']}
        style={{ padding: 25 }}>

          <View style={FavouritesStyle.favouritesModal}>
            <ScrollView>

            <Text style={FavouritesStyle.favouritesModalHeader}> Favourites </Text>

          {
            this.state.favourites ? (
              self.renderFavourites()
            ) : <Text style={FavouritesStyle.favouritesText}> Your favourites list is currently empty </Text>
        }

        <TouchableHighlight
          onPress={() => {
            this.props.setFavouritesVisible();
          }}>
        <Image source={require('../assets/icons/close.png')} style={{height: 25, width: 25, marginBottom: 3, marginTop: 30, marginLeft: '50%'}}/>
        </TouchableHighlight>

        </ScrollView>

        <FavouriteModal clickedFavourite={this.state.clickedFavourite} favouriteModalVisible={this.state.favouriteModalVisible} toggleFavouriteModal={this.toggleFavouriteModal} fontLoaded={this.state.fontLoaded} />

            </View>
          </LinearGradient>
        </View>
      </Modal>

    </View>
    )
  }
}
