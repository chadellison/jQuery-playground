$(document).ready(function(){
  $("#justin").click(function(){

    var counter = $("#baby").find("#view-counter").text()
    counter++

    $("#baby").find("#view-counter").text(counter)

    $("#baby").toggleClass("hidden")
  })
  

  $("#selena").click(function(){

    var counter = $("#come-and-get-it").find("#view-counter").text()
    counter++

    $("#come-and-get-it").find("#view-counter").text(counter)

    $("#come-and-get-it").toggleClass("hidden")

  })

  $("#miley").click(function(){

    var counter = $("#wrecking-ball").find("#view-counter").text()
    counter++

    $("#wrecking-ball").find("#view-counter").text(counter)

    $("#wrecking-ball").toggleClass("hidden")

  })

  $("#colorize").click(function(){

    $("#baby").css({"color": 'pink'})

  })

  $("#colorize").click(function(){

    $("#come-and-get-it").css({"color": 'pink'})

  })

  $("#colorize").click(function(){

    $("#wrecking-ball").css({"color": 'pink'})

  })

})

function toggleSong(artistId, songId) {
  $("artistId").click(function(){

    var counter = $("songId").find("#view-counter").text()
    counter++

    $("songId").find("#view-counter").text(counter)

    $("songId").toggleClass("hidden")
  })

}


// .css({'font-size': 50, 'color': 'purple'}
