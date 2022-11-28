// function HaishokuColor1(){
//   const color = document.getElementById("select-color");
//   color.innerHTML="オリーブ";
//     document.getElementById("img-color-1").src = "./pants_photo/olive-pants.jpg";
//     document.getElementById("img-color-2").src = "./pants_photo/olive2-pants.jpg";
//     document.getElementById("img-color-3").src = "./pants_photo/olive3-pants.jpg";
//     document.getElementById("img-color-4").src = "./pants_photo/olive4-pants.jpg";
//     document.getElementById('kakusu').style.display = 'inline';
// }

// function HaishokuColor2(){
//     const color = document.getElementById("select-color");
//     color.innerHTML="黒";
//     document.getElementById("img-color-1").src = "./sweat_photo/dark-sweat.jpg";
//     document.getElementById("img-color-2").src = "./pants_photo/fAQfYvy8ki1D-768.jpg";
//     document.getElementById("img-color-3").src = "./shoes_photo/dark1-shoes.jpg";
//     document.getElementById("img-color-4").src = "./pants_photo/dark-pants.jpg";
//     document.getElementById('kakusu').style.display = 'inline';
// }

// function HaishokuColor3(){
//     const color = document.getElementById("select-color");
//     color.innerHTML="青";
//     document.getElementById("img-color-1").src = "./pants_photo/bule-pants.jpg";
//     document.getElementById("img-color-2").src = "./shoes_photo/bule-shoes.jpg";
//     document.getElementById("img-color-3").src = "./pants_photo/bule2-pants.jpg";
//     document.getElementById("img-color-4").src = "./shoes_photo/bule2-shoes.jpg";
//     document.getElementById('kakusu').style.display = 'inline';
// }

function HaishokuColor(col,itemList,allMakersList){
    // console.log(allMakersList[1].makers_name);
    const color = document.getElementById("select-color");
    color.innerHTML=col;
    let recList = [];

    itemList.forEach(ele => {
        // console.log(allMakersList[ele.makers_id - 1]);
        if (ele.items_color == col){
            recList.push(ele);
        }
    });

    // console.log(recList);

    // recommended内初期化---
    const parent = document.getElementById('recommended');
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
    // ---

    recList.forEach(ele => {
    createItemCard("recommended", ele.items_id, ele.items_genre, allMakersList[ele.makers_id - 1].makers_name, ele.items_name, ele.items_price, ele.items_url);
    });

    // document.getElementById("img-color-1").src = './' + recList[0].genre + '_photo/' + recList[0].url;
    // createItemCard("recommended", recList[0].items_id, recList[0].items_genre, allMakersList[recList[0].makers_id - 1].makers_name, recList[0].items_name, recList[0].items_price, recList[0].items_url);
    // createItemCard("recommended", recList[1].items_id, recList[1].items_genre, allMakersList[recList[1].makers_id - 1].makers_name, recList[1].items_name, recList[1].items_price, recList[1].items_url);
    // createItemCard("recommended", recList[2].items_id, recList[2].items_genre, allMakersList[recList[2].makers_id - 1].makers_name, recList[2].items_name, recList[2].items_price, recList[2].items_url);
    // createItemCard("recommended", recList[3].items_id, recList[3].items_genre, allMakersList[recList[3].makers_id - 1].makers_name, recList[3].items_name, recList[3].items_price, recList[3].items_url);
    // document.getElementById("img-color-2").src = "./shoes_photo/bule-shoes.jpg";
    // document.getElementById("img-color-3").src = "./pants_photo/bule2-pants.jpg";
    // document.getElementById("img-color-4").src = "./shoes_photo/bule2-shoes.jpg";
    document.getElementById('kakusu').style.display = 'inline';
}
//haishoku-1,haishoku-3,haishoku-2 background-color選択でボタンの色変更できる
function setColor(color) {
    // グレー色を判定
    if (color == "グレー") {
        document.getElementById("haishoku-1").style.backgroundColor ='olivedrab';
        document.getElementById("haishoku-2").style.backgroundColor ='dark';
        document.getElementById("haishoku-3").style.backgroundColor ='green';
        return ["オリーブ","黒","緑"];

    // 赤色を判定
    }else if(color == "赤"){
        document.getElementById("haishoku-1").style.backgroundColor ='#ccc';
        document.getElementById("haishoku-2").style.backgroundColor ='dark';
        document.getElementById("haishoku-3").style.backgroundColor ='white';
        return["グレー","黒","白"];

    // 緑色を判定
    }else if(color =="緑"){
        document.getElementById("haishoku-1").style.backgroundColor ='white';
        document.getElementById("haishoku-2").style.backgroundColor ='dark';
        document.getElementById("haishoku-3").style.backgroundColor ='#ccc';
        return ["白","黒","グレー"];

    // 白色を判定
    }else if(color == "白"){
        document.getElementById("haishoku-1").style.backgroundColor ='green';
        document.getElementById("haishoku-2").style.backgroundColor ='dark';
        document.getElementById("haishoku-3").style.backgroundColor ='brown';
        return ["緑","黒","茶"];

    // 黒色を判定
    }else if(color == "黒"){
        document.getElementById("haishoku-1").style.backgroundColor ='white';
        document.getElementById("haishoku-2").style.backgroundColor ='dark';
        document.getElementById("haishoku-3").style.backgroundColor ='#0066ff';
        return ["白","黒","青"];

    // 水色を判定
    }else if(color == "水色"){
        document.getElementById("haishoku-1").style.backgroundColor ='white';
        document.getElementById("haishoku-2").style.backgroundColor ='olivedrab';
        document.getElementById("haishoku-3").style.backgroundColor ='#000';
        return ["白","カーキ","黒"];

    // オリーブ色を判定
    }else if(color == "オリーブ"){
        document.getElementById("haishoku-1").style.backgroundColor ='white';
        document.getElementById("haishoku-2").style.backgroundColor ='dark';
        document.getElementById("haishoku-3").style.backgroundColor ='#ccc';
        return ["白","黒","グレー"];

    // 茶色を判定
    }else if(color == "茶"){
        document.getElementById("haishoku-1").style.backgroundColor ='white';
        document.getElementById("haishoku-2").style.backgroundColor ='dark';
        document.getElementById("haishoku-3").style.backgroundColor ='#ccc';
        return ["白","黒","グレー"];

    // 黄色を判定
    }else if(color == "黄"){
        document.getElementById("haishoku-1").style.backgroundColor ='white';
        document.getElementById("haishoku-2").style.backgroundColor ='dark';
        document.getElementById("haishoku-3").style.backgroundColor ='#ccc';
        return ["白","黒","グレー"];

    // 青色を判定
    }else if(color == "青"){
        document.getElementById("haishoku-1").style.backgroundColor ='white';
        document.getElementById("haishoku-2").style.backgroundColor ='dark';
        document.getElementById("haishoku-3").style.backgroundColor ='#ccc';
        return ["白","黒","グレー"];
    }
}