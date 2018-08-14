'use strict';

console.log('link');

function Product(name, filename){
  this.name = name;
  this.filename = filename;
  this.votes = 0;
  this.appearCount = 0;
  Product.allProducts.push(this);
}

Product.allProducts = [];

// All products constructed.
function createProducts(){
  new Product('Bag', 'img/bag.jpg');
  new Product('Banana', 'img/banana.jpg');
  new Product('Bathroom', 'img/bathroom.jpg');
  new Product('Boots', 'img/boots.jpg');
  new Product('Breakfast', 'img/breakfast.jpg');
  new Product('Bubblegum', 'img/bubblegum.jpg');
  new Product('Chair', 'img/chair.jpg');
  new Product('Cthulhu', 'img/cthulhu.jpg');
  new Product('Dog Duck', 'img/dog-duck.jpg');
  new Product('Dragon', 'img/dragon.jpg');
  new Product('Pen', 'img/pen.jpg');
  new Product('Pet Sweep', 'img/pet-sweep.jpg');
  new Product('Scissors', 'img/scissors.jpg');
  new Product('Shark', 'img/shark.jpg');
  new Product('Sweep', 'img/sweep.png');
  new Product('Tauntaun', 'img/tauntaun.jpg');
  new Product('Unicorn', 'img/unicorn.jpg');
  new Product('USB', 'img/usb.gif');
  new Product('Water Can', 'img/water-can.jpg');
  new Product('Wine Glass', 'img/wine-glass.jpg');
}

createProducts();

var indexList = [];
var voteCount = 0;

//Create three randomly generated indices.
function displayThreeProducts(){
  //Function for clearing node
  function clearNode(){
    while (contentField.firstChild){
      contentField.removeChild(contentField.firstChild);
    }
  }
  var randIndexOne = Math.floor(Math.random() * Product.allProducts.length);
  var randIndexTwo = Math.floor(Math.random() * Product.allProducts.length);
  var randIndexThree = Math.floor(Math.random() * Product.allProducts.length);

  //Check if any indexes are duplicate or exists in prior rotation.
  while (indexList.includes(randIndexOne)){
    randIndexOne = Math.floor(Math.random() * Product.allProducts.length);
  }
  indexList.push(randIndexOne);
  while (randIndexTwo === randIndexOne || indexList.includes(randIndexTwo)){
    randIndexTwo = Math.floor(Math.random() * Product.allProducts.length);
  }
  indexList.push(randIndexTwo);

  while (indexList.includes(randIndexThree)){
    randIndexThree = Math.floor(Math.random() * Product.allProducts.length);
  }
  indexList.push(randIndexThree);

  //If this is the first rotation, length will only be three. Every iteration afterwards the length will be three, so get rid of the first three elements of array.
  if (indexList.length > 3){
    indexList.splice(0,3);
  }

  console.log(indexList);

  var contentField = document.getElementsByClassName('vote-content')[0];

  
  indexList.forEach(function(index){
    var picture = document.createElement('img');
    Product.allProducts[index].appearCount++;
    picture.src = Product.allProducts[index].filename;
    contentField.append(picture);
    picture.addEventListener('click', function(){
      console.log(picture);
      Product.allProducts[index].votes++;
      clearNode();
      displayThreeProducts();
      renderList();
      voteCount++;
    });
  });
  if (voteCount === 24){
    clearNode();
    var h1 = document.createElement('h1');
    h1.textContent = 'Thank you for participating!';
    contentField.append(h1);
  }
}

displayThreeProducts();

function renderList(){
  var field = document.getElementsByTagName('aside')[0];
  while (field.firstChild){
    field.removeChild(field.firstChild);
  }
  var ul = document.createElement('ul');
  for (var i = 0; i < Product.allProducts.length;i++){
    var currProduct = Product.allProducts[i];
    var li = document.createElement('li');
    li.textContent = `${currProduct.name}. Votes: ${currProduct.votes}. Appearances: ${currProduct.appearCount}.`;
    ul.append(li);
  }
  field.append(ul);
}