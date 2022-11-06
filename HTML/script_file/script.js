
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
}

// お気に入り追加機能（引数：商品ID）
function addFavorite(itemId) {
    let favItemsList = new Set();

}