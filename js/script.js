// $(function () {
//     $("#last p")
//         .css({
//             background: "red",
//             color: "#fff",
//         })
//         .fadeOut("slow", function () {
//             console.log("hey, it finished.");
//         });
//     $(window).resize(function () {
//         if ($(window).width() > 1000) {
//             $("body").css({
//                 background: "red",
//                 color: "#fff",
//             });
//         } else if ($(window).width() > 700) {
//             $("body").css({
//                 background: "blue",
//                 color: "#fff",
//             });
//         } else {
//             $("body").css({
//                 background: "yellow",
//                 color: "#000",
//             });
//         }

//         console.log($(window).width());
//     });
// });

// $(function () {
//     $(".box-1").on("click", function () {
//         $("body").css({
//             background: "red",
//             color: "#000",
//         });
//     });

//     $(".box-2").on({
//         click: function () {
//             $("body").css({
//                 background: "purple",
//                 color: "#fff",
//             });
//         },

//         mouseenter: function () {
//             $("body").css({
//                 background: "yellow",
//                 color: "#000",
//             });
//         },

//         mouseleave: function () {
//             $("body").css({
//                 background: "green",
//                 color: "#fff",
//             });
//         },
//     });
// });

$(function () {
    $(".box-1 a").on("click", function (event) {
        event.preventDefault();
        event.stopPropagation();

        $(".box-3").css({
            background: "purple",
            color: "#fff",
        });
    });

    $(".box-1").on("click", function () {
        $(".box-3").css({
            background: "#ccc",
            color: "#000",
        });
    });

    $(".box-2").on("click", function () {
        $(".box-3").css({
            background: "red",
            color: "#000",
        });
    });

    $(".btn").on("click", function (event) {
        event.stopPropagation();

        if (event.target.nodeName == "DIV") {
            $(".box-3").css({
                background: "yellowgreen",
                color: "#000",
            });
        } else {
            $(".box-3").css({
                background: "yellow",
                color: "#000",
            });
        }
    });
});
// console.log(event.target.nodeName);
// $(".box-3").css({
//     background: "yellowgreen",
// });
