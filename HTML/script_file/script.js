
// カート追加機能（引数：商品ID）
function addCart(itemId) {
    // 配列用意
    let cartItemsList = [];
    // localstorageにカートが既に存在していればそれを取得
    if (localStorage.getItem('cartItems') != null) {
        // json解読
        cartItemsList = JSON.parse(localStorage.getItem('cartItems'));
    }
    // console.log(cartItemsList);
    // カート配列に商品追加
    cartItemsList.push(itemId);

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
    // console.log("search:",allItemsList[cartItemsList[0] - 1].items_name);

    // カートにある商品を全商品から検索して商品名をログに出力
    cartItemsList.forEach(ele => {
        console.log("search:",allItemsList[ele - 1].items_name);   
    });
}