
// カート追加機能（引数：商品ID,サイズ,数量）
function addCart(itemId, itemSize, itemVol) {
    // 配列用意
    let cartItemsList = [];
    // localstorageにカートが既に存在していればそれを取得
    if (localStorage.getItem('cartItems') != null) {
        // json解読
        cartItemsList = JSON.parse(localStorage.getItem('cartItems'));
    }
    // console.log(cartItemsList);
    // カート配列に商品追加
    const itemData = {
        id: itemId,
        size: itemSize,
        vol: itemVol
    };
    cartItemsList.push(itemData);

    // localstorageに保存
    localStorage.setItem('cartItems', JSON.stringify(cartItemsList, undefined, 1));
}

// カート取得機能（引数：全商品のjson）
function getCart(itemsList) {
    // 配列用意
    let cartItemsList = [];
    // 全商品が渡されるはず
    let allItemsList = JSON.parse(itemsList);
    // localstorageにカートが既に存在していればそれを取得
    if (localStorage.getItem('cartItems') != null) {
        // json解読
        cartItemsList = JSON.parse(localStorage.getItem('cartItems'));
    }

    // console.log("cart:",cartItemsList);
    // console.log("allitems:",allItemsList);
    // console.log("search:",allItemsList[cartItemsList[0].id - 1].items_name);

    // カートにある商品を全商品から検索して商品情報をログに出力
    cartItemsList.forEach(ele => {
        console.log("search_name:", allItemsList[ele.id - 1].items_name);
        console.log("search_size:", ele.size);
        console.log("search_vol:", ele.vol);
        console.log("search_price:", allItemsList[ele.id - 1].items_price);
    });

    // 今ログに出してる情報をオブジェクト配列で返すことになると思う
    // return cart;
}

// カート削除機能（引数：要素位置）
function delCart(index) {
    // 配列用意
    let cartItemsList = [];
    // localstorageにカートが既に存在していればそれを取得
    if (localStorage.getItem('cartItems') != null) {
        // json解読
        cartItemsList = JSON.parse(localStorage.getItem('cartItems'));
    }

    // データ削除
    cartItemsList.splice(index, 1);

    // localstorageに保存
    localStorage.setItem('cartItems', JSON.stringify(cartItemsList, undefined, 1));
}

// お気に入り追加機能（引数：商品ID）
function addFavorite(itemId) {
    // 変数用意
    let favItemsList;
    // localstorageにカートが既に存在していればそれを取得
    if (localStorage.getItem('favItems') != null) {
        // json解読
        favItemsList = new Set(JSON.parse(localStorage.getItem('favItems')));
    } else {
        favItemsList = new Set();
    }

    // 追加
    favItemsList.add(itemId);
    // localstorageに保存
    localStorage.setItem('favItems', JSON.stringify(Array.from(favItemsList), undefined, 1));
}

// お気に入り取得機能
function getFavorite() {
    // 変数用意
    let favItemsList;
    // localstorageにカートが既に存在していればそれを取得
    if (localStorage.getItem('favItems') != null) {
        // json解読
        favItemsList = new Set(JSON.parse(localStorage.getItem('favItems')));
    } else {
        favItemsList = new Set();
    }

    return Array.from(favItemsList);
}

// お気に入り削除機能（引数：商品ID）
function delFavorite(itemId) {
    // 変数用意
    let favItemsList;
    // localstorageにカートが既に存在していればそれを取得
    if (localStorage.getItem('favItems') != null) {
        // json解読
        favItemsList = new Set(JSON.parse(localStorage.getItem('favItems')));
    } else {
        favItemsList = new Set();
    }

    // 削除
    favItemsList.delete(itemId);
    // localstorageに保存
    localStorage.setItem('favItems', JSON.stringify(Array.from(favItemsList), undefined, 1));
}

// 商品カード生成機能（引数：親要素id属性、商品ID、ジャンル、メーカー、商品名、価格、url）
function createItemCard(parent, itemId, genre, maker, itemName, price, url) {
    let parentDiv = document.getElementById(parent);
    const cardDiv = document.createElement('div');
    const cardForm = document.createElement('form');
    const cardId = document.createElement('input');
    const cardBtn = document.createElement('button');
    // const cardImg = document.createElement('input');
    const cardImg = document.createElement('img');
    const cardBody = document.createElement('div');
    const cardH5 = document.createElement('h5');
    const cardLikeDiv1 = document.createElement('div');
    const cardLikeDiv2 = document.createElement('div');
    const cardInput = document.createElement('input');
    const cardLabel = document.createElement('label');
    const cardI = document.createElement('i');
    const cardName = document.createElement('h6');
    const cardPrice = document.createElement('h6');

    cardDiv.setAttribute('class', 'card col-sm-3');
    cardForm.setAttribute('action', 'Shohin_seni.html');
    cardForm.setAttribute('method', 'get');
    cardForm.setAttribute('class', 'img_unification card');
    cardId.setAttribute('type', 'hidden');
    cardId.setAttribute('name', 'itemId');
    cardId.setAttribute('value', itemId);
    cardBtn.setAttribute('type', 'submit');
    cardBtn.setAttribute('class', 'card-btn');
    cardImg.setAttribute('class', 'card-img-top img-fluid')
    // cardImg.setAttribute('type', 'image');
    cardImg.setAttribute('src', './' + genre + '_photo/' + url);
    // cardImg.setAttribute('onClick', "location.href='./Shohin_seni.html'");
    cardBody.setAttribute('class', 'card-body');
    cardH5.setAttribute('class', 'card-title');
    cardLikeDiv1.setAttribute('align', 'right');
    cardLikeDiv2.setAttribute('class', 'example2');
    cardInput.setAttribute('type', 'checkbox');
    cardInput.setAttribute('name', 'example2');
    cardInput.setAttribute('id', itemId);
    cardInput.setAttribute('onClick', 'checkFavSt(' + itemId + ')');
    if (new Set(getFavorite()).has(itemId)) {
        cardInput.setAttribute('checked', 'true');
    }
    cardLabel.setAttribute('for', itemId);
    cardI.setAttribute('class', 'bi bi-heart-fill fs-5');
    cardName.setAttribute('class', 'clear');
    cardPrice.setAttribute('class', 'nedan_2');

    cardH5.textContent = maker;
    cardName.textContent = itemName;
    cardPrice.textContent = "¥" + price;

    parentDiv.appendChild(cardDiv);
    cardDiv.appendChild(cardForm);
    cardForm.appendChild(cardId);
    cardForm.appendChild(cardBtn);
    cardBtn.appendChild(cardImg);
    cardDiv.appendChild(cardBody);
    cardBody.appendChild(cardH5);
    cardBody.appendChild(cardLikeDiv1);
    cardLikeDiv1.appendChild(cardLikeDiv2);
    cardLikeDiv2.appendChild(cardInput);
    cardLikeDiv2.appendChild(cardLabel);
    cardLabel.appendChild(cardI);
    cardBody.appendChild(cardName);
    cardBody.appendChild(cardPrice);
}