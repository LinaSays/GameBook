-- Adminer 4.7.1 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  `description` tinytext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `category` (`id`, `name`, `image`, `description`) VALUES
(1,	'Heroïc Fantasy',	'https://i.imgur.com/croWORO.jpg',	'Vos pouvoirs n\'ont comme limites que celles de votre imagination. Affrontez vos peurs, dominez la magie qui vous entoure mais attention à en sortir vivant sinon tout cela n\'aura été pour rien...'),
(2,	'Contes pour enfants',	'https://i.imgur.com/Qpz3IxL.jpg',	'Il est l\'heure de partir visiter le monde de l\'imagination, pour cela il est conseillé de se munir de sa plus belle voix de narrateur et d\'arriver à tenir en haleine c\'est chères têtes blondes.'),
(3,	'Polar',	'https://i.imgur.com/lLHSVLi.jpg',	'Enquêtes, crimes, suspicions et trahisons peuplent ce sombre univers. Temps pour vous de vous faufiler dans la peau d\'un détective hors pair si vous voulez avoir une chance de résoudre ces mystères.'),
(4,	'Science Fiction',	'https://i.imgur.com/2yyGZAM.jpg',	'Le futur vous entoure et il est devenu votre présent. Aventures aux confins de l\'espace et de l\'espèce, les limites de vos possibilités s\'amenuisent grâce aux dernières avancées technologiques.'),
(5,	'Horreur',	'https://i.imgur.com/JgiShXY.jpg',	'Aucune idée de ce qui se trouve derrière cette porte, peu de gens en sont revenus. Entrez à vos risques et périls.')
ON DUPLICATE KEY UPDATE `id` = VALUES(`id`), `name` = VALUES(`name`), `image` = VALUES(`image`), `description` = VALUES(`description`);

