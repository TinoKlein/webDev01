-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Erstellungszeit: 19. Jul 2018 um 01:23
-- Server-Version: 5.7.21
-- PHP-Version: 5.6.36

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `webdev1`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `floors`
--

CREATE TABLE `floors` (
  `id` int(11) UNSIGNED NOT NULL,
  `floor` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `floors`
--

INSERT INTO `floors` (`id`, `floor`) VALUES
(0, 'basement'),
(1, 'ground floor'),
(2, '1st floor'),
(3, '2nd floor'),
(4, '3rd floor'),
(5, '4th floor'),
(6, '5th floor');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `houses`
--

CREATE TABLE `houses` (
  `id` int(11) UNSIGNED NOT NULL,
  `street` varchar(50) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `zip` int(11) DEFAULT NULL,
  `apartment` varchar(50) DEFAULT NULL,
  `lastedit` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `houses`
--

INSERT INTO `houses` (`id`, `street`, `city`, `zip`, `apartment`, `lastedit`) VALUES
(3, 'Köpenickerstr. 122', 'Berlin', 12345, '', 1531872724),
(4, 'Warschauerstr. 4', 'Berlin', 32145, '3g', 1531867663),
(5, 'zur Reeperbahn 68', 'Hamburg', 65432, '5f', 1531867663),
(13, 'Kudamm 247', 'Berlin', 10487, '3c', 1531919542);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `login`
--

CREATE TABLE `login` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `login`
--

INSERT INTO `login` (`id`, `username`, `password`) VALUES
(0, 'admin', '12345');

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `prop`
--

CREATE TABLE `prop` (
  `id` int(11) UNSIGNED NOT NULL,
  `houseID` int(11) DEFAULT NULL,
  `floorID` int(11) DEFAULT NULL,
  `floor` varchar(50) DEFAULT NULL,
  `room` varchar(50) DEFAULT NULL,
  `doors` int(11) DEFAULT '0',
  `windows` int(11) DEFAULT '0',
  `sm` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `prop`
--

INSERT INTO `prop` (`id`, `houseID`, `floorID`, `floor`, `room`, `doors`, `windows`, `sm`) VALUES
(1, 3, 0, 'basement', 'bedroom', 1, 1, 17),
(2, 3, 0, 'basement', 'hobby', 1, 2, 20),
(3, 3, 1, 'groundfloor', 'livingroom', 10, 10, 72),
(4, 3, 1, 'groundfloor', 'kitchen', 0, 5, 14),
(5, 4, 2, '1st floor', 'bedroom 1', 3, 10, 100),
(6, 4, 2, '1st floor', 'bedroom 2', 1, 5, 18),
(7, 4, 1, 'groundfloor', 'livingroom', 3, 6, 34),
(20, 3, 3, '2nd floor', 'myRoom', 6, 2, 41),
(21, 3, 3, '2nd floor', 'myRoom2', 2, 4, 37),
(22, 5, 2, '1st floor', 'bedroom 1', 1, 20, 130),
(23, 5, 2, '1st floor', 'bedroom 2', 1, 3, 18),
(36, 13, 1, 'ground floor', 'living room', 5, 6, 0),
(37, 13, 1, 'ground floor', 'bathroom', 7, 4, 0),
(38, 13, 2, '1st floor', NULL, 0, 0, 0),
(39, 13, 0, 'basement', 'hobby', 1, 3, 26),
(40, 13, 0, 'basement', 'laundry', 1, 1, 12),
(41, 13, 1, 'ground floor', 'kitchen', 0, 0, 0),
(42, 13, 1, 'ground floor', 'guest bathroom', 0, 0, 0);

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `floors`
--
ALTER TABLE `floors`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `houses`
--
ALTER TABLE `houses`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `prop`
--
ALTER TABLE `prop`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `floors`
--
ALTER TABLE `floors`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT für Tabelle `houses`
--
ALTER TABLE `houses`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT für Tabelle `prop`
--
ALTER TABLE `prop`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
