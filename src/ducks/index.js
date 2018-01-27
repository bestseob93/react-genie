import { combineReducers } from 'redux';

// index.js 제외 모든 파일
const req = require.context('.', true, /^(?!.\/index).*.js$/);

const reducers = {};

req.keys().forEach((key) => {
  const regex = /.\/(.*?).duck.js$/;
  const duckName = regex.test(key) && key.match(regex)[1];
  reducers[duckName] = req(key).default;
});

console.log(reducers);

export default combineReducers(reducers);
