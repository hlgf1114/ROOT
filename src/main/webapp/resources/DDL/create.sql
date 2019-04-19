CREATE TABLE IF NOT EXISTS `user` (
  `uni_num` int NOT NULL AUTO_INCREMENT,
  `authorization` int NOT NULL DEFAULT 0,
  `name` varchar(25) DEFAULT NULL,
  `sso` varchar(45) NOT NULL,
  `team_id` int DEFAULT 0,
  `uni_date` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`uni_num`),
  UNIQUE KEY `naver_token_UNIQUE` (`sso`)
) COMMENT='사용자 테이블';

CREATE TABLE IF NOT EXISTS `team` (
  `team_id` int NOT NULL AUTO_INCREMENT,
  `team_name` varchar(50) NOT NULL,
  `team_score` int DEFAULT 0,
  PRIMARY KEY (`team_id`),
  KEY `uni_num_idx` (`team_name`)
) COMMENT='팀 테이블';

CREATE TABLE IF NOT EXISTS `score` (
  `score_num` int NOT NULL AUTO_INCREMENT,
  `uni_num` int NOT NULL,
  `score_mid` int DEFAULT 0,
  `score_fin` int DEFAULT 0,
  `score_team` int DEFAULT 0,
  PRIMARY KEY (`score_num`),
  KEY `uni_num3_idx` (`uni_num`),
  CONSTRAINT `uni_num3` FOREIGN KEY (`uni_num`) REFERENCES `user` (`uni_num`) ON DELETE NO ACTION ON UPDATE NO ACTION
) COMMENT='점수 테이블';


CREATE TABLE IF NOT EXISTS `post` (
  `post_num` int NOT NULL AUTO_INCREMENT,
  `uni_num` int NOT NULL,
  `post_name` varchar(50) NOT NULL,
  `postField` varchar(100),
  `delYn` varchar(1) NOT NULL DEFAULT 'N',
  `postDate` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`post_num`),
  KEY `uni_num_idx` (`uni_num`),
  CONSTRAINT `uni_num` FOREIGN KEY (`uni_num`) REFERENCES `user` (`uni_num`) ON DELETE NO ACTION ON UPDATE NO ACTION
) COMMENT='게시글 테이블';

CREATE TABLE IF NOT EXISTS `file_manage` (
  `file_num` int NOT NULL,
  `post_num` int DEFAULT NULL,
  `url` varchar(200) NOT NULL,
  `delYn` varchar(1) NOT NULL DEFAULT 'N',
  `post_date` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`file_num`),
  KEY `post_num_idx` (`post_num`),
  CONSTRAINT `post_num2` FOREIGN KEY (`post_num`) REFERENCES `post` (`post_num`) ON DELETE NO ACTION ON UPDATE NO ACTION
) COMMENT='파일 관리 테이블';

CREATE TABLE IF NOT EXISTS `comment` (
  `comm_num` int NOT NULL AUTO_INCREMENT,
  `post_num` int DEFAULT NULL,
  `uni_num` int NOT NULL,
  `std_comm` varchar(140),
  `comm_date` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`comm_num`),
  KEY `post_num_idx` (`post_num`),
  KEY `FK_comment_user` (`uni_num`),
  CONSTRAINT `FK_comment_user` FOREIGN KEY (`uni_num`) REFERENCES `user` (`uni_num`),
  CONSTRAINT `post_num` FOREIGN KEY (`post_num`) REFERENCES `post` (`post_num`) ON DELETE NO ACTION ON UPDATE NO ACTION
) COMMENT='댓글 테이블';
