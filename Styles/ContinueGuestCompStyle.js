import { StyleSheet, Dimensions } from 'react-native'

const devH = Dimensions.get('screen').height;

export default StyleSheet.create({
  container: {
    
    backgroundColor: '#a0a195',
    alignItems: 'center',
    justifyContent: "center",         
    height: devH/6

  },
  GuestBtn: {
    width: "80%",
    backgroundColor: "#97b04d",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",

  },
  GuestText: {
   
    color: "#4c523b",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    fontWeight: 'bold'
  },
})