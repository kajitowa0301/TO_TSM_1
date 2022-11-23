<?php
    // セッション
    session_start();

    // データベースマネージャの読込
    require_once "../データベース関連/DBManager.php";
    $db = new DBManager();

    try {
        // データベースに購入データ追加
        $pdo = $db->connectDb();
        $ps = $pdo->prepare("INSERT INTO buys(buys_date,customers_mail,buys_payment) VALUES (?,?,?)");
        // $ps2 = $db->connectDb()->prepare("INSERT INTO details VALUES (?,?,?,?)");
        $ps->bindValue(1,date('Y-m-d'));
        $ps->bindValue(2,"totsm@to.jp",pdo::PARAM_STR);
        $ps->bindValue(3,1,pdo::PARAM_INT);


        if ($ps->execute()) {
            $buyId = $pdo->lastInsertId();

            // foreach---
            $ps2 = $db->connectDb()->prepare("INSERT INTO details VALUES (?,?,?,?)");
            $ps2->bindValue(1,$buyId,pdo::PARAM_INT);
            $ps2->bindValue(2,1,pdo::PARAM_INT);// items_id
            $ps2->bindValue(3,"s",pdo::PARAM_STR);// size
            $ps2->bindValue(4,10,pdo::PARAM_INT);// vol

            if ($ps2->execute()) {
                header('Location: ./購入完了.html');
                exit;
            } else {
                throw new Exception("Execute failed", 1);
            }
            // ---
        } else {
            throw new Exception("Execute failed", 0);
        }
    } catch (Exception $th) {
        $_SESSION['submitErr'] = '[コード：'.$th->getCode().']購入処理に失敗しました。時間をおいて再度お試しください。';
        header('Location: ./最終確認.html');
        exit;
    }
?>