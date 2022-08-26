import { StyleSheet } from 'react-native';

const redPoke = '#F63837'
const bluePoke = '#2E6B9F'
const borderPoke = '#2C2A9E'
const yellowPoke = '#FFCF03'

export const styles = StyleSheet.create({

    containerBackground:{
        backgroundColor: bluePoke,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    txtSubtitle:{
        fontSize: 25,
        color:'white',
        justifyContent: 'center',
        fontFamily: "Montserrat_500Medium",
        textAlign: 'center',
    },
    buttonContainer:{
        width: '50%',
        height: '5%',
        marginTop: 20,
    },
    txtButton:{
        fontSize: 22,
        color: borderPoke,
    },
    buttonBox:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', 
        borderWidth: 2,
        borderRadius: 10,
        width: '100%',
        height: '100%',
        borderColor: borderPoke,
        backgroundColor: yellowPoke,
    },
    footer:{
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
      },
      footerText:{
        fontSize: 12,
        top: 289,
        color: 'white',
      },


})