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
            backgroundColor: '#ffffff',
            position: 'relative',
            overflow: 'hidden',
            marginTop: 0,
            marginRight: 'auto',
            marginBottom: 0,
            marginLeft: 'auto',
          }}
        >
          <ImageBackground
            style={{
              width: 142.074,
              height: 142.074,
              position: 'relative',
              zIndex: 4,
              marginTop: 65.1,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 131.022,
            }}
            source={require('./assets/images/22971d60-8c73-42c6-a83c-7892cbb8405c.png')}
            resizeMode='cover'
          />
          <View
            style={{
              width: 306.16,
              height: 47.025,
              backgroundColor: '#e6effc',
              borderTopLeftRadius: 11.006,
              borderTopRightRadius: 11.006,
              borderBottomRightRadius: 11.006,
              borderBottomLeftRadius: 11.006,
              position: 'relative',
              zIndex: 9,
              marginTop: 76.974,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 42.021,
            }}
          >
            <Text
              style={{
                display: 'flex',
                width: 141.074,
                height: 21.011,
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Inter',
                fontSize: 14.007323265075684,
                fontWeight: '500',
                lineHeight: 16.952,
                color: '#113a78',
                position: 'absolute',
                top: 13.007,
                left: 83.044,
                textAlign: 'center',
                zIndex: 10,
              }}
              numberOfLines={1}
            >
              Gender: Male
            </Text>
          </View>
          <View
            style={{
              width: 306.16,
              height: 47.025,
              backgroundColor: '#e6effc',
              borderTopLeftRadius: 11.006,
              borderTopRightRadius: 11.006,
              borderBottomRightRadius: 11.006,
              borderBottomLeftRadius: 11.006,
              position: 'relative',
              zIndex: 22,
              marginTop: 17.009,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 43.021,
            }}
          >
            <Text
              style={{
                display: 'flex',
                height: 21.011,
                justifyContent: 'flex-start',
                alignItems: 'center',
                fontFamily: 'Inter',
                fontSize: 14.007323265075684,
                fontWeight: '500',
                lineHeight: 16.952,
                color: '#113a78',
                position: 'absolute',
                top: 13.007,
                left: 38.021,
                textAlign: 'left',
                zIndex: 23,
              }}
              numberOfLines={1}
            >
              Likes:
            </Text>
            <View
              style={{
                width: 190.099,
                height: 20.01,
                backgroundColor: '#ffffff',
                borderTopLeftRadius: 3.002,
                borderTopRightRadius: 3.002,
                borderBottomRightRadius: 3.002,
                borderBottomLeftRadius: 3.002,
                position: 'absolute',
                top: 14.007,
                left: 92.048,
                zIndex: 27,
              }}
            >
              <Text
                style={{
                  display: 'flex',
                  height: 11,
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  fontFamily: 'Inter',
                  fontSize: 9.45494270324707,
                  fontWeight: '500',
                  lineHeight: 11,
                  color: '#113a7a',
                  position: 'absolute',
                  top: 5.002,
                  left: 21.012,
                  textAlign: 'left',
                  zIndex: 29,
                }}
                numberOfLines={1}
              >
                Making Connections, Socialising
              </Text>
            </View>
          </View>
          <View
            style={{
              width: 306.16,
              height: 47.025,
              backgroundColor: '#e6effc',
              borderTopLeftRadius: 11.006,
              borderTopRightRadius: 11.006,
              borderBottomRightRadius: 11.006,
              borderBottomLeftRadius: 11.006,
              position: 'relative',
              zIndex: 19,
              marginTop: 12.007,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 43.021,
            }}
          >
            <Text
              style={{
                display: 'flex',
                height: 21.011,
                justifyContent: 'flex-start',
                alignItems: 'center',
                fontFamily: 'Inter',
                fontSize: 14.007323265075684,
                fontWeight: '500',
                lineHeight: 16.952,
                color: '#113a78',
                position: 'absolute',
                top: 13.007,
                left: 38.021,
                textAlign: 'left',
                zIndex: 20,
              }}
              numberOfLines={1}
            >
              Dislikes:
            </Text>
            <View
              style={{
                width: 178.093,
                height: 20.01,
                backgroundColor: '#ffffff',
                borderTopLeftRadius: 3.002,
                borderTopRightRadius: 3.002,
                borderBottomRightRadius: 3.002,
                borderBottomLeftRadius: 3.002,
                position: 'absolute',
                top: 15.006,
                left: 104.056,
                zIndex: 28,
              }}
            >
              <Text
                style={{
                  display: 'flex',
                  height: 11,
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  fontFamily: 'Inter',
                  fontSize: 9.45494270324707,
                  fontWeight: '500',
                  lineHeight: 11,
                  color: '#113a7a',
                  position: 'absolute',
                  top: 5.002,
                  left: 17.009,
                  textAlign: 'left',
                  zIndex: 30,
                }}
                numberOfLines={1}
              >
                Kids
              </Text>
            </View>
          </View>
          <View
            style={{
              width: 306.16,
              height: 47.025,
              backgroundColor: '#e6effc',
              borderTopLeftRadius: 11.006,
              borderTopRightRadius: 11.006,
              borderBottomRightRadius: 11.006,
              borderBottomLeftRadius: 11.006,
              position: 'relative',
              zIndex: 15,
              marginTop: 12.005,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 43.288,
            }}
          >
            <Text
              style={{
                display: 'flex',
                height: 21.067,
                justifyContent: 'flex-start',
                alignItems: 'center',
                fontFamily: 'Inter',
                fontSize: 14.007323265075684,
                fontWeight: '500',
                lineHeight: 16.952,
                color: '#113a78',
                position: 'absolute',
                top: 12.409,
                left: 74.17,
                textAlign: 'left',
                zIndex: 16,
              }}
              numberOfLines={1}
            >
              Peer Review:
            </Text>
            <Text
              style={{
                display: 'flex',
                height: 21.067,
                justifyContent: 'flex-start',
                alignItems: 'center',
                fontFamily: 'Inter',
                fontSize: 14.007323265075684,
                fontWeight: '500',
                lineHeight: 16.952,
                color: '#113a78',
                position: 'absolute',
                top: 12.409,
                left: 196.243,
                textAlign: 'left',
                zIndex: 17,
              }}
              numberOfLines={1}
            >
              4.8
            </Text>
            <ImageBackground
              style={{
                width: 21.933,
                height: 21.933,
                position: 'absolute',
                top: 12.41,
                left: 169.403,
                zIndex: 31,
              }}
              source={require('./assets/images/cd572c6a-face-4d39-bd2b-a10bbba7f90f.png')}
              resizeMode='cover'
            />
          </View>
          <View
            style={{
              width: 306.16,
              height: 47.025,
              backgroundColor: '#e6effc',
              borderTopLeftRadius: 11.006,
              borderTopRightRadius: 11.006,
              borderBottomRightRadius: 11.006,
              borderBottomLeftRadius: 11.006,
              position: 'relative',
              zIndex: 12,
              marginTop: 15.024,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 43.001,
            }}
          >
            <Text
              style={{
                display: 'flex',
                width: 182.095,
                height: 21.011,
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Inter',
                fontSize: 14.007323265075684,
                fontWeight: '500',
                lineHeight: 16.952,
                color: '#113a78',
                position: 'absolute',
                top: 13.007,
                left: 62.032,
                textAlign: 'center',
                zIndex: 13,
              }}
              numberOfLines={1}
            >
              ID Verification: Verified
            </Text>
          </View>
          <View
            style={{
              width: 306.16,
              height: 47.025,
              backgroundColor: '#e6effc',
              borderTopLeftRadius: 11.006,
              borderTopRightRadius: 11.006,
              borderBottomRightRadius: 11.006,
              borderBottomLeftRadius: 11.006,
              position: 'relative',
              zIndex: 25,
              marginTop: 12.136,
              marginRight: 0,
              marginBottom: 0,
              marginLeft: 42.132,
            }}
          >
            <Text
              style={{
                display: 'flex',
                width: 213.111,
                height: 21.011,
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: 'Inter',
                fontSize: 14.007323265075684,
                fontWeight: '500',
                lineHeight: 16.952,
                color: '#113a78',
                position: 'absolute',
                top: 13.007,
                left: 46.023,
                textAlign: 'center',
                zIndex: 26,
              }}
              numberOfLines={1}
            >
              Picture Verification: Verified
            </Text>
          </View>
          <Text
            style={{
              display: 'flex',
              height: 25,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              fontFamily: 'Inter',
              fontSize: 20.844226837158203,
              fontWeight: '600',
              lineHeight: 25,
              color: '#113a7a',
              position: 'absolute',
              top: 233.35,
              left: 107.645,
              textAlign: 'left',
              zIndex: 5,
            }}
            numberOfLines={1}
          >
            Hamzah Ahmad
          </Text>
          <View
            style={{
              width: 20.01,
              height: 20.01,
              position: 'absolute',
              top: 237.72,
              left: 276.412,
              overflow: 'hidden',
              zIndex: 6,
            }}
          >
            <ImageBackground
              style={{
                width: 15.008,
                height: 15.008,
                position: 'relative',
                zIndex: 7,
                marginTop: 1.667,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 1.668,
              }}
              source={require('./assets/images/7ee387a4-d794-48eb-952b-1367533f04f2.png')}
            />
          </View>
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
              left: 156.77,
              zIndex: 38,
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
                zIndex: 39,
              }}
            >
              <ImageBackground
                style={{
                  width: '132.96%',
                  height: '132.96%',
                  position: 'absolute',
                  top: '-16.48%',
                  left: '-16.48%',
                  zIndex: 40,
                }}
                source={require('./assets/images/d81c5593-98c7-496e-9d44-08f977e77f9a.png')}
              />
            </View>
            <View
              style={{
                width: 49.927,
                height: 49.927,
                flexShrink: 0,
                position: 'relative',
                overflow: 'hidden',
                zIndex: 41,
              }}
            >
              <View
                style={{
                  width: 41.607,
                  height: 41.218,
                  position: 'relative',
                  zIndex: 42,
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
                    zIndex: 44,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 0,
                  }}
                  source={require('./assets/images/bd2166ab-0f1b-4329-82f4-c00ab3fb40bd.png')}
                />
                <ImageBackground
                  style={{
                    width: 1.739,
                    height: 1.394,
                    position: 'relative',
                    zIndex: 43,
                    marginTop: 4.46,
                    marginRight: 0,
                    marginBottom: 0,
                    marginLeft: 20.961,
                  }}
                  source={require('./assets/images/92648caf-593a-41db-8141-5c29c8858f5a.png')}
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
              left: 170.088,
              overflow: 'hidden',
            }}
          >
            <View
              style={{
                width: 47.526,
                height: 47.082,
                position: 'relative',
                zIndex: 1,
                marginTop: 9.504,
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 4.755,
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
                source={require('./assets/images/d5a8d8de-6642-4260-acf3-871530109057.png')}
              />
              <ImageBackground
                style={{
                  width: 1.987,
                  height: 1.592,
                  position: 'relative',
                  zIndex: 2,
                  marginTop: 5.094,
                  marginRight: 0,
                  marginBottom: 0,
                  marginLeft: 23.945,
                }}
                source={require('./assets/images/ad9706fe-0f41-4d0a-8475-43094c95d750.png')}
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
              left: 9.77,
              zIndex: 33,
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
                zIndex: 35,
              }}
            >
              <ImageBackground
                style={{
                  width: 17,
                  height: 18,
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 36,
                }}
                source={require('./assets/images/18df2870-d08c-4a73-8228-4002924eb31b.png')}
                resizeMode='cover'
              />
              <ImageBackground
                style={{
                  width: 19.168,
                  height: 16.292,
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 37,
                }}
                source={require('./assets/images/aec8533a-78d7-4c91-97e6-74a5a7c2a717.png')}
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
                zIndex: 45,
              }}
            >
              <ImageBackground
                style={{
                  width: 19.377,
                  height: 16.132,
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 46,
                }}
                source={require('./assets/images/8b1656e8-014e-41e8-9043-0ae8ba0ac6ff.png')}
              />
              <ImageBackground
                style={{
                  width: 13.127,
                  height: 16.45,
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 47,
                }}
                source={require('./assets/images/d8bedede-bd1c-40e1-bad9-d8c2e99aadca.png')}
                resizeMode='cover'
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
