import { StyleSheet, Dimensions } from 'react-native'

let deviceWidth = Dimensions.get("window").width;
 let deviceHeight = Dimensions.get("window").height;


export default StyleSheet.create({
  container: {
    
    backgroundColor: '#7178a3',
    alignItems: 'center',
    justifyContent: "center",         
    height: deviceHeight/2,
  },
  registerBtn: {
    width: "80%",
    backgroundColor: "#a5d4d9",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  registerText: {
   
    color: "#112bbf",
    alignItems: "center",
    justifyContent: "center",
  },
})