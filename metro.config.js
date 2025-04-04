const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// SVG 설정 추가
const { assetExts, sourceExts } = config.resolver;
config.transformer.babelTransformerPath = require.resolve(
  'react-native-svg-transformer'
);
config.resolver.assetExts = assetExts.filter((ext) => ext !== 'svg');
config.resolver.sourceExts = [...sourceExts, 'svg'];

// NativeWind 통합
module.exports = withNativeWind(config, {
  input: path.join(__dirname, 'global.css'), // 경로 명확하게
});
