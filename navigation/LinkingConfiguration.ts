import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Main: {
            screens: {
              Home: 'Home',
              EspeciesListScreen: 'EspeciesList',
              EspeciesDetailScreen: 'EspeciesDetail',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
