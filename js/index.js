const box = Array.from(document.getElementsByClassName("box")); // select all 9 boxes
const btn = document.getElementById("reset"); // reset button

// for animation
const animate = document.getElementById("animate"); // animation image container
const body = document.getElementById("body"); // box container
let line = document.getElementById("line"); // crossing line for win

let check = true; // check turn for X or O

// add X and O to html --------------------------
box.forEach((element, index) => {
    element.addEventListener('click', () => {
        if (check) {
            element.innerHTML = 'X';
            check = false;
            document.querySelector(".hero-section p").innerHTML = "O Turn";
            win(element, index, 'x');
        }
        else {
            element.innerHTML = 'O';
            check = true;
            document.querySelector(".hero-section p").innerHTML = "X Turn";
            win(element, index, 'o');
        }
    })
})

// main winning functionality -----------------------------------------------

function win(element, index, char) {
    element.classList.add(char);

    for (let i = 0; i < win_match.length; i++) {
        if ((box[win_match[i][0]].innerHTML == box[win_match[i][1]].innerHTML) && (box[win_match[i][1]].innerHTML == box[win_match[i][2]].innerHTML) && (box[win_match[i][0]].innerHTML != '')) {

            // animate line ------------------------------------
            switch (i) {
                case 0: {
                    line.style.width = "90%";
                    line.style.transform = "translateY(0px)";
                    break;
                }
                case 1: {
                    let line = document.getElementById("line");
                    line.style.transform = "translateY(73.33px)";
                    line.style.width = "90%";
                    break;
                }
                case 2: {
                    let line = document.getElementById("line");
                    line.style.transform = "translateY(149px)";
                    line.style.width = "90%";
                    break;
                }
                case 3: {
                    let line = document.getElementById("line");
                    line.style.transform = "rotate(90deg) translate(-22px, -26px)";
                    line.style.transformOrigin = "top left";
                    line.style.width = "90%";
                    break;
                }
                case 4: {
                    let line = document.getElementById("line");
                    line.style.transform = "rotate(90deg) translate(-22px, -101px)";
                    line.style.transformOrigin = "top left";
                    line.style.width = "90%";
                    break;
                }
                case 5: {
                    let line = document.getElementById("line");
                    line.style.transform = "rotate(90deg) translate(-22px, -176px)";
                    line.style.transformOrigin = "top left";
                    line.style.width = "90%";
                    break;
                }
                case 6: {
                    let line = document.getElementById("line");
                    line.style.transform = "rotate(45deg) translate(-6px, -17px)";
                    line.style.transformOrigin = "top left";
                    line.style.width = "120%";
                    break;
                }
                case 7: {
                    let line = document.getElementById("line");
                    line.style.transform = "rotate(-45deg) translate(-117px, 122px)";
                    line.style.transformOrigin = "top left";
                    line.style.width = "120%";
                    break;
                }
            }

            // show winning player Text ----------------------
            if (check) document.querySelector(".hero-section h2").innerHTML = "O win";
            else document.querySelector(".hero-section h2").innerHTML = "X win";

            // call animation
            setTimeout(() => {
                animate1();
            }, 500);

            // resets
            check = true;
            document.querySelector(".hero-section p").innerHTML = " ";
        }
    }
}

// win the match -----------------------

let win_match = [[0, 1, 2],
                 [3, 4, 5],
                 [6, 7, 8],
                 [0, 3, 6],
                 [1, 4, 7],
                 [2, 5, 8],
                 [0, 4, 8],
                 [2, 4, 6]
                ];

// reset button -----------------------
btn.addEventListener('click', () => {

    box.forEach((element) => {
        element.innerHTML = '';
        element.classList.remove('o');
        element.classList.remove('x');
    })
    // resets
    check = true;
    document.querySelector(".hero-section p").innerHTML = "";
    document.querySelector(".hero-section h2").innerHTML = "Welcome to Tic Tac Toe";
    // animation
    line.style.width = "0%";
    animate.classList.remove("active");
    body.classList.remove("active");
})


// animation on  winning match ----------

function animate1() {
    animate.classList.toggle("active");
    body.classList.toggle("active");
}