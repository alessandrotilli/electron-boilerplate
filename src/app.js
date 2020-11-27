import "./stylesheets/main.css";
import * as db from "./helpers/db.js";

function byId(id) {
  return document.getElementById(id);
}

function listAll() {
  return db.list()
    .then((items) => {
      const content = items.reduce((result, item) => {
        return `${result} <li>${item.name}</li>`
      }, '');

      byId('list').innerHTML = content || 'such empty...';
    });
}

function onAdd() {
  const name = byId('input-name').value;
  if (name) {
    db.add({ name }).then(listAll);
  }
  byId('input-name').focus();
}

function onKeyUp(event) {
  if (event.key === 'Enter') {
    onAdd();
  }
}

db.init().then(listAll);

byId('btn-add').addEventListener('click', onAdd);
byId('input-name').addEventListener('keyup', onKeyUp);
byId('input-name').focus();
