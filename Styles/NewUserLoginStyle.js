import { StyleSheet,Dimensions  } from 'react-native'

const devH = Dimensions.get('screen').height;

export default StyleSheet.create({
  container: {

    backgroundColor: '#7178a3',
    alignItems: 'center',
    justifyContent: "center",         
    height: devH/5
  },
  registerBtn: {
    width: "80%",
    backgroundColor: "#a5d4d9",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10
  },
  registerText: {
   
    color: "#112bbf",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    fontWeight: 'bold'
  },
})