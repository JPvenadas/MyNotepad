import React, {useEffect} from 'react'
import { View, Text } from 'react-native'
import { Global } from '../styles/GlobalStyles'
import LottieView from 'lottie-react-native'


const Loading = ({route, navigation}) => {


  let animation = null; //React.createRef();
  let timeOutId = null;

  useEffect(() => {
      if (!animation || !animation.play)
          return;

      if (timeOutId)
          clearTimeout(timeOutId);

      timeOutId = setTimeout(() => {
          if (animation)
              animation.play();
      }, 0);

      const playAnimation = navigation.addListener('didFocus', () => {
          if (animation)
              animation.play();
      });

      return () => playAnimation.remove();
  });

  setTimeout(()=>{
    navigation.pop()
    navigation.navigate('Menu',route.params)
  },3000)
  
  return (
    <View style={Global.container}>
      <LottieView style={{width: '50%'}}
       ref={myAnimation => {
        animation = myAnimation;
        }}
        source={require('../assets/9619-loading-dots-in-yellow.json')}
        autoPlay = {true}
        loop = {true}
      />
    </View>
  )
}

export default Loading
