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
              backgroundColor: '#113a78',
              position: 'relative',
              overflow: 'hidden',
              marginTop: 0.44,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: -0.31,
            }}
          >
            <View
              style={{
                width: 390,
                height: 844,
                position: 'relative',
                zIndex: 1,
                marginTop: -0.44,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0.31,
              }}
            >
              <View
                style={{
                  display: 'flex',
                  width: 390,
                  height: 844.402,
                  paddingTop: 145,
                  paddingRight: 48,
                  paddingBottom: 145,
                  paddingLeft: 48,
                  gap: 54,
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'nowrap',
                  backgroundColor: '#ffffff',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  zIndex: 2,
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
                    Add your preferences
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
                    Find the best carpooling partners.
                  </Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    gap: 17,
                    alignItems: 'flex-start',
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
                      paddingTop: 13,
                      paddingRight: 18,
                      paddingBottom: 13,
                      paddingLeft: 18,
                      gap: 8,
                      alignItems: 'flex-start',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      backgroundColor: '#fefefe',
                      borderTopLeftRadius: 21.276,
                      borderTopRightRadius: 21.276,
                      borderBottomRightRadius: 21.276,
                      borderBottomLeftRadius: 21.276,
                      borderWidth: 2,
                      borderColor: '#113a78',
                      borderStyle: 'solid',
                      position: 'relative',
                      zIndex: 7,
                    }}
                  >
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        alignSelf: 'stretch',
                        flexShrink: 0,
                        flexWrap: 'nowrap',
                        position: 'relative',
                        zIndex: 8,
                      }}
                    >
                      <Text
                        style={{
                          display: 'flex',
                          width: 83.914,
                          height: 23.234,
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          flexShrink: 0,
                          flexBasis: 'auto',
                          fontFamily: 'Inter',
                          fontSize: 14.42458724975586,
                          fontWeight: '400',
                          lineHeight: 23.234,
                          color: '#113a78',
                          position: 'relative',
                          textAlign: 'left',
                          zIndex: 9,
                        }}
                        numberOfLines={1}
                      >
                        University
                      </Text>
                      <View
                        style={{
                          width: 20.553,
                          height: 23.234,
                          flexShrink: 0,
                          position: 'relative',
                          overflow: 'hidden',
                          zIndex: 10,
                        }}
                      >
                        <ImageBackground
                          style={{
                            width: 20.553,
                            height: 23.234,
                            position: 'relative',
                            zIndex: 11,
                            marginTop: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 0,
                          }}
                          source={require('./assets/images/4b91209a-814d-4d9c-8ff6-4c9cee00659d.png')}
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      paddingTop: 13,
                      paddingRight: 18,
                      paddingBottom: 13,
                      paddingLeft: 18,
                      gap: 8,
                      alignItems: 'flex-start',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      backgroundColor: '#fefefe',
                      borderTopLeftRadius: 21.276,
                      borderTopRightRadius: 21.276,
                      borderBottomRightRadius: 21.276,
                      borderBottomLeftRadius: 21.276,
                      borderWidth: 2,
                      borderColor: '#113a78',
                      borderStyle: 'solid',
                      position: 'relative',
                      zIndex: 12,
                    }}
                  >
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        alignSelf: 'stretch',
                        flexShrink: 0,
                        flexWrap: 'nowrap',
                        position: 'relative',
                        zIndex: 13,
                      }}
                    >
                      <Text
                        style={{
                          display: 'flex',
                          width: 258,
                          height: 23,
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          flexShrink: 0,
                          flexBasis: 'auto',
                          fontFamily: 'Inter',
                          fontSize: 14.42458724975586,
                          fontWeight: '400',
                          lineHeight: 23,
                          color: '#113a78',
                          position: 'relative',
                          textAlign: 'left',
                          zIndex: 14,
                        }}
                        numberOfLines={1}
                      >
                        Emergency Contact
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      paddingTop: 13,
                      paddingRight: 18,
                      paddingBottom: 13,
                      paddingLeft: 18,
                      gap: 8,
                      alignItems: 'flex-start',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      backgroundColor: '#fefefe',
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
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        alignSelf: 'stretch',
                        flexShrink: 0,
                        flexWrap: 'nowrap',
                        position: 'relative',
                        zIndex: 16,
                      }}
                    >
                      <Text
                        style={{
                          display: 'flex',
                          width: 141,
                          height: 23,
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          flexShrink: 0,
                          flexBasis: 'auto',
                          fontFamily: 'Inter',
                          fontSize: 14.42458724975586,
                          fontWeight: '400',
                          lineHeight: 23,
                          color: '#113a78',
                          position: 'relative',
                          textAlign: 'left',
                          zIndex: 17,
                        }}
                        numberOfLines={1}
                      >
                        Gender Preference
                      </Text>
                      <View
                        style={{
                          width: 20.553,
                          height: 23.234,
                          flexShrink: 0,
                          position: 'relative',
                          overflow: 'hidden',
                          zIndex: 18,
                        }}
                      >
                        <ImageBackground
                          style={{
                            width: 20.553,
                            height: 23.234,
                            position: 'relative',
                            zIndex: 19,
                            marginTop: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 0,
                          }}
                          source={require('./assets/images/93ad4c45-4c10-4d5a-b23e-d0ca73ce6617.png')}
                        />
                      </View>
                    </View>
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
                      backgroundColor: '#fefefe',
                      borderTopLeftRadius: 21.276,
                      borderTopRightRadius: 21.276,
                      borderBottomRightRadius: 21.276,
                      borderBottomLeftRadius: 21.276,
                      borderWidth: 2,
                      borderColor: '#113a78',
                      borderStyle: 'solid',
                      position: 'relative',
                      zIndex: 20,
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
                        lineHeight: 17.234,
                        color: '#113a78',
                        position: 'relative',
                        textAlign: 'left',
                        zIndex: 21,
                      }}
                      numberOfLines={1}
                    >
                      Likes
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
                      backgroundColor: '#fefefe',
                      borderTopLeftRadius: 21.276,
                      borderTopRightRadius: 21.276,
                      borderBottomRightRadius: 21.276,
                      borderBottomLeftRadius: 21.276,
                      borderWidth: 2,
                      borderColor: '#113a78',
                      borderStyle: 'solid',
                      position: 'relative',
                      zIndex: 22,
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
                        zIndex: 23,
                      }}
                      numberOfLines={1}
                    >
                      Dislikes
                    </Text>
                  </View>
                  <View
                    style={{
                      display: 'flex',
                      height: 49.234,
                      paddingTop: 12,
                      paddingRight: 25,
                      paddingBottom: 12,
                      paddingLeft: 25,
                      gap: 8,
                      alignItems: 'flex-start',
                      alignSelf: 'stretch',
                      flexShrink: 0,
                      flexWrap: 'nowrap',
                      backgroundColor: '#1559bf',
                      borderTopLeftRadius: 21.276,
                      borderTopRightRadius: 21.276,
                      borderBottomRightRadius: 21.276,
                      borderBottomLeftRadius: 21.276,
                      position: 'relative',
                      zIndex: 24,
                    }}
                  >
                    <View
                      style={{
                        display: 'flex',
                        width: 211,
                        flexDirection: 'row',
                        gap: 37,
                        alignItems: 'center',
                        flexShrink: 0,
                        flexWrap: 'nowrap',
                        position: 'relative',
                        zIndex: 25,
                      }}
                    >
                      <View
                        style={{
                          width: 24,
                          height: 24,
                          flexShrink: 0,
                          position: 'relative',
                          overflow: 'hidden',
                          zIndex: 26,
                        }}
                      >
                        <ImageBackground
                          style={{
                            width: 18,
                            height: 19,
                            position: 'relative',
                            zIndex: 27,
                            marginTop: 3,
                            marginRight: 0,
                            marginBottom: 0,
                            marginLeft: 3,
                          }}
                          source={require('./assets/images/c78e50e9-2005-4936-8320-722d4c5a8072.png')}
                        />
                      </View>
                      <Text
                        style={{
                          display: 'flex',
                          width: 150,
                          height: 17,
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          flexShrink: 0,
                          flexBasis: 'auto',
                          fontFamily: 'Inter',
                          fontSize: 14.42458724975586,
                          fontWeight: '400',
                          lineHeight: 17,
                          color: '#ffffff',
                          position: 'relative',
                          textAlign: 'left',
                          zIndex: 28,
                        }}
                        numberOfLines={1}
                      >
                        Upload Student Card
                      </Text>
                    </View>
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
                      zIndex: 29,
                    }}
                  >
                    <Text
                      style={{
                        display: 'flex',
                        width: 59,
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
                        zIndex: 30,
                      }}
                      numberOfLines={1}
                    >
                      Sign Up
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
