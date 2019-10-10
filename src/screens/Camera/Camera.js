import React, {Component} from 'react';
import {Text, TouchableOpacity, View, ImageBackground} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };
  }

  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      this.setState({image: data});
    }
  };

  render() {
    const {image} = this.state;
    const {onPress} = this.props;
    return image && image.uri ? (
      <ImageBackground style={{flex: 1}} source={{uri: image.uri}}>
        <View style={{flex: 8}} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: 5,
            flex: 1,
          }}>
          <TouchableOpacity onPress={() => this.setState({image: null})}>
            <Icon name="times" size={25} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPress(image)}>
            <Icon name="check" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    ) : (
      <View
        style={{flex: 1, flexDirection: 'column', backgroundColor: 'black'}}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => this.takePicture()}
            style={{
              flex: 0,
              backgroundColor: '#fff',
              borderRadius: 5,
              padding: 15,
              paddingHorizontal: 20,
              alignSelf: 'center',
              margin: 20,
            }}>
            <Text style={{fontSize: 14}}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
