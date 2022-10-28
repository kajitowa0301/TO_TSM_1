<!DOCTYPE html>
<?php
require_once "../../データベース関連/DBManager.php";
$db = new DBManager();
?>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./login_css/user_sign-up.css">
    <title>新規登録画面</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css">
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <script src="https://ajaxzip3.github.io/ajaxzip3.js" charset="UTF-8"></script>
</head>

<body>
    <!-- ナブバーの記述始まり -->
    <div class="bottom">
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="./../index.html">
                    <p id="midasi">To TSM.</p>
                </a>
                <div class="btn-toolbar">
                    <div class="btn-toolbar">
                        <!--新規登録
                        <div class="button_solid003">
                            <a href="./user_sign-up.html">新規登録</a>
                        </div>-->
                        <!-- 新規登録 -->

                        <!-- ログインボタン -->

                        <!--ログインボタン-->
                        <div class="button_solid003">
                            <a href="./user_login.html">ログイン</a>
                        </div>
                        <!-- ログインボタン -->

                        <!--お気に入り閲覧ボタン始  -->
                        <button class="navbar-toggler" type="button" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false">
                            <i class="bi bi-person-heart"></i></button>
                        <!-- お気に入り閲覧ボタン終 -->

                        <!-- 検索のアイコン -->
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false">
                            <i class="bi bi-search"></i>
                        </button>

                        <!-- カゴのアイコン -->
                        <button class="navbar-toggler" onClick="location.href='./../決済_html/カート内確認.html'"><i class="bi bi-cart4"></i></button>
                        <!-- 検索ドロップ -->
                        <div class="collapse navbar-collapse" id="navbar">
                            <ul class="navbar-nav me-auto mb-2">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="./../janru_html/outer.html">-----outer-----</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="./../janru_html/sweat.html">-----sweat-----</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="./../janru_html/pants.html">-----pants-----</a>
                                </li>
                            </ul>
                        </div>
                        <!-- 検索ドロップ終わり -->
        </nav>
    </div>
    <h1 style="font-size:50px; color: tomato;">はよ新規登録しろや！！🤬</h1>
    <p class="p-top-font"><i class="bi bi-person-lines-fill"></i>新規登録画面</p>
    <div class="container">
        <div class="back-color-center">
            <?php
            if ($_SERVER['REQUEST_METHOD'] == "POST") {
                if ($db->submitUser($_POST[""], $_POST[""], $_POST[""], $_POST[""], $_POST[""], $_POST[""], $_POST[""], $_POST[""], $_POST[""])) {
                    // 新規登録完了
                } else {
                    // 登録失敗
                }
            }
            ?>
            <h4 class="font-position">メールアドレス</h4>
            <input type="text" name="mail" class="list"><br>
            <h4 class="font-position">パスワード</h4>
            <input type="password" name="pass" class="list"><br>
            <h4 class="font-position">姓</h4>
            <input type="text" name="sei" class="list"><br>
            <h4 class="font-position">名</h4>
            <input type="text" name="name" class="list"><br>
            <h4 class="font-position">郵便番号</h4>
            <!-- 郵便番号入力(7桁) -->
            <input type="text" name="yuubin" size="10" maxlength="8" onKeyUp="AjaxZip3.zip2addr(this,'','adress','adress');" class="list"><br>
            <h4 class="font-position">住所１</h4>
            <!-- 住所入力(都道府県+以降の住所) -->
            <input type="text" name="adress-1" class="list"><br>
            <h4 class="font-position">住所２</h4>
            <input type="text" name="adress-2" class="list"><br>




        </div>
    </div>
    <!--フッター始まり-->
    <div class="margin-top">
        <footer class="py-3 my-4">
            <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">TOP</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">特徴</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">価格設定</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQ</a></li>
                <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">概要</a></li>
            </ul>
            <p class="text-center text-muted"><img src="./../photo/beni2.png" style="height: 100px;"></p>
        </footer>
    </div>
    <!-- フッター終わり -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css">
    <meta name="viewport" content="width=device-width,initial-scale=1" />
</body>

</html>