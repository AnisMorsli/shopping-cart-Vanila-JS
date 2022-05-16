let btnbuy = document.querySelectorAll(".purchase");
let priceall = 0
for(let i = 0 ; i < btnbuy.length; i++){
    btnbuy[i].addEventListener("click", additems)
}
function additems(){
    let newitem = document.getElementById("chart_items")
    let newdiv = document.createElement('div')
    let div = document.createElement('div')
    let div2 = document.createElement('div') 
    newitem.appendChild(newdiv)
    newdiv.setAttribute("id","items")
    newdiv.appendChild(div)
    let img = document.createElement('img')
    div.appendChild(img)
    img.setAttribute('id','img_chart')
    img.setAttribute('src' , '')
    newdiv.appendChild(div2)
    div2.setAttribute("id","mid_items")
    let mid_itemsdiv1 = document.createElement('div')
    let mid_itemsdiv2 = document.createElement('div')
    let mid_itemsdiv3 = document.createElement('div')
    let mid_itemsdiv4 = document.createElement('div')
    div2.appendChild(mid_itemsdiv1)
    mid_itemsdiv1.setAttribute("class","box title_pro")
    let mid_itemsdiv1_h1 = document.createElement('h3')
    mid_itemsdiv1.appendChild(mid_itemsdiv1_h1)
    div2.appendChild(mid_itemsdiv2)
    mid_itemsdiv2.setAttribute("class","box quantity_pro")
    let mid_itemsdiv2_h3 = document.createElement('h4')
    let mid_itemsdiv2_input = document.createElement('input')
    mid_itemsdiv2_div = document.createElement('div')
    mid_itemsdiv2.appendChild(mid_itemsdiv2_div)
    mid_itemsdiv2_div.setAttribute('class','div_mid_q')
    let mid_itemsdiv2_btnup = document.createElement('button')
    let mid_itemsdiv2_btndown = document.createElement('button')
    mid_itemsdiv2_div.appendChild(mid_itemsdiv2_btndown)
    mid_itemsdiv2_btndown.setAttribute('class','btndown')
    mid_itemsdiv2_btndown.innerText = '⇦'
    //down quantity
    mid_itemsdiv2_btndown.addEventListener('click',adddownbtn)
    function adddownbtn(){
        if(mid_itemsdiv2_input.value > 1){
            y = y - x
        mid_itemsdiv3_span2.innerText = y
        mid_itemsdiv2_input.stepDown(1)
        priceall = parseInt(mid_itemsdiv3_span2.innerText)
        totale_price.innerText = priceall
        totalprice()
        }
    }
    mid_itemsdiv2_div.appendChild(mid_itemsdiv2_input)
    mid_itemsdiv2_div.appendChild(mid_itemsdiv2_btnup)
    mid_itemsdiv2_btnup.setAttribute('class','btnup')
    mid_itemsdiv2_btnup.innerText = '⇨'
    //add quantity
    mid_itemsdiv2_btnup.addEventListener('click',addupbtn)
    function addupbtn(){
        y = y + x
        mid_itemsdiv3_span2.innerText = y
        priceall =parseInt(mid_itemsdiv3_span2.innerText)
        totale_price.innerText = priceall
        mid_itemsdiv2_input.stepUp(1);
        totalprice()
    }
    mid_itemsdiv2_h3.innerText = 'Quantity :'
    mid_itemsdiv2_input.setAttribute('id','quantity')
    mid_itemsdiv2_input.setAttribute('type','number')
    mid_itemsdiv2_input.setAttribute('value',1)
    div2.appendChild(mid_itemsdiv3)
    mid_itemsdiv3.setAttribute("class","box price_pro")
    let mid_itemsdiv3_h4 = document.createElement('h4')
    mid_itemsdiv3.appendChild(mid_itemsdiv3_h4)
    let mid_itemsdiv3_span1 = document.createElement('span')
    let mid_itemsdiv3_span2 = document.createElement('span')
    let mid_itemsdiv3_span3 = document.createElement('span')
    mid_itemsdiv3_h4.appendChild(mid_itemsdiv3_span1)
    mid_itemsdiv3_h4.appendChild(mid_itemsdiv3_span2)
    mid_itemsdiv3_h4.appendChild(mid_itemsdiv3_span3)
    mid_itemsdiv3_span2.setAttribute('id','price_copie')
    mid_itemsdiv3_span1.innerText = 'price : '
    mid_itemsdiv3_span3.innerText = ' DA'
    div2.appendChild(mid_itemsdiv4)
    mid_itemsdiv4.setAttribute('class','box remove_pro')
    let mid_itemsdiv4_remove = document.createElement('button')
    mid_itemsdiv4.appendChild(mid_itemsdiv4_remove)
    mid_itemsdiv4_remove.setAttribute('id','remover')
    mid_itemsdiv4_remove.innerText = 'Remove'
    mid_itemsdiv4_remove.addEventListener('click', removerf)
    function removerf(){
        newdiv.remove()
        totalprice()
    }
    let prodcut_number = parseInt(this.className[16]) 
    let priceid = document.querySelectorAll('#price')
    let title_product = document.querySelectorAll('#title_product')
    let image = document.querySelectorAll('#image')
    if(prodcut_number === 1){
        mid_itemsdiv1_h1.innerText = title_product[0].innerText
        mid_itemsdiv3_span2.innerText = priceid[0].innerText
        img.src = image[0].src

    }else if(prodcut_number === 2){
        mid_itemsdiv1_h1.innerText = title_product[1].innerText
        mid_itemsdiv3_span2.innerText = priceid[1].innerText
        img.src = image[1].src

    }else if(prodcut_number === 3){
        mid_itemsdiv1_h1.innerText = title_product[2].innerText
        mid_itemsdiv3_span2.innerText = priceid[2].innerText
        img.src = image[2].src

    }else if(prodcut_number === 4){
        mid_itemsdiv1_h1.innerText = title_product[3].innerText
        mid_itemsdiv3_span2.innerText = priceid[3].innerText
        img.src = image[3].src

    }
    let y = parseInt(mid_itemsdiv3_span2.innerText)

    let x = parseInt(mid_itemsdiv3_span2.innerText)

    totalprice()
}

function totalprice(){
    let price_copie = document.querySelectorAll('#price_copie')
    let r = 0
    if(price_copie.length == undefined){
        r = parseInt(price_copie.innerText)
    }else for(let i = 0 ; i < price_copie.length; i++){
            
                r = r + parseInt(price_copie[i].innerText)
            }
    let totale_price = document.getElementById('totale_price')
    totale_price.innerText = r
    
    
    
}
