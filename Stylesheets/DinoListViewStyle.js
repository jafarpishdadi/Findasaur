import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const DinoListViewStyle = StyleSheet.create({

infoModalHeader: {
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  fontSize: 20,
  color: 'white',
  marginLeft: 20,
},

galleryNameHeader: {
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  fontSize: 26,
  color: 'limegreen',
},

modalHeader: {
  flex: 1,
  justifyContent: 'center',
  flexDirection: 'row',
  backgroundColor: 'black',
  marginTop: 20
},

modalPronunciation: {
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  fontSize: 20,
  color: 'white',
  marginLeft: 20,
},

modalLength: {
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  fontSize: 20,
  color: 'white',
  marginLeft: 20,
  },

modalDietIcon: {
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  fontSize: 20,
  color: 'white',
  marginLeft: 20,
},

modalMapLink: {
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  fontSize: 20,
  color: 'limegreen',
  marginLeft: 20,
},

infoModalText: {
  flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  fontSize: 20,
  color: 'white',
  marginLeft: 20,
},

renderItem: {
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 5,
  borderWidth: 0,
  shadowOffset: {
    width: 3,
    height: 3
  },
  shadowRadius: 6,
  shadowOpacity: 0.8
  },
  activeItem: {
  backgroundColor: 'black',
},

name2: {
  bottom: -14,
  marginBottom: 20,
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'flex-start',
},
});

export default DinoListViewStyle;
