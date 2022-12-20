import Controller from "./Controller.js";
import Store from "./store.js";
import storage from "./storage.js";
import SearchFormView from "./views/SearchFormVeiw.js";

const tag = '[main]'
document.addEventListener("DOMContentLoaded", main);  // 돔이 로딩되었을때(실행됬을때) main 함수를 실행하라 

function main() {
  console.log(tag, 'main');
  
  const store = new Store(storage); // storage 모델을 생성한다.

  const views = {
    searchFormView: new SearchFormView()
  };

  // store, views 생성자 함수를 만들어주는 구조

  new Controller(store, views); // 생성자 함수를 넣어줘서 컨트롤러 객체를 만들어준다.
}
