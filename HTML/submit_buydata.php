<?php
    // セッション
    session_start();

    // データベースマネージャの読込
    require_once "../データベース関連/DBManager.php";
    $db = new DBManager();

    $cart = json_decode($_POST['cart']);

    try {
        // データベースに購入データ追加
        $pdo = $db->connectDb();
        $ps = $pdo->prepare("INSERT INTO buys(buys_date,customers_mail,buys_payment) VALUES (?,?,?)");
        // $ps2 = $db->connectDb()->prepare("INSERT INTO details VALUES (?,?,?,?)");
        $ps->bindValue(1,date('Y-m-d'));
        $ps->bindValue(2,$_SESSION['buyData']['mail'],pdo::PARAM_STR);
        $ps->bindValue(3,$_SESSION['buyData']['pay'],pdo::PARAM_INT);

        if ($ps->execute()) {
            $buyId = $pdo->lastInsertId();
            // print_r($cart);

            // // foreach---
            foreach ($cart as $key) {
                $ps2 = $db->connectDb()->prepare("INSERT INTO details VALUES (?,?,?,?)");
                $ps2->bindValue(1,$buyId,pdo::PARAM_INT);
                $ps2->bindValue(2,$key->id,pdo::PARAM_INT);// items_id
                $ps2->bindValue(3,$key->size,pdo::PARAM_STR);// size
                $ps2->bindValue(4,$key->vol,pdo::PARAM_INT);// vol
                // $ps2->execute();
            // print_r($key);

                if (!($ps2->execute())) {
                    // echo 'しっぱい';
                    throw new Exception("Execute failed", 1);
                }
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
    header('Location: ./購入完了.html');
    echo '完了';
    exit;
?>