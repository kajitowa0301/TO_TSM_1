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
    if ($_POST['pref'] == "" || $_POST['post'] == "") {
        $chkFlag = false;
        $errMsg .= "住所を入力してください<br />";
    }

    // 支払方法ごとの内容チェック
    switch ($_POST['paymentMethod']) {
        case '1':
            if ($_POST['ccName'] == "") {
                $chkFlag = false;
                $errMsg .= "カード名義を入力してください<br />";
            }
            break;
        
        case '2':
            if ($_POST['conbini-Name'] == "") {
                $chkFlag = false;
                $errMsg .= "意図しない挙動<br />";
            }
            break;
    }

    if ($chkFlag == true) {
        $_SESSION['buyData'] = [
            'ln' => $_POST['ln'],
            'fn' => $_POST['fn'],
            'mail' => $_POST['mail'],
            'post' => $_POST['post'],
            'pref' => $_POST['pref'],
            'ad' => $_POST['ad'],
            'ad2' => $_POST['ad2'],
            'pay' => $_POST['paymentMethod'],
            'ccName' => $_POST['ccName'],
            'ccNum' => $_POST['ccNum'],
            'ccExp' => $_POST['ccExp'],
            'ccCvv' => $_POST['ccCvv'],
            'conveni' => $_POST['conbini-Name']
        ];
        header('Location: ./最終確認.html');
        exit;
    } else {
        $_SESSION['buyDataErr'] = $errMsg;
        header('Location: ./住所登録.html');
        exit;
    }
?>