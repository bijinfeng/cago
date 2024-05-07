export default () => ({
  graphql: {
    enabled: true,
    config: {
      // set this to true if you want to enable the playground in production
      playgroundAlways: false,
    },
  },
  transformer: {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
      requestTransforms: {
        wrapBodyWithDataKey: true,
      },
    },
  },
});
