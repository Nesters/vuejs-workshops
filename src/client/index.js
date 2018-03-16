import axios from 'axios';

/**
 * Mocking client-server interaction
 */
export default {
  getTest(cb) {
    setTimeout(() => axios.get('http://localhost:3000/').then(response => cb(response.data))
      , Math.floor(Math.random() * 500)); // intentional delay to mock real world behavior
  },
};
