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

  var contentField = document.getElementsByClassName('vote-content')[0];

  indexList.forEach(function(index){
    var picture = document.createElement('img');
    Product.allProducts[index].appearCount++;
    picture.src = Product.allProducts[index].filename;
    contentField.append(picture);
    picture.addEventListener('click', function(){
      Product.allProducts[index].votes++;
      clearNode();
      displayThreeProducts();
      renderList();
      voteCount++;
    });
  });
  if (voteCount === 24){
    var namesList = [];
    var votesList = [];
    for (var i = 0; i < Product.allProducts.length;i++){
      namesList.push(Product.allProducts[i].name);
      votesList.push(Product.allProducts[i].votes);
    }
    clearNode();
    var chart = document.createElement('canvas');
    chart.id = 'myChart';
    contentField.append(chart);
    console.log(chart);
    var ctx = document.getElementById('myChart').getContext('2d');
    console.log(ctx);
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: namesList,
        datasets: [{
          label: '# of Votes',
          data: votesList, // these numbers seem important
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: 'rgb(0,0,0)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true,
              suggestedMax: 6
            }
          }]
        }
      }
    });
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
  var statistic = document.createElement('h1');
  statistic.textContent = 'Statistics';
  field.append(statistic);
  for (var i = 0; i < Product.allProducts.length;i++){
    var ul = document.createElement('ul');
    var currProduct = Product.allProducts[i];
    var li = document.createElement('li');
    var percLi = document.createElement('li');
    var percentage = isNaN(currProduct.votes / currProduct.appearCount) ? 0 : currProduct.votes / currProduct.appearCount;
    li.textContent = `${currProduct.name}. Votes: ${currProduct.votes}.`;
    percLi.textContent = `Percentage of choice: ${Math.floor(percentage * 100)}%`;
    ul.append(li);
    ul.append(percLi);
    field.append(ul);
  }
}

renderList();
