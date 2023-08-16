var loaded = new Vue({
  el: '#loaded',
  data: {
    message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
  }
});

var fl1 = new Vue({
  el: '#footer-list-1',
  data: {
    elements: [
      { value: 'Ссылка 1.1' },
      { value: 'Ссылка 1.2' },
      { value: 'Ссылка 1.3' }
    ]
  }
});

var fl2 = new Vue({
  el: '#footer-list-2',
  data: {
    elements: [
      { value: 'Ссылка 2.1' },
      { value: 'Ссылка 2.2' },
      { value: 'Ссылка 2.3' }
    ]
  }
});

var fl3 = new Vue({
  el: '#footer-list-3',
  data: {
      elements: [
          { value: 'Ссылка 3.1' },
          { value: 'Ссылка 3.2' },
          { value: 'Ссылка 3.3' }
        ]
  }
});