DROP TABLE IF EXISTS `choice`;
CREATE TABLE `choice` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `text` text NOT NULL,
  `id_situation_parent` int(10) unsigned NOT NULL,
  `id_situation_child` int(10) unsigned DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_situation_parent` (`id_situation_parent`),
  KEY `id_situation_child` (`id_situation_child`),
  CONSTRAINT `choice_ibfk_1` FOREIGN KEY (`id_situation_parent`) REFERENCES `situation` (`id`) ON DELETE CASCADE,
  CONSTRAINT `choice_ibfk_2` FOREIGN KEY (`id_situation_child`) REFERENCES `situation` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `choice` (`id`, `text`, `id_situation_parent`, `id_situation_child`, `created_at`, `updated_at`) VALUES
(1,	'Temps d’en savoir plus, vous avancez.',	1,	2,	'2019-10-24 09:00:20',	NULL),
(2,	'L’émotion vous submerge et vous faites demi-tour.',	1,	8,	'2019-10-24 09:00:57',	NULL),
(3,	'Alina à la chevelure couleur renard des bois peut vous apporter certaines réponses.',	2,	3,	'2019-11-02 22:01:51',	NULL),
(4,	'Baptiste, au sourire doux tel celui du panda, peut satisfaire une partie de votre curiosité.',	2,	4,	'2019-10-24 09:01:33',	NULL),
(5,	'Ismaël avec son regard perçant, tel celui d\'un hibou, montre qu\'il couve des secrets susceptibles de vous intéresser.',	2,	5,	'2019-11-02 21:43:29',	NULL),
(6,	'Christian, mastiquant comme une chèvre un bout de réglisse, semble être prêt à partager quelques informations avec vous.',	2,	6,	'2019-11-02 21:58:42',	NULL),
(7,	'Vous êtes toujours intrigué(e), peut-être que de parler à un autre sage est une bonne idée. ',	3,	2,	'2019-10-24 09:02:21',	NULL),
(8,	'Vous avez maintenant toutes les informations nécessaires, vous souhaitez sortir du Temple du savoir.',	3,	7,	'2019-10-24 09:02:37',	NULL),
(9,	'Vous êtes toujours intrigué(e), peut-être que de parler à un autre sage est une bonne idée.',	4,	2,	'2019-10-24 09:03:00',	NULL),
(10,	'Vous avez maintenant toutes les informations nécessaires, vous souhaitez sortir du Temple du savoir.',	4,	7,	'2019-10-24 09:03:15',	NULL),
(11,	'Vous êtes toujours intrigué(e), peut-être que de parler à un autre sage est une bonne idée.',	5,	2,	'2019-10-24 09:03:34',	NULL),
(12,	'Vous avez maintenant toutes les informations nécessaires, vous souhaitez sortir du Temple du savoir.',	5,	7,	'2019-10-24 09:03:47',	NULL),
(13,	'Vous êtes toujours intrigué(e), peut-être que de parler à un autre sage est une bonne idée. ',	6,	2,	'2019-10-24 09:04:01',	NULL),
(14,	'Vous avez maintenant toutes les informations nécessaires, vous souhaitez sortir du Temple du savoir.',	6,	7,	'2019-10-24 09:04:22',	NULL),
(15,	'Vous êtes paré(e) pour créer votre compte ici afin de pouvoir profiter de plus d’histoires à lire et qui sait pourquoi ne pas écrire la vôtre. Retournez à l\'accueil.',	7,	NULL,	'2019-11-02 21:11:46',	NULL),
(16,	'Pendant que vous avez les neurones bien échauffés vous aimeriez bien tester une histoire pour goûter un peu plus à ce concept aventureux ! Retournez à l\'accueil.',	7,	NULL,	'2019-11-02 21:11:39',	NULL),
(17,	'Allez cette fois-ci sera la bonne, vous êtes mieux concentré(e) et paré(e) à apprendre les secrets que referme ce temple.',	8,	2,	'2019-10-24 09:05:27',	NULL),
(18,	'Avant de partir, il serait sage d’aller prendre un godet à la taverne pour prévenir les autres de votre départ.',	9,	14,	'2019-10-24 09:07:55',	NULL),
(19,	'Direction plein ouest puis au nord des pâturages.',	9,	10,	'2019-10-24 09:08:12',	NULL),
(20,	'Il est tard, un petit somme pour vous requinquer est une sage idée.',	9,	15,	'2019-10-24 09:08:40',	NULL),
(21,	'Si vous souvenirs sont bons, le donjon se trouve à l’est de cette forêt. Il serait sage de rester à la lisière pour la contourner et arriver à l’est.',	10,	11,	'2019-10-24 09:09:05',	NULL),
(22,	'Vous avez décidé que votre nom de héros sera « Le Hardi » et vous foncez tête baissée dans la forêt.',	10,	12,	'2019-10-24 09:10:03',	NULL),
(23,	'C’est dommage quand même d’être parti sans être sûr que les gens de la taverne aient compris que vous partiez à l’aventure.',	10,	14,	'2019-10-24 09:10:40',	NULL),
(24,	'D’après vos savants calculs vous devez être à l’est de la forêt et le donjon doit être droit devant vous',	11,	12,	'2019-10-24 09:11:02',	NULL),
(25,	'Il fait vachement sombre quand même, peut-être que c’est une aventure à mener de jour. En plus vous commencez d’avoir des courbatures suite à votre démarche de crabe. Du repos, bien mérité, serait une sage décision.',	11,	15,	'2019-10-24 09:11:28',	NULL),
(26,	'Dans la panique, vous vous souvenez d’avoir oublié de fermer à clé votre maison, et dans cet instant précis il vous semble plus urgent de partir rapidement, en courant tête baissée, avant qu’on ne vous cambriole.',	12,	17,	'2019-10-24 09:12:06',	NULL),
(27,	'Ni d’une ni deux, vos réflexes de berges émérites prennent le dessus, votre bâton part en arc de cercle pour taper cette sombre forme.',	12,	13,	'2019-10-24 09:12:46',	NULL),
(28,	'Sans bâton, à bout de souffle et avec des morceaux de champignons plein les poches, vous décidez de rentrer pour revenir demain avec un nouveau bâton.',	13,	15,	'2019-10-24 09:13:08',	NULL),
(29,	'Et bien tant pis pour eux, quand vous reviendrez couvert de gloire, ils ne pourront plus nier l’évidence de votre succès.',	14,	10,	'2019-10-24 09:14:07',	NULL),
(30,	'Ce repère est rempli de pleutres. Ils ne mesurent pas encore votre gloire. Tant pis pour eux. Allons dormir.',	14,	15,	'2019-10-24 09:14:36',	NULL),
(31,	'L’aventure n’a plus de secret pour vous, vous avez pondéré tous vos choix et nul doute, vous êtes fait pour affronter ce donjon. ',	15,	10,	'2019-10-24 09:14:53',	NULL),
(32,	'Non mais en y pensant bien, ces abrutis à la taverne n’ont rien compris, on va leur donner une deuxième chance de réaliser la grandeur de votre futur exploit.',	15,	14,	'2019-10-24 09:15:06',	NULL),
(33,	'Mince, mais en y pensant bien, partir à l’aventure en pleine saison des fromages, avec la foire de Casternac qui approche, c’est une folie financière. Non, non, le donjon attendra l’après-saison.',	15,	16,	'2019-10-24 09:15:23',	NULL),
(34,	'D’aller au magasin de jouets',	18,	19,	'2019-10-24 09:16:00',	NULL),
(35,	'De regarder dans mon coffre à jouets pour lui trouver le plus beau et partir directement',	18,	21,	'2019-10-24 09:16:27',	NULL),
(36,	'De lui faire un très joli dessin',	18,	20,	'2019-10-29 20:35:36',	NULL),
(37,	'Un jeu de société pour s’amuser tous ensemble',	19,	21,	'2019-10-24 09:17:44',	NULL),
(38,	'Une peluche avec qui Charlotte pourra s’endormir et faire de beaux rêves',	19,	21,	'2019-10-24 09:18:19',	NULL),
(39,	'Nous pouvons aussi retourner à la maison et lui faire un dessin',	19,	20,	'2019-10-24 09:18:34',	NULL),
(40,	'Un beau bouquet de fleurs',	20,	21,	'2019-10-24 09:18:56',	NULL),
(41,	'Un dessin de nous tous ensemble',	20,	21,	'2019-10-24 09:19:11',	NULL),
(42,	'Un ciel plein d’étoiles',	20,	21,	'2019-10-24 09:19:25',	NULL),
(43,	'A gauche, c’est le chemin le plus court',	21,	24,	'2019-10-24 09:20:20',	NULL),
(44,	'Tout droit, le chemin est plus long mais nous sommes sûrs d’y arriver',	21,	22,	'2019-10-24 09:20:46',	NULL),
(45,	'A droite, dans la forêt',	21,	23,	'2019-10-24 09:21:08',	NULL),
(46,	'Le chemin le plus court à gauche',	22,	24,	'2019-10-24 09:21:32',	NULL),
(47,	'Le chemin à droite dans la forêt',	22,	23,	'2019-10-24 09:21:56',	NULL),
(48,	'Oui, avec plaisir !',	23,	25,	'2019-10-24 09:22:34',	NULL),
(49,	'Non, elle n’a pas été invité, Charlotte risque de ne pas être contente. ',	23,	26,	'2019-10-24 09:23:02',	NULL),
(50,	'Partir dans la forêt',	24,	23,	'2019-10-24 09:23:17',	NULL)
ON DUPLICATE KEY UPDATE `id` = VALUES(`id`), `text` = VALUES(`text`), `id_situation_parent` = VALUES(`id_situation_parent`), `id_situation_child` = VALUES(`id_situation_child`), `created_at` = VALUES(`created_at`), `updated_at` = VALUES(`updated_at`);

DROP TABLE IF EXISTS `pins`;
CREATE TABLE `pins` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `image` varchar(128) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `pins` (`id`, `name`, `image`) VALUES
(1,	'1 histoire écrite',	'https://image.flaticon.com/icons/svg/138/138716.svg'),
(2,	'5 histoires lues',	'https://image.flaticon.com/icons/svg/138/138714.svg'),
(3,	'50h de lecture',	'https://image.flaticon.com/icons/svg/138/138724.svg'),
(4,	'10 histoires aimées',	'https://image.flaticon.com/icons/svg/138/138709.svg'),
(5,	'Profil créé',	'https://image.flaticon.com/icons/svg/138/138706.svg'),
(6,	'Membre Silver',	'https://image.flaticon.com/icons/svg/1426/1426734.svg'),
(7,	'Membre Gold',	'https://image.flaticon.com/icons/svg/1426/1426735.svg')
ON DUPLICATE KEY UPDATE `id` = VALUES(`id`), `name` = VALUES(`name`), `image` = VALUES(`image`);

DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `role` (`id`, `name`) VALUES
(1,	'reader'),
(2,	'author'),
(3,	'admin')
ON DUPLICATE KEY UPDATE `id` = VALUES(`id`), `name` = VALUES(`name`);

DROP TABLE IF EXISTS `situation`;
CREATE TABLE `situation` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `text` text NOT NULL,
  `recap` varchar(255) NOT NULL,
  `image` varchar(128) DEFAULT NULL,
  `color` varchar(7) DEFAULT NULL,
  `story_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `story_id` (`story_id`),
  CONSTRAINT `situation_ibfk_4` FOREIGN KEY (`story_id`) REFERENCES `story` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `situation` (`id`, `text`, `recap`, `image`, `color`, `story_id`, `created_at`, `updated_at`) VALUES
