'use strict';

console.log('test');

$('#js-shopping-list-form').on('submit', event => {
  event.preventDefault();
  const item = $('#shopping-list-entry').val();
  $('#shopping-list-entry').val('');
  $('.shopping-list').append(
    `<li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
  );
});

$('ul').on('click','.shopping-item-toggle', event => {
  $(event.currentTarget).parent().siblings('span.shopping-item').toggleClass('shopping-item__checked');
});

$('ul').on('click','.shopping-item-delete', event => {
  $(event.currentTarget).closest('li').remove();
});
