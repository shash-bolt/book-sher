import { StyleSheet,Dimensions  } from 'react-native'

const devH = Dimensions.get('screen').height;

export default StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
    height: devH/2
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white"
  },
  forgot: {
    color: "white",
    fontSize: 11,
    marginBottom: 20,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
   
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
})