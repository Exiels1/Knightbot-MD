/**
 * Xenofy Bot Configuration Settings
 * Version: 2.0.0
 * Bot Name: Xenofy
 * Branding: Xenofy
 */

const settings = {
  // Bot Identity
  botName: "Xenofy",
  version: "2.0.0",
  branding: "Xenofy",
  
  // QR Code Settings
  qrCode: {
    enabled: true,
    displayTimeout: 60000, // milliseconds
    autoRefresh: true,
    refreshInterval: 30000, // milliseconds
    showInConsole: true,
    terminal: {
      smallQR: false,
      legacySessionFile: false
    }
  },
  
  // Bot Features
  features: {
    autoRead: false,
    autoTyping: true,
    autoRecorder: false,
    groupWelcome: true,
    antiBadword: true,
    antiLink: false
  },
  
  // Prefix Settings
  prefix: {
    main: ".",
    alternate: ",",
    wild: "false"
  },
  
  // Session Settings
  session: {
    sessionName: "xenofy_session",
    usePairingCode: true,
    mobile: false
  },
  
  // Owner Configuration
  owner: {
    number: "0",
    name: "Xenofy Owner"
  },
  
  // Database Settings
  database: {
    type: "local",
    path: "./database"
  },
  
  // Logging
  logging: {
    level: "info",
    includeTimestamp: true,
    includeConsole: true
  }
};

module.exports = settings;
