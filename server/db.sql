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
    title VARCHAR(100),
    header VARCHAR(100),
    text MEDIUMTEXT
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

/*product image*/
INSERT INTO eshop_product_image (id_product, img, alt)
VALUES
(1, '/images/gps.jpg', 'mainImage'),
(2, '/images/gps.jpg', 'mainImage'),
(3, '/images/jacket.png', 'mainImage'),
(4, '/images/jacket.png', 'mainImage'),
(5, '/images/jacket.png', 'mainImage')

/*pathPlus cycling insert*/
INSERT INTO pathfinder_plus(theme, image, title, header, text)
VALUES
('cycling', '', 'roztrhnuta-retaz', 'Roztrhnutá reťaz', 'Reťaz pred opravou zložte z prievozníka bicykla a rozložte ju. Článok, ktorý budete odstraňovať, vložte do nitovača a vytlačte jeho čap.

Ten musí z článku vyčnievať. Článok potom z reťaze odstráňte. Bude na to možno potrebná trochu väčšia sila. Ak vám to ani s použitím sily nepôjde, skúste s článkami reťaze hýbať.'),
('cycling', '', 'roztrhnuta-retaz', 'Roztrhnutá reťaz', 'Ako náhle je rozbitý článok odstránený, spojíte oba konce reťaze. Čap, ktorý vyčnieva, zahákujete za protiľahlý článok.

Pritom pridržíte reťaz a nasadíte na ňu nitovač podobne, ako keď ste odstraňovali poškodený článok. Spájané články musia byť urovnané a dobre uchytené v nitovači.'),
('cycling', '', 'roztrhnuta-retaz', 'Roztrhnutá reťaz', 'Čap zatlačte na oboch stranách tak, aby tu bol presah. Články znitujte a vyskúšajte, či sa reťaz v spoji môže dostatočne hýbať. Ak áno, môžete reťaz nasadiť.'),
('cycling', '', 'rozrezany-plast', 'Rozrezaný plášť', 'Nájdite dieru, či už s namontovaným, alebo odmontovaným kolesom. Otáčajte ho a snažte sa započuť unikajúci vzduch. Ak je diera väčšia, nájdete ju ľahšie. Unikajúci vzduch z tých menších ucítite viac na perách alebo na líci.'),
('cycling', '', 'rozrezany-plast', 'Rozrezaný plášť', 'Pretočte koleso tak, aby bola diera najnižšie. Tesniace mlieko tak stečie k diere a bude najvyššia šanca, že ju utesní. Počkajte pár desiatok sekúnd a potom skúste plášť znovu nafúkať.'),
('cycling', '', 'rozrezany-plast', 'Rozrezaný plášť', 'Ak mlieko začne prskať cez dieru von, je príliš veľká na to, aby ju utesnilo. Na scénu prichádza sada na opravu bezdušákov. Otočte koleso tak, aby bola diera hore. Zabránite tak vytekaniu tesniaceho prostriedku.'),
('cycling', '', 'nastavenie-vidlice', 'Nastavenie vzduchovej vidlice / tlmiča', 'Prepružte prudko bike smerom dolu aby ste naplnili negatívnu komoru v tlmiči a uvoľnili celú dráhu zdvihu.'),
('cycling', '', 'nastavenie-vidlice', 'Nastavenie vzduchovej vidlice / tlmiča', 'Sadnite si na bike minimálne na 5 sekúnd a nechajte svojho asistenta zatlačiť gumený O-krúžok na tlmiči nahor (alebo nadol) ku gumenému tesneniu.'),
('cycling', '', 'nastavenie-vidlice', 'Nastavenie vzduchovej vidlice / tlmiča', 'Opatrne posúvajte svoju váhu dopredu a snažte sa zosadnúť z bicykla bez ďalšieho pohnutia O-krúžku.'),
('cycling', '', 'nastavenie-vidlice', 'Nastavenie vzduchovej vidlice / tlmiča', 'Zmerajte vzdialenosť o ktorú bol O-krúžok stlačený od tesnenia v mm.'),
('cycling', '', 'nastavenie-vidlice', 'Nastavenie vzduchovej vidlice / tlmiča', 'Vydeľte toto číslo celkovým zdvihom tlmiča (často je to menej ako je reálna dĺžka piestu, pozrite si príručku k tlmiču) a potom vynásobte 100 aby ste dostali percentuálny pokles, napr. (15 mm / 50 mm) x 100 = 30%.'),
('cycling', '', 'nastavenie-vidlice', 'Nastavenie vzduchovej vidlice / tlmiča', 'Mnoho výrobcov bude mať navrhované nastavenie SAGu ale keby nie odporúčame základné nastavenie na 30%. Ak potrebujete menší SAG jednoducho tlmič dofúkate, ak potrebujete väčší SAG, tlmič sfúknete. Vzduch pridávajte po 10 psi a postup opakujte kým nedosiahnete požadovaný SAG.'),
('cycling', '', 'nastavenie-vidlice', 'Nastavenie vzduchovej vidlice / tlmiča', 'Prepružte vidlicu aby ste nabili negatívnu komoru a uvoľnil tesnenia.'),
('cycling', '', 'nastavenie-vidlice', 'Nastavenie vzduchovej vidlice / tlmiča', 'Postavte sa na biku tak ako keď na ňom idete a vydržte aspoň 5 sekúnd, nechajt svojho asistenta posunúť gumený O-krúžok na nohe vidlice úplne dole na gumové tesnenie.'),
('cycling', '', 'nastavenie-vidlice', 'Nastavenie vzduchovej vidlice / tlmiča', 'Opatrne preneste svoju váhu späť a vystúpte z bicykla bez toho aby ste poholi s O-krúžkom.'),
('cycling', '', 'nastavenie-vidlice', 'Nastavenie vzduchovej vidlice / tlmiča', 'Zmerajte vzdialenosť o ktorú bol O-krúžok tlačený smerom hore od tesnenia v mm. Vydeľte toto číslo celkovou dĺžkou (napr. 160 mm) a potom x 100, aby ste dostali výsledok poklesu v percentách.'),
('cycling', '', 'nastavenie-vidlice', 'Nastavenie vzduchovej vidlice / tlmiča', 'Na dosiahnutie správneho SAGu pridajte alebo odoberte vzduch zo vzduchovej pružiny podľa potreby a zopakujte celý proces.'),
('cycling', '', 'nastavenie-vidlice', 'Nastavenie vzduchovej vidlice / tlmiča', 'Začnite s odporúčaním výrobcu, alebo ak žiadne nie je, odporúčame 20%. Ak potrebujete menší SAG, jednoducho vidlicu dofúkajte, ak potrebujete viac SAGu, vidlicu sfúknite. Vidlicu dofukávajte po 10 psi a postup opakujte kým nedosiahnete požadovaný SAG.'),
('cycling', '', 'Vymena-plasta', 'Vymena plášta', 'Po vypustení tlaku z duše opatrne zasunieme montpáku pod pätku plášťa (pozor, aby sa duša nedostala medzi plášť a montpáku, mohlo by dôjsť k jej prederaveniu) a tlakom na páku pretiahneme pätku plášťa cez hranu ráfika.'),
('cycling', '', 'Vymena-plasta', 'Vymena plášta', 'Teraz máme dve možnosti. Ak ide plášť ľahko dole, stačí ho rukou pridržať a ťahom montpáky po hrane ráfika postupne uvolňovať. Ak plášť v ráfiku drží pevne, prichádza ku slovu druhá varianta. Prvú montpáku zachytíme pomocou špeciálného očka za špicu, v malej vzdialenosti nasadíme pod pätku plášťa druhú montpáku a zopakujeme postup z prvého bodu. Potom už by mal ísť plášť ľahko demontovať dole. Ak vaša montpáka nie je vybavená očkom, stačí ju len pridržať.
Nasleduje vytiahnutie duše. K dokončeniu demontáže plášťa už nie sú potrebné montpáky, plášť ide ľahko vybrať rukou.'),
('cycling', '', 'Vymena-plasta', 'Vymena plášta', 'Pri nasadzovaní plášťa na bicykel najskôr nasunieme plášť len jednou pätkou – jednou stranou plášťa do ráfika. Dôležitejší je prvý krok pred inštaláciou duše v podobe jej mierneho nahustenia tak, aby držala tvar.'),
('cycling', '', 'Vymena-plasta', 'Vymena plášta', 'Dušu začíname nasadzovať od ventilku, až potom pokračujeme po celom obvode ráfika. Aj s montážou druhej strany plášťa do ráfika je nutné začať od ventilu. Ten mierne zatlačíme späť do ráfika a potom nasadíme pätku plášťa pod ventil. Tento krok je dôležitý pre to, aby sme mohli plášť presne usadiť v ráfiku.'),
('cycling', '', 'Vymena-plasta', 'Vymena plášta', 'Potom od ventilu pokračujeme po obvode ráfiku obidvoma rukami v nasadzovaní plášťa. Väčšina plášťov sa dá nasadiť holými rukami. Ak nie, musí opäť prejsť ku slovu montpáka. Postupujte s najväčšou opatrnosťou, aby nedošlo k poškodeniu duše.'),
('cycling', '', 'Vymena-plasta', 'Vymena plášta', 'Pred nahustením je dobré skontrolovať, či ventil nie je nakrivo. Predíde sa tak zbytočnému defektu. Zhruba po dosiahnutí polovičky tlaku je dobré hustenie prerušiť a roztočiť koleso v ruke. Obyčajný pohľad odhalí, či je plášť presne usadený a nikde nehádže. Ak je to potrebné, usadíme plášť dôkladne do ráfika.'),
('cycling', '', 'Vymena-plasta', 'Vymena plášta', 'Zvláštnou kapitolou sú bezdušové plášte na bicykel. Ich nasadenie do ráfika je zhodné s montážou bežných plášťov, ale pozor na kovové montpáky, ktoré môžu poškodiť ráfik a spôsobiť netesnosť systému. Prvým krokom je nasadenie celého plášťa do ráfika. Potom budeme potrebovať mydlovú vodu (stačí trošku Jari do vody) pre ľahšie zapadnutie pätky do ráfika a pre lepšie utesnenie systému pri hustení.'),
('cycling', '', 'Vymena-plasta', 'Vymena plášta', 'Mydlovou vodou potrieme obidve pätky plášťa a potom pristúpime k husteniu. Na hustenie bezdušových plášťov na bicykel je lepšie použiť veľkú pumpu, keďže k lepšiemu zapadnutiu pätiek do ráfika je potrebný vyšší prvotný tlak.'),
('cycling', '', 'centrovanie-kolies', 'Centrovanie kolies', 'Najprv nájdite miesto, kde koleso hádže. Aby ste miesto nestratili, môžete si ho na bicykli označiť.

Pri centrovaní na výšku priťahujeme drôty v mieste, kde sa koleso vychyľuje smerom von a zároveň povolíme o rovnaký počet otáčok tiež drôty na protiľahlej strane kolesa.

Výchyliek do strán si zatiaľ nevšímajte a postup opakujte pokiaľ nie je koleso na výšku vyrovnané.'),
('cycling', '', 'centrovanie-kolies', 'Centrovanie kolies', 'V mieste, kde ráfik hádže do strany, povolíme drôty vedúce k strane ku ktorej sa koleso vychyľuje a spárované drôty pritiahneme o rovnaký počet otáčok.

Pamätajte, že drôty v kolese nesmú byť príliš voľné, ani prepnuté, inak by mohli praskať.'),
('cycling', '', 'vymena-stredoveho-zlozenia', 'Výmena stredového zloženia', 'Uvoľnite pomocou inbusového kľúča ľavú kľuku.'),
('cycling', '', 'vymena-stredoveho-zlozenia', 'Výmena stredového zloženia', 'Skrutkovačom vysuňte poistku a ľahkým poklepaním ľavú kľuku demontujte zo stredovej osky. Následne pomocou gumeného kladivka vysuňte pravú kľuku s integrovanou oskou.'),
('cycling', '', 'vymena-stredoveho-zlozenia', 'Výmena stredového zloženia', 'Čistou handričkou odstráňte nečistoty a starú vazelínu z misiek stredovéjo zloženia.'),
('cycling', '', 'vymena-stredoveho-zlozenia', 'Výmena stredového zloženia', 'Naneste na osku kvalitnú vazelínu a osku opätovne zasuňte do misiek stredového zloženia. Aby ste predišli nepríjemným zvukom, drážk yako v kľuke, tak aj na oske dôkladne vyčistíte a jemne namažte vazelínou.'),
('cycling', '', 'vymena-stredoveho-zlozenia', 'Výmena stredového zloženia', 'Nasuňte ľavú kľuku do správnej polohy oproti pavej kľuke a dotiahnite skrutky. Pozor : šetrite silou, výrobca doporučuje maximálne 10-15 Nm, aby nedošlo k strhnutiu závitu a tým k znehodnoteniu celej kľuky. Skrutky uťahujte striedavo, nie jeden nadoraz a až potom druhý.'),
('cycling', '', 'roztrhnuta-retaz', 'Odstránenie pukania / vrzgania', 'Búchanie bowdenov je otravné. Či už to klbko káblov pred riadidlami, alebo vnútorne vedené hadice a bowdeny. Bowdeny by mali byť správnej dĺžky a vhodne vedené tak aby nebúchali o seba ani o rám či vidlicu.

Zopnutie napríklad zadného bowdenu a brzdovej hadice dohromady malými páskami, izolepov, alebo zmršťovacou bužírkou dokáže vyčistiť a umlčať kokpit. Bicykel tiež vyzerá oveľa profesionálnejšie.

Ak vás výrobca nalákal na elegantné vnútorné vedenie káblov no neodhlučnil ich, zvuky klepania zvnútra rámu môžu byť na nevydržanie.

Sťahovacie pásky s neodstrihnutým koncom, zmotaná a prilepená pena spod plávajúcej podlahy, objednanie penových trubiek od iných výrobcov, trikov sme počuli už mnoho. Kreativite sa kladie iba jedna medza, veľkosť vstupných dier do rámu.'),
('cycling', '', 'roztrhnuta-retaz', 'Odstránenie pukania / vrzgania', 'Hlavice, ktoré držia sedlo na sedlovke dokážu často vŕzgať, nakoľko majú niekoľko styčných plôch. Tie sa zanášajú špinou a trú o seba, ak nie sú dostatočne a rovnomerne dotiahnuté skrutky.

Dôkladné prečistenie všetkých malých dielov sedlovky, koľajníc sedla a silikónový sprej, alebo tenký film vazelíny* na styčné plochy opäť riešia situáciu. Hlavice sedloviek sú pravdepodobne príčinou, ak zvuk počuť pri zaťažovaní zvrchu nadol.

Ak sú škodnou miesta, kde sú koľajnice pripevnené k telu sedla. Môže vám pomôcť pár kvapiek ťažšieho oleja.'),
('cycling', '', 'roztrhnuta-retaz', 'Odstránenie pukania / vrzgania', 'Samotná trubka sedlovky v ráme bicykla vŕzga a praská častejšie pri pohybe spredu dozadu.

Kontaminácia je opäť najpravdepodobnejším dôvodom nevhodných zvukov, no príčinou býva aj nechcený pohyb spôsobený zlým kontaktom, pridlhou a príliš ponorenou či naopak málo zasunutou sedlovkou alebo slabo dotiahnutou objímkou.

Správny pomer zasunutej a vonkajšej dĺžky sedlovky a objímka dotiahnutá na moment udávaný výrobcom vyrieši pol problému. Dobrému kontaktu napomáha čistota a tá správna chémia. Na kovové materiály tenký film vazelíny, na karbónové diely protišmyková pasta pre ne určená.'),
('cycling', '', 'roztrhnuta-retaz', 'Odstránenie pukania / vrzgania', 'Čapy odpruženia obsahujú ložiská a pri pružení sú vystavené nielen silám v rovine rámu, ale aj bočným silám snažiacim sa krútiť bicyklom. Tým sa namáhajú ložiská samotné ale aj kontaktné plochy, pre nalisovanie ložísk. K tomu prirátajte skrutky/osi čapu, matice, podložky, prach, blato, následné umývanie a zub času.

Čisté diely natrené tenkým filmom vazelíny v kontaktoch. Stredný loctite na závitoch a utiahnutie na určený moment zaistí, aby pri jazde nedošlo k uvoľneniu a poškodeniu dielov. V prípade ďalšieho praskania/vŕzgania mu často predíde zalisovanie ložísk spolu s použitím silného loctitu.'),
('cycling', '', 'roztrhnuta-retaz', 'Odstránenie pukania / vrzgania', 'Pedále môžu vŕzgať tiež. Dobre ich vyčistite a mechanizmus a styčné plochy zapínania tretry nastriekajte silikónovým olejom.

Odmontujte pedále s kľúk, vyčistite dôkladne závity na kľukách aj pedáloch a dobre ich namažte. (ideálne medenou pastou proti zatvrdnutiu).

Ak počujete pískanie, stáva sa, že gumené tesnenie na vnútornej strane niektorých pedálov má v sebe špinu je suché, alebo vyťahané a nedrží na svojom mieste.'),
('cycling', '', 'roztrhnuta-retaz', 'Odstránenie pukania / vrzgania', 'Ak ste ho niekedy videli rozložené viete ako veľa kovových kontaktov sa tu nachádza. Aj koľko špiny a vody sa tam dokáže dostať. Ak nepomôže starý dobrý trojboj rozobrať, vyčistiť namazať, šanca je, že problémom je korunka vidlice (čítaj ďalej), alebo samotný styk medzi rámom a miskou hlavového zloženia, alebo podložka nalisovaná a stĺpiku vidlice.

V takomto prípade pomáha preinštalovanie s inšpekciou po nerovnostiach, prasklinách, či výrobných nedokonalostiach. Pri lisovaní naspať použite na styčné plochy silnejší loctite.'),
('cycling', '', 'roztrhnuta-retaz', 'Odstránenie pukania / vrzgania', 'Rovnaký prípad ako pri sedlovke. Po čistých plochách je dôležité použiť správnu chémiu v závislosti na materiáloch, z ktorých sú diely vyrobené. Na záver dodržať správny doťahovací moment všetkých skrutiek, a postupné doťahovanie do kríža.'),
('cycling', '', 'roztrhnuta-retaz', 'Odstránenie pukania / vrzgania', 'Je to jedno z posledných miest kde by človek hľadal príčinu, no drôty bowdenu dokážu vŕzgať o kovové koncovky a tie zas o rám bicykla. Čisto zastrihnutý bowden a plastové koncovky, ktoré tomu predchádzajú by však mali byť štandardom v každom dobrom servise.

Ročná výmena bowdenu a lanka pre ľahšie a precíznejšie radenie utišuje bowdeny tiež, nakoľko sa čisté bowdeny nemusia tak napínať ako tie staré, špinavé a lepkavé.'),
('cycling', '', 'roztrhnuta-retaz', 'Odstránenie pukania / vrzgania', 'V nábojoch je mnoho malých dielov, čo sa dotýkajú a pohybujú po sebe, čistota a lubrikácia je dôležitá tak ako všade. Moderným nábojom so zapuzdrenými ložiskami prospieva použitie loctitu na lisovaných plochách.

Ďalšie miesto je rozhranie orechu a kazety, najmä na kazetách Sram vyžadujúcich XD orech sa často vyskytuje praskanie, ktoré vie umlčať poriadne namazanie orechu alebo styčných plôch dielov kazety.

Rýchloupináky, najmä tie s odhaleným mechanizmom, zbierajú špinu a pri namáhaní jazdou sa tiež stávajú povodcom hluku.'),
('cycling', '', 'roztrhnuta-retaz', 'Odstránenie pukania / vrzgania', 'Tento zvuk je indikátorom toho, že by ste mali špajdle dotiahnuť. Ak však problémy vytrvávajú kvapka hustého oleja do styku špajdlí, alebo na niple.'),
('cycling', '', 'roztrhnuta-retaz', 'Odstránenie pukania / vrzgania', 'Výmenná pätka je dnes štandardom. Pri padaní a nárazoch vie byť záchrancom oveľa drahšej prehadzovačky. Predstavuje však ďalšiu styčnú plochu, ktorá je často vystavená zaťažovaniu a deformačným silám.

Aj tu platí recept čistoty vhodnej chémie a správne dotiahnuté, loctitom zabezpečené skrutky.'),
('cycling', '', 'roztrhnuta-retaz', 'Odstránenie pukania / vrzgania', 'Ak máte staršiu prehadzovačku Sram s napinákom prvej generácie (type 2) a počujete zvláštne zvuky pri každom prepružení zadnej stavby, pomáha natlačenie vazelíny pod krytku/maticu napínacieho mechanizmu.'),
('cycling', '', 'roztrhnuta-retaz', 'Odstránenie pukania / vrzgania', 'Korunky vidlíc najmä tie, ktoré sú dosť namáhané alebo majú výrobný defekt niekedy začnú vŕzgať. Zvuk z tohto miesta znamená len jediné, začiatok konca.

Takýto diel je zrelý na reklamáciu, alebo výmenu. Snažiť sa ho umlčať alebo ignorovať vám môže prechádzať roky, no môže sa skončiť katastrofou za jazdy.'),
('cycling', '', 'roztrhnuta-retaz', 'Odstránenie pukania / vrzgania', 'Hoci ide o raritu aj samotný rám, väčšinou hliníkový môže vŕzgať. Spôsobujú to nedokonalé zvary, kovové špony a nahrubo opracované konce trubky pred zváraním. Tento problém je všeobecne považovaný za neopraviteľný.

Jim Potter, majiteľ legendárnej opravovne bicyklov Vecchio’s Bicicletteria v Colorade však opravil na radu firmy Cannondale viacero rámov rôznych značiek tým, že do nich na problematické miesta nalial horúci ľanový olej. Je to nekonvenčné a nevieme ako to funguje, ale pri cene nového rámu to asi stojí za vyskúšanie.'),
('cycling', '', 'roztrhnuta-retaz', 'Odvzdušnenie brzd', 'Upevnite bicykel do montážneho stojana a odstráňte koleso (kolesá).'),
('cycling', '', 'roztrhnuta-retaz', 'Odvzdušnenie brzd', 'Otočte brzdovú páčku na riadidlách tak, aby vrchná strana nádržky bola vo vodorovnej polohe.'),
('cycling', '', 'roztrhnuta-retaz', 'Odvzdušnenie brzd', 'Vyčistite páčku od nečistôt a utrite okolo krytu nádržky. Odstráňte kryt nádržky. To umožní, aby prebytočná kvapalina unikla zo zásobníka.'),
('cycling', '', 'roztrhnuta-retaz', 'Odvzdušnenie brzd', 'Vyberte poistku upevňovacej skrutky na brzdovej doštičke a vyskrutkujte upevňovaciu skrutku doštičky.'),
('cycling', '', 'roztrhnuta-retaz', 'Odvzdušnenie brzd', 'Odstráňte brzdové doštičky zatlačením smerom von, od osi náboja. Zapamätajte si orientáciu vratnej pružiny medzi doštičkami. Táto pružina pomáha uvoľneniu doštičiek od rotora počas brzdenia.'),
('cycling', '', 'roztrhnuta-retaz', 'Odvzdušnenie brzd', 'Utrite oblasti piestu dočista. Na čistenie povrchu piestov a vnútra tela strmeňa použite čistú handričku a jemné rozpúšťadlá, ako je izopropylalkohol.'),
('cycling', '', 'roztrhnuta-retaz', 'Odvzdušnenie brzd', 'Pomocou plastové páčky, alebo montpáky na pneumatiky, zatlačte oba piesty do tela strmeňa. Zatlačte neďaleko stredu piestu a vyhnite sa tlačeniu na hranu piestu.'),
('cycling', '', 'roztrhnuta-retaz', 'Odvzdušnenie brzd', 'Zatlačte piestiky späť do tela strmeňa.'),
('cycling', '', 'roztrhnuta-retaz', 'Odvzdušnenie brzd', 'Umiestnite vratnú pružinu medzi nové brzdové doštičky.'),
('cycling', '', 'roztrhnuta-retaz', 'Odvzdušnenie brzd', 'Umiestnite doštičky do strmeňa. Otvor brzdových došičiek a pružiny zlaďte s otvorom na upevňovaciu skrutku.'),
('cycling', '', 'roztrhnuta-retaz', 'Odvzdušnenie brzd', 'Nainštalujte a bezpečne utiahnite skrutky na upevnenie doštičiek.'),
('cycling', '', 'roztrhnuta-retaz', 'Odvzdušnenie brzd', 'Nainštalujte kryt nádrže a zaistite skrutkami.'),
('cycling', '', 'roztrhnuta-retaz', 'Odvzdušnenie brzd', 'Nainštalujte koleso a vyskúšajte brzdu silným stlačením brzdovej páčky. Ak je páčka na pocit mäkká, bude potrebné doplniť brzdovú kvaplainu. Ak doštičky drú alebo sú nevyrovnané, nas')


/*first-aid */
INSERT INTO pathfinder_plus(theme, image, title, header, text)
VALUES
('first-aid', '', 'upal', 'Úpal', 'Preneste postihnutého do chladného prostredia a uložte ho do ležiacej alebo pololežiacej polohy.'),
('first-aid', '', 'upal', 'Úpal', 'Začnite s chladením akýmkoľvek spôsobom:

potieraním vlažnou vodou a ovievaním na urýchlenie odparovania. Studená voda nie je vhodná, spomaľuje vydávanie tepla kožou vyžarovaním,

vložením vrecka s ľadom zabaleného do uteráka ku krku, do podpazušia a slabín,

prikrytím postihnutého vlhkou plachtou.'),
('first-aid', '', 'upal', 'Úpal', 'Podávajte postihnutému nesladenú a neprichutenú vodu z vodovodu po dúškoch. Množstvo regulujte tak, aby mal moč len slabo žltú farbu a bol bez zápachu. Tmavší moč svedčí o nedostatku tekutín.'),
('first-aid', '', 'upal', 'Úpal', 'Ak sa ťažkosti nezmiernia po 30 minútach, vyhľadajte pomoc lekára.'),
('first-aid', '', 'upal', 'Úpal', 'Pri zmätenosti, alebo bezvedomí ihneď volajte záchrannú službu.'),
('first-aid', '', 'spalena-pokožka', 'Spálená pokožka', 'Prvým základným krokom, ktorý by ste mali urobiť, je doplnenie tekutín, ktoré sa pri prehriatí stratili.
'),
('first-aid', '', 'spalena-pokožka', 'Spálená pokožka', 'Následne začnite riešiť samotnú spálenú pokožku:'),
('first-aid', '', 'spalena-pokožka', 'Spálená pokožka', 'Začať môžete studenou alebo vlažnou sprchou, ktorá vám uľaví od bolesti a kožu mierne upokojí. Po sprche sú ideálne masti na popáleniny, ktoré natierajte v pravidelných intervaloch v tenkej vrstve na dobre vysušenú kožu.'),
('first-aid', '', 'vyron', 'Vyvrtnutie členka / výron', 'Na vyvrtnutý členok si ihneď priložte ľad vo vrecúšku alebo balíček mrazenej zeleniny, aby ste chladom zmiernili bolesť a opuch. Studený obklad neprikladajte priamo na pokožku, najprv ju prekryte kuchynskou utierkou, inak by ste si koledovali o drobné omrzliny. Po desiatich, pätnástich minútach zafixujte členok elastickým obväzom. Začnite pri prstoch, obväz dvakrát obtočte, pokračujte cez členok, vráťte sa k prstom a obväzovanie ukončite nad ním.'),
('first-aid', '', 'vyron', 'Vyvrtnutie členka / výron', 'Postup viackrát zopakujte. Obväz neuťahujte príliš napevno, nesmie vás tlačiť. Potom si nohu vyložte do zvýšenej polohy, v noci si ju nemusíte preväzovať. „Najdôležitejšie je poranenú nohu minimálne desať dní nezaťažovať a nedošliapovať na ňu, musí byť obviazaná,“ hovorí MUDr. Viliam Dobiáš, PhD., hlavný lekár zo záchrannej zdravotnej služby v Bratislave. „Postihnutí tieto rady málokedy dodržia, hoci sú nevyhnutné, lebo pri podvrtnutí si človek natiahne väzy v členku a kĺbové puzdro, ktoré drží kĺb pokope. Musí sa zahojiť, preto je nutný pokoj.“'),
('first-aid', '', 'narazene-rebra', 'Narazené rebrá', 'Zväčša nemusíte ísť k lekárovi, nielen narazené, ale aj zlomené rebro by ratoval spôsobom, ktorý zvládnete aj vy. Potrebujete na to niečiu pomoc a široký elastický obväz. „Poranenému treba dať lieky proti bolesti a obviazať hrudník, aby sa čiastočne znehybnil. Rebrá sa vtedy rýchlejšie hoja a aj bolesť je slabšia. Pred obviazaním sa musí človek poriadne nadýchnuť a vydýchnuť. Vo výdychovej fáze treba chvíľu vydržať, aby zvládol ovinutie hrudného koša v dolnej časti tri až štyrikrát po obvode.'),
('first-aid', '', 'narazene-rebra', 'Narazené rebrá', 'Práve tam sa rebrá lámu najčastejšie. Netreba obviazať celý hrudník, stačí na šírku obväzu,“ radí odborník. Nechajte si ho obviazaný aspoň štyri dni vrátane nocí. Spite radšej v polosede, vo vodorovnej polohe rebrá väčšmi bolia. Ak predsa chcete ležať, ľahnite si na poranenú stranu. Aj to vám paradoxne uľaví od ťažkostí a zmiernite zároveň rozsah dýchacích pohybov. Narazené alebo zlomené rebro môže pri prudšom pohybe pobolievať dva aj tri mesiace.'),
('first-aid', '', 'rozbite-koleno', 'Rozbité koleno', 'Predovšetkým zastavte krvácanie. Miesto si pritlačte a bez pohybu podržte desať až pätnásť minút'),
('first-aid', '', 'rozbite-koleno', 'Rozbité koleno', 'Za ten čas sa krvné doštičky postarajú o vznik zrazeniny. Ranu vzápätí očistite. Nezháňajte drahé dezinfekčné prípravky, na neveľké rany postačí voda a mydlo, ktorými ich môžete poumývať celé.'),
('first-aid', '', 'rozbite-koleno', 'Rozbité koleno', 'Rana sa môže vydezinfikovať aj prípravkami z lekárne, nesmú však vniknúť priamo do rany, hoci mnohí majú vžité, že ich treba naliať na krvácajúce miesto.'),
('first-aid', '', 'rozbite-koleno', 'Rozbité koleno', 'Okrem poriadneho štípania takáto záplava narobí aj inú neplechu. Na rozdiel od mydla dezinfekčné prípravky narúšajú telesné bielkoviny. Rana sa vyčistí aj sama tým, že krváca,“ objasňuje lekár. Odreninu neprelepujte, vďaka vzduchu sa zahojí rýchlejšie. Rýchloobväzom si ranu zakryte len pri krvácaní. Ak sa premočí, vymeňte ho za suchý, inak hrozí, že sa rana zapáli.'),
('first-aid', '', 'natiahnuty-sval', 'Natiahnutý sval', 'Len čo pocítite prudkú bolesť svalu, priložte si na boľavé miesto vrecúško s ľadom a stiahnite ho elastickým obväzom. Zabránite tak opuchu z unikajúcej bunkovej tekutiny, ktorá sa uvoľňuje z popraskaných svalových buniek, aj následnej silnej bolesti.'),
('first-aid', '', 'natiahnuty-sval', 'Natiahnutý sval', 'Užite analgetiká alebo si miesto trikrát denne natierajte protizápalovými gélmi, Fastumom, Veralom alebo Ibalginom. Dožičte si tri, štyri dni pokoj a ak sa budete cítiť lepšie, sval začnite pomaly zaťažovať. Určite sa nevrhnite hneď na hodinový džoging! Ak sa bolesť nezmierni ani po dvadsiatich štyroch hodinách, zájdite za lekárom'),
('first-aid', '', 'natiahnuty-sval', 'Vyrazený dych', 'Postihnutého posaďte a upokojte, opakujte mu, že o chvíľu to pominie.'),
('first-aid', '', 'natiahnuty-sval', 'Vyrazený dych', 'Dobre mu urobí masírovanie prednej strany hrudníka, v oblasti uhla medzi rebrami. Potom len čakajte, kým nepríjemnosť nepominie. Udieranie po chrbte nepomôže, dýchanie sa tým nenaštartuje!'),
('first-aid', '', 'natiahnuty-sval', 'Vyrazený dych', 'Nechajte to na samotný organizmus, má vyvinutý zázračný mechanizmus, ktorý zapracuje, keď sa človek začne naozaj dusiť. Pre telo je to veľký stres, ktorý však dýchanie nanovo prebudí'),
('first-aid', '', 'natiahnuty-sval', 'Vyrazený dych', 'Existuje ešte jeden spôsob prvej pomoci. Poskytnúť ju treba vtedy, ak sa postihnutý nenadýchne zo tri, štyri minúty, zrazu mu modrajú pery a upadá do bezvedomia. Vtedy je nevyhnutné umelé dýchanie, stačí niekoľko vdychov a mal by sa znovu rozdýchať.'),
('first-aid', '', 'popalenie', 'Popálenie', 'V prípade popálenia je jednoduchá. Rozhorúčené miesto v prvom rade ochlaďte! Poranenú končatinu dajte na desať až dvadsať minút pod prúd studenej vody'),
('first-aid', '', 'popalenie', 'Popálenie', 'Máte popálenú ruku plnú prsteňov a náramkov? Okamžite s nimi dolu, ale až pod tečúcou vodou. Čo robiť, keď na postihnutom horel odev a priškvaril sa? Nestrhávajte ho! Ak je to nevyhnutné, len ho obstrihajte. Popálenú oblasť aj vtedy najprv ochlaďte.'),
('first-aid', '', 'popalenie', 'Popálenie', 'Ak sa šaty dajú vyzliecť, urobte to, no napríklad tričko na postihnutom môžete nechať. Záchranca by ho mal iba namočiť. Keď má popálený na sebe hrubý kabát, musí preč, inak hrozí, že teplo sa pod ním ešte dlho udrží a výsledkom bude popálenie tretieho či štvrtého stupňa'),
('first-aid', '', 'popalenie', 'Popálenie', 'Ak ide o nenáročnú popáleninu, poranené miesto si po prvom ošetrení ďalšie dva až tri dni preväzujte čistým obväzom'),
('first-aid', '', 'popalenie', 'Popálenie', 'K lekárovi zájdite, ak je popálenina väčšia ako dlaň'),
('first-aid', '', 'dusenie', 'Dusenie', 'Vynechajte udieranie päsťou medzi lopatky, hrudník to nerozhýbe tak, aby predmet z dýchacích ciest vyletel.'),
('first-aid', '', 'dusenie', 'Dusenie', 'Pomôže iba Heimlichov manéver. Nešťastnicu objímte zozadu a zatvorenú päsť jednej ruky priložte na vrchol žalúdka, kde sa končí hrudná kosť'),
('first-aid', '', 'dusenie', 'Dusenie', 'Druhú ruku priložte na prvú, dusiacu sa mierne predkloňte a rukami prudko zatlačte dovnútra a hore'),
('first-aid', '', 'dusenie', 'Dusenie', 'Opakujte aspoň päťkrát.'),
('first-aid', '', 'zlomenina', 'Zlomenina', 'Vytvorenie opory na poranenej končatine podložením rúk pod a nad miestom zlomeniny'),
('first-aid', '', 'zlomenina', 'Zlomenina', 'Znehybnenie tak, aby bol znehybnený jeden kĺb pod aj nad zlomeninou'),
('first-aid', '', 'zlomenina', 'Zlomenina', 'Horná končatina: Zlomenú hornú končatinu dáme buď do závesu z trojrohej šatky alebo znehybníme priamo v rukáve odevu. Zlomenina kľúčnej kosti sa ošetruje ako zlomenina hornej končatiny'),
('first-aid', '', 'zlomenina', 'Zlomenina', 'Dolná končatina: Pri zlomenine dolnej končatiny priložíme zdravú končatinu k postihnutej tak, aby sme s postihnutou nehýbali a priviažeme. Pri veľkej deformácii možno využiť rôzne druhy obloženia na znehybnenie (vankúš, deku, noviny)')

/*articles*/
CREATE TABLE articles
(
	id_user INT,
    id_article INT PRIMARY KEY AUTO_INCREMENT,
    mainImg VARCHAR(100) NOT NULL,
    title VARCHAR(50),
    rating DOUBLE,
    likes INT
)
ENGINE=INNODB

/*sponsors*/
CREATE TABLE sponsors
(
	title VARCHAR(60),
    img VARCHAR(60)
)
ENGINE=INNODB

/*sponsors*/
INSERT INTO sponsors(title, img)
VALUES
('mtbiker', 'mtbiker.png'),
('strava', 'strava.png'),
('xiaomi', 'xiaomi.png'),
('sony', 'sony.png'),
('expres', 'expres.png'),
('northwave', 'northwave.png'),
('poc', 'poc.png'),
('birell', 'birell.png')