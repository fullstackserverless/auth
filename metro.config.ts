/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async (): Promise<void> => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false
      }
    })
  }
}
