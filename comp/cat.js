var block = document.getElementById('right')
var temp = []

var KATO = localStorage.getItem('CATO')
KATO = JSON.parse(KATO)

var A = [...KATO[0]]
var BBA = [...KATO[0]]
function pp() {
  console.log(1)
  while (block.firstChild) {
    block.removeChild(block.firstChild)
  }

  BBA.map(function (prod) {
    var N = prod.name
    var B = prod.brand
    var P = Number(prod.price)
    var p = 100
    var div = document.createElement('BUTTON')
    div.style.width = '330px'
    div.style.height = '531px'
    div.style.display = 'block'
    div.style.border = 'none'
    div.style.backgroundColor = 'white'
    div.style.cursor = 'pointer'
    div.onclick = function () {
      var len = temp.length
      if (len != 0) {
        temp = []
      }
      temp.push(prod)
      let TEMP = JSON.stringify(temp)
      localStorage.setItem('TEMP', TEMP)
      window.open('prodHollow.html')
    }
    div.style.textAlign = 'center'
    div.setAttribute('class', 'pr_bl')
    div.style.marginTop = '30px'
    var IMA = document.createElement('img')
    IMA.src = prod.image1
    var im = [prod.image1, prod.image2, prod.image3, prod.image4]
    var i = 0
    setInterval(function () {
      if (i > 3) {
        i = 0
      }
      IMA.src = im[i]
      i++
    }, 4000)

    IMA.style.width = '90%'
    var BRAND = document.createElement('h4')
    BRAND.innerHTML = B
    var NAME = document.createElement('h2')
    NAME.innerHTML = N
    var PRICE = document.createElement('div')
    var ze = document.createElement('p')
    ze.setAttribute('class', 'ze')
    ze.innerHTML = 'Rs.' + P
    var zf = document.createElement('p')
    zf.setAttribute('class', 'zf')
    var ex = P + p
    zf.innerHTML = 'Rs.' + ex
    zf.style.textDecoration = 'line-through'
    var zg = document.createElement('p')
    zg.innerHTML = '(25% off)'
    zg.setAttribute('class', 'zg')
    PRICE.append(ze, zf, zg)
    div.append(IMA, BRAND, NAME, PRICE)
    block.append(div)
  })
}

function lh() {
  console.log(2)
  A = A.sort(function (a, b) {
    return Number(a.price) - Number(b.price)
  })

  while (block.firstChild) {
    block.removeChild(block.firstChild)
  }
  A.map(function (prod) {
    var N = prod.name
    var B = prod.brand
    var P = Number(prod.price)
    var p = 100
    var div = document.createElement('BUTTON')
    div.style.width = '330px'
    div.style.height = '531px'
    div.style.display = 'block'
    div.style.border = 'none'
    div.style.backgroundColor = 'white'
    div.style.cursor = 'pointer'
    div.onclick = function () {
      var len = temp.length
      if (len != 0) {
        temp = []
      }
      temp.push(prod)
      let TEMP = JSON.stringify(temp)
      localStorage.setItem('TEMP', TEMP)
      window.open('prodHollow.html')
    }
    div.style.textAlign = 'center'
    div.setAttribute('class', 'pr_bl')
    div.style.marginTop = '30px'
    var IMA = document.createElement('img')
    IMA.src = prod.image1
    var im = [prod.image1, prod.image2, prod.image3, prod.image4]
    var i = 0
    setInterval(function () {
      if (i > 3) {
        i = 0
      }
      IMA.src = im[i]
      i++
    }, 4000)

    IMA.style.width = '90%'
    var BRAND = document.createElement('h4')
    BRAND.innerHTML = B
    var NAME = document.createElement('h2')
    NAME.innerHTML = N
    var PRICE = document.createElement('div')
    var ze = document.createElement('p')
    ze.setAttribute('class', 'ze')
    ze.innerHTML = 'Rs.' + P
    var zf = document.createElement('p')
    zf.setAttribute('class', 'zf')
    var ex = P + p
    zf.innerHTML = 'Rs.' + ex
    zf.style.textDecoration = 'line-through'
    var zg = document.createElement('p')
    zg.innerHTML = '(25% off)'
    zg.setAttribute('class', 'zg')
    PRICE.append(ze, zf, zg)
    div.append(IMA, BRAND, NAME, PRICE)
    block.append(div)
  })
}