(1,	'Bravo vous venez de faire un excellent choix en décidant de parcourir cette mini-aventure qui passera en revue toutes nos fonctionnalités afin de vous éclairer sur le concept de ce site. C’est fort astucieux, n’est-ce pas ?\r\nMais trêve de bla-bla, en route !\r\nVotre quête du savoir vous a amené devant les portes imposantes du Temple du savoir. Vous poussez difficilement les lourds battants pour vous faufiler dans le temple. Après avoir erré(e) entre les colonnes lovées dans la douce pénombre, vous voyez quatre silhouettes de sages qui se dessinent à la vague lueur d’une torche. Ils sont tous assis dans la position du lotus, occupés à méditer.',	'début de la FAQ',	'https://i.imgur.com/d1tUMm9.jpg',	'#e9fadd',	1,	'2019-11-02 20:24:13',	NULL),
(2,	'Devant vous, les quatre sages méditent tout en en attendant vos questions…',	'temple du savoir',	'https://i.imgur.com/5BXwKbS.jpg',	'#b8e4c9',	1,	'2019-11-02 20:53:17',	NULL),
(3,	'Vous avancez vers Alina et à votre approche, elle se lève tout en laissant ses cheveux de feu cascader sur ses épaules. Sans attendre votre question, elle annonce d’une voix voilée d’un léger accent :\r\n« Ce site reprendre le plaisir de la découverte au travers de la lecture d’antan. Vous avez plusieurs types d’histoires, chacune d’entre elles renferment des mystères que vous devrez déjouer avec des choix pertinents au moment opportun. Ainsi vous naviguerez d’étapes en étapes au milieu du labyrinthe des possibilités qui se niche dans chacun de ces choix. Chaque histoire est différente, chaque choix la rendre unique ! »\r\nAvant d’avoir une chance de poser votre question, elle se rassoie et reprend sa méditation.',	'Alina chevelure de feu',	'https://i.imgur.com/ZK9dRl1.jpg',	'#89a4c7',	1,	'2019-11-02 21:56:50',	NULL),
(4,	'Son sourire s’élargit et alors qu’il lève la main pour vous signaler une halte, votre question se meurt dans votre gorge. D’une voix douce il annonce :\r\n« Vous avez besoin de faire un compte et une fois votre profil complété vous aurez ainsi accès à toutes nos histoires que ce site recueille. Chaque histoire est rangée dans une catégorie, et chaque catégorie contient plusieurs histoires. Votre profil vous aidera à suivre quelles histoires vous avez lus et lesquelles vous êtes en train de lire. »\r\nSon sourire se détend et il reprend sa pose de méditation.',	'Baptiste le panda',	'https://i.imgur.com/76lLt0g.jpg',	'#cdd5e0',	1,	'2019-11-02 20:58:38',	NULL),
(5,	'Grâce à l’agilité digne d’un félin, il se dresse rapidement pour vous présenter une toge dépourvu de plis froissés. D’une voix calme il vous raconte ceci :\r\n« Quand vous sélectionnez une histoire pour la lire, après un rapide de texte de mise en situation, vous serez vite confronter à des choix, selon la justesse de ce choix, votre avenir peut s’éclaircir ou s’assombrir. Comme dans la vraie vie, il ne sera pas possible de revenir en arrière, il faudra porter la lourde responsabilité de chaque choix. Attention à adapter vos choix selon l’histoire que vous lisez, une histoire d’enquête policière vous demandera d’être réceptif aux indices alors qu’une histoire d’aventure fantastique peut vous demander un peu de témérité pour connaître le succès. Il n’y a pas de bonnes ni de mauvaises réponses, juste des choix à faire ! »\r\nAvec aisance et délicatesse, il guide sa toge pour qu’elle l’enveloppe parfaitement lorsqu’il se rassoie.',	'Ismaël l’apprêté',	'https://i.imgur.com/LfkUmXG.jpg',	'#f1d4d4',	1,	'2019-11-02 21:45:09',	NULL),
(6,	'Alors que vous vous avancez vers lui, vous remarquez qu’il se lève péniblement pour vous toiser du regard. Il s’éclaircit la gorge d’un râle rauque et part dans sa tirade sans s’assurer que vous l’écoutez.\r\n« Une fois que vous avez vécu pas mal d’histoires ici, vous serez peut-être enclin à créer et mettre en scène les vôtres. Depuis votre page profil c’est tout à fait possible ! Néanmoins, attention rédiger une histoire n’est pas une chose facile. Il faudra s’organiser et s’armer de patience. Bien entendu, nous avons fait de notre mieux pour vous aider dans la création de votre histoire. Vous disposez d’une vue de rédaction et d’une vue de type architecture pour vous montrer là où vous en êtes dans votre récit. Pensez bien que chaque chapitre d’histoire devra posséder ses choix et que chaque choix doit déboucher sur un chapitre existant ou qui sera bientôt créé. L’organisation et l’imagination sont la clé du succès par ici. »',	'Christian le blanc',	'https://i.imgur.com/QHvpC03.jpg',	'#f5b17b',	1,	'2019-11-02 21:55:20',	NULL),
(7,	'Bravo, grâce à vos neurones affutés vous avez tout saisi. Et vous l’avez fait avec une prestance rarement vue ! Notre site n’a plus aucun secret pour vous. Ses moindres recoins vous sont dorénavant familiers. Vous vous inclinez révérencieusement devant les quatre sages et alors que vous vous apprêtiez à faire demi-tour pour sortir du temple, une intuition vous retient !\r\nEn effet, il vous reste un choix définitif à faire à faire avant de quitter le Temple du savoir.',	'le grand final',	'https://i.imgur.com/Hi76yGp.jpg',	'#f1d4d4',	1,	'2019-11-02 21:14:41',	NULL),
(8,	'Alors on ne va pas vous mentir mais visiblement il y a deux, trois petits détails qui vous ont échappés suite à cette décision précipitée, il serait plus sage de recommencer pour corriger le tir.',	'refaire un tour',	'https://i.imgur.com/Qzdqsgm.jpg',	'#f5b17b',	1,	'2019-11-02 20:47:21',	NULL),
(9,	'Vous regardez vos chèvres brouter l\'herbe de votre pré et soudainement votre quotidien de berger vous étouffe. Il est temps de changer quelque chose dans votre vie ! Vous lorgnez désormais sur une vie plus palpitante et plus riche en émotions.\r\nLa quête de gloire s’étant maintenant installée dans votre esprit d’une manière déterminée, il faut voir comment la concrétiser. Et si possible d’une manière point trop risquée car une renommée en étant mort limiterait grandement les retombées positives pour vous…\r\nAprès avoir descendu quelques verres pour trouver l’inspiration, une bribe de conversation avec le vieux du village vous revient en tête. Il mentionnait un ancien donjon perdu au milieu de la forêt abandonnée qui se trouve au-delà des pâturages au nord.\r\nCe donjon vous semble être un excellent point de départ pour assouvir cette nouvelle soif de gloire.\r\nEn route !\r\nVotre sac de voyage est rempli d’une gourde d’eau et d’une outre de vin, deux saucissons et un pain aussi dur que du bois. Vous avez votre bâton de berger, un couteau qui fait trembler tous les saucissons des environs et un sac d\'amadou pour faire du feu.\r\nVous voilà paré pour le donjon !',	'le début de tout',	'https://i.imgur.com/D1px8Yh.jpg',	'#f5b17b',	2,	'2019-11-02 22:17:15',	NULL),
(10,	'Bon finalement partir si tard avec déjà quelques verres déjà enquillés n’était pas une si riche idée, mais trop tard, vous êtes lancé ! Les pâturages sont là, vous dansez avec les piètres qualités d’un ivrogne pour éviter d’écraser le plus de courges possibles.\r\nLa forêt sombre et abandonnée se dresse devant vous !\r\n',	'direction pâturages',	'https://i.imgur.com/OfcNpG2.jpg',	'#e9fadd',	2,	'2019-11-02 22:46:44',	NULL),
(11,	'Vous marchez en crabe, les yeux toujours rivés sur la forêt. Personne ne vous surprendra ainsi ! Bon certes, question style celui de héros en prend un coup et vous n’avancez pas vite, mais un héros prudent et un héros qui dure.',	'la lisière de la forêt',	'https://i.imgur.com/0fPtDPs.jpg',	'#f5b17b',	2,	'2019-11-02 22:51:12',	NULL),
(12,	'C’est fou ce qu’il y a comme branches dans une forêt. Le vieux a sûrement dû oublier de le mentionner. Il est dur pour tout aventurier d’avoir des informations fiables de nos jours. Vous avez péniblement dans cette forêt tenace qui accroche vos vêtements et cheveux à la moindre opportunité.\r\nMais quel est cette sombre forme qui se dresse derrière ce gros chêne ?',	'les branches de la forêt',	'https://i.imgur.com/Xubulgo.jpg',	'#cdd5e0',	2,	'2019-11-02 22:49:43',	NULL),
(13,	'Mais quelle dextérité ! Vous enchainez les coups avec un brio et une justesse tactique qui laisseraient pantois bon nombre de bergers. Les coups s’enchainent jusqu’à ce que votre bâton se rompe !\r\nVous distinguez tant bien que mal votre cible dans la pénombre. Mais on dirait que vous avez abattu et massacré avec vigueur un gros champignon qui poussait sur le tronc de l’arbre.',	'combat contre un champignon',	'https://i.imgur.com/v0w4Il0.jpg',	'#b8e4c9',	2,	'2019-11-02 23:01:38',	NULL),
(14,	'Avec un bon coup de pied dans la porte de la taverne vous avez l’attention de tout le monde à l’intérieur. Vous soutenez leurs regards fièrement et laissez ce silence accrocheur prendre de son ampleur.\r\nPuis d’une voix déterminée vous annoncez que vous comptez aller chercher le trésor du donjon au nord.\r\nBon, l’effet escompté n’est pas au rendez-vous… Certains se retournent pour reprendre leurs conversations entamées avant votre arrivée, d’autres continuent de poser leur regard moqueur sur vos épaules. Vous avez une impression de déjà-vu.',	'entrée de la taverne',	'https://i.imgur.com/01NL5TL.jpg',	'#f1d4d4',	2,	'2019-11-02 22:35:00',	NULL),
(15,	'Il n’y a nul doute, se gorger de sommeil réparateur est une excellente idée. On n’a jamais entendu parler d’un héros fatigué, voyons !\r\nAu réveil, après une nuit remplie de rêves peuplés de monstres, trésors maudits et d’un inquiétant seigneur drapé d’ombres, vous découvrez que votre ardeur d’aventurier flageole un peu. La forêt, la forêt… bon ça c’est des arbres, cela reste jouable pour votre instinct de berger redoutable. Par contre, du donjon, ça c’est du tout nouveau pour vous.\r\nVa peut-être falloir déboucher la bouteille de gnole pour vous aider à réfléchir.',	'l’heure de dormir',	'https://i.imgur.com/aHKkyBk.jpg',	'#f5b17b',	2,	'2019-11-02 23:22:08',	NULL),
(16,	'Mes aïeux, cette foire de Casternac ! Quel succès ! Votre nouveau fromage de chèvre aux herbes a su ravir les palets des riches de la ville. Vous n’avez jamais eu autant de succès. Votre trésor était là, depuis le début, sous vos yeux, c’est juste qu’il sentait le fromage…',	'foire de Casternac',	'https://i.imgur.com/jbpk8Sp.jpg',	'#b8e4c9',	2,	'2019-11-02 23:10:51',	NULL),
(17,	'On conte dans une taverne d’un petit village au doux fumet ambiant de fromage de chèvres, qu’un brave berger aurait succombé au donjon mystérieux de la forêt car après avoir harangué la foule d’une taverne celui-ci ne fut plus jamais vu !',	'c’est la fin d’une vie',	'https://i.imgur.com/KRjeZxA.jpg',	'#f1d4d4',	2,	'2019-11-02 22:58:15',	NULL),
(18,	'Hello moi c’est Coco le lapin. Je cherche un cadeau pour Charlotte. Il faut à tout prix que j’en trouve un avant d’aller chez elle cet après-midi. Avec Hugo mon ami l’âne, nous ne savons pas quoi lui offrir.\r\nAs-tu une idée ? Je te propose pour t’aider :',	'choix du cadeau',	'https://i.imgur.com/2shiOoT.jpg',	'#e9fadd',	3,	'2019-11-03 13:54:53',	NULL),
(19,	'Waouh ! Ce magasin est gigantesque ! Il y a des figurines de ses héros préférés, des jeux à faire entre amis, des ballons… Tellement de choix !\r\nQu’en penses-tu ? Devons-nous plutôt prendre :',	'le magasin de jouets',	'https://i.imgur.com/TUtSbWZ.jpg',	'#b8e4c9',	3,	'2019-11-03 13:37:51',	NULL),
(20,	'Regarde sous mon bureau, j’ai plein de crayons de couleurs différentes pour réaliser un magnifique dessin. Mais d’abord, que veux-tu que nous réalisions ?',	'la réalisation du dessin',	'https://i.imgur.com/7wK0AGV.jpg',	'#89a4c7',	3,	'2019-11-03 13:39:25',	NULL),
(21,	'L’heure du départ a sonné ! Hugo l’âne part avec nous. Charlotte habite de l’autre côté de la forêt. Il faut à tout prix que nous la traversions avant l’heure du repas pour ne pas arriver en retard. Prenons le temps de réfléchir… A ton avis, quel chemin mène chez Charlotte ?',	'L’heure du départ',	'https://i.imgur.com/letk41a.jpg',	'#89a4c7',	3,	'2019-11-03 13:41:02',	NULL),
(22,	'Oh non ! Un arbre a chuté et il bloque la route ! Nous ne pouvons plus continuer. Nous sommes obligés de revenir sur nos pas. A l’intersection, il nous reste à choisir entre :',	'un obstacle au milieu de la route',	'https://i.imgur.com/WAvrjr4.jpg',	'#f1d4d4',	3,	'2019-11-03 13:43:41',	NULL),
(23,	'Oh oh ! J’ai l’impression d’avoir entendu Nala le singe. Nala est vraiment très rapide et curieuse. Ça ne m’étonnerait pas qu’elle nous suive depuis le début.\r\n« Salut Hugo ! Salut Coco ! Où allez-vous comme ça ? »\r\n« Nous partons à l’anniversaire de Charlotte ! »\r\n« Oh trop chouette ! Je peux venir avec vous ? »\r\nC’est à toi de décider : est-ce que Nala peut venir avec nous à l’anniversaire de Charlotte ?',	'La rencontre avec Nala',	'https://i.imgur.com/5K8poL2.jpg',	'#89a4c7',	3,	'2019-11-03 13:45:41',	NULL),
(24,	'Oh non ! Un énorme trou s’est créé ici. Avec la pluie qui est tombée hier, il est tout inondé. Impossible de passer de ce côté, nous ferions mieux de faire demi-tour.',	'Le gros trou',	'https://i.imgur.com/cRg6TZJ.jpg',	'#b8e4c9',	3,	'2019-11-03 13:47:38',	NULL),
(25,	'YOUPIIIIIIIIIIIIIII !! Nous avons réussi ! Nous sommes arrivés chez Charlotte ! Elle était ravie de voir Nala !\r\nJe te remercie de m’avoir aidé à aller chez elle, maintenant nous pouvons nous amuser. Elle adore son cadeau, tu as très bien choisi, félicitations !!\r\nJ’espère te revoir très vite pour m’amuser avec toi !',	'notre arrivée avec Nala',	'https://i.imgur.com/DO806Wq.jpg',	'#89a4c7',	3,	'2019-11-03 13:49:29',	NULL),
(26,	'YOUPIIIIIIIIIIIIIII !! Nous avons réussi ! Nous sommes arrivés chez Charlotte !\r\nJe te remercie de m’avoir aidé à aller chez elle, maintenant nous pouvons nous amuser. Elle adore son cadeau, tu as très bien choisi, félicitations !!\r\nJ’espère te revoir très vite pour m’amuser avec toi !',	'notre arrivée sans Nala',	'https://i.imgur.com/qx7bIEx.jpg',	'#e9fadd',	3,	'2019-11-03 13:49:38',	NULL),
(27,	'Je veux plus écrire ce livre',	'Chapter 777',	NULL,	NULL,	20,	'2019-11-03 19:20:28',	NULL),
(29,	'Je suis pas fatiguée',	'Chapter 12',	NULL,	NULL,	20,	'2019-11-03 19:04:07',	NULL)
ON DUPLICATE KEY UPDATE `id` = VALUES(`id`), `text` = VALUES(`text`), `recap` = VALUES(`recap`), `image` = VALUES(`image`), `color` = VALUES(`color`), `story_id` = VALUES(`story_id`), `created_at` = VALUES(`created_at`), `updated_at` = VALUES(`updated_at`);

