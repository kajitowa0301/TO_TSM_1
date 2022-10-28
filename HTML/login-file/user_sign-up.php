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
</head>

<body>
    <h1 style="font-size:50px; color: tomato;">はよ新規登録しろや！！🤬</h1>
    <?php
    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        if ($db->submitUser($_POST[""],$_POST[""],$_POST[""],$_POST[""],$_POST[""],$_POST[""],$_POST[""],$_POST[""],$_POST[""])) {
            // 新規登録完了
        } else {
            // 登録失敗
        }
        

        
    }
    ?>
</body>

</html>