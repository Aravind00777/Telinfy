$(document).ready(function () {
  $('.datepicker').datepicker()
  $('.schedule').click(function () {
    $(this)
      .parents('.remove-btn-send')
      .siblings('.datepicker')
      .toggleClass('deactive')
  })

  // sidebar tab content change
  var sections = $('.sections')

  $('.dashboard-menu li a , .dropdown-menu a').click(function (event) {
    event.preventDefault()
    $('.dashboard-menu li a').removeClass('active')
    $(this).addClass('active')
    var href = $(this).attr('href')
    var target = $(href)

    sections.removeClass('active')
    target.addClass('active')
  })
  // timepicker 
  

  
// Change the button text & add active class
$('.jRadioDropdown').change(function() {
  var dropdown = $(this).closest('.dropdown');
  var thislabel = $(this).closest('label');

  dropdown.find('label').removeClass('active');
  if( $(this).is(':checked') ) {
    thislabel.addClass('active');
    dropdown.find('ins').html( thislabel.text() );
  }

});  

$('.radio-btn-flex input').click(function(){
  var attr = $(this).attr('data-value');
  var parentDiv = $(this).parents("form");
  $(".number-blocks").removeClass("active");
  parentDiv.find("#"+ attr).addClass("active");
  
}); 

$('#timepickers').timepicker();

$('#onload-popup').modal();
$(".skip").click(function(){
  $('#onload-popup').modal('hide');
})
})