DROP TABLE IF EXISTS `story`;
CREATE TABLE `story` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `author_id` int(10) unsigned NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` tinytext NOT NULL,
  `image` varchar(128) DEFAULT NULL,
  `published` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `author_id` (`author_id`),
  CONSTRAINT `story_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `story` (`id`, `author_id`, `title`, `description`, `image`, `published`, `created_at`, `updated_at`) VALUES
(1,	1,	'Découvrez le concept dans le concept',	'Nous allons tenter de vous éclairer sur ce mystérieux site Web fraîchement sorti des limbes\r\nd’internet. Mais qu’est-ce donc ? Que fait-il ? Sautez dans l’aventure de la découverte\r\nde notre concept pour en comprendre toutes les subtilités !',	'https://i.imgur.com/4qTIDc0.jpg',	1,	'2019-11-02 19:55:33',	NULL),
(2,	1,	'Berger un jour, berger toujours',	'Ayant marre de garder vos chèvres, de mouler vos fromages et de passer vos soirées à la taverne du\r\nvillage à écouter les mêmes vieilles histoires tourner en boucle, vous décidez qu’il est temps pour\r\nvous de bousculer votre quotidien !',	'https://i.imgur.com/wiDAbQy.jpg',	1,	'2019-11-02 22:37:24',	NULL),
(3,	1,	'L’anniversaire de Charlotte la marmotte',	'Hello ! Moi c’est Coco le lapin !\r\nAujourd’hui nous allons vivre ensemble l’anniversaire de mon amie Charlotte ! Tu es prêt ? Allons-y !',	'https://i.imgur.com/Ccm8JSt.jpg',	1,	'2019-11-03 13:31:14',	NULL),
(4,	2,	'La guerre des clans',	'Dans un village des temps anciens où l\'harmonie règne depuis des lustres, la soif de pouvoir vient créer des troubles et risque de tout changer pour toujours sauf si vous arrivez à faire déjouer certains plans.',	'https://i.imgur.com/oaKISMO.jpg',	1,	'2019-11-02 22:37:24',	NULL),
(5,	2,	'La forge maudite',	'Des armes plus maléfiques les unes que les autres commencent à répandre la terreur à travers les terres de l\'ouest... Stopper le forgeron qui les fabrique est votre mission.',	'https://i.imgur.com/Cfn9JLz.jpg',	1,	'2019-11-03 11:58:14',	NULL),
(6,	1,	'L\'ermite',	'La légende du vieil ermite hante vos pensées depuis plusieurs années. Et si cet ermite existait bel et bien ? Il serait la clé à tous vos soucis...',	'https://i.imgur.com/D8h7R9U.jpg',	1,	'2019-11-02 22:37:24',	NULL),
(7,	1,	'Le chevalier fou',	'Perclus de douleurs et rendu fou par la perte de son fils, un chevalier sème la terreur sur son domaine. Serez-vous assez brave pour l\'affronter ?',	'https://i.imgur.com/bN1nMtz.jpg',	1,	'2019-11-02 22:37:24',	NULL),
(8,	1,	'L\'épée de pouvoir',	'L\'heure est venue de la trouver et d\'affronter tout ce qui se trouve sur son passage avant que votre ennemi juré, le redoutable Sire Gradburg, ne la trouve.',	'https://i.imgur.com/0lwiwf8.jpg',	1,	'2019-11-02 22:37:24',	NULL),
(9,	1,	'Brûle, brûle.',	'Des incendies criminels ravagent votre ville depuis maintenant plus de 2 semaines et le coupable court toujours. Temps pour vous de faire valoir vos galons de détective et de l\'arrêter.',	'https://i.imgur.com/XPhG3yE.jpg',	1,	'2019-11-03 12:17:43',	NULL),
(10,	1,	'Le nouveau voisin',	'Malgré son allure et ses manières charmantes, votre nouveau voisin ne vous inspire pas confiance et surtout depuis son arrivée vous constatez d\'étranges choses.',	'https://i.imgur.com/tJnsQr3.jpg',	1,	'2019-11-03 12:17:43',	NULL),
(11,	1,	'Désigné coupable',	'Les témoins et même de nombreux indices semblent l\'incriminer, mais votre instinct de détective semble aller à contre courant. Alors ? Coupable ou non-coupable ?',	'https://i.imgur.com/a5u7QZf.jpg',	1,	'2019-11-03 12:26:12',	NULL),
(12,	1,	'Forme inconnue',	'Rêve ou réalité ? Cette forme s\'impose à vos yeux ébahis. Oserez-vous franchir son seuil ?',	'https://i.imgur.com/ediNfxp.jpg',	1,	'2019-11-03 12:26:12',	NULL),
(13,	1,	'Générateur de trou noir',	'La nouvelle scientifique vient d\'être rendue publique. Ils ont réussi à faire un générateur de trous noirs. Folie scientifique à vos yeux ! Temps d\'aller saboter tout ça.',	'https://i.imgur.com/2EZoxyw.jpg',	1,	'2019-11-03 12:45:02',	NULL),
(14,	1,	'Androïdes nouvelle génération',	'Ces nouvelles machines sont là pour satisfaire les plaisirs les plus sordides des plus puissants qui gouvernent la terre. Et si ces machines avaient une motivation tout autre ?',	'https://i.imgur.com/m5aYY6w.jpg',	1,	'2019-11-03 12:43:55',	NULL),
(15,	2,	'Église abandonnée',	'Faire de cette vieille église, abandonnée au milieu de la forêt, la planque parfaite pour stocker les drogues de votre gang, vous semble subitement une mauvaise idée quand seul, au milieu de la nuit il faut aller faire l\'inventaire.',	'https://i.imgur.com/txtIjqm.jpg',	1,	'2019-11-04 08:46:55',	NULL),
(16,	1,	'Violences séquentielles',	'Votre ennui n\'arrive à être trompé que lorsque vous tombez dans la spirale de la violence pour divertir. Vous repoussez toujours plus loin les limites et les conséquences semblent vous éviter pour l\'instant.',	'https://i.imgur.com/8YfE9D4.jpg',	1,	'2019-11-03 12:43:55',	NULL),
(17,	1,	'La traque ultime',	'Kidnappée, torturée et destinée à mourir, vous avez réussi à échapper à vos ravisseurs. Entre la vie et la mort, vous devez les semer à travers la forêt qui entoure leur repère.',	'https://i.imgur.com/7BHCbaK.jpg',	1,	'2019-11-03 13:20:03',	NULL),
(18,	1,	'Le mystère d’Halloween',	'On raconte qu\'une sorcière a décidé de voler tous les bonbons le soir d\'Halloween car elle se régale d\'entendre les pleurs tristes des enfants. Comment l\'arrêter ?',	'https://i.imgur.com/kY3fR6h.jpg',	1,	'2019-11-03 12:43:55',	NULL),
(19,	1,	'Le trampoline magique',	'On raconte que celui qui arrive à dompter le trampoline magique peut sauter jusqu\'où il veut, sans aucune limite. Et toi ? Tu irais où si tu trouvais ce trampoline magique ?',	'https://i.imgur.com/dYrKAKy.jpg',	1,	'2019-11-03 13:20:03',	NULL),
(20,	1,	'Le soir',	'Once upon a time ...',	NULL,	0,	'2019-11-03 16:56:43',	NULL)
ON DUPLICATE KEY UPDATE `id` = VALUES(`id`), `author_id` = VALUES(`author_id`), `title` = VALUES(`title`), `description` = VALUES(`description`), `image` = VALUES(`image`), `published` = VALUES(`published`), `created_at` = VALUES(`created_at`), `updated_at` = VALUES(`updated_at`);

