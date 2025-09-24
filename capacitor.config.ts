import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.ea5ed41a3d4648b58d25a94e6e63b9aa',
  appName: 'SangamEvents',
  webDir: 'dist',
  server: {
    url: 'https://ea5ed41a-3d46-48b5-8d25-a94e6e63b9aa.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#ff6b35',
      showSpinner: false
    },
    StatusBar: {
      style: 'dark',
      backgroundColor: '#ff6b35'
    }
  }
};

export default config;