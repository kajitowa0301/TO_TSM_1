<?php
    class DBManager
    {
        public function connectDb()
        {
            // $pdo = new PDO("mysql:host=mysql207.phy.lolipop.lan;dbname=LAA1417836-totsm;charset=utf8",'LAA1417836','GgfFQ3wVGbcDTk9');// 本番用
            $pdo = new PDO("mysql:host=localhost;dbname=totsm;charset=utf8", 'root', '');// 開発用
            return $pdo;
        }
    
        public function submitUser(string $mail, string $pass, string $lastname, string $firstname, string $post, string $pref, string $address, string $address2)
        {
            $ps = $this->connectDb()->prepare("INSERT INTO customers VALUES (?,?,?,?,?,?,?,?)");
            $ps->bindValue(1,$mail,pdo::PARAM_STR);
            $ps->bindValue(2,password_hash($pass,PASSWORD_DEFAULT),pdo::PARAM_STR);
            $ps->bindValue(3,$lastname,pdo::PARAM_STR);
            $ps->bindValue(4,$firstname,pdo::PARAM_STR);
            $ps->bindValue(5,$post,pdo::PARAM_STR);
            $ps->bindValue(6,$pref,pdo::PARAM_STR);
            $ps->bindValue(7,$address,pdo::PARAM_STR);
            $ps->bindValue(8,$address2,pdo::PARAM_STR);

    
            if ($ps->execute()) {
                return true;
            } else {
                return false;
            }
        }
    
        public function loginAllowed(string $mail,string $inputPass)
        {
            $ps = $this->connectDb()->prepare("SELECT * FROM customers WHERE customers_mail = ?");
            $ps->bindValue(1, $mail, pdo::PARAM_STR);
            $ps->execute();
    
            $data = $ps->fetch();
            if ($data != false) {
                if (password_verify($inputPass, $data["customers_pass"])) {
                    return $data;
                } else {
                    throw new LogicException("パスワードが違います");
                }
            } else {
                throw new BadMethodCallException("メールアドレスが存在しません");
            }
        }

        public function getAllItems()
        {
            $ps = $this->connectDb()->prepare("SELECT * FROM items");
            $ps->execute();
            return json_encode($ps->fetchAll());
        }

        public function getItem(int $itemId)
        {
            $ps = $this->connectDb()->prepare("SELECT * FROM items WHERE items_id = ?");
            $ps->bindValue(1, $itemId, pdo::PARAM_INT);
            $ps->execute();
            return $ps->fetch();
        }

        public function getAllMaker()
        {
            $ps = $this->connectDb()->prepare("SELECT * FROM makers");
            $ps->execute();
            return json_encode($ps->fetchAll());
        }
    }
?>