function hl() {
  console.log(3)
  A = A.sort(function (a, b) {
    return Number(b.price) - Number(a.price)
  })

  while (block.firstChild) {
    block.removeChild(block.firstChild)
  }
  A.map(function (prod) {
    var N = prod.name
    var B = prod.brand
    var P = Number(prod.price)
    var p = 100
    var div = document.createElement('BUTTON')
    div.style.width = '330px'
    div.style.height = '531px'
    div.style.display = 'block'
    div.style.border = 'none'
    div.style.backgroundColor = 'white'
    div.style.cursor = 'pointer'
    div.onclick = function () {
      var len = temp.length
      if (len != 0) {
        temp = []
      }
      temp.push(prod)
      let TEMP = JSON.stringify(temp)
      localStorage.setItem('TEMP', TEMP)
      window.open('prodHollow.html')
    }
    div.style.textAlign = 'center'
    div.setAttribute('class', 'pr_bl')
    div.style.marginTop = '30px'
    var IMA = document.createElement('img')
    IMA.src = prod.image1
    var im = [prod.image1, prod.image2, prod.image3, prod.image4]
    var i = 0
    setInterval(function () {
      if (i > 3) {
        i = 0
      }
      IMA.src = im[i]
      i++
    }, 4000)

    IMA.style.width = '90%'
    var BRAND = document.createElement('h4')
    BRAND.innerHTML = B
    var NAME = document.createElement('h2')
    NAME.innerHTML = N
    var PRICE = document.createElement('div')
    var ze = document.createElement('p')
    ze.setAttribute('class', 'ze')
    ze.innerHTML = 'Rs.' + P
    var zf = document.createElement('p')
    zf.setAttribute('class', 'zf')
    var ex = P + p
    zf.innerHTML = 'Rs.' + ex
    zf.style.textDecoration = 'line-through'
    var zg = document.createElement('p')
    zg.innerHTML = '(25% off)'
    zg.setAttribute('class', 'zg')
    PRICE.append(ze, zf, zg)
    div.append(IMA, BRAND, NAME, PRICE)
    block.append(div)
  })
}

document.getElementById('SA').addEventListener('click', pp)
document.getElementById('SB').addEventListener('click', lh)
document.getElementById('SC').addEventListener('click', hl)
// console.log(KATO[0])
function definer() {
  localStorage.setItem('junk', JSON.stringify(A[0].name))
  A.map(function (prod) {
    var N = prod.name
    var B = prod.brand
    var P = Number(prod.price)
    var p = 100
    var div = document.createElement('BUTTON')
    div.style.width = '330px'
    div.style.height = '531px'
    div.style.display = 'block'
    div.style.border = 'none'
    div.style.backgroundColor = 'white'
    div.style.cursor = 'pointer'
    div.onclick = function () {
      var len = temp.length
      if (len != 0) {
        temp = []
      }
      temp.push(prod)
      let TEMP = JSON.stringify(temp)
      localStorage.setItem('TEMP', TEMP)
      window.open('prodHollow.html')
    }
    div.style.textAlign = 'center'
    div.setAttribute('class', 'pr_bl')
    div.style.marginTop = '30px'
    var IMA = document.createElement('img')
    IMA.src = prod.image1
    var im = [prod.image1, prod.image2, prod.image3, prod.image4]
    var i = 0
    setInterval(function () {
      if (i > 3) {
        i = 0
      }
      IMA.src = im[i]
      i++
    }, 4000)

    IMA.style.width = '90%'
    var BRAND = document.createElement('h4')
    BRAND.innerHTML = B
    var NAME = document.createElement('h2')
    NAME.innerHTML = N
    var PRICE = document.createElement('div')
    var ze = document.createElement('p')
    ze.setAttribute('class', 'ze')
    ze.innerHTML = 'Rs.' + P
    var zf = document.createElement('p')
    zf.setAttribute('class', 'zf')
    var ex = P + p
    zf.innerHTML = 'Rs.' + ex
    zf.style.textDecoration = 'line-through'
    var zg = document.createElement('p')
    zg.innerHTML = '(25% off)'
    zg.setAttribute('class', 'zg')
    PRICE.append(ze, zf, zg)
    div.append(IMA, BRAND, NAME, PRICE)
    block.append(div)
  })
}
definer()
var abb = []
function cato(arr) {
  var len = abb.length
  if (len != 0) {
    abb = []
  }
  abb.push(arr)
  let ABB = JSON.stringify(abb)
  localStorage.setItem('CATO', ABB)
  window.open('catologue.html')
}

function BB() {
  if (localStorage.getItem('ADDRES') !== undefined) {
    var azz = localStorage.getItem('ADDRES')
    azz = JSON.parse(azz)

    setTimeout(function () {
      var ar = document.getElementById('user_info')
      ar.innerHTML = 'Hi ' + azz[0].Name
      var arz = document.getElementById('s_IN')
      arz.innerHTML = 'Sign Out'
    }, 200)
  }
}
BB()

var k = true
function AK() {
  // console.log(15);
  var a = document.getElementById('RF')
  if (k == true) {
    a.style.display = 'none'
    k = false
  } else {
    a.style.display = 'block'
    k = true
  }
}
document.getElementById('RFC').addEventListener('click', AK)
var ss = true
function al() {
  console.log(5)
  let b = document.getElementById('AA1')
  if (ss == true) {
    b.style.display = 'none'
    ss = false
  } else {
    b.style.display = 'block'
    ss = false
  }
}

document.getElementById('AR1').addEventListener('click', al)
// console.log(A[0].name,elem);
for (let i = 0; i < elem.length; i++) {
  if (A[0].name == elem[i]) {
    document.getElementById('headTCXT').innerHTML = pro[i].head
    document.getElementById('SubYXY').innerHTML = pro[i].title
    document.getElementById('dat').innerHTML = pro[i].dat

    break
  }
}
