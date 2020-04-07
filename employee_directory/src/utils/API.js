import axios from "axios";

// Export an object with a "search" method that searches the Randomuser API for users
export default {
  search: function() {
    return axios.get("https://randomuser.me/api/?results=20&nat=us")
  }
};
