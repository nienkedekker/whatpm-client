export const helpers = {
  /**
   * Create a window alert to ask if user really wants to delete item
   * If it resolves to true (i.e. user clicked yes), the delete action will happen.
   * If it resolves to false, a message is logged to the browser console.
   * @function
   * @param {string} message - Message inside the window.alert()
   */
  confirmDialog(message) {
    return new Promise(((resolve, reject) => (window.confirm(message) ? resolve(true) : reject(false))));
  },

  /**
   * Create a range of years
   * @function
   * @param {Number} start
   * @param {Number} end
   */
  range(start, end) {
    return Array(end - start + 1)
      .fill()
      .map((value, index) => start + index);
  },

  /**
   * Get current year
   * @function
   */
  getCurrentYear() {
    return new Date().getFullYear();
  },
};
