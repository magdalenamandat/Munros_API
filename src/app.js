const MunroListView = require('./views/munros_list_view.js');
const Munros = require('./models/munros.js');

document.addEventListener('DOMContentLoaded', () => {

  const munrosListContainer = document.querySelector('.munros-list');
  const munrosListView = new MunroListView(munrosListContainer);
  munrosListView.bindEvents();

  const munros = new Munros();
  munros.getData();




});
