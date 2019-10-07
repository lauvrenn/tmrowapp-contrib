import { ACTIVITY_TYPE_TRANSPORTATION } from '../../definitions';
import { HTTPError, AuthenticationError, ValidationError } from '../utils/errors';


let API_URL;
let BASE_URL;

async function connect(requestLogin, requestWebView, logger) {
  // Here we can request credentials etc..

  // Here we can use two functions to invoke screens
  // requestLogin() or requestWebView()
  const { username, password } = await requestLogin();

  if (!(password || '').length) {
    throw new ValidationError('Password cannot be empty');
  }

  // sets state to be persisted
  return {
    username,
    password,
  };
}

function disconnect() {
  // Here we should do any cleanup (deleting tokens etc..)
  return {};
}

async function collect(state) {

  return {
    state,
  };
}

const config = {
  label: '',
  description: '',
  type: ACTIVITY_TYPE_TRANSPORTATION,
  isPrivate: true,
  contributors: [''],
  // minRefreshInterval: 60
};

export default {
  connect,
  disconnect,
  collect,
  config,
};
