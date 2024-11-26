const main = document.querySelector("#main");
const overlay = document.querySelector("#overlay");

// console.log(box);

// box.classList.add("box");
// console.log(box);

const messages = ["Color Copied!", "Nice Choice!", "Copied to Clipboard!", "Color Saved!", "Hex Code Copied!", "Copied", "Its Rock"];


for (var i = 1; i <= 80; i++) {
    var box = document.createElement("div");
    box.classList.add("box");
    main.append(box)
    console.log(main);

    var NewColor = RandomColorGenerator();
    box.style.background = NewColor;
    box.innerText = NewColor;



    box.addEventListener(
        "click",
        function (e) {

            navigator.clipboard.writeText(e.target.innerText);

            var RandommMsg = messages[Math.floor(Math.random() * messages.length)]

            overlay.style.display = "block";
            overlay.style.background = e.target.innerText;
            overlay.innerText = RandommMsg;

            setTimeout(
                function () {
                    overlay.style.display = "none"
                }, 800
            )
        }
    )

}


function RandomColorGenerator() {

    var Red = Math.floor(Math.random() * 256).toString(16);                 // RGB = total = 256 color combinations
    var Green = Math.floor(Math.random() * 256).toString(16);              // RGB = total = 256 color combinations
    var Blue = Math.floor(Math.random() * 256).toString(16);              // RGB = total = 256 color combinations
    // console.log(Red, Green, Blue);
    console.log(Red + Green + Blue);

    var Code = "#" + Red + Green + Blue
    console.log(Code);

    if (Code.length < 7) {
        return RandomColorGenerator();
    } else {
        return Code;
    }



}






