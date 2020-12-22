var isQ1Right = false, isQ2Right = false, isQ3Right = false;
var isQ1Answered = false, isQ2Answered = false, isQ3Answered = false;

document.getElementById("q1yes").addEventListener("click", function(){
    document.getElementById('question1').innerHTML = "<span>&#10003;</span>"
    isQ1Right = true;
    isQ1Answered = true;
    completed();
});

document.getElementById("q1no").addEventListener("click", function(){
    document.getElementById('question1').innerHTML = "<span>&#10006;</span>"
    isQ1Answered = true;
    completed();
});

document.getElementById("q2yes").addEventListener("click", function(){
    document.getElementById('question2').innerHTML = "<span>&#10003;</span>"
    isQ2Right = true;
    isQ2Answered = true;
    completed();
});

document.getElementById("q2no").addEventListener("click", function(){
    document.getElementById('question2').innerHTML = "<span>&#10006;</span>"
    isQ2Answered = true;
    completed();
});

document.getElementById("q3yes").addEventListener("click", function(){
    document.getElementById('question3').innerHTML = "<span>&#10003;</span>"
    isQ3Right = true;
    isQ3Answered = true;
    completed();
});

document.getElementById("q3no").addEventListener("click", function(){
    document.getElementById('question1').innerHTML = "<span>&#10006;</span>"
    isQ3Answered = true;
    completed();
});

function completed() {
    if (isQ1Answered && isQ2Answered && isQ3Answered) {
        if (isQ1Right && isQ2Right && isQ3Right) {
            swal({
              title: "Good job!",
              text: "You've passed the test. Do you want to restart the test?",
              icon: "success",
              buttons: ["Get the price", true],
            })
            .then((willDelete) => {
              if (!willDelete) {
                  window.location = "http://harmonicbrainhypnotherapy.com";
              } else {
                  document.location.reload(true)


              }
            });
        }
        else {
            swal({
              title: "Sorry but you've failed.",
              text: "Do you want to restart the test?",
              icon: "error",
              buttons: ["Get the price", true],
            })
            .then((willDelete) => {
              if (!willDelete) {
                window.location = "http://harmonicbrainhypnotherapy.com";
              } else {
                  document.location.reload(true)


              }
            });
        }
    }
}
function JSalert(title){

}
