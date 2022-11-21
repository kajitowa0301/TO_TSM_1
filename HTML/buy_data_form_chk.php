<?php
    // セッション
    session_start();

    // データベースマネージャの読込
    require_once "../データベース関連/DBManager.php";
    $db = new DBManager();

    $chkFlag = true;
    $errMsg = "";

    // 姓名チェック
    if ($_POST['ln'] == "" || $_POST['fn'] == "") {
        $chkFlag = false;
        $errMsg .= "氏名を入力してください<br />";
    }
    // メールアドレスチェック
    if (!($db->isMail($_POST['mail']))) {
        $chkFlag = false;
        $errMsg .= "メールアドレスの形式で入力してください<br />";
    }
    // 住所チェック
    if (true) {
        
    }

    if ($chkFlag == true) {
        $_SESSION['buyData'] = [
            'ln' => '',
            'mail' => $_POST['mail']
        ];
        header('Location: ./最終確認.html');
        exit;
    } else {
        $_SESSION['buyDataErr'] = $errMsg;
        header('Location: ./住所登録.html');
        exit;
    }
?>