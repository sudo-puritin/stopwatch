export const formatTime = (time) => {
  const getSeconds = `0${Math.floor(time % 60)}`.slice(-2);
  // const minutes = "You code here";
  const getMinutes = `0${Math.floor((time / 60) % 60)}`.slice(-2);
  const getHours = `0${Math.floor((time / (60 * 60)) % 24)}`.slice(-2);

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};