DROP TABLE IF EXISTS `story_has_category`;
CREATE TABLE `story_has_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `story_id` int(10) unsigned NOT NULL,
  `category_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  KEY `story_id` (`story_id`),
  CONSTRAINT `story_has_category_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE NO ACTION,
  CONSTRAINT `story_has_category_ibfk_3` FOREIGN KEY (`story_id`) REFERENCES `story` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `story_has_category` (`id`, `story_id`, `category_id`) VALUES
(1,	2,	1),
(2,	3,	2),
(4,	4,	1),
(5,	5,	1),
(6,	6,	1),
(7,	7,	1),
(8,	8,	1),
(9,	9,	3),
(10,	10,	3),
(11,	11,	3),
(12,	12,	4),
(13,	13,	4),
(14,	14,	4),
(15,	15,	5),
(16,	16,	5),
(17,	17,	5),
(18,	18,	2),
(19,	19,	2),
(20,	20,	5)
ON DUPLICATE KEY UPDATE `id` = VALUES(`id`), `story_id` = VALUES(`story_id`), `category_id` = VALUES(`category_id`);

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(64) NOT NULL,
  `avatar` varchar(128) DEFAULT NULL,
  `role_id` int(10) unsigned DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `user` (`id`, `name`, `email`, `password`, `avatar`, `role_id`, `created_at`, `updated_at`) VALUES
(1,	'Hugo Victor',	'meutrix@gmail.com',	'$2b$10$b019KfXTqFvSIN8gl5wgAOox1GZ8kRvl.KsURbz8nXVj9UigGLU8G',	'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Victor_Hugo_001.jpg/1200px-Victor_Hugo_001.jpg',	2,	'2019-11-04 22:34:24',	NULL),
(2,	'Jean-Jacques',	'hey@jacques.me',	'$2b$10$hQRQGYM4XpilQE0/l74OAe4I6lJkPIvRrcXGUsHzhkmHyI2nLl1E6',	'http://i-exc.ccm2.net/iex/1280/1481268465/752415.jpg',	1,	'2019-10-31 14:50:40',	'2019-10-25 11:57:36')
ON DUPLICATE KEY UPDATE `id` = VALUES(`id`), `name` = VALUES(`name`), `email` = VALUES(`email`), `password` = VALUES(`password`), `avatar` = VALUES(`avatar`), `role_id` = VALUES(`role_id`), `created_at` = VALUES(`created_at`), `updated_at` = VALUES(`updated_at`);

DROP TABLE IF EXISTS `user_has_pins`;
CREATE TABLE `user_has_pins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `pins_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `pins_id` (`pins_id`),
  CONSTRAINT `user_has_pins_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION,
  CONSTRAINT `user_has_pins_ibfk_2` FOREIGN KEY (`pins_id`) REFERENCES `pins` (`id`) ON DELETE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `user_has_pins` (`id`, `user_id`, `pins_id`) VALUES
(1,	1,	1),
(2,	1,	3)
ON DUPLICATE KEY UPDATE `id` = VALUES(`id`), `user_id` = VALUES(`user_id`), `pins_id` = VALUES(`pins_id`);

DROP TABLE IF EXISTS `user_read_story`;
CREATE TABLE `user_read_story` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `story_id` int(10) unsigned NOT NULL,
  `last_situation_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `story_id` (`story_id`),
  KEY `last_situation_id` (`last_situation_id`),
  CONSTRAINT `user_read_story_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION,
  CONSTRAINT `user_read_story_ibfk_2` FOREIGN KEY (`story_id`) REFERENCES `story` (`id`) ON DELETE NO ACTION,
  CONSTRAINT `user_read_story_ibfk_3` FOREIGN KEY (`last_situation_id`) REFERENCES `situation` (`id`) ON DELETE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `user_read_story` (`id`, `user_id`, `story_id`, `last_situation_id`) VALUES
(1,	1,	1,	7),
(2,	1,	3,	26)
ON DUPLICATE KEY UPDATE `id` = VALUES(`id`), `user_id` = VALUES(`user_id`), `story_id` = VALUES(`story_id`), `last_situation_id` = VALUES(`last_situation_id`);

-- 2019-11-04 22:34:56
