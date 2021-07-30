-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-07-2021 a las 14:18:40
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tarea9`
--
CREATE DATABASE IF NOT EXISTS `tarea9` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `tarea9`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

CREATE TABLE `paciente` (
  `Id` INT(11) NOT NULL,
  `Cedula` VARCHAR(11) NOT NULL,
  `Nombre` VARCHAR(30) NOT NULL,
  `Apellido` VARCHAR(50) NOT NULL,
  `Telefono` VARCHAR(10) NOT NULL,
  `Email` VARCHAR(50) NOT NULL,
  `Fecha_Nac` VARCHAR(8) NOT NULL,
  `Tipo_Sangre` VARCHAR(2) NOT NULL,
  `Direccion` VARCHAR(90) NOT NULL,
  `Latitud` VARCHAR(15) NOT NULL,
  `Longitud` VARCHAR(15) NOT NULL,
  `Positivo` TINYINT(1) NOT NULL,
  `Justificacion` VARCHAR(120) NOT NULL,
  `Provincia` VARCHAR(30) NOT NULL
) ENGINE=INNODB DEFAULT CHARSET=utf8mb4;
COMMIT;


-- Indexes for table `Pacientes`
--
ALTER TABLE `paciente`
  ADD PRIMARY KEY (`Id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
