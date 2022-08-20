import { StyleSheet } from 'react-native';

const redPoke = '#F63837'
const bluePoke = '#2E6B9F'
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
        color:'white',
    },
    buttonBox:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', 
        borderWidth: 1,
        borderRadius: 7,
        width: '100%',
        height: '100%',
        borderColor: 'white',
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