function searchMdn(Text) {
  let inp = document.querySelector(".search-input-field");
  inp.value = Text;
  let form = document.querySelector(".search-form");
  form.submit();
}
searchMdn("CSS Selectors");
