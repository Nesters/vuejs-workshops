import client from '../../client';

export default {
  name: 'App',
  /**
   * Initialize component with default data
   */
  data() {
    return {
      testValue: '',
    };
  },
  /**
   * Get test data from API
   */
  created() {
    client.getTest(
      (data) => {
        this.testValue = data;
      },
    );
  },
};
