CREATE TABLE customers(
    customers_mail VARCHAR(191) PRIMARY KEY,
    customers_pass VARCHAR(191) NOT NULL,
    -- customers_nick VARCHAR(191) NOT NULL,
    customers_ln VARCHAR(191) NOT NULL,
    customers_fn VARCHAR(191) NOT NULL,
    customers_postcode CHAR(7) NOT NULL,
    customers_pref VARCHAR(191) NOT NULL,
    customers_address VARCHAR(191) NOT NULL,
    customers_subaddress VARCHAR(191)
);
CREATE TABLE makers(
    makers_id INT PRIMARY KEY AUTO_INCREMENT,
    makers_name VARCHAR(191) NOT NULL
);
CREATE TABLE buys(
    buys_id INT PRIMARY KEY AUTO_INCREMENT,
    buys_date DATE NOT NULL,
    customers_mail VARCHAR(191) NOT NULL,
    buys_payment INT NOT NULL,
    FOREIGN KEY fkey1 (customers_mail) REFERENCES customers(customers_mail)
);

-- buys_payment番号対応表（購入処理は今回の実習で扱わないので、最低限の情報だけ保持）
-- 0 クレジットカード
-- 1 セブンイレブン
-- 2 ローソン
-- 3 ファミリーマート
-- 4 ミニストップ
-- 5 ポプラ
-- 6 デイリー
-- 7 代金引換

CREATE TABLE items(
    items_id INT PRIMARY KEY AUTO_INCREMENT,
    makers_id INT NOT NULL,
    items_name VARCHAR(20) NOT NULL,
    items_description VARCHAR(1000) NOT NULL,
    items_price INT NOT NULL,
    items_url VARCHAR(191) NOT NULL,
    items_genre VARCHAR(191) NOT NULL,
    items_material VARCHAR(191) NOT NULL,
    items_color VARCHAR(191) NOT NULL,
    FOREIGN KEY fkey2 (makers_id) REFERENCES makers(makers_id)
);
CREATE TABLE itemsinfo(
    items_id INT,
    itemsinfo_size VARCHAR(191),
    itemsinfo_stock INT NOT NULL,
    itemsinfo_width INT,
    itemsinfo_height INT,
    itemsinfo_shoulder INT,
    itemsinfo_length INT,
    itemsinfo_sleeve INT,
    itemsinfo_total INT,
    itemsinfo_waist INT,
    itemsinfo_hip INT,
    itemsinfo_pants INT,
    itemsinfo_aroundsleeve INT,
    itemsinfo_inseam INT,
    itemsinfo_rise INT,
    itemsinfo_thigh INT,
    FOREIGN KEY fkey3 (items_id) REFERENCES items(items_id),
    PRIMARY KEY(items_id, itemsinfo_size)
);
-- fkey5について注釈：lolipopのphpmyadminだとgui上でfkey5の外部キー制約が設定されませんが、内部的には参照しているようなので無視してください。
CREATE TABLE details(
    buys_id INT,
    items_id INT,
    itemsinfo_size VARCHAR(191),
    details_vol INT NOT NULL,
    FOREIGN KEY fkey4 (buys_id) REFERENCES buys(buys_id),
    FOREIGN KEY fkey5 (items_id, itemsinfo_size) REFERENCES itemsinfo(items_id, itemsinfo_size),
    PRIMARY KEY(buys_id, items_id, itemsinfo_size)
);