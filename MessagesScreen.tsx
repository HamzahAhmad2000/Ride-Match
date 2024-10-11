/**
 * Codia React Native App
 * https://codia.ai
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function App(): React.JSX.Element {
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
            fontSize: 0,
            backgroundColor: '#ffffff',
            position: 'relative',
            overflow: 'hidden',
            marginTop: 0,
            marginRight: 'auto',
            marginBottom: 0,
            marginLeft: 'auto',
          }}
        >
          <Text
            style={{
              height: 29,
              fontFamily: 'Inter',
              fontSize: 24,
              fontWeight: '700',
              lineHeight: 29,
              color: '#113a78',
              position: 'relative',
              textAlign: 'left',
              zIndex: 5,
              marginTop: 38,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 28,
            }}
            numberOfLines={1}
          >
            Messages
          </Text>
          <View
            style={{
              display: 'flex',
              width: 359,
              height: 613,
              gap: 15,
              alignItems: 'center',
              flexWrap: 'nowrap',
              position: 'absolute',
              top: 82,
              left: 15,
              zIndex: 6,
            }}
          >
            <View
              style={{
                display: 'flex',
                paddingTop: 10,
                paddingRight: 10,
                paddingBottom: 10,
                paddingLeft: 10,
                gap: 10,
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
                  height: 41,
                  paddingTop: 11,
                  paddingRight: 16,
                  paddingBottom: 11,
                  paddingLeft: 16,
                  gap: 10,
                  alignItems: 'flex-start',
                  alignSelf: 'stretch',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  backgroundColor: '#fefefe',
                  borderTopLeftRadius: 28,
                  borderTopRightRadius: 28,
                  borderBottomRightRadius: 28,
                  borderBottomLeftRadius: 28,
                  position: 'relative',
                  zIndex: 8,
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    width: 76,
                    flexDirection: 'row',
                    gap: 15,
                    alignItems: 'center',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 9,
                  }}
                >
                  <View
                    style={{
                      width: 18,
                      height: 18,
                      flexShrink: 0,
                      position: 'relative',
                      overflow: 'hidden',
                      zIndex: 10,
                    }}
                  >
                    <ImageBackground
                      style={{
                        width: 15,
                        height: 15,
                        position: 'relative',
                        zIndex: 11,
                        marginTop: 1.5,
                        marginRight: 0,
                        marginBottom: 0,
                        marginLeft: 1.5,
                      }}
                      source={require('./assets/images/601f9cc0-2434-4262-a008-5642d01450c1.png')}
                    />
                  </View>
                  <Text
                    style={{
                      height: 16,
                      flexShrink: 0,
                      flexBasis: 'auto',
                      fontFamily: 'Inter',
                      fontSize: 13,
                      fontWeight: '400',
                      lineHeight: 15.733,
                      color: '#113a78',
                      position: 'relative',
                      textAlign: 'left',
                      zIndex: 12,
                    }}
                    numberOfLines={1}
                  >
                    Search
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                width: 339,
                gap: 9,
                alignItems: 'flex-start',
                flexShrink: 0,
                flexWrap: 'nowrap',
                position: 'relative',
                zIndex: 13,
              }}
            >
              <View
                style={{
                  display: 'flex',
                  height: 69,
                  paddingTop: 11,
                  paddingRight: 9,
                  paddingBottom: 11,
                  paddingLeft: 9,
                  gap: 10,
                  alignItems: 'flex-start',
                  alignSelf: 'stretch',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  backgroundColor: '#ffffff',
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                  borderBottomLeftRadius: 8,
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 14,
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    width: 307.598,
                    flexDirection: 'row',
                    gap: 11,
                    alignItems: 'center',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 15,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 45.598,
                      height: 45.598,
                      flexShrink: 0,
                      position: 'relative',
                      zIndex: 16,
                    }}
                    source={require('./assets/images/4d99d747-061a-44f3-aa8d-e40f271be2f3.png')}
                    resizeMode='cover'
                  />
                  <View
                    style={{
                      display: 'flex',
                      width: 251,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      position: 'relative',
                      zIndex: 17,
                    }}
                  >
                    <View
                      style={{
                        display: 'flex',
                        width: 118,
                        gap: 7,
                        alignItems: 'flex-start',
                        flexShrink: 0,
                        flexWrap: 'nowrap',
                        position: 'relative',
                        zIndex: 18,
                      }}
                    >
                      <View
                        style={{
                          width: 39,
                          height: 18,
                          flexShrink: 0,
                          position: 'relative',
                          zIndex: 19,
                        }}
                      >
                        <Text
                          style={{
                            display: 'flex',
                            height: '100%',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            fontFamily: 'Inter',
                            fontSize: 14.942564010620117,
                            fontWeight: '600',
                            lineHeight: 18,
                            color: '#252525',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            textAlign: 'left',
                            zIndex: 20,
                          }}
                          numberOfLines={1}
                        >
                          Chris
                        </Text>
                      </View>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          gap: 4,
                          alignItems: 'center',
                          alignSelf: 'stretch',
                          flexShrink: 0,
                          flexWrap: 'nowrap',
                          position: 'relative',
                          zIndex: 21,
                        }}
                      >
                        <Text
                          style={{
                            height: 12,
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Inter',
                            fontSize: 9.997499465942383,
                            fontWeight: '600',
                            lineHeight: 12,
                            color: 'rgba(50, 49, 66, 0.83)',
                            letterSpacing: 0.2,
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 22,
                          }}
                          numberOfLines={1}
                        >
                          Leave in 5 minutes?
                        </Text>
                      </View>
                    </View>
                    <Text
                      style={{
                        height: 9,
                        flexShrink: 0,
                        flexBasis: 'auto',
                        fontFamily: 'Inter',
                        fontSize: 7.035277843475342,
                        fontWeight: '400',
                        lineHeight: 8.514,
                        color: 'rgba(50, 49, 66, 0.83)',
                        letterSpacing: 0.14,
                        position: 'relative',
                        textAlign: 'left',
                        zIndex: 23,
                      }}
                      numberOfLines={1}
                    >
                      11:00
                    </Text>
                    <View
                      style={{
                        width: 15,
                        height: 15,
                        flexShrink: 0,
                        fontSize: 0,
                        position: 'absolute',
                        top: 21.701,
                        left: 236.402,
                        zIndex: 24,
                      }}
                    >
                      <Text
                        style={{
                          height: 9,
                          fontFamily: 'Inter',
                          fontSize: 7.035277843475342,
                          fontWeight: '400',
                          lineHeight: 8.514,
                          color: '#ffffff',
                          letterSpacing: 0.14,
                          position: 'relative',
                          textAlign: 'left',
                          zIndex: 26,
                          marginTop: 3,
                          marginRight: 0,
                          marginBottom: 0,
                          marginLeft: 6,
                        }}
                        numberOfLines={1}
                      >
                        1
                      </Text>
                      <ImageBackground
                        style={{
                          width: 15,
                          height: 15,
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          zIndex: 25,
                        }}
                        source={require('./assets/images/e76aef30-9ca0-4c21-9421-557d68f3327e.png')}
                        resizeMode='cover'
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  height: 69,
                  paddingTop: 11,
                  paddingRight: 9,
                  paddingBottom: 11,
                  paddingLeft: 9,
                  gap: 10,
                  alignItems: 'flex-start',
                  alignSelf: 'stretch',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  backgroundColor: '#ffffff',
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                  borderBottomLeftRadius: 8,
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 27,
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    width: 307.598,
                    flexDirection: 'row',
                    gap: 11,
                    alignItems: 'center',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 28,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 45.598,
                      height: 45.598,
                      flexShrink: 0,
                      position: 'relative',
                      zIndex: 29,
                    }}
                    source={require('./assets/images/0203054e-565c-472e-aade-e0f4f1c8b731.png')}
                    resizeMode='cover'
                  />
                  <View
                    style={{
                      display: 'flex',
                      width: 251,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      position: 'relative',
                      zIndex: 30,
                    }}
                  >
                    <View
                      style={{
                        display: 'flex',
                        width: 118,
                        gap: 7,
                        alignItems: 'flex-start',
                        flexShrink: 0,
                        flexWrap: 'nowrap',
                        position: 'relative',
                        zIndex: 31,
                      }}
                    >
                      <View
                        style={{
                          width: 68,
                          height: 18,
                          flexShrink: 0,
                          position: 'relative',
                          zIndex: 32,
                        }}
                      >
                        <Text
                          style={{
                            display: 'flex',
                            height: '100%',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            fontFamily: 'Inter',
                            fontSize: 14.942564010620117,
                            fontWeight: '600',
                            lineHeight: 18,
                            color: '#252525',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            textAlign: 'left',
                            zIndex: 33,
                          }}
                          numberOfLines={1}
                        >
                          Jane Doe
                        </Text>
                      </View>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          gap: 4,
                          alignItems: 'center',
                          alignSelf: 'stretch',
                          flexShrink: 0,
                          flexWrap: 'nowrap',
                          position: 'relative',
                          zIndex: 34,
                        }}
                      >
                        <View
                          style={{
                            width: 15,
                            height: 15,
                            flexShrink: 0,
                            position: 'relative',
                            overflow: 'hidden',
                            zIndex: 35,
                          }}
                        >
                          <ImageBackground
                            style={{
                              width: 14.531,
                              height: 8.387,
                              position: 'relative',
                              zIndex: 36,
                              marginTop: 3.488,
                              marginRight: 0,
                              marginBottom: 0,
                              marginLeft: 0.26,
                            }}
                            source={require('./assets/images/297113dc-d599-43a8-aef4-10786aba7231.png')}
                          />
                        </View>
                        <Text
                          style={{
                            height: 12,
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Inter',
                            fontSize: 9.997499465942383,
                            fontWeight: '400',
                            lineHeight: 12,
                            color: 'rgba(50, 49, 66, 0.83)',
                            letterSpacing: 0.2,
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 37,
                          }}
                          numberOfLines={1}
                        >
                          OKay, I”m Waiting....
                        </Text>
                      </View>
                    </View>
                    <Text
                      style={{
                        height: 9,
                        flexShrink: 0,
                        flexBasis: 'auto',
                        fontFamily: 'Inter',
                        fontSize: 7.035277843475342,
                        fontWeight: '400',
                        lineHeight: 8.514,
                        color: 'rgba(50, 49, 66, 0.83)',
                        letterSpacing: 0.14,
                        position: 'relative',
                        textAlign: 'left',
                        zIndex: 38,
                      }}
                      numberOfLines={1}
                    >
                      10:53
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  height: 69,
                  paddingTop: 11,
                  paddingRight: 9,
                  paddingBottom: 11,
                  paddingLeft: 9,
                  gap: 10,
                  alignItems: 'flex-start',
                  alignSelf: 'stretch',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  backgroundColor: '#ffffff',
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                  borderBottomLeftRadius: 8,
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 39,
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    width: 307.598,
                    flexDirection: 'row',
                    gap: 11,
                    alignItems: 'center',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 40,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 45.598,
                      height: 45.598,
                      flexShrink: 0,
                      position: 'relative',
                      zIndex: 41,
                    }}
                    source={require('./assets/images/19bc73b5-dc38-46dd-ad64-b2ae9ec756e5.png')}
                    resizeMode='cover'
                  />
                  <View
                    style={{
                      display: 'flex',
                      width: 251,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      position: 'relative',
                      zIndex: 42,
                    }}
                  >
                    <View
                      style={{
                        display: 'flex',
                        width: 118,
                        gap: 7,
                        alignItems: 'flex-start',
                        flexShrink: 0,
                        flexWrap: 'nowrap',
                        position: 'relative',
                        zIndex: 43,
                      }}
                    >
                      <View
                        style={{
                          width: 34,
                          height: 18,
                          flexShrink: 0,
                          position: 'relative',
                          zIndex: 44,
                        }}
                      >
                        <Text
                          style={{
                            display: 'flex',
                            height: '100%',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            fontFamily: 'Inter',
                            fontSize: 14.942564010620117,
                            fontWeight: '600',
                            lineHeight: 18,
                            color: '#252525',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            textAlign: 'left',
                            zIndex: 45,
                          }}
                          numberOfLines={1}
                        >
                          Jake
                        </Text>
                      </View>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          gap: 4,
                          alignItems: 'center',
                          alignSelf: 'stretch',
                          flexShrink: 0,
                          flexWrap: 'nowrap',
                          position: 'relative',
                          zIndex: 46,
                        }}
                      >
                        <View
                          style={{
                            width: 15,
                            height: 15,
                            flexShrink: 0,
                            position: 'relative',
                            overflow: 'hidden',
                            zIndex: 47,
                          }}
                        >
                          <ImageBackground
                            style={{
                              width: 14.531,
                              height: 8.387,
                              position: 'relative',
                              zIndex: 48,
                              marginTop: 3.488,
                              marginRight: 0,
                              marginBottom: 0,
                              marginLeft: 0.26,
                            }}
                            source={require('./assets/images/246b658e-299e-42ec-a556-8f28c3cc8d4f.png')}
                          />
                        </View>
                        <Text
                          style={{
                            height: 12,
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Inter',
                            fontSize: 9.997499465942383,
                            fontWeight: '400',
                            lineHeight: 12,
                            color: 'rgba(50, 49, 66, 0.83)',
                            letterSpacing: 0.2,
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 49,
                          }}
                          numberOfLines={1}
                        >
                          See you
                        </Text>
                      </View>
                    </View>
                    <Text
                      style={{
                        height: 9,
                        flexShrink: 0,
                        flexBasis: 'auto',
                        fontFamily: 'Inter',
                        fontSize: 7.035277843475342,
                        fontWeight: '400',
                        lineHeight: 8.514,
                        color: 'rgba(50, 49, 66, 0.83)',
                        letterSpacing: 0.14,
                        position: 'relative',
                        textAlign: 'left',
                        zIndex: 50,
                      }}
                      numberOfLines={1}
                    >
                      9:30
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  height: 69,
                  paddingTop: 11,
                  paddingRight: 9,
                  paddingBottom: 11,
                  paddingLeft: 9,
                  gap: 10,
                  alignItems: 'flex-start',
                  alignSelf: 'stretch',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  backgroundColor: '#ffffff',
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                  borderBottomLeftRadius: 8,
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 51,
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    width: 307.598,
                    flexDirection: 'row',
                    gap: 11,
                    alignItems: 'center',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 52,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 45.598,
                      height: 45.598,
                      flexShrink: 0,
                      position: 'relative',
                      zIndex: 53,
                    }}
                    source={require('./assets/images/f3d9c19c-2de6-4e48-8e56-53c6f4ca808f.png')}
                    resizeMode='cover'
                  />
                  <View
                    style={{
                      display: 'flex',
                      width: 251,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      position: 'relative',
                      zIndex: 54,
                    }}
                  >
                    <View
                      style={{
                        display: 'flex',
                        width: 118,
                        gap: 7,
                        alignItems: 'flex-start',
                        flexShrink: 0,
                        flexWrap: 'nowrap',
                        position: 'relative',
                        zIndex: 55,
                      }}
                    >
                      <View
                        style={{
                          width: 37,
                          height: 18,
                          flexShrink: 0,
                          position: 'relative',
                          zIndex: 56,
                        }}
                      >
                        <Text
                          style={{
                            display: 'flex',
                            height: '100%',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            fontFamily: 'Inter',
                            fontSize: 14.942564010620117,
                            fontWeight: '600',
                            lineHeight: 18,
                            color: '#252525',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            textAlign: 'left',
                            zIndex: 57,
                          }}
                          numberOfLines={1}
                        >
                          Alice
                        </Text>
                      </View>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          gap: 4,
                          alignItems: 'center',
                          alignSelf: 'stretch',
                          flexShrink: 0,
                          flexWrap: 'nowrap',
                          position: 'relative',
                          zIndex: 58,
                        }}
                      >
                        <Text
                          style={{
                            height: 12,
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Inter',
                            fontSize: 9.997499465942383,
                            fontWeight: '400',
                            lineHeight: 12,
                            color: 'rgba(50, 49, 66, 0.83)',
                            letterSpacing: 0.2,
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 59,
                          }}
                          numberOfLines={1}
                        >
                          Bye
                        </Text>
                      </View>
                    </View>
                    <Text
                      style={{
                        height: 9,
                        flexShrink: 0,
                        flexBasis: 'auto',
                        fontFamily: 'Inter',
                        fontSize: 7.035277843475342,
                        fontWeight: '400',
                        lineHeight: 8.514,
                        color: 'rgba(50, 49, 66, 0.83)',
                        letterSpacing: 0.14,
                        position: 'relative',
                        textAlign: 'left',
                        zIndex: 60,
                      }}
                      numberOfLines={1}
                    >
                      Yesterday
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  height: 69,
                  paddingTop: 11,
                  paddingRight: 9,
                  paddingBottom: 11,
                  paddingLeft: 9,
                  gap: 10,
                  alignItems: 'flex-start',
                  alignSelf: 'stretch',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  backgroundColor: '#ffffff',
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                  borderBottomLeftRadius: 8,
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 61,
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    width: 307.598,
                    flexDirection: 'row',
                    gap: 11,
                    alignItems: 'center',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 62,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 45.598,
                      height: 45.598,
                      flexShrink: 0,
                      position: 'relative',
                      zIndex: 63,
                    }}
                    source={require('./assets/images/845e3e66-397b-4bcc-a55d-c544f50c4a3b.png')}
                    resizeMode='cover'
                  />
                  <View
                    style={{
                      display: 'flex',
                      width: 251,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      position: 'relative',
                      zIndex: 64,
                    }}
                  >
                    <View
                      style={{
                        display: 'flex',
                        width: 118,
                        gap: 7,
                        alignItems: 'flex-start',
                        flexShrink: 0,
                        flexWrap: 'nowrap',
                        position: 'relative',
                        zIndex: 65,
                      }}
                    >
                      <View
                        style={{
                          width: 19,
                          height: 18,
                          flexShrink: 0,
                          position: 'relative',
                          zIndex: 66,
                        }}
                      >
                        <Text
                          style={{
                            display: 'flex',
                            height: '100%',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            fontFamily: 'Inter',
                            fontSize: 14.942564010620117,
                            fontWeight: '600',
                            lineHeight: 18,
                            color: '#252525',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            textAlign: 'left',
                            zIndex: 67,
                          }}
                          numberOfLines={1}
                        >
                          Ali
                        </Text>
                      </View>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          gap: 4,
                          alignItems: 'center',
                          alignSelf: 'stretch',
                          flexShrink: 0,
                          flexWrap: 'nowrap',
                          position: 'relative',
                          zIndex: 68,
                        }}
                      >
                        <Text
                          style={{
                            height: 12,
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Inter',
                            fontSize: 9.997499465942383,
                            fontWeight: '400',
                            lineHeight: 12,
                            color: 'rgba(50, 49, 66, 0.83)',
                            letterSpacing: 0.2,
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 69,
                          }}
                          numberOfLines={1}
                        >
                          Tomorrow
                        </Text>
                      </View>
                    </View>
                    <Text
                      style={{
                        height: 9,
                        flexShrink: 0,
                        flexBasis: 'auto',
                        fontFamily: 'Inter',
                        fontSize: 7.035277843475342,
                        fontWeight: '400',
                        lineHeight: 8.514,
                        color: 'rgba(50, 49, 66, 0.83)',
                        letterSpacing: 0.14,
                        position: 'relative',
                        textAlign: 'left',
                        zIndex: 70,
                      }}
                      numberOfLines={1}
                    >
                      Yesterday
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  height: 69,
                  paddingTop: 11,
                  paddingRight: 9,
                  paddingBottom: 11,
                  paddingLeft: 9,
                  gap: 10,
                  alignItems: 'flex-start',
                  alignSelf: 'stretch',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  backgroundColor: '#ffffff',
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                  borderBottomLeftRadius: 8,
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 71,
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    width: 307.598,
                    flexDirection: 'row',
                    gap: 11,
                    alignItems: 'center',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 72,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 45.598,
                      height: 45.598,
                      flexShrink: 0,
                      position: 'relative',
                      zIndex: 73,
                    }}
                    source={require('./assets/images/7d688047-3919-4b36-a585-3744fae7459d.png')}
                    resizeMode='cover'
                  />
                  <View
                    style={{
                      display: 'flex',
                      width: 251,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      position: 'relative',
                      zIndex: 74,
                    }}
                  >
                    <View
                      style={{
                        display: 'flex',
                        width: 118,
                        gap: 7,
                        alignItems: 'flex-start',
                        flexShrink: 0,
                        flexWrap: 'nowrap',
                        position: 'relative',
                        zIndex: 75,
                      }}
                    >
                      <View
                        style={{
                          width: 42,
                          height: 18,
                          flexShrink: 0,
                          position: 'relative',
                          zIndex: 76,
                        }}
                      >
                        <Text
                          style={{
                            display: 'flex',
                            height: '100%',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            fontFamily: 'Inter',
                            fontSize: 14.942564010620117,
                            fontWeight: '600',
                            lineHeight: 18,
                            color: '#252525',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            textAlign: 'left',
                            zIndex: 77,
                          }}
                          numberOfLines={1}
                        >
                          Amna
                        </Text>
                      </View>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          gap: 4,
                          alignItems: 'center',
                          alignSelf: 'stretch',
                          flexShrink: 0,
                          flexWrap: 'nowrap',
                          position: 'relative',
                          zIndex: 78,
                        }}
                      >
                        <View
                          style={{
                            width: 15,
                            height: 15,
                            flexShrink: 0,
                            position: 'relative',
                            overflow: 'hidden',
                            zIndex: 79,
                          }}
                        >
                          <ImageBackground
                            style={{
                              width: 14.531,
                              height: 8.387,
                              position: 'relative',
                              zIndex: 80,
                              marginTop: 3.488,
                              marginRight: 0,
                              marginBottom: 0,
                              marginLeft: 0.26,
                            }}
                            source={require('./assets/images/ddd46622-eeae-4821-8417-9aff41a95e1a.png')}
                          />
                        </View>
                        <Text
                          style={{
                            height: 12,
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Inter',
                            fontSize: 9.997499465942383,
                            fontWeight: '400',
                            lineHeight: 12,
                            color: 'rgba(50, 49, 66, 0.83)',
                            letterSpacing: 0.2,
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 81,
                          }}
                          numberOfLines={1}
                        >
                          Bye
                        </Text>
                      </View>
                    </View>
                    <Text
                      style={{
                        height: 9,
                        flexShrink: 0,
                        flexBasis: 'auto',
                        fontFamily: 'Inter',
                        fontSize: 7.035277843475342,
                        fontWeight: '400',
                        lineHeight: 8.514,
                        color: 'rgba(50, 49, 66, 0.83)',
                        letterSpacing: 0.14,
                        position: 'relative',
                        textAlign: 'left',
                        zIndex: 82,
                      }}
                      numberOfLines={1}
                    >
                      01/10/2024
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  height: 69,
                  paddingTop: 11,
                  paddingRight: 9,
                  paddingBottom: 11,
                  paddingLeft: 9,
                  gap: 10,
                  alignItems: 'flex-start',
                  alignSelf: 'stretch',
                  flexShrink: 0,
                  flexWrap: 'nowrap',
                  backgroundColor: '#ffffff',
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                  borderBottomLeftRadius: 8,
                  position: 'relative',
                  overflow: 'hidden',
                  zIndex: 83,
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    width: 307.598,
                    flexDirection: 'row',
                    gap: 11,
                    alignItems: 'center',
                    flexShrink: 0,
                    flexWrap: 'nowrap',
                    position: 'relative',
                    zIndex: 84,
                  }}
                >
                  <ImageBackground
                    style={{
                      width: 45.598,
                      height: 45.598,
                      flexShrink: 0,
                      position: 'relative',
                      zIndex: 85,
                    }}
                    source={require('./assets/images/5a904715-dabe-41c1-8381-82c8c3f28042.png')}
                    resizeMode='cover'
                  />
                  <View
                    style={{
                      display: 'flex',
                      width: 251,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      position: 'relative',
                      zIndex: 86,
                    }}
                  >
                    <View
                      style={{
                        display: 'flex',
                        width: 118,
                        gap: 7,
                        alignItems: 'flex-start',
                        flexShrink: 0,
                        flexWrap: 'nowrap',
                        position: 'relative',
                        zIndex: 87,
                      }}
                    >
                      <View
                        style={{
                          width: 52,
                          height: 18,
                          flexShrink: 0,
                          position: 'relative',
                          zIndex: 88,
                        }}
                      >
                        <Text
                          style={{
                            display: 'flex',
                            height: '100%',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            fontFamily: 'Inter',
                            fontSize: 14.942564010620117,
                            fontWeight: '600',
                            lineHeight: 18,
                            color: '#252525',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            textAlign: 'left',
                            zIndex: 89,
                          }}
                          numberOfLines={1}
                        >
                          Ahmad
                        </Text>
                      </View>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          gap: 4,
                          alignItems: 'center',
                          alignSelf: 'stretch',
                          flexShrink: 0,
                          flexWrap: 'nowrap',
                          position: 'relative',
                          zIndex: 90,
                        }}
                      >
                        <View
                          style={{
                            width: 15,
                            height: 15,
                            flexShrink: 0,
                            position: 'relative',
                            overflow: 'hidden',
                            zIndex: 91,
                          }}
                        >
                          <ImageBackground
                            style={{
                              width: 14.531,
                              height: 8.387,
                              position: 'relative',
                              zIndex: 92,
                              marginTop: 3.488,
                              marginRight: 0,
                              marginBottom: 0,
                              marginLeft: 0.26,
                            }}
                            source={require('./assets/images/7b307a62-b75b-41dd-af02-b5b74f01487b.png')}
                          />
                        </View>
                        <Text
                          style={{
                            height: 12,
                            flexShrink: 0,
                            flexBasis: 'auto',
                            fontFamily: 'Inter',
                            fontSize: 9.997499465942383,
                            fontWeight: '400',
                            lineHeight: 12,
                            color: 'rgba(50, 49, 66, 0.83)',
                            letterSpacing: 0.2,
                            position: 'relative',
                            textAlign: 'left',
                            zIndex: 93,
                          }}
                          numberOfLines={1}
                        >
                          Wait
                        </Text>
                      </View>
                    </View>
                    <Text
                      style={{
                        height: 9,
                        flexShrink: 0,
                        flexBasis: 'auto',
                        fontFamily: 'Inter',
                        fontSize: 7.035277843475342,
                        fontWeight: '400',
                        lineHeight: 8.514,
                        color: 'rgba(50, 49, 66, 0.83)',
                        letterSpacing: 0.14,
                        position: 'relative',
                        textAlign: 'left',
                        zIndex: 94,
                      }}
                      numberOfLines={1}
                    >
                      30/09/2024
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              width: 29.436,
              height: 29.436,
              position: 'absolute',
              top: 683.387,
              left: 120.713,
              overflow: 'hidden',
              zIndex: 4,
            }}
          />
          <View
            style={{
              display: 'flex',
              width: 78.832,
              height: 78.832,
              paddingTop: 14.007,
              paddingRight: 14.007,
              paddingBottom: 14.007,
              paddingLeft: 14.007,
              flexDirection: 'row',
              gap: 7.004,
              alignItems: 'center',
              flexWrap: 'nowrap',
              position: 'absolute',
              top: 741,
              left: 157,
              zIndex: 101,
            }}
          >
            <View
              style={{
                width: '100%',
                height: '100%',
                flexShrink: 0,
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 102,
              }}
            >
              <ImageBackground
                style={{
                  width: '132.96%',
                  height: '132.96%',
                  position: 'absolute',
                  top: '-16.48%',
                  left: '-16.48%',
                  zIndex: 103,
                }}
                source={require('./assets/images/f6a2fb1b-f4bc-4432-af47-2879e2428f6a.png')}
              />
            </View>
            <View
              style={{
                width: 49.927,
                height: 49.927,
                flexShrink: 0,
                position: 'relative',
                overflow: 'hidden',
                zIndex: 104,
              }}
            >
              <View
                style={{
                  width: 41.607,
                  height: 41.218,
                  position: 'relative',
                  zIndex: 105,
                  marginTop: 8.32,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 4.163,
                }}
              >
                <ImageBackground
                  style={{
                    width: 41.607,
                    height: 35.365,
                    position: 'relative',
                    zIndex: 107,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                  source={require('./assets/images/c2f09a1f-59c2-40ca-81c7-712e92a12e1c.png')}
                />
                <ImageBackground
                  style={{
                    width: 1.739,
                    height: 1.394,
                    position: 'relative',
                    zIndex: 106,
                    marginTop: 4.46,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 20.961,
                  }}
                  source={require('./assets/images/4b7a8932-5eab-4ace-9ab0-e71d88d6b396.png')}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              width: 57.03,
              height: 57.03,
              position: 'absolute',
              top: 759.397,
              left: 170.09,
              overflow: 'hidden',
            }}
          >
            <View
              style={{
                width: 47.526,
                height: 47.083,
                position: 'relative',
                zIndex: 1,
                marginTop: 9.504,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 4.75,
              }}
            >
              <ImageBackground
                style={{
                  width: 47.526,
                  height: 40.396,
                  position: 'relative',
                  zIndex: 3,
                  marginTop: 0,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 0,
                }}
                source={require('./assets/images/10dc0091-20a1-470d-a97a-1ec5ab0bcd39.png')}
              />
              <ImageBackground
                style={{
                  width: 1.987,
                  height: 1.592,
                  position: 'relative',
                  zIndex: 2,
                  marginTop: 5.095,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 23.945,
                }}
                source={require('./assets/images/8e2bb592-bbd0-45e0-b734-12b54c517a38.png')}
              />
            </View>
          </View>
          <View
            style={{
              width: 369,
              height: 51,
              backgroundColor: '#fefefe',
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              borderBottomRightRadius: 15,
              borderBottomLeftRadius: 15,
              position: 'absolute',
              top: 778,
              left: 10,
              zIndex: 96,
            }}
          >
            <View
              style={{
                display: 'flex',
                width: 86.168,
                height: 18,
                flexDirection: 'row',
                gap: 50,
                alignItems: 'center',
                flexWrap: 'nowrap',
                position: 'absolute',
                top: 15,
                left: 18,
                zIndex: 98,
              }}
            >
              <ImageBackground
                style={{
                  width: 17,
                  height: 18,
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 99,
                }}
                source={require('./assets/images/bad55406-e563-4561-a1e0-0c589b4be87d.png')}
                resizeMode='cover'
              />
              <ImageBackground
                style={{
                  width: 19.168,
                  height: 16.292,
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 100,
                }}
                source={require('./assets/images/a35fccc2-2058-4822-9634-526319e26e58.png')}
                resizeMode='cover'
              />
            </View>
            <View
              style={{
                display: 'flex',
                width: 76.092,
                height: 16.132,
                flexDirection: 'row',
                gap: 50,
                alignItems: 'flex-end',
                flexWrap: 'nowrap',
                position: 'absolute',
                top: 16,
                left: 268,
                zIndex: 108,
              }}
            >
              <ImageBackground
                style={{
                  width: 19.377,
                  height: 16.132,
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 109,
                }}
                source={require('./assets/images/ff4504e0-dab1-4859-9e44-66c680256dee.png')}
              />
              <ImageBackground
                style={{
                  width: 13.127,
                  height: 16.45,
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 110,
                }}
                source={require('./assets/images/eac2f2d3-1678-49e3-9a1b-13a91c298619.png')}
                resizeMode='cover'
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
