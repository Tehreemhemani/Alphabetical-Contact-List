import React, {useEffect} from 'react';
import {View, Image,ImageBackground,Text} from 'react-native';

const SplashScreen = props => {

    useEffect(() => {
      setTimeout(() => {
        props.navigation.navigate('ContactNavigator');
        }, 3000);
    }, []);

  return (
    
              

<View style={{marginTop:300,}}>
            <Image 
            source={require("../Assets/logo.png")}
            resizeMode="contain"
            style={{height:150 ,width:150,alignSelf:"center",}}
            />

            </View>
      



    

              
   

        
         
  );
};

export default SplashScreen;
