let totalMoney= 172000000000.00


document.getElementById('amountLeft').innerText = totalMoney.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  }).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

 

// Item Prices
class Item {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  const twinkies = new Item('Twinkies', 3.69);
  const happyMeal = new Item('Happy Meal', 4.49);
  const golfBalls = new Item('Golf Balls', 22.85);
  const golfClubs = new Item('Golf Clubs', 799.00);
  const espresso = new Item('Espresso Machine', 599.95);
  const homeGym = new Item('Home Gym', 3299.00);
  const hotTub = new Item('Hot Tub', 8999.00);
  const motorcycle = new Item('Motorcycle', 56500.00);
  const ferrari = new Item('Ferrari', 3965900.00);
  const fourSeasons = new Item('Four Seasons Hotel Stay', 310250.00);
  const mcdonalds = new Item('McDonalds Franchise', 2467750.00);
  const jacksonHouse = new Item('Jackson House', 15000000.00);
  const laMansion = new Item('Beverly Hills Mansion', 76000000.00);
  const g6 = new Item('Gulfstream G6 Jet', 60815000.00);
  const b2 = new Item('B-2 Spirit Stealth Bomber', 1173000000.00);
  const oilRig = new Item('Offshore Oil Rig', 1100000000.00);
  const pats = new Item('New England Patriots Franchise', 6400000000.00);
  const palace = new Item('Buckingham Palace', 4900000000.00);
  const twitter = new Item('Twitter', 44000000000.00);




document.getElementById('amountLeft').innerText = totalMoney.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  }).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })


document.getElementById('percentSpent').innerText = ((172000000000 - totalMoney) * 100 / 172000000000).toFixed(8)+'%'

