 // picks up the shopping-list class and intiates the click on shopping-list-delete
$('.shopping-list').on('click', '.shopping-item-delete', function (event){
        // removes .closest element in the dom tree
    $(this).closest('li').remove();
});

$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    // .find = Get the descendants of each element in the current set of matched elements.
    // .toggleClass = Add or remove one or more classes from each element in the set of matched 
    // elements, depending on either the class's presence or the value of the state argument.
    $(this).closest('li').find('.shopping-item').toggleClass('.shopping-item shopping-item__checked');
});


// submit new input in the <form>
$('#js-shopping-list-form').submit(function(event) {
    //standard for for submissions
    event.preventDefault();
    // creating a variable for the new input within the form 
    // .val = The .val() method is primarily used to get the values of form elements such as 
    // input, select and textarea. 
    let newItem = $('#shopping-list-entry').val();
    // .append =  is used to insert specified content as the last child (at the end of) 
    // the selected elements in the jQuery collection.
    $('ul').append(
        `<li>
        <span class="shopping-item">${newItem}</span>
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

  
