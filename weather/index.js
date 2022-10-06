const root = document.getElementById("root");

console.log('hi');

// 비동기 처리를 다루고 싶을때
const fruit = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('상히'); // resolve 인수안에는 임의의 값 지정 가능
  }, 1000);
});

fruit.then((value) => {
  console.log(value); // 여기서 value는 promise의 인수값을 얘기하는듯
});

// 실패할 가능성이 있는 비동기 작업을 처리하고 싶을때
const fruits2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('메롱'); // reject 인수안에는 임의의 값 지정 가능
  }, 1000);
});

fruits2.catch((value) => {
  console.log(value); // 여기서 value는 promise의 인수값을 얘기하는듯
});

// Promise 성공 실패 처리하기
const countNum = new Promise((resolve, reject) => {
  for (let i = 0; i < 20; i++) {
    if (i > 10) {
      resolve('실패');
    } else {
      reject('성공');
    }
  }
})
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log(value);
  });


// EX) 대전 날씨출력
const weather = async () => {
  return await fetch(
    'http://api.openweathermap.org/data/2.5/weather?q=daejeon&appid=eeaa0658b578b382dcfc783ae914094e&units=metric'
  )
    .then(async (res) => {
      return await res.json();
    })
    .catch(() => {
      console.error;
    });
};
console.log(await weather());
let weatherData = await weather();

root.innerHTML = `
<h1>대전 날씨</h1>
<img src = "http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png">
<p>${weatherData.main.temp}℃</p>
`

// pokemon API
async function load(Minnum, Maxnum) {
  let pokemonobj
  for (let i = Minnum; i < Maxnum; i++) {
    const Data = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}/`);
    const obj = await Data.json();
    // console.log(obj);
    pokemonobj = {
      id: obj.id,
      name: obj.names[2].name,
      type: obj.genera[1].genus
    }
    console.log(pokemonobj);
    const { id, name, type } = pokemonobj

    const root = document.getElementById('root');
    const li = document.createElement('li');
    li.textContent = `id : ${id} 이름 : ${name}, 타입:${type}`
    root.appendChild(li);
  }
}

load(1, 50);