/**
 * Throttles the execution of a callback function to limit the rate at which it is invoked.
 *
 * @param {Function} callback - The callback function to be throttled.
 * @param {number} delay - The number of milliseconds to throttle the callback function.
 * @returns {Function} A throttled version of the original callback function.
 *
 */
function throttle(callback, delay) {
  let timeoutId = null;
  let lastExecuted = 0;

  return function(...args) {
    const now = new Date().getTime();
    const elapsedTime = now - lastExecuted;

    if (!timeoutId || elapsedTime >= delay) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        callback.apply(this, args);
        lastExecuted = now;
      }, delay);
    }
  };
}

export default throttle;
