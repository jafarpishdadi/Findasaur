import React, { Component } from 'react';
import { Font } from 'expo';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';
import MultiToggleSwitch from 'react-native-multi-toggle-switch';
import TimePeriodStyle from '../Stylesheets/TimePeriodStyle.js';
import _ from 'lodash';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Dimensions, Image, LayoutAnimation, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

const darkColor = 'black', lightColor = 'white', { width, height } = Dimensions.get('window');


export default class TimePeriodPage extends Component {

  constructor(props) {

  super(props);

  this.state = {
    text: null,
    fontLoaded: false,
    dinosaurs: null,
    dietSelected: "herbivores",
    searchButtonClicked: false
  }

  this.handleCarnivoreSelection = this.handleCarnivoreSelection.bind(this);
  this.handleOmnivoreSelection = this.handleOmnivoreSelection.bind(this);
  this.handleHerbivoreSelection = this.handleHerbivoreSelection.bind(this);
  this.handleAllDietsSelection = this.handleAllDietsSelection.bind(this);
  this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
}

  eraImage(index){

    switch(index) {

    case 0: return require("../assets/era_images/middle_triassic2.png");
    case 1: return require("../assets/era_images/middle_triassic.png");
    case 2: return require("../assets/era_images/early_jurassic.png");
    case 3: return require("../assets/era_images/mid_jurassic.png");
    case 4: return require("../assets/era_images/late_jurassic.png");
    case 5: return require("../assets/era_images/early_cretaceous.png");
    case 6: return require("../assets/era_images/late_cretaceous.png");
  }
  }

  async componentDidMount() {
    await Font.loadAsync({
      'PoiretOne-Regular': require('../assets/fonts/PoiretOne-Regular.ttf'),
    });
     this.setState({ fontLoaded: true }, function(){
       this.props.getDinosaursForPeriod(this.props.earliest_date, this.props.latest_date);
     });
  }

  handleHerbivoreSelection(){
    this.setState({
      dietSelected: 'herbivores'
    }, function(){
      console.log("DIET CHOSEN", this.state.dietSelected);
    });
  }

  handleCarnivoreSelection(){
    this.setState({
      dietSelected: 'carnivores'
    }, function(){
      console.log("DIET CHOSEN", this.state.dietSelected);
    });
  }

  handleOmnivoreSelection(){
    this.setState({
      dietSelected: 'omnivores'
    }, function(){
      console.log("DIET CHOSEN", this.state.dietSelected);
    });
  }

  handleAllDietsSelection(){
    this.setState({
      dietSelected: 'all'
    }, function(){
      console.log("DIET CHOSEN", this.state.dietSelected);
    });
  }

  handleSearchSubmit(){
    this.setState({
      searchButtonClicked: true
    })
  }

  render() {

    const {
      id,
      index,
      key,
      title,
      city,
      type,
      color,
      description,
      image
    } = this.props;

    return (

  <View style={{
    flex: 1,
    backgroundColor: color,
    opacity: 1,
    width,
    borderRadius: 0
      }}
  >
    <View style={{marginTop: 5, flexDirection: 'column', alignItems: 'center'}}>
      <Image
        style={TimePeriodStyle.profilePicture}
        source={ this.eraImage(id) }
      />


  <View style={{position: 'absolute',
    right: 0,
    bottom: 0,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 0,
    borderRightWidth: Dimensions.get('window').width,
    borderBottomWidth: Dimensions.get('window').width*0.3,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'black'}}>



    </View>
    {

      this.state.fontLoaded ? (
    <Text style={[TimePeriodStyle.eraTitle, {fontFamily: 'PoiretOne-Regular'}]}>{title}</Text>
  ) : null
  }


  {
    this.state.fontLoaded ? (
  <Text style={[TimePeriodStyle.eraDescriptionText, {display: 'none', fontFamily: 'PoiretOne-Regular'}]}>{description}</Text>
  ) : null
}
      </View>

      <View>
      <TouchableHighlight
                onPress={this.props.handleSearchSubmit}>
                <Image style={TimePeriodStyle.plusButton}source={require('../assets/icons/plus.png')}/>
              </TouchableHighlight>

      </View>

    </View>
    );
  }
  }

TimePeriodPage.propTypes = {
  id: PropTypes.number,
  index: PropTypes.number,
  title: PropTypes.string,
  city: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
};

TimePeriodPage.DefaultProps = {
  selected: false,
  createTagColor: true
};
