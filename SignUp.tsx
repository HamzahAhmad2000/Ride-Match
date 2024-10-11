
import React from 'react';
import myimage from './assets/SignUp/images/dropdownArrow.png';
import { useNavigation } from '@react-navigation/native'; 
import {
  Text,
  SafeAreaView,
  ScrollView,
  useColorScheme,
  ImageBackground,
  View,
  Button,
} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';





function SignUp(): React.JSX.Element {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      <ScrollView
        scrollEnabled={true}
        contentInsetAdjustmentBehavior='automatic'
      >
        <View
          style={{
            width: 390.204,
            height: 844.441,
            position: 'relative',
            overflow: 'hidden',
            marginTop: 0,
            marginRight: 'auto',
            marginBottom: 0,
            marginLeft: 'auto',
          }}
        >
          <View
            style={{
              width: 390.314,
              height: 844.441,
              backgroundColor: '#ffffff',
              position: 'absolute',
              top: 0,
              left: 0,
              overflow: 'hidden',
              zIndex: 1,
            }}
          >
            <View
              style={{
                display: 'flex',
                width: 390,
                paddingTop: 124,
                paddingRight: 48,
                paddingBottom: 124,
                paddingLeft: 48,
                gap: 50,
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'nowrap',
                position: 'relative',
                zIndex: 2,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0,
              }}
            >
              <View
                style={{
                  display: 'flex',
                  width: 246.594,
                  gap: 10,
                  alignItems: 'center',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  position: 'relative',
                  zIndex: 3,
                }}
              >
                <Text
                  style={{
                    height: 28,
                    alignSelf: 'stretch',
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'Inter',
                    fontSize: 23.443166732788086,
                    fontWeight: '600',
                    lineHeight: 28,
                    color: '#113a78',
                    position: 'relative',
                    textAlign: 'center',
                    zIndex: 4,
                  }}
                  numberOfLines={1}
                >
                  Sign Up
                </Text>
                <Text
                  style={{
                    height: 16,
                    alignSelf: 'stretch',
                    flexShrink: 0,
                    flexBasis: 'auto',
                    fontFamily: 'Inter',
                    fontSize: 12.892682075500488,
                    fontWeight: '400',
                    lineHeight: 15.603,
                    color: '#113a78',
                    position: 'relative',
                    textAlign: 'center',
                    zIndex: 5,
                  }}
                  numberOfLines={1}
                >
                  Begin your carpooling journey today.
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  gap: 13,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  position: 'relative',
                  zIndex: 6,
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    gap: 17,
                    alignItems: 'flex-start',
                    alignSelf: 'stretch',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 7,
                  }}
                >
                  <View
                    style={{
                      display: 'flex',
                      height: 49,
                      paddingTop: 16,
                      paddingRight: 25,
                      paddingBottom: 16,
                      paddingLeft: 25,
                      flexDirection: 'row',
                      gap: 8,
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      backgroundColor: '#ffffff',
                      borderTopLeftRadius: 21.276,
                      borderTopRightRadius: 21.276,
                      borderBottomRightRadius: 21.276,
                      borderBottomLeftRadius: 21.276,
                      borderWidth: 2,
                      borderColor: '#113a78',
                      borderStyle: 'solid',
                      position: 'relative',
                      zIndex: 8,
                    }}
                  >
                    <Text
                      style={{
                        height: 17,
                        flexGrow: 1,
                        flexShrink: 0,
                        flexBasis: 'auto',
                        fontFamily: 'Inter',
                        fontSize: 14.42458724975586,
                        fontWeight: '400',
                        lineHeight: 17,
                        color: '#113a78',
                        position: 'relative',
                        textAlign: 'left',
                        zIndex: 9,
                      }}
                      numberOfLines={1}
                    >
                      Name
                    </Text>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      height: 49.234,
                      paddingTop: 13,
                      paddingRight: 18,
                      paddingBottom: 13,
                      paddingLeft: 18,
                      gap: 8,
                      alignItems: 'flex-start',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      backgroundColor: '#ffffff',
                      borderTopLeftRadius: 21.276,
                      borderTopRightRadius: 21.276,
                      borderBottomRightRadius: 21.276,
                      borderBottomLeftRadius: 21.276,
                      borderWidth: 2,
                      borderColor: '#113a78',
                      borderStyle: 'solid',
                      position: 'relative',
                      zIndex: 10,
                    }}
                  >
                    <View
                      style={{
                        display: 'flex',
                        width: 251.701,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexGrow: 1,
                        flexShrink: 0,
                        flexBasis: 0,
                        flexWrap: 'nowrap',
                        position: 'relative',
                        zIndex: 11,
                      }}
                    >
                      <Text
                        style={{
                          display: 'flex',
                          width: 115.574,
                          height: 17,
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          flexShrink: 0,
                          flexBasis: 'auto',
                          fontFamily: 'Inter',
                          fontSize: 14.42458724975586,
                          fontWeight: '400',
                          lineHeight: 17,
                          color: '#113a78',
                          position: 'relative',
                          textAlign: 'left',
                          zIndex: 12,
                        }}
                        numberOfLines={1}
                      >
                        Date of Birth
                      </Text>
                      <View
                        style={{
                          width: 20.553,
                          height: 20.553,
                          flexShrink: 0,
                          position: 'relative',
                          overflow: 'hidden',
                          zIndex: 13,
                        }}
                      >
                        <ImageBackground
                          style={{
                            width: 20.553,
                            height: 20.553,
                            position: 'relative',
                            zIndex: 14,
                            marginTop: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 0,
                          }}
                          source={myimage}
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      height: 49,
                      paddingTop: 16,
                      paddingRight: 25,
                      paddingBottom: 16,
                      paddingLeft: 25,
                      flexDirection: 'row',
                      gap: 8,
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      backgroundColor: '#ffffff',
                      borderTopLeftRadius: 21.276,
                      borderTopRightRadius: 21.276,
                      borderBottomRightRadius: 21.276,
                      borderBottomLeftRadius: 21.276,
                      borderWidth: 2,
                      borderColor: '#113a78',
                      borderStyle: 'solid',
                      position: 'relative',
                      zIndex: 15,
                    }}
                  >
                    <Text
                      style={{
                        alignSelf: 'stretch',
                        flexGrow: 1,
                        flexShrink: 0,
                        flexBasis: 'auto',
                        fontFamily: 'Inter',
                        fontSize: 14.42458724975586,
                        fontWeight: '400',
                        lineHeight: 17,
                        color: '#113a78',
                        position: 'relative',
                        textAlign: 'left',
                        zIndex: 16,
                      }}
                      numberOfLines={1}
                    >
                      Gender
                    </Text>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      height: 49.234,
                      paddingTop: 16,
                      paddingRight: 25,
                      paddingBottom: 16,
                      paddingLeft: 25,
                      flexDirection: 'row',
                      gap: 8,
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      backgroundColor: '#ffffff',
                      borderTopLeftRadius: 21.276,
                      borderTopRightRadius: 21.276,
                      borderBottomRightRadius: 21.276,
                      borderBottomLeftRadius: 21.276,
                      borderWidth: 2,
                      borderColor: '#113a78',
                      borderStyle: 'solid',
                      position: 'relative',
                      zIndex: 17,
                    }}
                  >
                    <Text
                      style={{
                        height: 17,
                        flexGrow: 1,
                        flexShrink: 0,
                        flexBasis: 'auto',
                        fontFamily: 'Inter',
                        fontSize: 14.42458724975586,
                        fontWeight: '400',
                        lineHeight: 17,
                        color: '#113a78',
                        position: 'relative',
                        textAlign: 'left',
                        zIndex: 18,
                      }}
                      numberOfLines={1}
                    >
                      Email
                    </Text>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      height: 49.234,
                      paddingTop: 16,
                      paddingRight: 25,
                      paddingBottom: 16,
                      paddingLeft: 25,
                      flexDirection: 'row',
                      gap: 8,
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      backgroundColor: '#ffffff',
                      borderTopLeftRadius: 21.276,
                      borderTopRightRadius: 21.276,
                      borderBottomRightRadius: 21.276,
                      borderBottomLeftRadius: 21.276,
                      borderWidth: 2,
                      borderColor: '#113a78',
                      borderStyle: 'solid',
                      position: 'relative',
                      zIndex: 19,
                    }}
                  >
                    <Text
                      style={{
                        height: 17,
                        flexGrow: 1,
                        flexShrink: 0,
                        flexBasis: 'auto',
                        fontFamily: 'Inter',
                        fontSize: 14.42458724975586,
                        fontWeight: '400',
                        lineHeight: 17,
                        color: '#113a78',
                        position: 'relative',
                        textAlign: 'left',
                        zIndex: 20,
                      }}
                      numberOfLines={1}
                    >
                      Password
                    </Text>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      height: 49.234,
                      paddingTop: 16,
                      paddingRight: 25,
                      paddingBottom: 16,
                      paddingLeft: 25,
                      flexDirection: 'row',
                      gap: 8,
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      backgroundColor: '#ffffff',
                      borderTopLeftRadius: 21.276,
                      borderTopRightRadius: 21.276,
                      borderBottomRightRadius: 21.276,
                      borderBottomLeftRadius: 21.276,
                      borderWidth: 2,
                      borderColor: '#113a78',
                      borderStyle: 'solid',
                      position: 'relative',
                      zIndex: 21,
                    }}
                  >
                    <Text
                      style={{
                        height: 17,
                        flexGrow: 1,
                        flexShrink: 0,
                        flexBasis: 'auto',
                        fontFamily: 'Inter',
                        fontSize: 14.42458724975586,
                        fontWeight: '400',
                        lineHeight: 17,
                        color: '#113a78',
                        position: 'relative',
                        textAlign: 'left',
                        zIndex: 22,
                      }}
                      numberOfLines={1}
                    >
                      Confirm Password
                    </Text>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      height: 49.234,
                      paddingTop: 13,
                      paddingRight: 24,
                      paddingBottom: 13,
                      paddingLeft: 24,
                      flexDirection: 'row',
                      gap: 8,
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      backgroundColor: '#0b2854',
                      borderTopLeftRadius: 21.276,
                      borderTopRightRadius: 21.276,
                      borderBottomRightRadius: 21.276,
                      borderBottomLeftRadius: 21.276,
                      position: 'relative',
                      zIndex: 23,
                    }}
                  >
                    <Text
                      style={{
                        display: 'flex',
                        width: 36,
                        height: 19,
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        flexShrink: 0,
                        flexBasis: 'auto',
                        fontFamily: 'Inter',
                        fontSize: 15.65861988067627,
                        fontWeight: '600',
                        lineHeight: 18.95,
                        color: '#ffffff',
                        position: 'relative',
                        textAlign: 'center',
                        zIndex: 24,
                      }}
                      numberOfLines={1}
                    >
                      Next
                    </Text>
                    <Button
        title="Go to Chat Screen"
        onPress={() => navigation.navigate('ChatScreen')}
      />
                  </View>
                </View>
                <View
                  style={{
                    display: 'flex',
                    width: 113,
                    gap: 3,
                    alignItems: 'center',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 25,
                  }}
                >
                  <Text
                    style={{
                      height: 15,
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexBasis: 'auto',
                      fontFamily: 'Inter',
                      fontSize: 12,
                      fontWeight: '600',
                      lineHeight: 14.523,
                      color: '#1659c0',
                      position: 'relative',
                      textAlign: 'center',
                      zIndex: 26,
                    }}
                    numberOfLines={1}
                  >
                    Already a member?
                  </Text>
                  <Text
                    style={{
                      height: 15,
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexBasis: 'auto',
                      fontFamily: 'Inter',
                      fontSize: 12,
                      fontWeight: '600',
                      lineHeight: 14.523,
                      color: '#8fb6f3',
                      position: 'relative',
                      textAlign: 'center',
                      textDecorationLine: 'underline',
                      zIndex: 27,
                    }}
                    numberOfLines={1}
                  >
                    Log In
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}



export default SignUp;
