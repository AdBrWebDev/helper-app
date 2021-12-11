/*database users*/
CREATE TABLE users
(
	id_user INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    surname VARCHAR(20) NOT NULL,
    phone VARCHAR(15),
    country VARCHAR(25) NOT NULL,
    city VARCHAR(25) NOT NULL,
    street VARCHAR(25),
    age INT NOT NULL,
    is_admin BOOLEAN,
    avatar BLOB(50000),
    e_mail VARCHAR(50)
)
ENGINE=INNODB

/*database user members*/
CREATE TABLE user_members
(
	id_user INT,
    members_mail VARCHAR(50) NOT NULL,
    name VARCHAR(20) NOT NULL,
    surname VARCHAR(20) NOT NULL,
    FOREIGN KEY (id_user) REFERENCES users(id_user)
)
ENGINE=INNODB

/*nature form*/
CREATE TABLE nature_form
(
	id_user INT,
    date DATETIME,
    FOREIGN KEY (id_user) REFERENCES users(id_user)
)
ENGINE=INNODB

/*e-shop*/
CREATE TABLE e_shop
(
	id_product INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(40),
    price DOUBLE(10, 2),
    contain_in_warehouse INT
)
ENGINE=INNODB


/*e-shop product image*/
CREATE TABLE eshop_product_image
(
	id_product INT NOT NULL,
    img MEDIUMBLOB,
    alt VARCHAR(20),
    FOREIGN KEY (id_product) REFERENCES e_shop(id_product)
)
ENGINE=INNODB

/*e-shop product text*/
CREATE TABLE eshop_product_text
(
	id_product INT,
    text TEXT(5000),
    FOREIGN KEY (id_product) REFERENCES e_shop(id_product)
)
ENGINE=INNODB

/*orders*/
CREATE TABLE orders
(
	id_order INT AUTO_INCREMENT PRIMARY KEY,
    id_product INT NOT NULL,
    id_user INT,
   	order_created DATETIME,
    contain INT,
    delivery_date DATE,
    FOREIGN KEY (id_product) REFERENCES e_shop(id_product),
    FOREIGN KEY (id_user) REFERENCES users(id_user)
)
ENGINE=INNODB


/*e-shop insert */
INSERT INTO e_shop
VALUES
('', 'GPS pathfinder 1.0', 50, 13),
('', 'GPS pathfinder 2.0', 80, 5),
('', 'Mikina pathfinder climber', 40, 3),
('', 'Tričko pathfinder liner', 24, 0),
('', 'Šiltovka pathfinder stealth', 12, 0)

/*pathfinder plus*/
CREATE TABLE pathfinder_plus
(
	theme VARCHAR(25),
    image BLOB(65000),
    title VARCHAR(50),
    header VARCHAR(50),
    text TEXT(65000)
)

/*forum*/
CREATE TABLE forum
(
    id_item INT AUTO_INCREMENT PRIMARY KEY, 
	id_user INT,
    dateOfPublic DATETIME,
    title VARCHAR(70) NOT NULL,
    text MEDIUMTEXT,
    image MEDIUMBLOB,
    theme VARCHAR(30),
    FOREIGN KEY (id_user) REFERENCES users(id_user)
)
ENGINE=INNODB

/*pathfinder plus cycling part*/
INSERT INTO pathfinder_plus(theme, image, title, header, text)
VALUES
('cycling', '', 'oprava-defektu','Oprava defektu','Pri oprave defektu na vašom bicykli musíte jednoducho zhodiť plášť z ráfiku a následne vybrať dušu. V prvom kroku je potrebné vybrať koleso z rámu bicykla. Ak máte V-brake brzdy musíte ich najprv uvoľniť. Brzdu stačí stlačiť k sebe a zhodiť vodítko z drážky čeľuste. Ak máte kotúčové brzdy, stačí ak vytiahnete koleso spolu s kotúčom z prasiatka a namontujete zátku brzdy. Zátka sa osádza, aby sa omylom nestlačila brzda počas manipulácie s kolesom. Jej neosadenenie môže spôsobiť spojenie brzdových platničiek. Ich oddelenie je nočnou morou každého skúseného mechanika.'),
('cycling', '', 'oprava-defektu','Oprava defektu','Z demontovaného kolesa úplne vypustíme vzduch. Ľahkým páčením ruky alebo montpákou odlepíme plášť z ráfika. Zaoblený koniec montpáky vložíme medzi ráfik a plášť, následne oddelíme prvú časť a potom druhú časť rovnakým spôsobom. Potom je potrebné odmontovať ventil a zhodiť dušu von z plášťa.'),
('cycling', '', 'oprava-defektu','Oprava defektu','Následne dušu jemne nafúkame a pokúsime sa nájsť dieru. Väčšinou budete počuť syčanie v jednom alebo vo viacerých miestach duše. Spozorovať ho môžete hmatom a v prípade veľmi malých, až mikroskopických dier si môžete pomôcť vodou. Napustíte si vodu do vedra, namočíte dušu a pomaly posúvate po celom obvode. Akonáhle spozorujete unikať bublinky označíte si miesto defektu bielou centrofixkou.'),
('cycling', '', 'oprava-defektu','Oprava defektu','Miesto defektu zdrsnite jemným brúsnym papierom (často býva súčasťou balenia), záplata bude lepšie držať. Potom zbavte miesto mastnoty a nečistôt, najlepšie liehom alebo technickým benzínom. Naneste tenkú vrstvu lepidla na dušu. Nechajte približne 2 až 5 minút odvetrať alebo postupujte podľa návodu na obale od lepidla. Pripravte si záplatu podľa veľkosti defektu a odstráňte hliníkovú fóliu. Akonáhle zaschne lepidlo priložte záplatu a pevne stlačte proti sebe. Spoj sa za niekoľko sekúnd stáva pevným. Nakoniec už len očistite zbytky lepidla, aby sa duša neprilepila na plášť.'),
('cycling', '', 'oprava-defektu','Oprava defektu','Kontrola plášťa je veľmi dôležitou časťou na ktorú nikdy nezabúdajte. Zistite či nemáte niečo pichnuté v plášti, napr. kúsok drôtu alebo sklo, ktoré by mohlo opätovným osadením a nafúknutím dušu prepichnúť. Tak isto skontrolujte spoj, či je pevný, nikde neuniká vzduch alebo kontrola ďalších defektov. V prípade, že nájde ďalší defekt vám odporúčame rovno vymeniť celý plášť. Ak ho nemáte po ruke, tak ďalšie plátanie dier je len nevyhnutnosťou dojazdu do vášho cieľa.'),
('cycling', '', 'oprava-defektu','Oprava defektu','Priložte zalepenú dušu do ráfiku a umiestnite ventil na správne miesto. Ďalej už môžete postupovať tak, že nahodíte dušu a plášť na ráfik kolesa pomocou montpáky. Odporúčame vám používať zásadne montpáku, kľúče a skrutkovač sa nepoužívajú, pretože by mohlo prísť k trvalému poškodeniu ráfika. Dušu dofúkajte asi na polovicu a z každej strany ju po obvode pobúchajte, aby dobre sadla. Potom ju nafúkajte na požadovanú tuhosť podľa parametru, ktorý je uvedený na každom plášti v psi. Nakoniec skontrolujte správne osadenie v ráfiku a môžete pokračovať v jazde.')