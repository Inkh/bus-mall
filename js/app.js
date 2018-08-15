'use strict';

console.log('link');

var caterpie = [
  [0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,1,3,3,1,0,0,0,0,0,0,1,1,3,3,5,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,5,3,3,6,1,0,0,4,4,4,5,3,3,6,5,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [1,5,5,6,6,1,4,4,2,1,1,3,6,5,5,5,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,1,5,5,6,6,1,1,1,5,6,5,5,5,5,-1,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,-1,1,5,5,5,5,5,5,5,5,1,-1,-1,2,2,8,4,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,-1,1,5,5,5,5,5,1,-1,-1,2,2,2,2,2,2,4,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,4,2,-1,5,5,5,1,-1,-1,2,2,2,2,2,2,2,2,2,4,0,0,0,0,0,0,0,0,0,0],
  [0,0,4,7,-1,1,1,1,2,2,2,2,2,2,9,9,9,9,2,8,4,0,0,0,0,0,0,0,0,0,0],
  [0,4,2,7,7,1,1,8,7,7,7,2,2,9,10,12,-1,10,9,8,8,-1,0,0,0,0,0,0,0,0,0],
  [0,4,2,2,7,7,7,7,7,2,2,2,2,9,12,12,-1,-1,9,8,8,-1,0,0,0,0,0,0,0,0,0],
  [0,4,2,8,8,8,8,2,2,2,2,2,2,9,-1,-1,-1,-1,10,8,8,-1,0,0,0,0,0,0,0,0,0],
  [0,0,4,7,7,7,2,8,13,2,2,2,2,10,11,-1,-1,11,10,8,8,-1,0,0,0,0,0,0,0,0,0],
  [0,13,2,7,7,7,2,2,2,13,2,2,2,8,10,10,10,10,8,8,13,0,0,0,0,0,0,0,0,0,0],
  [0,13,2,8,4,4,13,2,8,8,13,2,2,8,8,8,8,8,8,8,-1,0,0,0,0,0,0,0,0,0,0],
  [0,13,4,8,2,2,8,13,8,8,4,8,8,8,8,8,8,8,8,-1,13,4,0,0,0,0,0,0,0,0,0],
  [0,0,-1,2,2,2,2,4,8,8,4,13,8,8,8,8,8,8,-1,8,8,4,0,0,0,0,0,0,11,11,0],
  [0,0,0,-1,13,4,4,8,8,4,-1,-1,13,8,8,8,-1,13,8,8,2,2,4,0,0,0,0,11,9,10,11],
  [0,0,0,0,0,-1,-1,-1,-1,11,13,-1,-1,-1,-1,-1,8,8,8,9,9,2,4,0,0,0,11,9,9,9,11],
  [0,0,0,0,12,11,10,10,10,10,10,10,11,-1,-1,13,8,8,10,2,2,9,-1,0,0,0,12,9,9,9,12],
  [0,0,0,12,9,9,11,10,10,10,10,10,10,10,13,8,8,8,10,2,2,10,-1,0,0,0,12,10,9,10,12],
  [0,0,0,12,9,10,11,9,10,10,10,10,11,12,11,8,8,8,8,10,10,-1,0,0,0,0,12,10,10,12,0],
  [0,0,0,-1,10,10,11,9,9,9,10,11,9,10,12,8,8,8,8,8,8,-1,0,0,0,0,12,10,10,12,0],
  [0,0,0,0,-1,-1,11,11,9,9,12,9,9,10,-1,8,8,8,8,8,-1,0,0,0,0,0,12,10,12,0,0],
  [0,0,0,0,0,-1,9,9,11,11,12,10,10,10,-1,13,8,8,-1,-1,0,0,0,0,0,0,11,12,0,0,0],
  [0,0,0,0,0,0,12,9,9,9,9,-1,-1,-1,10,8,-1,-1,10,-1,0,0,0,0,0,13,10,12,0,0,0],
  [0,0,0,0,0,12,9,11,9,9,9,10,10,10,10,8,8,10,8,10,0,0,0,0,13,8,8,13,0,0,0],
  [0,0,0,0,0,-1,9,11,10,10,10,10,10,12,12,12,8,8,10,-1,8,13,4,13,8,8,10,13,0,0,0],
  [0,0,0,0,0,-1,10,10,11,10,10,10,12,10,9,9,12,8,-1,13,13,8,10,4,8,10,13,0,0,0,0],
  [0,0,0,0,0,0,-1,-1,-1,11,11,11,-1,9,9,10,-1,4,10,4,8,10,8,10,4,8,13,0,0,0,0],
  [0,0,0,0,0,0,0,0,-1,9,9,9,9,-1,-1,-1,13,8,8,8,4,8,10,8,4,-1,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,-1,9,10,10,10,10,12,13,8,8,8,4,8,8,10,13,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,-1,12,10,10,12,10,10,8,8,8,4,10,10,-1,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,12,12,10,10,10,10,10,4,10,13,-1,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,13,12,12,12,4,4,13,0,0,0,0,0,0,0,0,0,0],
];

function draw(){
  var ctx = document.getElementById('bug').getContext('2d');
  for (var i = 0; i < caterpie.length;i++){
    console.log(i);
    for (var j = 0; j < caterpie[i].length;j++){
      if (caterpie[i][j] === 0){
        ctx.fillStyle = 'rgba(0,0,0,0)';
      } else if (caterpie[i][j] === 1){
        ctx.fillStyle = '#8D3649';
      } else if (caterpie[i][j] === 2){
        ctx.fillStyle = '#00D600';
      } else if (caterpie[i][j] === -1){
        ctx.fillStyle = '#000000';
      } else if (caterpie[i][j] === 3){
        ctx.fillStyle = '#FFB525';
      } else if (caterpie[i][j] === 4){
        ctx.fillStyle = '#005A3D';
      } else if (caterpie[i][j] === 5){
        ctx.fillStyle = '#FF3F3F';
      } else if (caterpie[i][j] === 6){
        ctx.fillStyle = '#FF7C3A';
      } else if (caterpie[i][j] === 7){
        ctx.fillStyle = '#81F61D';
      } else if (caterpie[i][j] === 8){
        ctx.fillStyle = '#00AD33';
      } else if (caterpie[i][j] === 9){
        ctx.fillStyle = '#F9EE86';
      } else if (caterpie[i][j] === 10){
        ctx.fillStyle = '#F0CE92';
      } else if (caterpie[i][j] === 11){
        ctx.fillStyle = '#788444';
      } else if (caterpie[i][j] === 12){
        ctx.fillStyle = '#496247';
      } else if (caterpie[i][j] === 13){
        ctx.fillStyle = '#007C45';
      }
      ctx.fillRect(j * 5, i * 5, 5, 5);
    }
  }
}
draw();

function Product(name, filename, votes = 0, appearCount = 0){
  this.name = name;
  this.filename = filename;
  this.votes = votes;
  this.appearCount = appearCount;
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

var loadedProducts = JSON.parse(localStorage.getItem('products'));

if (loadedProducts){
  for (var i = 0; i < loadedProducts.length; i++){
    new Product(loadedProducts[i].name, loadedProducts[i].filename, loadedProducts[i].votes, loadedProducts[i].appearCount);
  }
} else {
  createProducts();
}

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
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: namesList,
        datasets: [{
          label: '# of Votes',
          data: votesList,
          backgroundColor: [
            '#FF595E',
            '#FFCA3A',
            '#873393',
            '#8AC926',
            '#1982C4',
            '#FF595E',
            '#FFCA3A',
            '#873393',
            '#8AC926',
            '#1982C4',
            '#FF595E',
            '#FFCA3A',
            '#873393',
            '#8AC926',
            '#1982C4',
            '#FF595E',
            '#FFCA3A',
            '#873393',
            '#8AC926',
            '#1982C4'
          ],
          // borderColor: '#gggggg',
          // borderWidth: 1
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

    localStorage.setItem('products', JSON.stringify(Product.allProducts));
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
