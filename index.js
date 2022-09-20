function pesquisar(search){
  let pesquisa = search.replace("+", "%2B")
  pesquisa = pesquisa.replace(" ", "+")
  window.location.href = "http://google.com/search?q=" + pesquisa;
  alert("Trocando de pagina")
}