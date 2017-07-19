/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50612
Source Host           : localhost:3306
Source Database       : mydb

Target Server Type    : MYSQL
Target Server Version : 50612
File Encoding         : 65001

Date: 2017-02-09 13:46:26
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for bookinfo
-- ----------------------------
DROP TABLE IF EXISTS `bookinfo`;
CREATE TABLE `bookinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `book_name` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `book_author` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `book_category` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `book_desc` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `recommend` int(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of bookinfo
-- ----------------------------
INSERT INTO `bookinfo` VALUES ('1', '三国演义', '罗贯中', '1', '杀伐纷争的年代', '1');
INSERT INTO `bookinfo` VALUES ('2', '水浒传', '施耐庵', '2', '草寇与政权的斗争', '1');
INSERT INTO `bookinfo` VALUES ('3', '红楼梦', '曹雪芹', '2', '封建王朝的缩影', '1');
INSERT INTO `bookinfo` VALUES ('4', '西游记', '吴承恩', '3', '佛教与道教的斗争', '2');

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nickname` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `content` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `imgpath` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES ('1', '张三', '曾经沧海难为水，除却巫山不是云', 'g.jpg', '2017-01-29 13:21:09');
INSERT INTO `comment` VALUES ('2', '李四', '问渠那得清如许，为有源头活水来', 'g1.jpg', '2017-01-30 13:21:13');
INSERT INTO `comment` VALUES ('3', '王五', '宝剑锋自磨砺出，梅花香自苦寒来', 'g2.jpg', '2017-02-01 13:21:16');
INSERT INTO `comment` VALUES ('4', '赵六', '山重水复疑无路，柳暗花明又一村', 'g3.png', '2017-02-02 13:21:30');
INSERT INTO `comment` VALUES ('5', 'Tom', '不积跬步无以至千里，不集细流无以至沧海', 'g4.jpg', '2017-02-03 13:21:34');
INSERT INTO `comment` VALUES ('6', 'Jerry', '几经 风雨山更翠,常经风霜菊更香', 'g5.jpg', '2017-02-04 13:21:37');
