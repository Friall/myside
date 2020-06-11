$(document).ready(function () {
  // ! Слайдер + стрєлочки

  $(".slider__inner").slick({
    speed: 1200,
    // adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 1500,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow-prew.svg" ></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow-next.svg" ></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  // ! Слайдер + стрєлочки

  // ? Міняє слайди правий на лівий

  $("ul.catalog__tabs").on("click", "li:not(.catalog__tab-active)", function () {
    $(this)
      .addClass("catalog__tab-active")
      .siblings()
      .removeClass("catalog__tab-active")
      .closest("div.container")
      .find("div.catalog__content")
      .removeClass("catalog__content-active")
      .eq($(this).index())
      .addClass("catalog__content-active");
  });
  // ? Міняє слайди правий на лівий

  // ! міняє силки : картинка / текст і змінюється силка ( подробнее  на назад )

  // $(".catalog-item__link").each(function (i) {
  //   $(this).on("click", function (e) {
  //     e.preventDefault();
  //     $(".catalog-item__content").eq(i).toggleClass("catalog-item__content-active");
  //     $(".catalog-item__information").eq(i).toggleClass("catalog-item__information-active");
  //   });
  // });

  // $(".catalog-item__back").each(function (i) {
  //   $(this).on("click", function (e) {
  //     e.preventDefault();
  //     $(".catalog-item__content").eq(i).toggleClass("catalog-item__content-active");
  //     $(".catalog-item__information").eq(i).toggleClass("catalog-item__information-active");
  //   });
  // });

  // ! міняє силки : картинка / текст і змінюється силка ( подробнее  на назад )

  //  ? Така сама фукція , але оптимізована

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".catalog-item__content").eq(i).toggleClass("catalog-item__content-active");
        $(".catalog-item__information").eq(i).toggleClass("catalog-item__information-active");
      });
    });
  }

  toggleSlide(".catalog-item__link");
  toggleSlide(".catalog-item__back");

  //  ? Така сама фукція , але оптимізована

  //! Modal

  $("[data-modal=consultation]").on("click", function () {
    $(".overlay, #consultation").fadeIn("slow");
  });
  $(".modal__close").on("click", function () {
    $(".overlay, #consultation, #order, #thank").fadeOut("slow");
  });

  $(".catalog-item__btn").each(function (i) {
    $(this).on("click", function () {
      $("#order .modal__descr").text($(".catalog-item__subtitle").eq(i).text());
      $(".overlay, #order").fadeIn("slow");
    });
  });
  //! Modal

  //? Валидация

  function valideForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 5,
        },
        phone: "required",
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: "Пожалуйста, введите свое имя",
          minlength: jQuery.validator.format("Введите {0} символов!"),
        },
        phone: "Пожалуйста, введите свой телефон",
        email: {
          required: "Пожалуйста, введите свою поту",
          email: "Неправильно введен адрес почты",
        },
      },
    });
  }

  valideForms("#consultation form");
  valideForms("#consultation-form");
  valideForms("#order form");

  $("input[name=phone]").mask("+38(999) 99-99-999");

  //? Валидация

  // $("form").submit(function (e) {
  //   e.preventDefault();
  //   $.ajax({
  //     type: "POST",
  //     url: "mailer/smart.php",
  //     data: $(this).serialize(),
  //   }).done(function () {
  //     $(this).find("input").val("");

  //     $("form").trigger("reset");
  //   });
  //   return false;
  // });

  //! кнопка скрола

  $(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
      $(".pageup").fadeIn();
    } else {
      $(".pageup").fadeOut();
    }
  });

  //! плавний скрол вверх
  $("a[href^='#']").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });
  //! плавний скрол вверх

  //! кнопка скрола
  new WOW().init();
});
