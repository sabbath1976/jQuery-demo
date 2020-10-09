// $("#last")
//     .css({ background: "black", padding: "20px" })
//     .fadeOut("slow", function () {
//         console.log("hey it finished");
//     });

// $("#last p").css({ background: "red" });

// $(".box-1").css({ background: "blue" });

// $("#last")
//     .css({ background: "black", color: "#fff", padding: "20px" })
//     .fadeOut("slow", function () {
//         console.log("hey it finished");
//     });

// $(function () {
//     $("#last")
//         .css({ background: "black", color: "#fff", padding: "20px" })
//         .fadeOut("slow", function () {
//             console.log("hey it finished");
//         });
// });

// $(function () {
//     $(window).resize(function () {
//         if ($(window).height() > 700) {
//             $("body").css({
//                 background: "red",
//             });
//         } else if ($(window).height() > 300) {
//             $("body").css({
//                 background: "blue",
//             });
//         } else {
//             $("body").css({
//                 background: "yellow",
//             });
//         }
//         // console.log($(window).width());
//     });
// });

$(function () {
    $(window).resize(function () {
        if ($(window).height() > 700) {
            $("body").css({
                background: "red",
            });
        } else if ($(window).height() > 300) {
            $("body").css({
                background: "blue",
            });
        } else {
            $("body").css({
                background: "yellow",
            });
        }
        // console.log($(window).width());
    });
});
