ready = function() {

  // Make the form sortable
  $("form.sortable ul").sortable({
    axis:   "y",
    handle: ".handle",
    placeholder: "placeholder",
    update: function() {
      console.log("Sorted");
    }
  });

  // On submit, set the value of the position inputs to the value of their current physical position in the list
  $("form.sortable").submit(function() {
    $("form.sortable ul li input.position").each(function(index) {
      $(this).val(index);
    });

    return true;
  });


  // Bind the + behavior
  $(".add a").click(function() {
    var num = $("form.sortable ul").children().length + 1;
    var newInput = getNewInputHtml(num);

    $("form.sortable ul").append(newInput);

    // Bind the X behavior to the new input element
    bindIconCloseEvent();
    return false;
  });

  // Bind the X behavior to the original elements
  bindIconCloseEvent();
};


function bindIconCloseEvent() {
  $(".remove").click(function() {
    $(this).parents("li").find("input.destroy").val(1);
    $(this).parents("li").hide("slow");
    return false;
  });
}


// Crazy nested HTML template. Not so good.
function getNewInputHtml(num) {
  var newInput = '' +
    '<li>' +
      '<div class="row">' +
        '<div class="col-md-11">' +
          '<div class="form-group">' +
            '<div class="input-group">' +
              '<span class="handle input-group-addon"><i class="fa fa-arrows"></i></span>' +
              '<input class="name form-control" name="project[todos_attributes][' + num + '][name]" size="30" type="text" value="" />' +
            '</div>' +
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
