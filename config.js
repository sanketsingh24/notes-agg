const env = process.env;

export const nodeEnv = env.NODE_ENV || 'developer';

export default {
  port: env.PORT || 3000,
  host: env.HOST || '0.0.0.0',
  get serverUrl() {
    return 'http://'+this.host.toString()+':'+this.port.toString();
  }
};
