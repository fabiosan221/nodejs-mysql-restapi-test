--
-- Script was generated by Devart dbForge Studio 2019 for MySQL, Version 8.1.22.0
-- Product home page: http://www.devart.com/dbforge/mysql/studio
-- Script date 30/9/2022 15:34:47
-- Server version: 5.7.26
-- Client version: 4.1
--

-- 
-- Disable foreign keys
-- 
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;

-- 
-- Set SQL mode
-- 
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

--
-- Set default database
--
USE empresadb;

--
-- Drop table `empleados`
--
DROP TABLE IF EXISTS empleados;

--
-- Set default database
--
USE empresadb;

--
-- Create table `empleados`
--
CREATE TABLE empleados (
  id int(11) NOT NULL AUTO_INCREMENT,
  nombre varchar(45) DEFAULT NULL,
  salario int(5) DEFAULT NULL,
  PRIMARY KEY (id)
)
ENGINE = MYISAM,
AUTO_INCREMENT = 12,
AVG_ROW_LENGTH = 20,
CHARACTER SET latin1,
CHECKSUM = 0,
COLLATE latin1_swedish_ci;

-- 
-- Dumping data for table empleados
--
INSERT INTO empleados VALUES
(2, 'Henry', 2000),
(3, 'Sam', 2500),
(4, 'Max', 1500),
(6, 'Juan', 2300),
(11, 'Juan', 3000),
(8, 'Fabio', 4500),
(10, 'Sandra', 3500);

-- 
-- Restore previous SQL mode
-- 
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;

-- 
-- Enable foreign keys
-- 
/*!40014 SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS */;