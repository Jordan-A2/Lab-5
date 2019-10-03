count = 0

$(document).ready(function () {
    $("button:first").click(function () {
        event.preventDefault()
        count = count + 1
        var txt = $("input:first").val()
        $("input:first").val("")
        var txt2 = $("<div id='listdiv'></div>").css("border", "solid lightgrey")
        txt2.css("margin", "5px")
        var txt3 = $("<li></li>").text(txt)
        txt3.addClass("notcrossed")
        txt3.css("font-style", "italic")
        txt3.css("color", "lightgrey")
        txt3.css("list-style", "none")
        txt3.css("padding", "10px")
        var but1 = $("<input type='submit' value='check' id='check'/>")
        but1.css("margin", "2px")
        but1.css("margin-left", "10px")
        but1.css("margin-bottom", "10px")
        var but2 = $("<input type='submit' value='delete' id='delete'/>")
        but2.css("margin", "2px")

        but1.on("click", function (event) {
            event.preventDefault()
            if (txt3.attr("class") == "notcrossed") {
                txt3.css("text-decoration", "line-through")
                txt3.attr("class", "crossed")
                return false
            }

            if (txt3.attr("class") == "crossed") {
                txt3.css("text-decoration", "none")
                txt3.attr("class", "notcrossed")
                return false
            }
        })

        but2.on("click", function (event) {
            event.preventDefault()
            $(txt2).remove()
        })

        if (txt != "") {
            $("ul").prepend(txt2)
            $("#listdiv").prepend(txt3)
            $("#listdiv").append(but1)
            $("#listdiv").append(but2)
        }
    })
})
