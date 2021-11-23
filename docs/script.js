window.onload = function() {
    var test = "off"
    var arr = ["id1","id2","id3","id4","id5","id6","id7","id8","id9"];
    var toggle = ["off","off","off","off","off","off","off","off","off"]
    var view = document.getElementById("view");
    function spin(id,cl,sw) {
        function resetClass(cl,sw) {
            Id.setAttribute("class",cl)
            sw = "off"
            console.log("클래스 초기화됨")
        }
        var Id = document.getElementById(id);
        document.getElementById(id).addEventListener("mouseover",function(){
        if (sw == "off") {
            sw = "on"
            console.log("실행됨")
            Id.classList.add("anime");
            setTimeout(function() {resetClass(cl,sw),sw = "off"}, 4650);
            
        }
    })
    } 
    for(var i in arr) {
        var paragraph = document.createElement("div");
        view.appendChild(paragraph);
        paragraph.setAttribute("id", i)
        paragraph.classList.add("box");
        spin(i,"box",toggle[i]);
        console.log("박스 연결")
    }
}