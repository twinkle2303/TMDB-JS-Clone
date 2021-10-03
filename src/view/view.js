import { elements } from "./base";
function renderCards(arr,) {
  let month=["Jan","Feb","March","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];

  let str = "";
  arr
    .filter((item, idx) => idx <= 6)
    .forEach((item) => {
      str += `<div class="movie-card">
        <div class="movie-image"></div>
        <h4 class="movie-title">${item.title || item.name}</h4>
        <h6>27 aug,2020</h6>
        <div class="movie-rating">${parseInt(Number((item.vote_average)/10)*100)}</div>
      </div>`;
    });
      elements.cardContainer.innerHTML=str;
    }
    function renderTrending(arr,) {
      let month=["Jan","Feb","March","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];

      let str = "";
      arr
        .filter((item, idx) => idx <= 6)
        .forEach((item) => {
          str += `<div class="movie-card">
            <div class="movie-image"></div>
            <h4 class="movie-title">${item.title || item.name}</h4>
            <h6>${month[Number(item.release_date.substring(5,7))-1] }, ${item.release_date.substring(0,4)}</h6>
            <div class="movie-rating">${parseInt(Number((item.vote_average)/10)*100)}</div>
            </div>`;
        });
          elements.trendingCardContainer.innerHTML=str;
        }
    
function renderLatest(arr,x){
  let str = "";
  arr
    .filter((item, idx) => idx >= 4 && idx<=7)
    .forEach((item) => {
      str +=`<div class="movie-card">
      <div class="movie-image"></div>
      <h4 class="movie-title">${item.title}</h4>
      <h6>${item.original_title}</h6>
    </div>`
});
elements.latestCardContainer.innerHTML=str;

}
function showSpinner() {
  elements.spinner.classList.remove("hide");
}

function clearSpinner() {
  elements.spinner.classList.add("hide");
}

let value = "";
function takeInput(e) {
  value = e.target.value;
}

function submitValue(e) {
  e.preventDefault();
  return value;
}

function clearFields() {
  value = "";
  elements.input.value = "";
}

export {
  renderCards,
  showSpinner,
  clearSpinner,
  takeInput,
  submitValue,
  clearFields,

  
  renderLatest,
  renderTrending,
};
