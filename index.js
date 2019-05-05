function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  parent.appendChild(el);
}

const ul = document.getElementById('authors');
const url = 'http://randomuser.me/api/?results=10';

fetch(url, {
  mode: "no-cors"
})
  .then(resp => {
    console.log(JSON.stringify(resp.json()));
    return resp.json();
  })
  .then(function(data) {
    let li = createNode('li');
    let img = createNode('img');
    let span = createNode('span');
    img.src = author.picture.medium;
    span.innerHTML = `${author.name.first} ${author.name.last}`;
    append(li, img);
    append(li, span);
    append(ul, li);
  })
  .catch(function (error) {
    console.log(JSON.stringify(error));
  })

