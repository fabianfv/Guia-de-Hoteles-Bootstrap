$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
$(function () {
  $('[data-toggle="popover"]').popover();
});

/***********************************************
 * This validate the forms in index.html and   *
 * contacto.html using Bootstrap classes,      *
 * HTML5 and jQuery.                           *
 ***********************************************/

$(function () {
  $(".modal").on("shown.bs.modal", function () {
    $("input").addClass("is-invalid");
    $("input").removeClass("is-valid");
    $("input[type='checkbox']").prop("checked", false);
  });

  $("input:not([type='submit'])").each(function () {
    this.value = "";
  });

  $("#comentario").each(function () {
    this.value = "";
  });

  // it works only selecting by tagname
  $("form").on("submit", validate);

  $("input").on("keyup", validate);
  $("input, #comentario").on("focusout", validate);
  $("#comentario").on("keyup", validate);
  $("#comentario").on("focusout", validate);

  function validate(e) {
    const input = e.target;
    if (!input.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
    } else {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
    }

    input.classList.add("was-validated");
  }
});

