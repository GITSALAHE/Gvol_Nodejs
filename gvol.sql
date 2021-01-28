-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  jeu. 28 jan. 2021 à 17:18
-- Version du serveur :  10.4.11-MariaDB
-- Version de PHP :  7.2.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `gvol`
--

-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

CREATE TABLE `reservation` (
  `idRes` int(11) NOT NULL,
  `code` varchar(255) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telephone` int(11) NOT NULL,
  `idVol` int(11) NOT NULL,
  `nbPlace` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `reservation`
--

INSERT INTO `reservation` (`idRes`, `code`, `nom`, `prenom`, `email`, `telephone`, `idVol`, `nbPlace`) VALUES
(0, 'GVOL_3ad51f20-7aff-4d96-905c-d66026eb177a', 'Amine', 'Mohammed', 'bettaoui@gmail.com', 642436739, 18, 3);

-- --------------------------------------------------------

--
-- Structure de la table `vol`
--

CREATE TABLE `vol` (
  `idVol` int(11) NOT NULL,
  `villeDepart` varchar(255) NOT NULL,
  `villeArrive` varchar(255) NOT NULL,
  `dateDepart` varchar(255) NOT NULL,
  `heureDepart` varchar(255) NOT NULL,
  `nbPlace` int(11) NOT NULL,
  `escale` varchar(255) NOT NULL,
  `prix` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `vol`
--

INSERT INTO `vol` (`idVol`, `villeDepart`, `villeArrive`, `dateDepart`, `heureDepart`, `nbPlace`, `escale`, `prix`) VALUES
(16, 'Azemmour', 'Dar Bouazza', '2021-01-16', '17:29', 4, 'Dar Bouazza', 2000),
(17, 'Azemmour', 'Boulaouane', '2021-01-22', '07:18', 20, 'Bouznika', 2000),
(18, 'Berrechid', 'Azemmour', '2021-01-29', '15:06', 3, 'Settat', 21);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD KEY `fk_idVol` (`idVol`);

--
-- Index pour la table `vol`
--
ALTER TABLE `vol`
  ADD PRIMARY KEY (`idVol`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `vol`
--
ALTER TABLE `vol`
  MODIFY `idVol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD CONSTRAINT `fk_idVol` FOREIGN KEY (`idVol`) REFERENCES `vol` (`idVol`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
