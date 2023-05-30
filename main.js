"use strict";
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});
promise
  .then((res) => {
    console.log(res);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(res * 2), 1000);
    });
  })
  .then((res) => {
    console.log(res);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(res * 2), 1000);
    });
  })
  .then((res) => {
    console.log(res);
    return res * 2;
  })
  .then((res) => {
    console.log(res);
  });

function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Faild to load the script ${url}`));
    document.head.appendChild(script);
  });
}
loadScript("/article/promise-chaining/one.js")
  .then(function(script) {
    return loadScript("/article/promise-chaining/two.js");
  })
  .then(function(script) {
    return loadScript("/article/promise-chaining/three.js");
  })
  .then(function(script) {
    // use functions declared in scripts
    // to show that they indeed loaded
    one();
    two();
    three();
  });