// Buy  Functions 
function buyTwinkie(){
    if (totalMoney > twinkies.price) {
        totalMoney -= twinkies.price
        document.getElementById('amountLeft').innerText = totalMoney.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  document.getElementById('percentSpent').innerText = ((172000000000 - totalMoney) * 100 / 172000000000).toFixed(8)+'%'
    }else{
        alert("You don't have enough money")
    }
}
function buyHappyMeal(){
    if (totalMoney > happyMeal.price) {
        totalMoney -= happyMeal.price
        document.getElementById('amountLeft').innerText = totalMoney.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  document.getElementById('percentSpent').innerText = ((172000000000 - totalMoney) * 100 / 172000000000).toFixed(8)+'%'
    }else{
        alert("You don't have enough money")
    }
}
function buyGolfBalls(){
    if (totalMoney > golfBalls.price) {
        totalMoney -= golfBalls.price
        document.getElementById('amountLeft').innerText = totalMoney.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  document.getElementById('percentSpent').innerText = ((172000000000 - totalMoney) * 100 / 172000000000).toFixed(8)+'%'
    }else{
        alert("You don't have enough money")
    }
}
function buyGolfClubs(){
    if (totalMoney > golfClubs.price) {
        totalMoney -= golfClubs.price
        document.getElementById('amountLeft').innerText = totalMoney.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  document.getElementById('percentSpent').innerText = ((172000000000 - totalMoney) * 100 / 172000000000).toFixed(8)+'%'
    }else{
        alert("You don't have enough money")
    }
}
function buyEspresso(){
    if (totalMoney > espresso.price) {
        totalMoney -= espresso.price
        document.getElementById('amountLeft').innerText = totalMoney.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  document.getElementById('percentSpent').innerText = ((172000000000 - totalMoney) * 100 / 172000000000).toFixed(8)+'%'
    }else{
        alert("You don't have enough money")
    }
}
function buyHomeGym(){
    if (totalMoney > homeGym.price) {
        totalMoney -= homeGym.price
        document.getElementById('amountLeft').innerText = totalMoney.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  document.getElementById('percentSpent').innerText = ((172000000000 - totalMoney) * 100 / 172000000000).toFixed(8)+'%'
    }else{
        alert("You don't have enough money")
    }
}
function buyHotTub(){
    if (totalMoney > hotTub.price) {
        totalMoney -= hotTub.price
        document.getElementById('amountLeft').innerText = totalMoney.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  document.getElementById('percentSpent').innerText = ((172000000000 - totalMoney) * 100 / 172000000000).toFixed(8)+'%'
    }else{
        alert("You don't have enough money")
    }
}
function buyMotorcycle(){
    if (totalMoney > motorcycle.price) {
        totalMoney -= motorcycle.price
        document.getElementById('amountLeft').innerText = totalMoney.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  document.getElementById('percentSpent').innerText = ((172000000000 - totalMoney) * 100 / 172000000000).toFixed(8)+'%'
    }else{
        alert("You don't have enough money")
    }
}
function buyFerrari(){
    if (totalMoney > ferrari.price) {
        totalMoney -= ferrari.price
        document.getElementById('amountLeft').innerText = totalMoney.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  document.getElementById('percentSpent').innerText = ((172000000000 - totalMoney) * 100 / 172000000000).toFixed(8)+'%'
    }else{
        alert("You don't have enough money")
    }
}
function buyFourSeasons(){
    if (totalMoney > fourSeasons.price) {
        totalMoney -= fourSeasons.price
        document.getElementById('amountLeft').innerText = totalMoney.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  document.getElementById('percentSpent').innerText = ((172000000000 - totalMoney) * 100 / 172000000000).toFixed(8)+'%'
    }else{
        alert("You don't have enough money")
    }
}
function buyMcdonalds(){
    if (totalMoney > mcdonalds.price) {
        totalMoney -= mcdonalds.price
        document.getElementById('amountLeft').innerText = totalMoney.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  document.getElementById('percentSpent').innerText = ((172000000000 - totalMoney) * 100 / 172000000000).toFixed(8)+'%'
    }else{
        alert("You don't have enough money")
    }
}
function buyJacksonHouse(){
    if (totalMoney > jacksonHouse.price) {
        totalMoney -= jacksonHouse.price
        document.getElementById('amountLeft').innerText = totalMoney.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  document.getElementById('percentSpent').innerText = ((172000000000 - totalMoney) * 100 / 172000000000).toFixed(8)+'%'
    }else{
        alert("You don't have enough money")
    }
}
function buyMansion(){
    if (totalMoney > laMansion.price) {
        totalMoney -= laMansion.price
        document.getElementById('amountLeft').innerText = totalMoney.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  document.getElementById('percentSpent').innerText = ((172000000000 - totalMoney) * 100 / 172000000000).toFixed(8)+'%'
    }else{
        alert("You don't have enough money")
    }
}
function buyG6(){
    if (totalMoney > g6.price) {
        totalMoney -= g6.price
        document.getElementById('amountLeft').innerText = totalMoney.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  document.getElementById('percentSpent').innerText = ((172000000000 - totalMoney) * 100 / 172000000000).toFixed(8)+'%'
    }else{
        alert("You don't have enough money")
    }
}
function buyB2(){
    if (totalMoney > b2.price) {
        totalMoney -= b2.price
        document.getElementById('amountLeft').innerText = totalMoney.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  document.getElementById('percentSpent').innerText = ((172000000000 - totalMoney) * 100 / 172000000000).toFixed(8)+'%'
    }else{
        alert("You don't have enough money")
    }
}
function buyOilRig(){
    if (totalMoney > oilRig.price) {
        totalMoney -= oilRig.price
        document.getElementById('amountLeft').innerText = totalMoney.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  document.getElementById('percentSpent').innerText = ((172000000000 - totalMoney) * 100 / 172000000000).toFixed(8)+'%'
    }else{
        alert("You don't have enough money")
    }
}
function buyPats(){
    if (totalMoney > pats.price) {
        totalMoney -= pats.price
        document.getElementById('amountLeft').innerText = totalMoney.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  document.getElementById('percentSpent').innerText = ((172000000000 - totalMoney) * 100 / 172000000000).toFixed(8)+'%'
    }else{
        alert("You don't have enough money")
    }
}
function buyPalace(){
    if (totalMoney > palace.price) {
        totalMoney -= palace.price
        document.getElementById('amountLeft').innerText = totalMoney.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  document.getElementById('percentSpent').innerText = ((172000000000 - totalMoney) * 100 / 172000000000).toFixed(8)+'%'
    }else{
        alert("You don't have enough money")
    }
}
function buyTwitter(){
    if (totalMoney > twitter.price) {
        totalMoney -= twitter.price
        document.getElementById('amountLeft').innerText = totalMoney.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  document.getElementById('percentSpent').innerText = ((172000000000 - totalMoney) * 100 / 172000000000).toFixed(8)+'%'
    }else{
        alert("You don't have enough money")
    }
}






document.getElementById('buyTwinkie').addEventListener('click', buyTwinkie)

document.getElementById('buyHappyMeal').addEventListener('click', buyHappyMeal)

document.getElementById('buyGolfBalls').addEventListener('click', buyGolfBalls)

document.getElementById('buyGolfClubs').addEventListener('click', buyGolfClubs)

document.getElementById('buyEspresso').addEventListener('click', buyEspresso)

document.getElementById('buyGym').addEventListener('click', buyHomeGym)

document.getElementById('buyHotTub').addEventListener('click', buyHotTub)

document.getElementById('buyMotorcycle').addEventListener('click', buyMotorcycle)

document.getElementById('buyFerrari').addEventListener('click', buyFerrari)

document.getElementById('buyFourSeasons').addEventListener('click', buyFourSeasons)

document.getElementById('buyMcdonalds').addEventListener('click', buyMcdonalds)

document.getElementById('buyJackson').addEventListener('click', buyJacksonHouse)

document.getElementById('buyLA').addEventListener('click', buyMansion)

document.getElementById('buyG6').addEventListener('click', buyG6)

document.getElementById('buyB2').addEventListener('click', buyB2)

document.getElementById('buyOil').addEventListener('click', buyOilRig)

document.getElementById('buyPats').addEventListener('click', buyPats)

document.getElementById('buyPalace').addEventListener('click', buyPalace)

document.getElementById('buyTwitter').addEventListener('click', buyTwitter)









