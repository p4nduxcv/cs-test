import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'data-view-remote',
  exposes: {
    './Routes': 'data-view-remote/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
