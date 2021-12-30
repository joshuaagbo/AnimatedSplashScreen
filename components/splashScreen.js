import React, {useRef, useEffect} from 'react';
import {
  Animated,
  Dimensions,
  StatusBar,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import chatty from '../assets/chatty.png';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

const bgColor = '#4D4A95';

const SplashScreenComponent = () => {
  //safearea value
  const edges = useSafeAreaInsets();

  //translate  log&title along Y-axis
  const startAnimation = useRef(new Animated.Value(0)).current;
  const startHomeAnimation = useRef(new Animated.Value(0)).current;

  //scale logo
  const scaleLogo = useRef(new Animated.Value(1)).current;
  const scaleTitle = useRef(new Animated.Value(1)).current;

  //move logo xy-axis
  const moveLogo = useRef(
    new Animated.ValueXY({
      x: 0,
      y: 0,
    }),
  ).current;

  const moveTitle = useRef(
    new Animated.ValueXY({
      x: 0,
      y: 0,
    }),
  ).current;

  useEffect(() => {
    //start animation after 500ms
    setTimeout(() => {
      //parallel animation
      Animated.parallel([
        Animated.timing(startAnimation, {
          toValue: -Dimensions.get('window').height + edges.top + 65,
          useNativeDriver: true,
        }),

        Animated.timing(startHomeAnimation, {
          toValue: 65 + edges.top,
          useNativeDriver: true,
        }),

        Animated.timing(scaleLogo, {
          toValue: 0.3,
          useNativeDriver: true,
        }),

        Animated.timing(scaleTitle, {
          toValue: 1,
          useNativeDriver: true,
        }),

        Animated.timing(moveLogo, {
          toValue: {
            x: Dimensions.get('window').width,
            y: Dimensions.get('window').height + edges.top + 460,
          },
          useNativeDriver: true,
        }),

        Animated.timing(moveTitle, {
          toValue: {
            x: 0,
            y: Dimensions.get('window').height / 2 - 100,
          },
          useNativeDriver: true,
        }),
      ]).start();
    }, 500);
  });

  return (
    <>
      <StatusBar barStyle="light-contents" backgroundColor={bgColor} />
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          bottom: 0,
          right: 0,
          backgroundColor: bgColor,
          transform: [{translateY: startAnimation}],
        }}>
        <Animated.View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Animated.Image
            source={chatty}
            style={{
              width: 120,
              height: 120,
              marginBottom: 10,
              transform: [
                {scale: scaleLogo},
                {translateX: moveLogo.x},
                {
                  translateY: moveLogo.y,
                },
              ],
            }}
          />
          <Animated.Text
            style={{
              fontSize: 22,
              fontWeight: '600',
              color: '#ddd',
              transform: [
                {scale: scaleTitle},
                {
                  translateX: moveTitle.x,
                },
                {translateY: moveTitle.y},
              ],
            }}>
            Chatty
          </Animated.Text>
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          marginBottom: 65,
          backgroundColor: '#fff',
          transform: [{translateY: startHomeAnimation}],
        }}>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              marginTop: 16,
              color: '#333',
              textAlign: 'center',
            }}>
            Pick a topic to get started!
          </Text>
          <View
            style={{
              width: '100%',
              paddingLeft: 15,
              paddingRight: 15,
              justifyContent: 'center',
            }}>
            <View style={{marginTop: 10}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  color: '#333',
                }}>
                VR
              </Text>
              <TouchableOpacity>
                <Image
                  source={image1}
                  style={{
                    width: Dimensions.get('window').width - 30,
                    height: 200,
                    marginTop: 10,
                    marginBottom: 10,
                    borderRadius: 15,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 10}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  color: '#333',
                }}>
                AI
              </Text>
              <TouchableOpacity>
                <Image
                  source={image2}
                  style={{
                    width: Dimensions.get('window').width - 30,
                    height: 200,
                    marginTop: 8,
                    marginBottom: 8,
                    borderRadius: 15,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 10}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  color: '#333',
                }}>
                Aria Photography
              </Text>
              <TouchableOpacity>
                <Image
                  source={image3}
                  style={{
                    width: Dimensions.get('window').width - 30,
                    height: 200,
                    marginTop: 10,
                    marginBottom: 10,
                    borderRadius: 15,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 10}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  color: '#333',
                }}>
                Climate Change
              </Text>
              <TouchableOpacity>
                <Image
                  source={image4}
                  style={{
                    width: Dimensions.get('window').width - 30,
                    height: 200,
                    marginTop: 10,
                    marginBottom: 10,
                    borderRadius: 15,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Animated.ScrollView>
    </>
  );
};

export default SplashScreenComponent;
