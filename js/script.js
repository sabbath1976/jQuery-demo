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

// $(function () {
//     $(document).on("click", ".box-1", function () {
//         $("body").css({
//             background: "red",
//         });
//     });

//     $(".box-2").on({
//         click: function () {
//             $("body").css({
//                 background: "purple",
//             });
//         },
//         mouseenter: function () {
//             $("body").css({
//                 background: "yellow",
//             });
//         },
//         mouseleave: function () {
//             $("body").css({
//                 background: "red",
//             });
//         },
//     });
// });

// $(function () {
//     $(document).on("click", ".box-1", function () {
//         $("body").css({
//             background: "green",
//             color: "#fff",
//         });
//     });
// });

// When we click the first object, the background gets red
// $(function () {
//     $(".box-1").on({
//         click: function () {
//             $("body").css({
//                 background: "orange",
//             });
//         },
//     });

// When we click the second object, the background gets purple,
//     $(".box-2").on({
//         click: function () {
//             $("body").css({
//                 background: "purple",
//             });
//         },
//         mouseenter: function () {
//             $("body").css({
//                 background: "yellow",
//             });
//         },
//         mouseleave: function () {
//             $("body").css({
//                 background: "red",
//             });
//         },
// });
// });

// $(function() {
//     $('.box-1 a').on('click', function(event) {
//         event.preventDefault()
//         $('.box-3').css({
//             background: 'purple'
//         })
//     })

//     $('.box-2').on('click', function() {
//         $('.box-3').css({
//             background: 'red'
//         })
//     })

//     $('.button').on('click', function(event) {
//         event.stopPropagation()

//         if (event.target.nodeName == 'DIV') {
//             console.log(event.target.nodeName);
//             $('.box-3').css({
//                 background: 'purple'
//             })
//         } else {
//             console.log(event.target.nodeName)
//             $('.box-3').css({
//                 background: 'yellow'
//             })
//         }

//     })
// })

// $(function () {
//     $(".select-options").change(function () {
//         alert("Changed value");
//     });

//     $(".myname")
//         .change(function (event) {
//             $(".box-1").html("<h1>" + event.target.value + "</h1>");
//         })
//         .focusin(function () {
//             $(".box-2").css({
//                 background: "blue",
//             });
//         })
//         .focusout(function () {
//             $(".box-2").css({
//                 background: "#ccc",
//             });
//         });
// });

// $(function() {
//     $('div').addClass('active')

//     if ($('div').hasClass('active')) {
//         console.log('This div element has been activated');
//     } else {
//         console.log('Sorry, waiting to be activated!');
//     }

//     console.log($('div').hasClass('active'));

//     // $('div').first().removeClass('active')

//     $('.button').click(function() {
//         $('div').toggleClass('active')
//     })
// })

// $(function() {
//     $('.button').click(function() {
//         // $('.box-1').clone().appendTo('body')
//         $('.box-1:first').clone().appendTo('body')
//     })
// })

// $(function() {
//     $('.button').click(function() {
//         $('.box-1').wrapInner('<div class="active"></div>')
//         // $('.box-1').unwrap('.active')
//     })

//     $('.box-3').click(function() {
//         $('.box-1').unwrap('.active')
//     })
// })

// $(function() {
//     $('.button').click(function() {
//         // $('<div class="active">Active Box</div>').appendTo('.box-1')
//         // $('.box-1').html('<div class="active">new box-1 content</div>')
//         // $('<div class="active">new box-1 content</div>').prependTo('.box-1');
//         console.log($('.firstP:first').text());
//         $('.firstP:first').text('The new Joe Text')
//     })
// })

// $(function() {
//     $('.button').click(function() {
//         // $('.firstP:first').after('<p>NEW MESSAGE</p>')
//         // $('.firstP:first').before('<p>NEW MESSAGE</p>')
//         // $('<p>NEW MESSAGE</p>').insertBefore('.firstP:first')
//         $('<p>NEW MESSAGE</p>').insertAfter('.firstP:first')
//     })
// })

// $(function() {
//     $('.button').click(function() {
//         // $('.box-1').remove()
//         $('div').remove('.box')
//     })
// })

// Replace an Element
// $(function() {
//     $('.button').click(function(){
//         // $('<div class="active">NEW ACTIVE Box</div>').replaceAll('.box')
//         $('.box').replaceWith('<h2>New heading</h2>')
//     })
// })

// Attributes and values
// $(function() {
//     $('.button').click(function() {
//         // console.log($('.box-3 img').attr('data-imgName')); // show the value
//         // $('.box-3 img').attr({
//         //     alt: 'Vegeta New Pic',
//         //     class: 'vegeta active img'
//         // })
//         console.log($('.box-1 input.username').val()); // get the value of an element
//     })

//     // $('.box-3').click(function() {
//     //     $('.box-3 img').removeAttr('alt')
//     // })
// })

// $(function() {
//     console.log($('.box2').width())

//     if ($('.box2').width() > 200) {
//         $('.box2').css({
//             background: 'red'
//         })
//     }

//     $('.box2').css({
//         paddingLeft: '50px'
//     })
// })

// $(function() {
//     // console.log($('.firstP').parent());
//     console.log($('.box-1').children());

//     $('.box-1').children().css({
//         background: 'blue',
//         display: 'inline-block',
//         padding: '20px',
//         color: '#fff',
//         margin: '20px'
//     })

//     $('p').each(function() {
//         console.log(this);

//         $(this).css({
//             background: 'yellow',
//             color: '#000'
//         })
//     })

//     $('ul li').first().css({
//         background: 'green'
//     })
// })

$(function() {
    var pokemonSearch;
    var defaultPokemon = '1';
    var defaultPokemonData;

    var initFunc = function() {
        defaultPokemonData = $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon/" + defaultPokemon,
            method: "GET"
        })

        defaultPokemonData.done(function(data) {
            defaultPokemonData = data;
            $('.loading-container').removeClass('active')
            $('.pokedex h3').text(data.name.toUpperCase())
            $('.poke-img img').attr('src', data.sprites.front_default)
            console.log(data);
        })

        defaultPokemonData.fail(function(jqXHR, textStatus, error) {
            alert("Request failed: " + textStatus + ' ' + error)
            // console.log(error);
        })
    }

    initFunc();

    $('.btn').click(function() {
        pokemonSearch = $('.pokedex input[type="text"]').val()      

        var request = $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon/" + pokemonSearch,
            method: "GET"
        })

        request.done(function(data) {
            $('.pokedex h3').text(data.name.toUpperCase())
            $('.poke-img img').attr('src', data.sprites.front_default)
            console.log(data);
        })

        request.fail(function(jqXHR, textStatus, error) {
            alert("Request failed: " + textStatus + ' ' + error)
        })
    })
})