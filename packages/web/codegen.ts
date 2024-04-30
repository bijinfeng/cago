import type { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from 'dotenv';

const { parsed } = dotenv.config({ path: './.env.local' });
const strapiUrl = parsed?.VITE_STRAPI_URL ?? 'http://localhost:1337';

const config: CodegenConfig = {
  schema: `${strapiUrl}/graphql`,
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;