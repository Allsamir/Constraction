$(".count").each(function () {
          $(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: $(this).text(),
              },
              {
                duration: 4000,
                easing: "swing",
                step: function (now) {
                  now = Number(Math.ceil(now)).toLocaleString('en');
                                        $(this).text(now);
                },
              }
            );
        });

$(document).ready(function(){
  var mixer = mixitup('.box-list');
});