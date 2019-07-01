import Local from './local';
import Dev from './dev';
import Hml from './hml';
import Prod from './prod';
import log from '../log/logger';

log.info(process.env.REACT_APP_STAGE, 'environment');

let config = process.env.REACT_APP_STAGE === 'LOCAL' ? Local : Local;
config = process.env.REACT_APP_STAGE === 'DEV' ? Dev : config;
config = process.env.REACT_APP_STAGE === 'HML' ? Hml : config;
config = process.env.REACT_APP_STAGE === 'PROD' ? Prod : config;

export default {
  ...config,
};
