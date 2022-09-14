// EX) 대전 날씨출력
const weather = async () => {
  return await fetch(
    'http://api.openweathermap.org/data/2.5/weather?q=daejeon&appid=eeaa0658b578b382dcfc783ae914094e&units=metric'
  )
    .then(async () => {
      return await res.json();
    })
    .catch(() => {
      console.error;
    });
};

export default weather;