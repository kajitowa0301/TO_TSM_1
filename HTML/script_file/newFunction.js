function HaishokuColor1(){
  const color = document.getElementById("select-color");
  color.innerHTML="オリーブ";
    document.getElementById("img-color-1").src = "./pants_photo/olive-pants.jpg";
    document.getElementById("img-color-2").src = "./pants_photo/olive2-pants.jpg";
    document.getElementById("img-color-3").src = "./pants_photo/olive3-pants.jpg";
    document.getElementById("img-color-4").src = "./pants_photo/olive4-pants.jpg";
    document.getElementById('kakusu').style.display = 'inline';
}

function HaishokuColor2(){
    const color = document.getElementById("select-color");
    color.innerHTML="黒";
    document.getElementById("img-color-1").src = "./sweat_photo/dark-sweat.jpg";
    document.getElementById("img-color-2").src = "./pants_photo/fAQfYvy8ki1D-768.jpg";
    document.getElementById("img-color-3").src = "./shoes_photo/dark1-shoes.jpg";
    document.getElementById("img-color-4").src = "./pants_photo/dark-pants.jpg";
    document.getElementById('kakusu').style.display = 'inline';
}

function HaishokuColor3(){
    const color = document.getElementById("select-color");
    color.innerHTML="青";
    document.getElementById("img-color-1").src = "./pants_photo/bule-pants.jpg";
    document.getElementById("img-color-2").src = "./shoes_photo/bule-shoes.jpg";
    document.getElementById("img-color-3").src = "./pants_photo/bule2-pants.jpg";
    document.getElementById("img-color-4").src = "./shoes_photo/bule2-shoes.jpg";
    document.getElementById('kakusu').style.display = 'inline';
}

function HaishokuColor(col,itemList,allMakersList){
    // console.log(allMakersList[1].makers_name);
    const color = document.getElementById("select-color");
    color.innerHTML=col;
    let recList = [];

    itemList.forEach(ele => {
        // console.log(allMakersList[ele.makers_id - 1]);
        if (ele.items_color == col) {
            // ここに
            recList.push(ele);
        }
    });

    console.log(recList);

    // document.getElementById("img-color-1").src = './' + recList[0].genre + '_photo/' + recList[0].url;
    createItemCard("recommended", recList[0].items_id, recList[0].items_genre, allMakersList[recList[0].makers_id - 1].makers_name, recList[0].items_name, recList[0].items_price, recList[0].items_url);
    createItemCard("recommended", recList[1].items_id, recList[1].items_genre, allMakersList[recList[1].makers_id - 1].makers_name, recList[1].items_name, recList[1].items_price, recList[1].items_url);
    createItemCard("recommended", recList[2].items_id, recList[2].items_genre, allMakersList[recList[2].makers_id - 1].makers_name, recList[2].items_name, recList[2].items_price, recList[2].items_url);
    // createItemCard("recommended", recList[3].items_id, recList[3].items_genre, allMakersList[recList[3].makers_id - 1].makers_name, recList[3].items_name, recList[3].items_price, recList[3].items_url);
    // document.getElementById("img-color-2").src = "./shoes_photo/bule-shoes.jpg";
    // document.getElementById("img-color-3").src = "./pants_photo/bule2-pants.jpg";
    // document.getElementById("img-color-4").src = "./shoes_photo/bule2-shoes.jpg";
    document.getElementById('kakusu').style.display = 'inline';
}

function setColor(color) {
    if (color == "グレー") {
        return ["オリーブ","黒","青"];
    }
}