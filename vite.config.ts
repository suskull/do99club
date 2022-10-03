import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  return defineConfig({
    plugins: [
      react(),
      tsconfigPaths()
    ],
    server: {
      host: '0.0.0.0',
      port: +process.env.VITE_PORT || 3000,
    }
  });
}

