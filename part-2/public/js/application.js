$(document).ready(function() {
  $('#sidebar').on('click', 'a', function(e) {
    e.preventDefault();

    var target = e.target;
    $.ajax({
      url: $(target).attr('href'),
      method: 'get'
    })
    .done(function(response) {
      $(target).hide();
      $('#sidebar').append(response);
    });
  });

  $('#sidebar').on('submit', '#post_form', function(e) {
    e.preventDefault();

    var newTarget = e.target;
    $.ajax({
      url: $(newTarget).attr('action'),
      method: $(newTarget).attr('method'),
      data: $(newTarget).serialize()
    })
    .done(function(response) {
      // $(newTarget).remove();
      $(newTarget).hide();
      $('#posts').append(response);
      $('#sidebar').find('#new_post_link').show();
    })
  })



})
