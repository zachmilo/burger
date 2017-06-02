var burgers = {};
$(document).ready(function() {
  eatMeButton();
  $("#addBurger").click(function() {
    var burgerName = $("#burgerInput").val();
    $.ajax({
      url: "/insert",
      method: "POST",
      dataType:"json",
      data:{ "burgerName": burgerName }
    }).done(function(result) {
      var burgerID = '"'+ result.insertId +'"';
      var burger = `<li class="mdl-list__item">
        <span  burgerID=`+ burgerID+ `class="mdl-list__item-primary-content">`
          + burgerName +`
        </span>
        <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect eatMe">
          Devour Me
        </button>
      </li>`;

      $( "#savedBurgers" ).append(burger);
      eatMeButton();
      $("#burgerInput").val("");
    }).fail(function(e) {
      console.log(e);
    });
  });

});

function eatMeButton() {

  $(".eatMe").click(function() {
    var burgerID = $(this).siblings().attr("burgerID");
    console.log(burgerID);
    $.ajax({
      url: "/update",
      method: "POST",
      dataType:"json",
      data:{ "burgerID": burgerID, "devoured": 1 }
    }).done(function() {
    }).fail(function(e) {
      console.log(e);
    });
    $(this).parent().hide();
    var burgerName = $(this).siblings().text();
    var burger = `<li class="mdl-list__item">
      <span class="mdl-chip">
        <span class="mdl-chip__text">`+ burgerName +`</span>
      </span>
    </li>`;
    $("#eatenBurgers").append(burger);
  });
}
