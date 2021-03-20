function makeHappy() {
            alert("Hello! 😺")
            let name = prompt("What's your name?");
            let happiness = prompt("Hi " + name + " do you like cats?");

            happiness = happiness.toLowerCase();
            happiness = happiness.trim();

            let change = document.querySelector(".makehappy");

            if (happiness === "yes" || happiness === "obviously") {
                change.src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/003/605/original/image_6483441_%281%29.JPG?1605982718";
            } else {
                change.src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/003/607/original/image_6483441.JPG?1605983989";
            }
        }

        let makeNoodleHappy = document.querySelector("button");
        makeNoodleHappy.addEventListener("click", makeHappy);
