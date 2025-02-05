import React from 'react';
import { View } from 'react-native';
import stylesGlobal from '../styles';
import styles from './styles';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

const RoundedLoading = ({ width, height, radius, column, line }) => {
  const lineArray = Array.from(Array(line), (x, index) => index + 1);

  const loadingStyle = [styles.loading];
  if (radius) {
    loadingStyle.push({ borderRadius: radius });
  }

  return column ? (
    <View style={styles.textLoading}>
      <View style={stylesGlobal.width50}>
        <ShimmerPlaceHolder
          autoRun={true}
          visible={false}
          width={width}
          height={height}
          style={loadingStyle}
        />
      </View>
      <View style={stylesGlobal.width50}>
        <ShimmerPlaceHolder
          autoRun={true}
          visible={false}
          width={width}
          height={height}
          style={loadingStyle}
        />
      </View>
    </View>
  ) : (
    <View>
      {lineArray.map((item, index) => {
        return (
          <ShimmerPlaceHolder
            key={index}
            autoRun={true}
            visible={false}
            width={width}
            height={height ? height : 10}
            style={[loadingStyle, stylesGlobal.marginBottom20]}
          />
        );
      })}
    </View>
  );
};

export default RoundedLoading;
