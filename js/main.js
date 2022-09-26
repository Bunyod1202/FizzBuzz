
var input = document.querySelector(".input")
var form = document.querySelector(".form")
var text = document.querySelector(".text")
var resfizz = document.querySelector(".resfizz")
var resbuzz = document.querySelector(".resbuzz")
var resfizzbuzz = document.querySelector(".resfizzbuzz")

var fizz =[]
var buzz =[]
var fizzbuzz =[]


form.addEventListener("submit", function (evt) {
  evt.preventDefault()

  var inputValue = Number(input.value)

  if (inputValue % 5 == 0 && inputValue % 3 == 0) {
    text.textContent = "FizzBuzz"
    if (inputValue == "") {
      fizzbuzz.push()
    } else {
      fizzbuzz.push(inputValue)
    }
  } else if (inputValue % 5 == 0) {
    text.textContent = "Fizz"
    if (inputValue == "") {
      fizz.push()
    } else {
      fizz.push(inputValue)
    }
  
  } else if (inputValue % 3 == 0) {
    text.textContent = "Buzz"
    if (inputValue == "") {
      buzz.push()
    } else {
      buzz.push(inputValue)
    }
  } else {
    text.textContent = inputValue
  }
  resbuzz.textContent = buzz
  resfizz.textContent = fizz
  resfizzbuzz.textContent = fizzbuzz


  
})  



// var numbers = document.querySelector(".input")
// var result = document.querySelector(".span")
// var form = document.querySelector(".form")


// form.addEventListener("submit", function (evt) {
//   evt.preventDefault();

//   var numbersValue = Number(numbers.value)



//   if (numbersValue % 5 == 0 && numbersValue % 3 == 0) {
//   result.textContent = "FizzBuzz"
//   } else if (numbersValue % 5 == 0) {
//   result.textContent = "Fizz"
//   } else if (numbersValue % 3 == 0) {
//   result.textContent = "Buzz"
// } else {
//   result.textContent = numbersValue
// }

// })


