import { StyleSheet, Dimensions } from 'react-native'

const divH = Dimensions.get('screen').height;
const divW = Dimensions.get('screen').width;

export default StyleSheet.create({
    cardBox: {
        height: divH,
        width: divW
    },
    cardPic:{
        height: divH,
        width: divW,
        resizeMode:"stretch"
    },
    
})