function getFirstSelector(selector){
  var sel = document.querySelector(selector)
  return sel
}

function nestedTarget(){
  var parent = document.getElementById('nested')
  return parent.getElementsByClassName('target')[0]
  //return tar.querySelector('target')
}

function increaseRankBy(n) {
  var ranked = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i<ranked.length; i++){
    ranked[i].innerHTML = parseInt(ranked[i].innerHTML) + n
  }
}

function deepestChild(){
  var deep = document.getElementById('grand-node')
  var element = deep.children

  // if (element.length === 0){
  //   return deep
  // } else {
  //
    while (element){
      var nxtSetOfChildren = element[0].children
      if (nxtSetOfChildren.length === 0){
        return element[0]
      } else {
        element = nxtSetOfChildren
      }
    }
}
