import { StyleSheet, Dimensions } from 'react-native'

const divH = Dimensions.get('screen').height;
const divW = Dimensions.get('screen').width;

export default StyleSheet.create({
    PageSize: {
        height: divH,
        width: divW
    },
    mainText: {
        color: "#384242",        
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        textAlign: "center",      

    },
    TextContainer:{
        
        margin: 10
    },
    pixButton:{        
        margin: 10,
        alignContent: "center",
        height: 50,
        backgroundColor: 'white',
        paddingTop: 5,
        paddingBottom: 5,
        borderColor: 'black'

    },
    fileButton:{        
        
        alignContent: "center",
        height: 50,
        padding: 5,
        borderRadius: 15,
        margin: 10,    
        

    },
    SubmitBtn: {
        marginTop: 50,
        margin: 10,
        alignContent: "center",
        height: 50,
        paddingTop: 5,
        paddingBottom: 5,
        borderColor: 'black'

    },
    modalSplitVertical:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        width:'100%'
    },
    completeModalView:{
        position:"absolute",
        width:'100%',
        bottom: 10,
        backgroundColor:'black',
        padding:10,

    },
})