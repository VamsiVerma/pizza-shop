export const calculateTimeSpent = (startTime, currentTime) => {
  const timeElapsed = (currentTime - startTime) / 1000; // Convert milliseconds to seconds
  const minutes = Math.floor(timeElapsed / 60);
  const seconds = Math.floor(timeElapsed % 60);
  return `${minutes} min ${seconds} sec`;
};
