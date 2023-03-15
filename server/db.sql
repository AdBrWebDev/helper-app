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
;
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
;
/*nature form*/
CREATE TABLE nature_form
(
	id_user INT,
    date DATETIME,
    FOREIGN KEY (id_user) REFERENCES users(id_user)
)
ENGINE=INNODB
;
/*e-shop*/
CREATE TABLE e_shop
(
	id_product INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(40),
    price DOUBLE(10, 2),
    contain_in_warehouse INT
)
ENGINE=INNODB
;
/*orders*/
CREATE TABLE orders
(
	id_order INT AUTO_INCREMENT PRIMARY KEY,
    id_user INT,
   	order_created DATETIME,
    contain INT,
    delivery_date DATE,
    generatedOrderInt VARCHAR(40),
    FOREIGN KEY (id_user) REFERENCES users(id_user)
)
ENGINE=INNODB
;

/*e-shop insert */
INSERT INTO e_shop
VALUES
(null, 'GPS pathfinder 1.0', 50, 13),
(null, 'GPS pathfinder 2.0', 80, 5),
(null, 'Mikina pathfinder climber', 40, 3),
(null, 'Tričko pathfinder liner', 24, 0),
(null, 'Šiltovka pathfinder stealth', 12, 0)
;
/*pathfinder plus*/
CREATE TABLE pathfinder_plus
(
	theme VARCHAR(25),
    image BLOB(65000),
    title VARCHAR(100),
    header VARCHAR(100),
    text MEDIUMTEXT
)
ENGINE=INNODB
;
/*forum*/
CREATE TABLE forum
(
    id_item INT AUTO_INCREMENT PRIMARY KEY, 
	id_user INT,
    dateOfPublic DATETIME,
    title VARCHAR(70) NOT NULL,
    text MEDIUMTEXT,
    image VARCHAR(100),
    theme VARCHAR(30),
    FOREIGN KEY (id_user) REFERENCES users(id_user)
)
ENGINE=INNODB
;
/*pathfinder plus cycling part*/
INSERT INTO pathfinder_plus(theme, image, header, text)
VALUES
('cycling', 'tubeRe.jpg','Oprava defektu','Pri oprave defektu na vašom bicykli musíte jednoducho zhodiť plášť z ráfiku a následne vybrať dušu. V prvom kroku je potrebné vybrať koleso z rámu bicykla. Ak máte V-brake brzdy musíte ich najprv uvoľniť. Brzdu stačí stlačiť k sebe a zhodiť vodítko z drážky čeľuste. Ak máte kotúčové brzdy, stačí ak vytiahnete koleso spolu s kotúčom z prasiatka a namontujete zátku brzdy. Zátka sa osádza, aby sa omylom nestlačila brzda počas manipulácie s kolesom. Jej neosadenenie môže spôsobiť spojenie brzdových platničiek. Ich oddelenie je nočnou morou každého skúseného mechanika.'),
('cycling', 'tubeRe1.jpg','Oprava defektu','Z demontovaného kolesa úplne vypustíme vzduch. Ľahkým páčením ruky alebo montpákou odlepíme plášť z ráfika. Zaoblený koniec montpáky vložíme medzi ráfik a plášť, následne oddelíme prvú časť a potom druhú časť rovnakým spôsobom. Potom je potrebné odmontovať ventil a zhodiť dušu von z plášťa.'),
('cycling', 'tubeRe2.jpg','Oprava defektu','Následne dušu jemne nafúkame a pokúsime sa nájsť dieru. Väčšinou budete počuť syčanie v jednom alebo vo viacerých miestach duše. Spozorovať ho môžete hmatom a v prípade veľmi malých, až mikroskopických dier si môžete pomôcť vodou. Napustíte si vodu do vedra, namočíte dušu a pomaly posúvate po celom obvode. Akonáhle spozorujete unikať bublinky označíte si miesto defektu bielou centrofixkou.'),
('cycling', 'tubeRe3.jpg','Oprava defektu','Miesto defektu zdrsnite jemným brúsnym papierom (často býva súčasťou balenia), záplata bude lepšie držať. Potom zbavte miesto mastnoty a nečistôt, najlepšie liehom alebo technickým benzínom. Naneste tenkú vrstvu lepidla na dušu. Nechajte približne 2 až 5 minút odvetrať alebo postupujte podľa návodu na obale od lepidla. Pripravte si záplatu podľa veľkosti defektu a odstráňte hliníkovú fóliu. Akonáhle zaschne lepidlo priložte záplatu a pevne stlačte proti sebe. Spoj sa za niekoľko sekúnd stáva pevným. Nakoniec už len očistite zbytky lepidla, aby sa duša neprilepila na plášť.'),
('cycling', 'tubeRe4.jpg','Oprava defektu','Kontrola plášťa je veľmi dôležitou časťou na ktorú nikdy nezabúdajte. Zistite či nemáte niečo pichnuté v plášti, napr. kúsok drôtu alebo sklo, ktoré by mohlo opätovným osadením a nafúknutím dušu prepichnúť. Tak isto skontrolujte spoj, či je pevný, nikde neuniká vzduch alebo kontrola ďalších defektov. V prípade, že nájde ďalší defekt vám odporúčame rovno vymeniť celý plášť. Ak ho nemáte po ruke, tak ďalšie plátanie dier je len nevyhnutnosťou dojazdu do vášho cieľa.'),
('cycling', 'tubeRe5.jpg','Oprava defektu','Priložte zalepenú dušu do ráfiku a umiestnite ventil na správne miesto. Ďalej už môžete postupovať tak, že nahodíte dušu a plášť na ráfik kolesa pomocou montpáky. Odporúčame vám používať zásadne montpáku, kľúče a skrutkovač sa nepoužívajú, pretože by mohlo prísť k trvalému poškodeniu ráfika. Dušu dofúkajte asi na polovicu a z každej strany ju po obvode pobúchajte, aby dobre sadla. Potom ju nafúkajte na požadovanú tuhosť podľa parametru, ktorý je uvedený na každom plášti v psi. Nakoniec skontrolujte správne osadenie v ráfiku a môžete pokračovať v jazde.')
;
/*pathPlus cycling insert*/
INSERT INTO pathfinder_plus(theme, image, header, text)
VALUES
('cycling', 'chain.jpg', 'Roztrhnutá reťaz', 'Reťaz pred opravou zložte z prievozníka bicykla a rozložte ju. Článok, ktorý budete odstraňovať, vložte do nitovača a vytlačte jeho čap.

Ten musí z článku vyčnievať. Článok potom z reťaze odstráňte. Bude na to možno potrebná trochu väčšia sila. Ak vám to ani s použitím sily nepôjde, skúste s článkami reťaze hýbať.'),
('cycling', 'chain1.jpg', 'Roztrhnutá reťaz', 'Ako náhle je rozbitý článok odstránený, spojíte oba konce reťaze. Čap, ktorý vyčnieva, zahákujete za protiľahlý článok.

Pritom pridržíte reťaz a nasadíte na ňu nitovač podobne, ako keď ste odstraňovali poškodený článok. Spájané články musia byť urovnané a dobre uchytené v nitovači.'),
('cycling', 'chain2.jpg', 'Roztrhnutá reťaz', 'Čap zatlačte na oboch stranách tak, aby tu bol presah. Články znitujte a vyskúšajte, či sa reťaz v spoji môže dostatočne hýbať. Ak áno, môžete reťaz nasadiť.'),
('cycling', 'tyre.jpg', 'Rozrezaný plášť', 'Nájdite dieru, či už s namontovaným, alebo odmontovaným kolesom. Otáčajte ho a snažte sa započuť unikajúci vzduch. Ak je diera väčšia, nájdete ju ľahšie. Unikajúci vzduch z tých menších ucítite viac na perách alebo na líci.'),
('cycling', 'tyre1.jpg', 'Rozrezaný plášť', 'Pretočte koleso tak, aby bola diera najnižšie. Tesniace mlieko tak stečie k diere a bude najvyššia šanca, že ju utesní. Počkajte pár desiatok sekúnd a potom skúste plášť znovu nafúkať.'),
('cycling', 'tyre2.jpg', 'Rozrezaný plášť', 'Ak mlieko začne prskať cez dieru von, je príliš veľká na to, aby ju utesnilo. Na scénu prichádza sada na opravu bezdušákov. Otočte koleso tak, aby bola diera hore. Zabránite tak vytekaniu tesniaceho prostriedku.'),
('cycling', 'forkS.jpg', 'Nastavenie vzduchovej vidlice / tlmiča', 'Prepružte prudko bike smerom dolu aby ste naplnili negatívnu komoru v tlmiči a uvoľnili celú dráhu zdvihu.'),
('cycling', 'forkS1.jpg', 'Nastavenie vzduchovej vidlice / tlmiča', 'Sadnite si na bike minimálne na 5 sekúnd a nechajte svojho asistenta zatlačiť gumený O-krúžok na tlmiči nahor (alebo nadol) ku gumenému tesneniu.'),
('cycling', 'forkS2.jpg', 'Nastavenie vzduchovej vidlice / tlmiča', 'Opatrne posúvajte svoju váhu dopredu a snažte sa zosadnúť z bicykla bez ďalšieho pohnutia O-krúžku.'),
('cycling', 'forkS3.jpg', 'Nastavenie vzduchovej vidlice / tlmiča', 'Zmerajte vzdialenosť o ktorú bol O-krúžok stlačený od tesnenia v mm.'),
('cycling', 'forkS4.jpg', 'Nastavenie vzduchovej vidlice / tlmiča', 'Vydeľte toto číslo celkovým zdvihom tlmiča (často je to menej ako je reálna dĺžka piestu, pozrite si príručku k tlmiču) a potom vynásobte 100 aby ste dostali percentuálny pokles, napr. (15 mm / 50 mm) x 100 = 30%.'),
('cycling', 'forkS5.jpg', 'Nastavenie vzduchovej vidlice / tlmiča', 'Mnoho výrobcov bude mať navrhované nastavenie SAGu ale keby nie odporúčame základné nastavenie na 30%. Ak potrebujete menší SAG jednoducho tlmič dofúkate, ak potrebujete väčší SAG, tlmič sfúknete. Vzduch pridávajte po 10 psi a postup opakujte kým nedosiahnete požadovaný SAG.'),
('cycling', 'forkS6.jpg', 'Nastavenie vzduchovej vidlice / tlmiča', 'Prepružte vidlicu aby ste nabili negatívnu komoru a uvoľnil tesnenia.'),
('cycling', 'forkS7.jpg', 'Nastavenie vzduchovej vidlice / tlmiča', 'Postavte sa na biku tak ako keď na ňom idete a vydržte aspoň 5 sekúnd, nechajt svojho asistenta posunúť gumený O-krúžok na nohe vidlice úplne dole na gumové tesnenie.'),
('cycling', 'forkS8.jpg', 'Nastavenie vzduchovej vidlice / tlmiča', 'Opatrne preneste svoju váhu späť a vystúpte z bicykla bez toho aby ste poholi s O-krúžkom.'),
('cycling', 'forkS9.jpg', 'Nastavenie vzduchovej vidlice / tlmiča', 'Zmerajte vzdialenosť o ktorú bol O-krúžok tlačený smerom hore od tesnenia v mm. Vydeľte toto číslo celkovou dĺžkou (napr. 160 mm) a potom x 100, aby ste dostali výsledok poklesu v percentách.'),
('cycling', 'forkS10.jpg', 'Nastavenie vzduchovej vidlice / tlmiča', 'Na dosiahnutie správneho SAGu pridajte alebo odoberte vzduch zo vzduchovej pružiny podľa potreby a zopakujte celý proces.'),
('cycling', 'forkS11.jpg', 'Nastavenie vzduchovej vidlice / tlmiča', 'Začnite s odporúčaním výrobcu, alebo ak žiadne nie je, odporúčame 20%. Ak potrebujete menší SAG, jednoducho vidlicu dofúkajte, ak potrebujete viac SAGu, vidlicu sfúknite. Vidlicu dofukávajte po 10 psi a postup opakujte kým nedosiahnete požadovaný SAG.'),
('cycling', 'tyreCh.jpg', 'Vymena plášta', 'Po vypustení tlaku z duše opatrne zasunieme montpáku pod pätku plášťa (pozor, aby sa duša nedostala medzi plášť a montpáku, mohlo by dôjsť k jej prederaveniu) a tlakom na páku pretiahneme pätku plášťa cez hranu ráfika.'),
('cycling', 'tyreCh1.jpg', 'Vymena plášta', 'Teraz máme dve možnosti. Ak ide plášť ľahko dole, stačí ho rukou pridržať a ťahom montpáky po hrane ráfika postupne uvolňovať. Ak plášť v ráfiku drží pevne, prichádza ku slovu druhá varianta. Prvú montpáku zachytíme pomocou špeciálného očka za špicu, v malej vzdialenosti nasadíme pod pätku plášťa druhú montpáku a zopakujeme postup z prvého bodu. Potom už by mal ísť plášť ľahko demontovať dole. Ak vaša montpáka nie je vybavená očkom, stačí ju len pridržať.
Nasleduje vytiahnutie duše. K dokončeniu demontáže plášťa už nie sú potrebné montpáky, plášť ide ľahko vybrať rukou.'),
('cycling', 'tyreCh2.jpg', 'Vymena plášta', 'Pri nasadzovaní plášťa na bicykel najskôr nasunieme plášť len jednou pätkou – jednou stranou plášťa do ráfika. Dôležitejší je prvý krok pred inštaláciou duše v podobe jej mierneho nahustenia tak, aby držala tvar.'),
('cycling', 'tyreCh3.jpg', 'Vymena plášta', 'Dušu začíname nasadzovať od ventilku, až potom pokračujeme po celom obvode ráfika. Aj s montážou druhej strany plášťa do ráfika je nutné začať od ventilu. Ten mierne zatlačíme späť do ráfika a potom nasadíme pätku plášťa pod ventil. Tento krok je dôležitý pre to, aby sme mohli plášť presne usadiť v ráfiku.'),
('cycling', 'tyreCh4.jpg', 'Vymena plášta', 'Potom od ventilu pokračujeme po obvode ráfiku obidvoma rukami v nasadzovaní plášťa. Väčšina plášťov sa dá nasadiť holými rukami. Ak nie, musí opäť prejsť ku slovu montpáka. Postupujte s najväčšou opatrnosťou, aby nedošlo k poškodeniu duše.'),
('cycling', 'tyreCh5.jpg', 'Vymena plášta', 'Pred nahustením je dobré skontrolovať, či ventil nie je nakrivo. Predíde sa tak zbytočnému defektu. Zhruba po dosiahnutí polovičky tlaku je dobré hustenie prerušiť a roztočiť koleso v ruke. Obyčajný pohľad odhalí, či je plášť presne usadený a nikde nehádže. Ak je to potrebné, usadíme plášť dôkladne do ráfika.'),
('cycling', 'tyreCh6.jpg', 'Vymena plášta', 'Zvláštnou kapitolou sú bezdušové plášte na bicykel. Ich nasadenie do ráfika je zhodné s montážou bežných plášťov, ale pozor na kovové montpáky, ktoré môžu poškodiť ráfik a spôsobiť netesnosť systému. Prvým krokom je nasadenie celého plášťa do ráfika. Potom budeme potrebovať mydlovú vodu (stačí trošku Jari do vody) pre ľahšie zapadnutie pätky do ráfika a pre lepšie utesnenie systému pri hustení.'),
('cycling', 'tyreCh7.jpg', 'Vymena plášta', 'Mydlovou vodou potrieme obidve pätky plášťa a potom pristúpime k husteniu. Na hustenie bezdušových plášťov na bicykel je lepšie použiť veľkú pumpu, keďže k lepšiemu zapadnutiu pätiek do ráfika je potrebný vyšší prvotný tlak.'),
('cycling', 'whCenter.jpg', 'Centrovanie kolies', 'Najprv nájdite miesto, kde koleso hádže. Aby ste miesto nestratili, môžete si ho na bicykli označiť.

Pri centrovaní na výšku priťahujeme drôty v mieste, kde sa koleso vychyľuje smerom von a zároveň povolíme o rovnaký počet otáčok tiež drôty na protiľahlej strane kolesa.

Výchyliek do strán si zatiaľ nevšímajte a postup opakujte pokiaľ nie je koleso na výšku vyrovnané.'),
('cycling', 'whCenter1.jpg',  'Centrovanie kolies', 'V mieste, kde ráfik hádže do strany, povolíme drôty vedúce k strane ku ktorej sa koleso vychyľuje a spárované drôty pritiahneme o rovnaký počet otáčok.

Pamätajte, že drôty v kolese nesmú byť príliš voľné, ani prepnuté, inak by mohli praskať.'),
('cycling', 'botChange.jpg', 'Výmena stredového zloženia', 'Uvoľnite pomocou inbusového kľúča ľavú kľuku.'),
('cycling', 'botChange1.jpg', 'Výmena stredového zloženia', 'Skrutkovačom vysuňte poistku a ľahkým poklepaním ľavú kľuku demontujte zo stredovej osky. Následne pomocou gumeného kladivka vysuňte pravú kľuku s integrovanou oskou.'),
('cycling', 'botChange2.jpg', 'Výmena stredového zloženia', 'Čistou handričkou odstráňte nečistoty a starú vazelínu z misiek stredovéjo zloženia.'),
('cycling', 'botChange3.jpg', 'Výmena stredového zloženia', 'Naneste na osku kvalitnú vazelínu a osku opätovne zasuňte do misiek stredového zloženia. Aby ste predišli nepríjemným zvukom, drážk yako v kľuke, tak aj na oske dôkladne vyčistíte a jemne namažte vazelínou.'),
('cycling', 'botChange4.jpg', 'Výmena stredového zloženia', 'Nasuňte ľavú kľuku do správnej polohy oproti pavej kľuke a dotiahnite skrutky. Pozor : šetrite silou, výrobca doporučuje maximálne 10-15 Nm, aby nedošlo k strhnutiu závitu a tým k znehodnoteniu celej kľuky. Skrutky uťahujte striedavo, nie jeden nadoraz a až potom druhý.'),
('cycling', 'cracking.jpg', 'Odstránenie pukania / vrzgania', 'Búchanie bowdenov je otravné. Či už to klbko káblov pred riadidlami, alebo vnútorne vedené hadice a bowdeny. Bowdeny by mali byť správnej dĺžky a vhodne vedené tak aby nebúchali o seba ani o rám či vidlicu.

Zopnutie napríklad zadného bowdenu a brzdovej hadice dohromady malými páskami, izolepov, alebo zmršťovacou bužírkou dokáže vyčistiť a umlčať kokpit. Bicykel tiež vyzerá oveľa profesionálnejšie.

Ak vás výrobca nalákal na elegantné vnútorné vedenie káblov no neodhlučnil ich, zvuky klepania zvnútra rámu môžu byť na nevydržanie.

Sťahovacie pásky s neodstrihnutým koncom, zmotaná a prilepená pena spod plávajúcej podlahy, objednanie penových trubiek od iných výrobcov, trikov sme počuli už mnoho. Kreativite sa kladie iba jedna medza, veľkosť vstupných dier do rámu.'),
('cycling', 'cracking1.jpg', 'Odstránenie pukania / vrzgania', 'Hlavice, ktoré držia sedlo na sedlovke dokážu často vŕzgať, nakoľko majú niekoľko styčných plôch. Tie sa zanášajú špinou a trú o seba, ak nie sú dostatočne a rovnomerne dotiahnuté skrutky.

Dôkladné prečistenie všetkých malých dielov sedlovky, koľajníc sedla a silikónový sprej, alebo tenký film vazelíny* na styčné plochy opäť riešia situáciu. Hlavice sedloviek sú pravdepodobne príčinou, ak zvuk počuť pri zaťažovaní zvrchu nadol.

Ak sú škodnou miesta, kde sú koľajnice pripevnené k telu sedla. Môže vám pomôcť pár kvapiek ťažšieho oleja.'),
('cycling', 'cracking2.jpg', 'Odstránenie pukania / vrzgania', 'Samotná trubka sedlovky v ráme bicykla vŕzga a praská častejšie pri pohybe spredu dozadu.

Kontaminácia je opäť najpravdepodobnejším dôvodom nevhodných zvukov, no príčinou býva aj nechcený pohyb spôsobený zlým kontaktom, pridlhou a príliš ponorenou či naopak málo zasunutou sedlovkou alebo slabo dotiahnutou objímkou.

Správny pomer zasunutej a vonkajšej dĺžky sedlovky a objímka dotiahnutá na moment udávaný výrobcom vyrieši pol problému. Dobrému kontaktu napomáha čistota a tá správna chémia. Na kovové materiály tenký film vazelíny, na karbónové diely protišmyková pasta pre ne určená.'),
('cycling', 'cracking3.jpg', 'Odstránenie pukania / vrzgania', 'Čapy odpruženia obsahujú ložiská a pri pružení sú vystavené nielen silám v rovine rámu, ale aj bočným silám snažiacim sa krútiť bicyklom. Tým sa namáhajú ložiská samotné ale aj kontaktné plochy, pre nalisovanie ložísk. K tomu prirátajte skrutky/osi čapu, matice, podložky, prach, blato, následné umývanie a zub času.

Čisté diely natrené tenkým filmom vazelíny v kontaktoch. Stredný loctite na závitoch a utiahnutie na určený moment zaistí, aby pri jazde nedošlo k uvoľneniu a poškodeniu dielov. V prípade ďalšieho praskania/vŕzgania mu často predíde zalisovanie ložísk spolu s použitím silného loctitu.'),
('cycling', 'cracking4.jpg', 'Odstránenie pukania / vrzgania', 'Pedále môžu vŕzgať tiež. Dobre ich vyčistite a mechanizmus a styčné plochy zapínania tretry nastriekajte silikónovým olejom.

Odmontujte pedále s kľúk, vyčistite dôkladne závity na kľukách aj pedáloch a dobre ich namažte. (ideálne medenou pastou proti zatvrdnutiu).

Ak počujete pískanie, stáva sa, že gumené tesnenie na vnútornej strane niektorých pedálov má v sebe špinu je suché, alebo vyťahané a nedrží na svojom mieste.'),
('cycling', 'cracking5.jpg', 'Odstránenie pukania / vrzgania', 'Ak ste ho niekedy videli rozložené viete ako veľa kovových kontaktov sa tu nachádza. Aj koľko špiny a vody sa tam dokáže dostať. Ak nepomôže starý dobrý trojboj rozobrať, vyčistiť namazať, šanca je, že problémom je korunka vidlice (čítaj ďalej), alebo samotný styk medzi rámom a miskou hlavového zloženia, alebo podložka nalisovaná a stĺpiku vidlice.

V takomto prípade pomáha preinštalovanie s inšpekciou po nerovnostiach, prasklinách, či výrobných nedokonalostiach. Pri lisovaní naspať použite na styčné plochy silnejší loctite.'),
('cycling', '', 'Odstránenie pukania / vrzgania', 'Rovnaký prípad ako pri sedlovke. Po čistých plochách je dôležité použiť správnu chémiu v závislosti na materiáloch, z ktorých sú diely vyrobené. Na záver dodržať správny doťahovací moment všetkých skrutiek, a postupné doťahovanie do kríža.'),
('cycling', 'cracking6.jpg', 'Odstránenie pukania / vrzgania', 'Je to jedno z posledných miest kde by človek hľadal príčinu, no drôty bowdenu dokážu vŕzgať o kovové koncovky a tie zas o rám bicykla. Čisto zastrihnutý bowden a plastové koncovky, ktoré tomu predchádzajú by však mali byť štandardom v každom dobrom servise.

Ročná výmena bowdenu a lanka pre ľahšie a precíznejšie radenie utišuje bowdeny tiež, nakoľko sa čisté bowdeny nemusia tak napínať ako tie staré, špinavé a lepkavé.'),
('cycling', 'cracking7.jpg', 'Odstránenie pukania / vrzgania', 'V nábojoch je mnoho malých dielov, čo sa dotýkajú a pohybujú po sebe, čistota a lubrikácia je dôležitá tak ako všade. Moderným nábojom so zapuzdrenými ložiskami prospieva použitie loctitu na lisovaných plochách.

Ďalšie miesto je rozhranie orechu a kazety, najmä na kazetách Sram vyžadujúcich XD orech sa často vyskytuje praskanie, ktoré vie umlčať poriadne namazanie orechu alebo styčných plôch dielov kazety.

Rýchloupináky, najmä tie s odhaleným mechanizmom, zbierajú špinu a pri namáhaní jazdou sa tiež stávajú povodcom hluku.'),
('cycling', 'cracking8.jpg', 'Odstránenie pukania / vrzgania', 'Tento zvuk je indikátorom toho, že by ste mali špajdle dotiahnuť. Ak však problémy vytrvávajú kvapka hustého oleja do styku špajdlí, alebo na niple.'),
('cycling', 'cracking9.jpg', 'Odstránenie pukania / vrzgania', 'Výmenná pätka je dnes štandardom. Pri padaní a nárazoch vie byť záchrancom oveľa drahšej prehadzovačky. Predstavuje však ďalšiu styčnú plochu, ktorá je často vystavená zaťažovaniu a deformačným silám.

Aj tu platí recept čistoty vhodnej chémie a správne dotiahnuté, loctitom zabezpečené skrutky.'),
('cycling', 'cracking10.jpg', 'Odstránenie pukania / vrzgania', 'Ak máte staršiu prehadzovačku Sram s napinákom prvej generácie (type 2) a počujete zvláštne zvuky pri každom prepružení zadnej stavby, pomáha natlačenie vazelíny pod krytku/maticu napínacieho mechanizmu.'),
('cycling', 'cracking11.jpg', 'Odstránenie pukania / vrzgania', 'Korunky vidlíc najmä tie, ktoré sú dosť namáhané alebo majú výrobný defekt niekedy začnú vŕzgať. Zvuk z tohto miesta znamená len jediné, začiatok konca.

Takýto diel je zrelý na reklamáciu, alebo výmenu. Snažiť sa ho umlčať alebo ignorovať vám môže prechádzať roky, no môže sa skončiť katastrofou za jazdy.'),
('cycling', 'cracking12.jpg', 'Odstránenie pukania / vrzgania', 'Hoci ide o raritu aj samotný rám, väčšinou hliníkový môže vŕzgať. Spôsobujú to nedokonalé zvary, kovové špony a nahrubo opracované konce trubky pred zváraním. Tento problém je všeobecne považovaný za neopraviteľný.

Jim Potter, majiteľ legendárnej opravovne bicyklov Vecchio’s Bicicletteria v Colorade však opravil na radu firmy Cannondale viacero rámov rôznych značiek tým, že do nich na problematické miesta nalial horúci ľanový olej. Je to nekonvenčné a nevieme ako to funguje, ale pri cene nového rámu to asi stojí za vyskúšanie.'),
('cycling', 'brakeBl.jpg', 'Odvzdušnenie brzd', 'Upevnite bicykel do montážneho stojana a odstráňte koleso (kolesá).'),
('cycling', 'brakeBl.jpg', 'Odvzdušnenie brzd', 'Otočte brzdovú páčku na riadidlách tak, aby vrchná strana nádržky bola vo vodorovnej polohe.'),
('cycling', 'brakeBl.jpg', 'Odvzdušnenie brzd', 'Vyčistite páčku od nečistôt a utrite okolo krytu nádržky. Odstráňte kryt nádržky. To umožní, aby prebytočná kvapalina unikla zo zásobníka.'),
('cycling', 'brakeBl.jpg', 'Odvzdušnenie brzd', 'Vyberte poistku upevňovacej skrutky na brzdovej doštičke a vyskrutkujte upevňovaciu skrutku doštičky.'),
('cycling', 'brakeBl.jpg', 'Odvzdušnenie brzd', 'Odstráňte brzdové doštičky zatlačením smerom von, od osi náboja. Zapamätajte si orientáciu vratnej pružiny medzi doštičkami. Táto pružina pomáha uvoľneniu doštičiek od rotora počas brzdenia.'),
('cycling', 'brakeBl.jpg', 'Odvzdušnenie brzd', 'Utrite oblasti piestu dočista. Na čistenie povrchu piestov a vnútra tela strmeňa použite čistú handričku a jemné rozpúšťadlá, ako je izopropylalkohol.'),
('cycling', 'brakeBl.jpg', 'Odvzdušnenie brzd', 'Pomocou plastové páčky, alebo montpáky na pneumatiky, zatlačte oba piesty do tela strmeňa. Zatlačte neďaleko stredu piestu a vyhnite sa tlačeniu na hranu piestu.'),
('cycling', 'brakeBl.jpg', 'Odvzdušnenie brzd', 'Zatlačte piestiky späť do tela strmeňa.'),
('cycling', 'brakeBl.jpg', 'Odvzdušnenie brzd', 'Umiestnite vratnú pružinu medzi nové brzdové doštičky.'),
('cycling', 'brakeBl.jpg', 'Odvzdušnenie brzd', 'Umiestnite doštičky do strmeňa. Otvor brzdových došičiek a pružiny zlaďte s otvorom na upevňovaciu skrutku.'),
('cycling', 'brakeBl.jpg', 'Odvzdušnenie brzd', 'Nainštalujte a bezpečne utiahnite skrutky na upevnenie doštičiek.'),
('cycling', 'brakeBl.jpg', 'Odvzdušnenie brzd', 'Nainštalujte kryt nádrže a zaistite skrutkami.'),
('cycling', 'brakeBl.jpg', 'Odvzdušnenie brzd', 'Nainštalujte koleso a vyskúšajte brzdu silným stlačením brzdovej páčky. Ak je páčka na pocit mäkká, bude potrebné doplniť brzdovú kvaplainu. Ak doštičky drú alebo sú nevyrovnané, nas')
;

/*first-aid */
INSERT INTO pathfinder_plus(theme, image, header, text)
VALUES
('first-aid', 'heat.jpg', 'Úpal', 'Preneste postihnutého do chladného prostredia a uložte ho do ležiacej alebo pololežiacej polohy.'),
('first-aid', 'heat1.jpg', 'Úpal', 'Začnite s chladením akýmkoľvek spôsobom:

potieraním vlažnou vodou a ovievaním na urýchlenie odparovania. Studená voda nie je vhodná, spomaľuje vydávanie tepla kožou vyžarovaním,

vložením vrecka s ľadom zabaleného do uteráka ku krku, do podpazušia a slabín,

prikrytím postihnutého vlhkou plachtou.'),
('first-aid', 'heat2.jpg', 'Úpal', 'Podávajte postihnutému nesladenú a neprichutenú vodu z vodovodu po dúškoch. Množstvo regulujte tak, aby mal moč len slabo žltú farbu a bol bez zápachu. Tmavší moč svedčí o nedostatku tekutín.'),
('first-aid', 'heat3.jpg', 'Úpal', 'Ak sa ťažkosti nezmiernia po 30 minútach, vyhľadajte pomoc lekára.'),
('first-aid', 'heat4.jpg', 'Úpal', 'Pri zmätenosti, alebo bezvedomí ihneď volajte záchrannú službu.'),
('first-aid', 'heatedS.jpg', 'Spálená pokožka', 'Prvým základným krokom, ktorý by ste mali urobiť, je doplnenie tekutín, ktoré sa pri prehriatí stratili.
'),
('first-aid', 'heatedS1.jpg', 'Spálená pokožka', 'Následne začnite riešiť samotnú spálenú pokožku:'),
('first-aid', 'heatedS2.jpg', 'Spálená pokožka', 'Začať môžete studenou alebo vlažnou sprchou, ktorá vám uľaví od bolesti a kožu mierne upokojí. Po sprche sú ideálne masti na popáleniny, ktoré natierajte v pravidelných intervaloch v tenkej vrstve na dobre vysušenú kožu.'),
('first-aid', 'sprain.jpg', 'Vyvrtnutie členka / výron', 'Na vyvrtnutý členok si ihneď priložte ľad vo vrecúšku alebo balíček mrazenej zeleniny, aby ste chladom zmiernili bolesť a opuch. Studený obklad neprikladajte priamo na pokožku, najprv ju prekryte kuchynskou utierkou, inak by ste si koledovali o drobné omrzliny. Po desiatich, pätnástich minútach zafixujte členok elastickým obväzom. Začnite pri prstoch, obväz dvakrát obtočte, pokračujte cez členok, vráťte sa k prstom a obväzovanie ukončite nad ním.'),
('first-aid', 'sprain1.jpg', 'Vyvrtnutie členka / výron', 'Postup viackrát zopakujte. Obväz neuťahujte príliš napevno, nesmie vás tlačiť. Potom si nohu vyložte do zvýšenej polohy, v noci si ju nemusíte preväzovať. „Najdôležitejšie je poranenú nohu minimálne desať dní nezaťažovať a nedošliapovať na ňu, musí byť obviazaná,“ hovorí MUDr. Viliam Dobiáš, PhD., hlavný lekár zo záchrannej zdravotnej služby v Bratislave. „Postihnutí tieto rady málokedy dodržia, hoci sú nevyhnutné, lebo pri podvrtnutí si človek natiahne väzy v členku a kĺbové puzdro, ktoré drží kĺb pokope. Musí sa zahojiť, preto je nutný pokoj.“'),
('first-aid', 'rib.jpg', 'Narazené rebrá', 'Zväčša nemusíte ísť k lekárovi, nielen narazené, ale aj zlomené rebro by ratoval spôsobom, ktorý zvládnete aj vy. Potrebujete na to niečiu pomoc a široký elastický obväz. „Poranenému treba dať lieky proti bolesti a obviazať hrudník, aby sa čiastočne znehybnil. Rebrá sa vtedy rýchlejšie hoja a aj bolesť je slabšia. Pred obviazaním sa musí človek poriadne nadýchnuť a vydýchnuť. Vo výdychovej fáze treba chvíľu vydržať, aby zvládol ovinutie hrudného koša v dolnej časti tri až štyrikrát po obvode.'),
('first-aid', 'rib1.jpg', 'Narazené rebrá', 'Práve tam sa rebrá lámu najčastejšie. Netreba obviazať celý hrudník, stačí na šírku obväzu,“ radí odborník. Nechajte si ho obviazaný aspoň štyri dni vrátane nocí. Spite radšej v polosede, vo vodorovnej polohe rebrá väčšmi bolia. Ak predsa chcete ležať, ľahnite si na poranenú stranu. Aj to vám paradoxne uľaví od ťažkostí a zmiernite zároveň rozsah dýchacích pohybov. Narazené alebo zlomené rebro môže pri prudšom pohybe pobolievať dva aj tri mesiace.'),
('first-aid', 'rib2.jpg', 'Rozbité koleno', 'Predovšetkým zastavte krvácanie. Miesto si pritlačte a bez pohybu podržte desať až pätnásť minút'),
('first-aid', 'rib3.jpg', 'Rozbité koleno', 'Za ten čas sa krvné doštičky postarajú o vznik zrazeniny. Ranu vzápätí očistite. Nezháňajte drahé dezinfekčné prípravky, na neveľké rany postačí voda a mydlo, ktorými ich môžete poumývať celé.'),
('first-aid', 'rib4.jpg', 'Rozbité koleno', 'Rana sa môže vydezinfikovať aj prípravkami z lekárne, nesmú však vniknúť priamo do rany, hoci mnohí majú vžité, že ich treba naliať na krvácajúce miesto.'),
('first-aid', 'rib5.jpg', 'Rozbité koleno', 'Okrem poriadneho štípania takáto záplava narobí aj inú neplechu. Na rozdiel od mydla dezinfekčné prípravky narúšajú telesné bielkoviny. Rana sa vyčistí aj sama tým, že krváca,“ objasňuje lekár. Odreninu neprelepujte, vďaka vzduchu sa zahojí rýchlejšie. Rýchloobväzom si ranu zakryte len pri krvácaní. Ak sa premočí, vymeňte ho za suchý, inak hrozí, že sa rana zapáli.'),
('first-aid', 'muscle.jpg', 'Natiahnutý sval', 'Len čo pocítite prudkú bolesť svalu, priložte si na boľavé miesto vrecúško s ľadom a stiahnite ho elastickým obväzom. Zabránite tak opuchu z unikajúcej bunkovej tekutiny, ktorá sa uvoľňuje z popraskaných svalových buniek, aj následnej silnej bolesti.'),
('first-aid', 'muscle1.jpg', 'Natiahnutý sval', 'Užite analgetiká alebo si miesto trikrát denne natierajte protizápalovými gélmi, Fastumom, Veralom alebo Ibalginom. Dožičte si tri, štyri dni pokoj a ak sa budete cítiť lepšie, sval začnite pomaly zaťažovať. Určite sa nevrhnite hneď na hodinový džoging! Ak sa bolesť nezmierni ani po dvadsiatich štyroch hodinách, zájdite za lekárom'),
('first-aid', 'muscle2.jpg', 'Vyrazený dych', 'Postihnutého posaďte a upokojte, opakujte mu, že o chvíľu to pominie.'),
('first-aid', 'muscle3.jpg', 'Vyrazený dych', 'Dobre mu urobí masírovanie prednej strany hrudníka, v oblasti uhla medzi rebrami. Potom len čakajte, kým nepríjemnosť nepominie. Udieranie po chrbte nepomôže, dýchanie sa tým nenaštartuje!'),
('first-aid', 'muscle4.jpg', 'Vyrazený dych', 'Nechajte to na samotný organizmus, má vyvinutý zázračný mechanizmus, ktorý zapracuje, keď sa človek začne naozaj dusiť. Pre telo je to veľký stres, ktorý však dýchanie nanovo prebudí'),
('first-aid', 'muscle5.jpg', 'Vyrazený dych', 'Existuje ešte jeden spôsob prvej pomoci. Poskytnúť ju treba vtedy, ak sa postihnutý nenadýchne zo tri, štyri minúty, zrazu mu modrajú pery a upadá do bezvedomia. Vtedy je nevyhnutné umelé dýchanie, stačí niekoľko vdychov a mal by sa znovu rozdýchať.'),
('first-aid', 'burn.jpg', 'Popálenie', 'V prípade popálenia je jednoduchá. Rozhorúčené miesto v prvom rade ochlaďte! Poranenú končatinu dajte na desať až dvadsať minút pod prúd studenej vody'),
('first-aid', 'burn1.jpg', 'Popálenie', 'Máte popálenú ruku plnú prsteňov a náramkov? Okamžite s nimi dolu, ale až pod tečúcou vodou. Čo robiť, keď na postihnutom horel odev a priškvaril sa? Nestrhávajte ho! Ak je to nevyhnutné, len ho obstrihajte. Popálenú oblasť aj vtedy najprv ochlaďte.'),
('first-aid', 'burn2.jpg', 'Popálenie', 'Ak sa šaty dajú vyzliecť, urobte to, no napríklad tričko na postihnutom môžete nechať. Záchranca by ho mal iba namočiť. Keď má popálený na sebe hrubý kabát, musí preč, inak hrozí, že teplo sa pod ním ešte dlho udrží a výsledkom bude popálenie tretieho či štvrtého stupňa'),
('first-aid', 'burn3.jpg', 'Popálenie', 'Ak ide o nenáročnú popáleninu, poranené miesto si po prvom ošetrení ďalšie dva až tri dni preväzujte čistým obväzom'),
('first-aid', 'burn4.jpg', 'Popálenie', 'K lekárovi zájdite, ak je popálenina väčšia ako dlaň'),
('first-aid', 'choke.jpg', 'Dusenie', 'Vynechajte udieranie päsťou medzi lopatky, hrudník to nerozhýbe tak, aby predmet z dýchacích ciest vyletel.'),
('first-aid', 'choke1.jpg', 'Dusenie', 'Pomôže iba Heimlichov manéver. Nešťastnicu objímte zozadu a zatvorenú päsť jednej ruky priložte na vrchol žalúdka, kde sa končí hrudná kosť'),
('first-aid', 'choke2.jpg', 'Dusenie', 'Druhú ruku priložte na prvú, dusiacu sa mierne predkloňte a rukami prudko zatlačte dovnútra a hore'),
('first-aid', 'choke3.jpg', 'Dusenie', 'Opakujte aspoň päťkrát.'),
('first-aid', 'fracture.jpg', 'Zlomenina', 'Vytvorenie opory na poranenej končatine podložením rúk pod a nad miestom zlomeniny'),
('first-aid', 'fracture1.jpg', 'Zlomenina', 'Znehybnenie tak, aby bol znehybnený jeden kĺb pod aj nad zlomeninou'),
('first-aid', 'fracture2.jpg', 'Zlomenina', 'Horná končatina: Zlomenú hornú končatinu dáme buď do závesu z trojrohej šatky alebo znehybníme priamo v rukáve odevu. Zlomenina kľúčnej kosti sa ošetruje ako zlomenina hornej končatiny'),
('first-aid', 'fracture3.jpg', 'Zlomenina', 'Dolná končatina: Pri zlomenine dolnej končatiny priložíme zdravú končatinu k postihnutej tak, aby sme s postihnutou nehýbali a priviažeme. Pri veľkej deformácii možno využiť rôzne druhy obloženia na znehybnenie (vankúš, deku, noviny)')
;
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
;
/*sponsors*/
CREATE TABLE sponsors
(
	title VARCHAR(60),
    img VARCHAR(60)
)
ENGINE=INNODB
;
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
;
/*skiing data*/
INSERT INTO pathfinder_plus(theme, image, header, text)
VALUES
('skiing', 'broken-knee.jpg', 'Zranenia kolena', 'Poranenia predného a zadného skríženého väzu (ACL/PCL) : Ide o poranenia väzov, ktoré stabilizujú koleno, a často sa vyskytujú s náhlym skrútením, kým sú nohy zasadené. Poranenia ACL sa často liečia konzervatívne, ale v prípade úplného roztrhnutia môže byť potrebná operácia a rekonštrukcia.'),
('skiing', 'broken-knee2.jpg', 'Zranenie kolena', 'Meniskus sa trhá : Meniskus je chrupavka v kolene, ktorá umožňuje plynulý pohyb. Pri náhlych krútivých pohyboch môže dôjsť k roztrhnutiu. Liečba je zvyčajne konzervatívna, ale veľké slzy môžu vyžadovať chirurgický zákrok.'),
('skiing', 'injuredHead.jpg','Zranenia hlavy, krku a ramien','Otras mozgu : Pády pri lyžovaní alebo snowboarde môžu mať za následok zranenie mozgu. Kým otras mozgu je mierne traumatické poranenie mozgu, každý úder do hlavy je potrebné starostlivo sledovať. Otrasom mozgu najlepšie predídete nasadením prilby.'),
('skiing', 'injuredHead2.jpg','Zranenia hlavy, krku a ramien','Whiplash : Whiplash je poranenie krku mäkkými tkanivami, často sa označuje ako napätie alebo podvrtnutie krku. Náhle zastavenie môže spôsobiť toto zranenie hyperextenzie, ktoré by mal posúdiť lekár, aby poskytol správny liečebný plán.'),
('skiing', 'injuredHead3.jpg','Zranenia hlavy, krku a ramien','Zlomenina kľúčnej kosti : Pri páde sa môže stať zlomenina kľúčnej kosti. Obvykle sa lieči nosením popruhu, ktorý zabraňuje pohybu ramena a ramena a súčasne umožňuje uzdravenie kosti.'),
('skiing', 'injuredHead4.jpg','Zranenia hlavy, krku a ramien','Roztrhnutá rotátorová manžeta : Toto zranenie ramena, pri ktorom dochádza k roztrhnutiu šľachy, môže nastať v dôsledku opakujúceho sa namáhania alebo pri páde.'),
('skiing', 'injuredHead5.jpg','Zranenia hlavy, krku a ramien','Oddelenie ramien : K tomuto zraneniu môže dôjsť pri páde na vystretú ruku alebo priamo na špičku ramena. Obvykle sa konzervatívne ošetruje odpočinkom, ľadom a závesom.'),
('skiing', 'injuredHead6.jpg','Zranenia hlavy, krku a ramien','Vykĺbenie ramena : Toto zranenie je v inej oblasti kĺbu ako oddelenie a vyžaduje si zmenšenie. Potom môže byť v závislosti od stupňa poranenia potrebná buď konzervatívna liečba, alebo chirurgický zákrok.'),
('skiing', 'injuredHands.jpg','Zranenia rúk','palec lyžiara : Ide o akútne zranenie väzov, ktoré sa často stáva pri páde ruky do popruhu lyžiarskej palice. Váš palec sa môže zachytiť a odtiahnuť od ruky. To môže spôsobiť natrhnutie väziva, čo má za následok ťažkosti s uchopením. Liečba je často sádrou alebo dlahou, ale môže byť potrebná operácia.'),
('skiing', 'injuredHands.jpg2','Zranenia rúk','Vyvrtnutie zápästia : Pri pádoch môže dôjsť k vyvrtnutiu, ktoré sa zvyčajne konzervatívne ošetruje odpočinkom, ľadom, kompresiou, vyvýšením a nesteroidnými protizápalovými liekmi (NSAID), ako je ibuprofén.'),
('skiing', 'injuredHands.jpg3','Zranenia rúk','Zlomeniny prstov : Môžu sa vyskytnúť aj pri páde. Liečba je zvyčajne s dlahou, ale môže byť potrebná redukcia alebo chirurgický zákrok. Bez vhodnej liečby môže postihnutý prst zostať stuhnutý a bolestivý.'),
('skiing', 'injuredBack.jpg','Zranenia chrbta','Bolesť krížov : Silné pohyby sú jednou z príčin bolestí krížov a môžete si spôsobiť zranenie z nadmerného používania, pádov alebo nepríjemného vstávania po páde.'),
('skiing', 'injuredBack2.jpg','Zranenia chrbta','Herniované disky : Pri páde môže dôjsť k zraneniu, pri ktorom vám praskne disk v chrbtici a vytečie tekutina podobná želé. To môže podráždiť vaše nervy a spôsobiť bolesť chrbta. Toto zranenie sa často bude liečiť konzervatívne, ale môže sa odporučiť chirurgický zákrok.')
;
/*atricleImages*/
CREATE TABLE articleImages
(
	id_article INT,
    image TEXT
)
ENGINE=INNODB
;
/*running pathfinder_plus data*/
INSERT INTO pathfinder_plus(theme, image, header, text)
VALUES
('running', 'breath.jpg', 'Pravidelný rytmus dýchania', 'Tempo zvyšujte pomaly a postupne. Začnite chôdzou, prejdite do ľahkého klusu a postupne sa dostaňte do želaného tempa. Prechod z chôdze do ľahkého tempa zvýši váš srdcový pulz zo zhruba 40 percent maximálnej pulzovej frekvencie na 60 až 70 percent, preto je dobré ísť na veci postupne.'),
('running', 'breath1.jpg', 'Pravidelný rytmus dýchania', 'Na dýchanie sa sústreďte. Dýchajte zhlboka, aby ste telo zásobili dostatkom kyslíka. Na zdokonalenie dýchania je výborná jóga.'),
('running', 'breath2.jpg', 'Pravidelný rytmus dýchania', 'Vypnite hudbu. Ak budete počúvať svoj dych namiesto hudby, ľahšie sa vám podarí nájsť ten správny rytmus dýchania. Na dva kroky sa skúste napríklad nadychovať a na dva vydychujte.'),
('running', 'breath3.jpg', 'Pravidelný rytmus dýchania', 'Zistite, či problém netkvie vo vašej bežeckej výbave. Ak nosíte hrudný pás či kompresné tričko, uistite sa, že vám nebránia v správnom dýchaní.'),
('running', 'breath4.jpg', 'Pravidelný rytmus dýchania', 'Ak vám však neustále dochádza dych a žiadny z našich tipov vám nepomáha, pouvažujte o návšteve lekára.'),
('running', 'muscles.jpg', 'Stunuté svalstvo', 'Nikdy nezanedbávajte dôkladný warm-up. Pred behom je vhodný dynamický strečing, napríklad krúženie bokmi či pohojdávanie nohami. Po ňom aspoň päť minút kráčajte rýchlou chôdzou a postupne zvyšujte tempo.'),
('running', 'muscles1.jpg', 'Stunuté svalstvo', 'Nebojte sa kardio strojov. Ak behávate vo fitku na bežeckom páse, na rozohriatie pred tréningom využite iný kardio stroj, napríklad stacionárny bicykel či veslársky trenažér. Vaše svaly sa rozohrejú, srdcový pulz sa jemne zvýši a zrýchli sa vám dych.'),
('running', 'muscles2.jpg', 'Stunuté svalstvo', 'Uistite sa, že ste sa poriadne zotavili z posledného behu. Mierna stuhnutosť v počiatočnej fáze behu môže byť celkom prirodzenou súčasťou procesu rozohrievania, kým si telo nezvykne na záťaž.'),
('running', 'muscles3.jpg', 'Stunuté svalstvo', 'Ak však nepríjemný pocit pretrváva a neviete sa ho zbaviť ani po niekoľkých minútach, je dosť možné, že ste sa nezotavili z predchádzajúceho tréningu.'),
('running', 'muscles4.jpg', 'Stunuté svalstvo', 'Skúste si zaviesť bežecký denník, do ktorého si niekoľko týždňov zapisujte nielen to, koľko kilometrov a za aký čas ste odbehli, ale aj to, ako ste sa po tom-ktorom behu cítili. Uvidíte, že sa vám nakoniec podarí nájsť rutinu, ktorá bude vášmu telu vyhovovať najlepšie.'),
('running', 'breath.jpg', 'Boj s dychom', 'Nechajte sa skontrolovať u lekára. Je veľmi dôležité vylúčiť všetky možné zdravotné problémy. Ak však s behom ešte len začínate, netreba hneď robiť paniku. Dajte svojmu telu čas, beh predsa nie je žiadna sranda. So zlepšujúcou sa kondíciou sa problémy s dýchaním s najväčšou pravdepodobnosťou vytratia.'),
('running', 'breath1.jpg', 'Boj s dychom', 'Vyhýbajte sa behu v horúčavách aj v priveľkom mraze. Počasie, teda teplota vzduchu, ale aj vietor môže k problémom s dýchaním významne prispievať. V chlade sa vzduch presúva z úst veľmi rýchlo do pľúc, nedostáva sa mu teda dostatok času na to, aby sa zohrial.'),
('running', 'breath2.jpg', 'Boj s dychom', 'Pri behu v horúčavách sa zase krv presúva zo svalov do ciev pod pokožkou, čím sa telo ochladzuje. To znamená, že do pracujúcich svalov sa dostáva menej kyslíka. V extrémnom počasí teda vyskúšajte radšej tréning na bežeckom páse.'),
('running', 'breath3.jpg', 'Boj s dychom', 'Spomaľte. Ak vyštartujete prirýchlo, váš aeróbny systém vám nemá šancu poskytnúť včas adekvátnu energiu. Ak vám robí dýchanie problémy, znížte intenzitu tréningu a nebojte sa striedať beh s chôdzou.'),
('running', 'breath4.jpg', 'Boj s dychom', 'Dýchajte zhlboka. Ak vám pri behu dochádza dych, možno nevyužívate kapacitu svojich pľúc naplno. Netreba sa však ničoho báť – dá sa to naučiť. Usilujte sa dýchať naozaj zhlboka aj pri behu, aj počas dňa. Občas sa na chvíľu posaďte a sústreďte sa na vlastné dýchanie.'),
('running', 'breath5.jpg', 'Boj s dychom', 'Sústreďte sa na držanie tela. Pri behu držte hlavu vysoko, bradu nahor, plecia ťahajte dozadu a dole. Pľúca tak budú mať viac miesta.'),
('running', 'breath6.jpg', 'Boj s dychom', 'Uistite sa, že prijímate dostatok železa. Práve nedostatok železa v tele totiž môže spôsobovať, že vám dochádza dych. Ak máte pochybnosti a neviete si poradiť sami, nehanbite sa navštíviť lekára.'),
('running', 'breath7.jpg', 'Boj s dychom', 'Tesne pred behom nejedzte. Po jedení sa krv presúva do tráviaceho ústrojenstva, čím sa zhoršuje schopnosť tela dodávať pracujúcim svalom energiu a kyslík.'),
('running', 'breath8.jpg', 'Boj s dychom', 'Ak máte nadváhu, zbavte sa jej. Nosiť so sebou všade prebytočné kilá je pre telo záťaž. Znížte intenzitu behu a popracujte na tom, aby bola vaša strava vyvážená. Po čase sa neželaného tuku zbavíte a vaše dýchanie sa zlepší.'),
('running', 'temp.jpg', 'Vaše tempo stagnuje', 'Tréning obmieňajte. Ak túžite po tréningových pokrokoch, mali by ste meniť intenzitu behu aj jeho tempo. Ak sa nedokážete k vyššiemu tempu donútiť sami, pokojne použite bežecký pás.'),
('running', 'temp1.jpg', 'Vaše tempo stagnuje', 'Do tréningu zaraďte krátke úseky vo vysokom tempe. Nemusia trvať dlhšie ako 30 sekúnd až jednu minútu. Do nasledujúceho tréningu zase pre zmenu zaraďte desať- až tridsaťsekundové šprinty.'),
('running', 'temp2.jpg', 'Vaše tempo stagnuje', 'Vyskúšajte prahový beh. Týmto typom tréningu popracujete na svojej kondícii, pretože pobežíte vo vyššom tempe, ako je vaše bežné. Počas tréningu striedajte úseky behu v tempe na hranici diskomfortu s behom v ľahkom tempe na zotavenie. Vo vysokom tempe by vám malo robiť problémy povedať viac než dve či tri slová. Bežte rýchlo tri až štyri minúty, potom na dve minúty spomaľte, vydýchajte sa a celú vec trikrát zopakujte. Úseky vo vysokom tempe postupne predlžujte, úseky v pomalom tempe, naopak, skracujte.'),
('running', 'tired.jpg', 'príliš unavený na beh', 'Hlavne si nesadajte. Majte bežeckú výbavu pripravenú rovno pri vchodových dverách alebo sa prezliekajte rovno v práci a choďte si zabehať ešte predtým, ako prídete domov.'),
('running', 'tired1.jpg', 'príliš unavený na beh', 'Hrajte sa s vlastnou mysľou. Povedzte si, že odbehnete len pár kilometrov a je dosť veľká šanca, že keď už raz pobežíte, zistíte, že sa cítite oveľa lepšie, ako ste si mysleli. Myslite na to, ako skvele sa budete cítiť po behu, namiesto toho, aby ste sa trápili tým, akí ste unavení.'),
('running', 'HatHils.jpg', 'Nenávidíte kopce', 'S kopcami sa zoznamujte postupne. Naplánujte si bežeckú trasu tak, aby zahŕňala aj mierne prevýšenie. Keď vám prestane robiť problém malé stúpanie, nájdite si kopec, ktorý bude pre vás väčšou výzvou.'),
('running', 'HatHils1.jpg', 'Nenávidíte kopce', 'S kopcami sa zoznamujte postupne. Naplánujte si bežeckú trasu tak, aby zahŕňala aj mierne prevýšenie. Keď vám prestane robiť problém malé stúpanie, nájdite si kopec, ktorý bude pre vás väčšou výzvou.'),
('running', 'HatHils2.jpg', 'Nenávidíte kopce', 'Nevyberajte si zbytočne strmé stúpanie. Aj miernejšie vás zaťaží viac ako beh po rovine, takže celkom postačí. Do kopca vybiehajte, smerom nadol klusajte, aby ste sa stihli zotaviť. Ak vám to vyhovuje lepšie, pokojne smerom nadol kráčajte. Opakujte päťkrát.'),
('running', 'runrace.jpg', 'Počas pretekov vám dochádza para', 'Popracujte na svojej duševnej sile. Potrebujete ju na prekonávanie zložitých výziev. Platí totiž, že ak si hlava čosi zaumieni, telu sa to dosiahnuť podarí. Duševná sila je preto rovnako dôležitá ako správne nastavený bežecký tréning.'),
('running', 'runrace1.jpg', 'Počas pretekov vám dochádza para', 'Posilňujte. Silné svaly potrebujete na to, aby ste vedeli udržať správny bežecký postoj, bez ktorého prichádza váš beh o efektívnosť. Silovému tréningu sa venujte dvakrát do týždňa a keď budete silu potrebovať najviac, vaše telo vás nesklame. Dobré sú drepy, výpady či vzpory.'),
('running', 'runrace2.jpg', 'Počas pretekov vám dochádza para', 'Zamyslite sa nad vaším tempom po štarte. Možno je vaša taktika nesprávna a štartujete prirýchlo. Začínajte teda radšej zľahka a tempo zvýšte až potom, ako si nájdete vlastný rytmus. Je vždy lepšie mať v zálohe sily, ako keby ste sa mali hneď na začiatku vyčerpať.'),
('running', 'runrace3.jpg', 'Počas pretekov vám dochádza para', 'Vyskúšajte fartlek. Fartlek je švédske slovo, ktoré znamená „hra s rýchlosťou“, pritom je skutočne akousi hrou. Pri behu si vyberáte úseky, ktoré odbehnete vo vyššom tempe. Môžete napríklad šprintovať k v poradí tretej lavičke v parku a potom spomaliť, potom zase šprintovať k inému cieľu a opäť spomaliť. Takéto striedanie intenzity a rýchlosti je prínosné a ku koncu pretekov dokážete vďaka takejto príprave pekne zrýchliť.'),
('running', 'runrace4.jpg', 'Počas pretekov vám dochádza para', 'Popracujte na svojej vytrvalosti. Na to, aby ste dokázali telo posúvať kontinuálne vpred, potrebujete mať istú výdrž. Preto počas prípravy na preteky absolvujte dostatočný počet dlhých behov. Ak sa pripravujete na desiatku, mali by ste počas prípravy behávať osem kilometrov, ak na polmaratón, zaraďte do tréningu 18 kilometrov dlhé behy, ak sa chystáte na maratón, počas prípravy naň by ste mali absolvovať štyri až šesť 34-kilometrových behov.'),
('running', 'pain.jpg', 'Bolesti na ďalší deň', 'Po každom tréningu robte strečing. Pomôže vám predchádzať bolestiam svalov. Naťahujte si svaly nôh aj zadku a v každej polohe zotrvajte tridsať sekúnd.'),
('running', 'pain1.jpg', 'Bolesti na ďalší deň', 'Zaobstarajte si masážny penový valec. Používajte ho pravidelne a zvýšenú pozornosť venujte lýtkam, kvadricepsom a hamstringom.'),
('running', 'pain2.jpg', 'Bolesti na ďalší deň', 'Neprestávajte sa hýbať. Ak po náročnom tréningu sedíte pridlho na zadku, môže to predĺžiť stuhnutosť svalov. Preto zostaňte po behu v pohybe a na druhý deň nebudete zomierať od bolesti.'),
('running', 'pain3.jpg', 'Bolesti na ďalší deň', 'Vyskúšajte zotavovací beh. Relaxačný beh v úplne ľahučkom tempe vám pomôže vyplaviť zo svalov toxíny a zlepší prúdenie krvi. Doprajte si ho na druhý deň po tvrdom tréningu, no skutočne si ho nastavte tak, aby ste si pri ňom oddýchli. Takýto beh by nemal trvať dlhšie než tridsať minút.'),
('running', 'pain4.jpg', 'Bolesti na ďalší deň', 'Po behu sa dobre najedzte. To, čo si vložíte po tréningu do úst, však vyberajte s rozumom. Do tridsiatich minút po návrate z neho si dajte chudé bielkoviny a zdravé sacharidy. Vaše telo sa tak zotaví rýchlejšie.')
;
/*pathfinder_plus hiking data*/
INSERT INTO pathfinder_plus(theme, image, header, text)
VALUES
('hiking', 'hikingSkils.jpg', 'Preceňovanie schopností','Vždy je dôležité, aby ste si trasu vyberali podľa svojich schopností a svojho zdravotného stavu. V takýchto prípadoch si nie je čo dokazovať. Dopredu si zistite informácie o trase, jej dĺžke, prevýšení, ako aj o tom, čo vás na nej môže čakať.'),
('hiking', 'hikingSkils1.jpg', 'Preceňovanie schopností','Veľmi dôležité je sledovať počasie, pretože to je najmä v horách nevyspytateľné. Využiť môžete predpoveď počasia od SHMÚ, rôzne meteorologické aplikácie alebo stránku horskej záchrannej služby (HZS). Ak máte stiahnutú aplikáciu od HZS, tá vás pri zadávaní trasy zároveň aj upozorní, či sú pre ňu vydané nejaké varovania.'),
('hiking', 'hikingSkils2.jpg', 'Preceňovanie schopností','V prípade, že vás v horách predsa len zastihne búrka alebo sa k nej bude schyľovať, v žiadnom prípade sa neschovávajte pod osamotené vyvýšené stromy. Ideálne je nájsť horskú chatu alebo aspoň nejaký úkryt. Nemali by to však byť žiadne kamenné výklenky, keďže tam hrozí riziko zasiahnutia blesku. Ak šancu na úkryt nemáte, skúste zísť čo možno najnižšie.
Na záver treba povedať, že ani využitie služieb horského vodcu nie sú hanbou, najmä v prípade náročného výstupu.'),
('hiking', 'hikingEquipment.jpg', 'Kvalitná výstroj','Hoci je turistika veľmi nenáročným športom a dá sa vykonávať takmer všade bez nejakého vybavenia, treba rozlišovať jej úrovne. Na bežné trasy pravdepodobne nebudete potrebovať to, čo sa vám bude určite hodiť v horách.'),
('hiking', 'hikingEquipment1.jpg', 'Kvalitná výstroj','Pri horskej turistike by ste mali dbať na kvalitnú a nepremokavú obuv. Ak ste zažili otlaky či bolesť nôh kvôli nesprávnym topánkam, určite nám dáte za pravdu. Rovnako sa bude hodiť aj ľahké nepremokavé oblečenie.'),
('hiking', 'hikingEquipment2.jpg', 'Kvalitná výstroj','Vo vašej výstroji, samozrejme, v závislosti od dĺžky a náročnosti turistickej trasy by nemali chýbať: mobil, powerbank, opaľovací krém a slnečné okuliare (najmä vo vysokohorských oblastiach), dostatok vody (viac ako bežný prídel na osobu, najmä v letných mesiacoch), jedlo pre doplnenie energie (zmes orechov, ovocie, tyčinky, sendvič), mapa, kompas, GPS aplikácie v mobile, lekárnička so základnými potrebami, čelovka, prípadne palice. Tých vecí nie je málo, ale niekedy vám môžu skutočne zachrániť život. Na druhej strane si netreba baliť zbytočnosti, preto vo vašom batohu na chrbte sa počíta každé kilo.'),
('hiking', 'hikingEquipment3.jpg', 'Kvalitná výstroj','Ohľadom jedla sa určite hodí, ak počas túry konzumujete niečo v priebehu celého dňa, ako by ste mali absolvovať plné obedové menu niekde na horskej chate. Môže sa vám stať, že vám bude ťažko a túra už nebude taká jednoduchá a príjemná ako predtým. Samozrejme, je to individuálne a každý určite pozná, ako jeho telo funguje.'),
('hiking', 'hikingBreaks.jpg', 'správna chôdza a pravidelné prechádzky','Mohlo by to znieť ako zbytočnosť, veď chodiť vie predsa každý. Najmä v horách je však dôležité dbať aj na túto maličkosť. Inak sa chodí po lesnom chodníku, inak po kameňoch a inak po mokrom a klzkom povrchu. Pričom stačí len sekunda a môžete si privodiť nepríjemný úraz. Preto je lepšie byť obzvlášť opatrný, ako potom ľutovať. V nerovnom a nebezpečnom teréne sa preto odporúča robiť skôr menšie kroky a sledovať cestu.'),
('hiking', 'hikingBreaks1.jpg', 'správna chôdza a pravidelné prechádzky','Výhľady sú, samozrejme, to, za čím najmä na hory chodíme. Nie je však dobré, ak vystupujete po kamennej ceste na hrebeni a namiesto nôh a cesty sledujete všetko navôkol. Preto sú dôležité aj prestávky, ktorú slúžia nielen na oddych, osvieženie, ale aj na vychutnávanie krásy slovenských hôr a prírody. Niektorým by mohol dokonca pohľad nadol popri chôdzi privodiť závrat. Takže sa dívajme na hory s hlavou nahor, ale keď stojíme!'),
('hiking', 'hikingBreaks2.jpg', 'Držanie sa vyznačených chodníkov','V našich horách máme nespočetné množstvo rôznych trás so zaujímavými výhľadmi a miestami. Nie je preto extra dôvod na to, aby ste si vyberali, najmä v miestach, kde to nepoznáte, nejaké nové. Pri zídení z vyznačenej trasy hrozí totiž viacero rizík. Môžete zablúdiť a nechcene si tak predĺžiť svoju túru, na čo nemusíte byť pripravený a môžete sa tak ocitnúť v horách po zotmení bez pomoci. Väčšinou sa neoplatí využívať ani skratky, pretože sa to môže skončiť rovnako. Samozrejme, ak o skratke viete a máte overené, kam vás dovedie, nemusí to byť problém.'),
('hiking', 'hikingTracks.jpg', 'Držanie sa vyznačených chodníkov','Aj pre tieto prípady sa oplatí pri plánovaní turistiky využiť mobilnú aplikáciu Horskej záchrannej služby, ktorá je spustená od minulého leta. Ak si v nej vyznačíte požadovanú trasu so zastávkami a predpokladaným príchodom, získate istotu, že ak sa do cieľa v určenom čase nedostavíte, začnú po vás pátrať.'),
('hiking', 'hikingTracks1.jpg', 'Správanie sa k prírode','Hoci sa téma ochrany životného prostredia objavuje v médiách čoraz častejšie, niekedy to v našich horách nie je vidno. Každý, kto do prírody vchádza, by k nej mal mať k rešpekt a neničiť ju. Aj turisti v horách by sa tak mali správať rozumne a hlavne zodpovedne. Ak si niečo v batohu prinesieme, to, čo nám z toho zostane, by sme si mali so sebou aj odniesť. Nemôžeme čakať, že na všetkých turistických chodníkoch sú inštalované smetné koše. A ak sa zamyslíme, obal je už vždy ľahší ako pôvodné jedlo, nápoj alebo iná vec. Príroda to určite ocení.'),
('hiking', 'avalanche.jpg', 'Riziko lavín','Počasie je nevyspytateľné a často veľmi odlišné medzi nížinami a vrcholmi hôr. Najmä v prechodných obdobiach môže byť preto výstup v horách zradný. Váha snehu a postupné otepľovanie môžu spustiť nebezpečnú lavínu. Navyše pri aktuálnom trende skialpinizmu je aj veľa začiatočníkov, ktorí ešte nevedia odhadnúť situáciu a nepripravia sa dostatočne. Navyše si mnohí myslia, že už profesionálmi sú.'),
('hiking', 'avalanche1.jpg', 'Riziko lavín','Každý, kto plánuje skialp alebo vysokohorskú turistiku v lavínovom teréne, by mal do svojej výstroje pribaliť aj lavínové vybavenie. To sa skladá z lavínového vyhľadávača, sondy a lavínovej lopaty. Táto výbava vám nezabezpečí, že sa lavíne vyhnete, to musíte zabezpečiť svojimi schopnosťami a predvídaním. Pomôže vám však, ak sa do nej dostanete. Dôležité je však nielen ju mať, ale aj vedieť ju používať. Pri zasypaní lavínou je totiž dôležitá každá sekunda.'),
('hiking', 'hikingHelp.jpg', 'Volanie pomoci','18 300, to je číslo, ktoré by mal poznať každý turistika v horách. Ide o tiesňovú linku Horskej záchrannej služby.'),
('hiking', 'hikingHelp1.jpg', 'Volanie pomoci','Pri tiesňovom hovore nezabudnite ako prvé uviesť, kde sa nachádzate. Ďalej popíšte, čo sa stalo, aké sú zranenia, koľko osôb si vyžaduje pomoc a nadiktujte svoje údaje.'),
('hiking', 'hikingHelp2.jpg', 'Volanie pomoci','Ak sa dostanete na miesto, kde nebudete mať u svojho operátora signál a nebudete ho ani vedieť v okolí nájsť, máme pre vás praktický tip. Vyskúšajte vypnúť a zapnúť svoj mobil a namiesto PIN-u zadajte 112. Môžete mať signál u iného operátora a tak možnosť uskutočniť núdzový hovor na 112-ku.'),
('hiking', 'hikingHelp3.jpg', 'Volanie pomoci','Operátori HZS sú už zvyknutí na hocičo a vedia, že v mnohých prípadoch je problémom aj míňajúca sa batéria telefónu. Preto ich prvá otázka po spojení znie: „Dobrý deň, kde sa, prosím, nachádzate?“.'),
('hiking', 'hikingM.jpg', 'Poistenie na hory','Určite výhodnou výbavou turistu v horách je aj správne poistenie. Ide síce o preventívne opatrenie, ale ak sa niečo stane, môže vám ušetriť nemalé peniaze.'),
('hiking', 'hikingM1.jpg', 'Poistenie na hory','Zásah horskej záchrannej služby je totiž rozdelený na poskytnutie zdravotnej starostlivosti a technický zásah. Na zdravotnú starostlivosť máte nárok za svojho zdravotného poistenia, technický zásah však musíte hradiť vy alebo, v prípade, že ste mysleli aj na poistenie na hory, vaša poisťovňa.'),
('hiking', 'hikingM2.jpg', 'Poistenie na hory','Môže ísť o vyhľadávanie, vyslobodzovanie osôb v tiesni, poskytovanie prvej pomoci v teréne, preprava k najbližšiemu zdravotníckemu zariadeniu alebo dopravnému prostriedku, prípadne prevoz telesných pozostatkov. Keďže v takýchto prípadoch býva bežné aj využitie záchranárskeho vrtuľníka, náklady sa môžu vyšplhať až na tisícky eur. Preto sa určite poistenie na hory oplatí uzatvoriť. Navyše, ak plánujete zdolávať slovenské ferraty, tam je poistenie povinné.')
;
/*product properties*/
CREATE TABLE product_properties
(
	id_product INT,
    text TEXT(50000),
    title VARCHAR(100)
)
ENGINE=INNODB
;
/*product properties data*/
INSERT INTO product_properties(id_product, text, title)
VALUES
(1, 'Vojenská certifikácia mil-std-810g vydrží v hlbke 100m fungovať bez problémov po dobu 18 hodín a odolnosť voči pádu do 8 metrov.', 'Vodeodolnosť do 100m'),
(1, 'V prípade nepriaznivého počasia budete včas varovaný. Dáta sú zbierané priamo zo satelitov každé 2 minúty.', 'Varovanie pred nepriaznivým počasím'),
(1, 'Batéria s kapacitou 600 mAh, vydrží na jedno nabitie 1 mesiac. Je to dosiahnuté aj použitím úsporných čipov. Odporúčané rozmedzi teplôt je od -40°C do 80°C', '1 mesiace na jedno nabitie'),
(1, 'Prostredníctvom tohto zariadenia vás horská služba môže ľahšie nájsť. Nezáleží na tom či spadla lavína, ste hlboko v lese, vďaka vysoko presným čipom od sony vás záchranári nájdu všade. !!Je potrebné si zakúpiť aj aktivačný čip, viac informácii na stránke horskej služby!!', 'Funkcia horskej služby'),
(2, 'Vojenská certifikácia mil-std-810g vydrží v hlbke 200m fungovať bez problémov po dobu 18 hodín a odolnosť voči pádu do 8 metrov.', 'Vodeodolnosť do 200m'),
(2, 'V prípade nepriaznivého počasia budete včas varovaný. Dáta sú zbierané priamo zo satelitov každé 2 minúty.', 'Varovanie pred nepriaznivým počasím'),
(2, 'Batéria s kapacitou 600 mAh, vydrží na jedno nabitie 2 mesiace. Je to dosiahnuté aj použitím úsporných čipov. Odporúčané rozmedzi teplôt je od -40°C do 80°C', '2 mesiace na jedno nabitie'),
(2, 'Vďaka odľahčenému púzdru vyrobeného z polykarbonátu bolo možné dosiahnúť nízku hmotnosť, ktorú ani nepocítite.', 'Hmotnosť len 43 gramov'),
(2, 'Prostredníctvom tohto zariadenia vás horská služba môže ľahšie nájsť. Nezáleží na tom či spadla lavína, ste hlboko v lese, vďaka vysoko presným čipom od sony vás záchranári nájdu všade. !!Je potrebné si zakúpiť aj aktivačný čip, viac informácii na stránke horskej služby!!', 'Funkcia horskej služby')
;
/*product color and size*/
CREATE TABLE product_color_size
(
	id_product INT,
    size VARCHAR(3),
    color VARCHAR(12)
)
ENGINE=INNODB
;
/*product color size data*/
INSERT INTO product_color_size
VALUES
(1, '40x55mm', 'čierna'),
(2, '40x55mm', 'čierna'),
(3, 'S', 'biela'),
(3, 'M', 'biela'),
(3, 'L', 'biela'),
(3, 'XL', 'biela'),
(3, 'XXL', 'biela'),
(4, 'S', 'čierna'),
(4, 'M', 'čierna'),
(4, 'L', 'čierna'),
(4, 'XL', 'čierna'),
(4, 'XXL', 'čierna'),
(5, '54-58cm', 'čierna'),
(5, '54-60cm', 'čierna')
;
/*favorite articles*/
CREATE TABLE favArticles
(
	id_user INT,
    article_id INT
)
ENGINE=INNODB
;