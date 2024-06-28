import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'data-entry-remote',
  exposes: {
    './Routes': 'data-entry-remote/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
