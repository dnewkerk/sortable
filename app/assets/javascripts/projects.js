ready = function() {

  // Make the form sortable
  $(".sortable").sortable({
    axis:   "y",
    handle: ".handle",
    placeholder: "placeholder",
    update: updatePositions
  });


  // Bind the + behavior
  $(".add a").click(function(event) {
    event.preventDefault();
    var num = $(".sortable").children().length + 1;
    var newInput = getNewInputHtml(num);

    $(".sortable").append(newInput);

    // Bind the X behavior to the new input element
    bindIconCloseEvent();

    // Update positions to account for the new item
    updatePositions();
  });

  // Bind the X behavior to the original elements
  bindIconCloseEvent();
};


// After sorting, set the value of the position inputs to the value of their
// current physical position in the list.
function updatePositions(event) {
  console.log("called");
  var inputs = $(event.target).find("input.position");
  inputs.each(function(index) {
    $(this).val(index + 1);
  });
}


function bindIconCloseEvent(event) {
  $(".remove").click(function() {
    event.preventDefault();
    $(this).parents("li").find("input.destroy").val(1);
    $(this).parents("li").hide("slow");
  });
}


// Crazy nested HTML template. Not so good.
function getNewInputHtml(num) {
  var newInput = '' +
    '<li>' +
      '<div class="row">' +
        '<div class="col-md-1">' +
          '<i class="handle fa fa-arrows"></i>' +
        '</div>' +
        '<div class="col-md-10">' +
          '<div class="form-group">' +
            '<input class="name form-control" name="project[todos_attributes][' + num + '][name]" size="30" type="text" value="" />' +
            '<input class="position" name="project[todos_attributes][' + num + '][position]" type="hidden" value="" />' +
            '<input class="destroy" name="project[todos_attributes][' + num + '][_destroy]" type="hidden" value="false">' +
          '</div>' +
        '</div>' +
        '<div class="col-md-1">' +
          '<i class="remove fa fa-times"></i>' +
        '</div>' +
      '</div>' +
    '</li>';
  return newInput;
}


// Document.ready compatible with Turbolinks.
$(document).ready(ready);
$(document).on('page:load', ready);
