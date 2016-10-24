(function diceGame() {

  // Use document.querySelector('...') to find HTML elements
  // The argument into the function is a CSS selector!
  // Any HTML element has an `innerText` property that you can
  // access (or change) for the contents of that element.

  document.querySelector('button').addEventListener('click', function buttonClicked() {

    var dieNumOne = document.querySelector('.dice aside:first-child').innerText;
    console.log(dieNumOne);

    document.querySelector('.dice aside:first-child').innerText = dice.diceRoll();

    var dieNumTwo = document.querySelector('.dice aside:last-child').innerText;
    console.log(dieNumTwo);

    document.querySelector('.dice aside:last-child').innerText = dice.diceRoll();


    dieNumOne = parseInt(document.querySelector('.dice aside:first-child').innerText);
    dieNumTwo = parseInt(document.querySelector('.dice aside:last-child').innerText);

    function sum (x, y) {
      return x+y;
    }
    console.log(dieNumOne + dieNumTwo);

  });


  var dice= {
    startDate: new Date(),
    gameRounds: [],
    diceRoll: function diceRoll() {
      return Math.ceil(Math.random() * 6)
    }
  }




  // var janOne = new Date('01/01/2016');
  //
  // var timeDiff = now.getTime() - janOne.getTime();

  // var now= new Date();
  // var today = new Date('' + now.getFullYear() + (now.getMonth() + 1) + now.getDay() + now.getTime(), (timeDiff / 1000/ 60/ 60/ 24) );
  //
  //
  //
  // console.log(dice.diceRoll());
  // console.log ( '' + now.getFullYear() + (now.getMonth() + 1) + now.getDay());
  //
  //



})();
