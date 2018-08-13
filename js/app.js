'use strict';

console.log('link');

function Product(filename){
  this.filename = filename;
  this.votes = 0;
  this.appearCount = 0;
  Product.allProducts.push(this);
}

Product.allProducts = [];

// All products constructed.
var bag = new Product('img/bag.jpg');
var banana = new Product('img/banana.jpg');
var bathroom = new Product('img/bathroom.jpg');
var boots = new Product('img/boots.jpg');
var breakfast = new Product('img/breakfast.jpg');
var bubblegum = new Product('img/bubblegum.jpg');
var chair = new Product('img/chair.jpg');
var cthulhu = new Product('img/cthulhu.jpg');
var dogDuck = new Product('img/dog-duck.jpg');
var dragon = new Product('img/dragon.jpg');
var pen = new Product('img/pen.jpg');
var petSweep = new Product('img/pet-sweep.jpg');
var scissors = new Product('img/scissors.jpg');
var shark = new Product('img/shark.jpg');
var sweep = new Product('img/sweep.png');
var tauntaun = new Product('img/tauntaun.jpg');
var unicorn = new Product('img/unicorn.jpg');
var usb = new Product('img/usb.gif');
var waterCan = new Product('img/water-can.jpg');
var wineGlass = new Product('img/wine-glass.jpg');

function displayThreeProducts(){
  var indexList = [];
  var randIndexOne = Math.floor(Math.random() * Product.allProducts.length);
  var randIndexTwo = Math.floor(Math.random() * Product.allProducts.length);
  var randIndexThree = Math.floor(Math.random() * Product.allProducts.length);

  indexList.push(randIndexOne);
  while (randIndexTwo === randIndexOne){
    randIndexTwo = Math.floor(Math.random() * Product.allProducts.length);
  }
  indexList.push(randIndexTwo);

  while (randIndexThree === randIndexTwo || randIndexThree === randIndexOne){
    randIndexThree = Math.floor(Math.random() * Product.allProducts.length);
  }
  indexList.push(randIndexThree);

  var contentField = document.getElementsByClassName('vote-content')[0];

  for (var i = 0;i < indexList.length;i++){
    var picture = document.createElement('img');
    picture.src = Product.allProducts[indexList[i]].filename;
    contentField.appendChild(picture);
  }
}

displayThreeProducts();