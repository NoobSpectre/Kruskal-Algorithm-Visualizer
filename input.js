const form = document.getElementById('form');

const addEdge = () => {
  const edgeList = document.querySelector('.edge-list');

  const edgeListItem = document.createElement('li');
  edgeListItem.style.marginLeft = '2rem';
  edgeListItem.style.marginBlock = '0.8rem';

  edgeListItem.innerHTML = `<div class="edge">
                    <input type="number" id="src" name="src" placeholder="src" />
                    <input
                      type="number"
                      id="dest"
                      name="dest"
                      placeholder="dest"
                      style="margin-inline: 1rem"
                    />
                    <input
                      type="number"
                      id="weight"
                      name="weight"
                      placeholder="weight"
                    />
                  </div>`;

  edgeList.appendChild(edgeListItem);
};

const addPlusBtn = () => {
  const plusBtn = document.createElement('button');
  plusBtn.innerText = '+';
  plusBtn.classList.add('btn', 'add');

  plusBtn.onclick = addNewEdge;

  // <a class="remove">-</a>
  const lastEdge = document.querySelector('.edge-list').lastChild.lastChild;

  lastEdge.append(plusBtn);
};

const removePlusBtn = () => {
  const lastEdge = document.querySelector('.edge-list').lastChild.lastChild;
  lastEdge.removeChild(lastEdge.childNodes[lastEdge.childNodes.length - 1]);
};

const addNewEdge = e => {
  e.preventDefault();
  removePlusBtn();
  addEdge();
  addPlusBtn();
};

const removeAllEdges = () => {
  const edgeList = document.querySelector('.edge-list');
  while (edgeList.hasChildNodes()) {
    edgeList.removeChild(edgeList.childNodes[0]);
  }
};

const vertices = document.getElementById('vertices');
vertices.oninput = e => {
  // e.target.value.replace(/[e.]/, '');
  if (e.target.value === '' || e.target.value === '0') {
    document.querySelector('.edge-container').classList.add('hidden');
  } else {
    document.querySelector('.edge-container').classList.remove('hidden');
  }
  const numOfVertices = Number(e.target.value);
  if (numOfVertices > 10) {
    document.querySelector('.vertex-error').classList.remove('hidden');
    console.log('Maximun vertices can be 10');
    return;
  }
  document.querySelector('.vertex-error').classList.add('hidden');
  removeAllEdges();

  for (let i = 1; i <= numOfVertices-1; i++) {
    addEdge();
    if (i + 1 === numOfVertices) {
      addPlusBtn();
    }
  }
};
