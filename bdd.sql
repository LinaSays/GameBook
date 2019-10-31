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


DROP TABLE IF EXISTS `pins`;
CREATE TABLE `pins` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `image` varchar(128) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


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
  CONSTRAINT `situation_ibfk_1` FOREIGN KEY (`story_id`) REFERENCES `story` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


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
(1,	'Victor Hugo',	'meutrix@gmail.com',	'$2b$10$b019KfXTqFvSIN8gl5wgAOox1GZ8kRvl.KsURbz8nXVj9UigGLU8G',	'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Victor_Hugo_001.jpg/1200px-Victor_Hugo_001.jpg',	2,	'2019-10-31 14:48:38',	NULL),
(2,	'Jean-Jacques',	'hey@jacques.me',	'$2b$10$hQRQGYM4XpilQE0/l74OAe4I6lJkPIvRrcXGUsHzhkmHyI2nLl1E6',	'http://i-exc.ccm2.net/iex/1280/1481268465/752415.jpg',	1,	'2019-10-31 14:50:40',	'2019-10-25 11:57:36');

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


-- 2019-10-31 14:52:24
