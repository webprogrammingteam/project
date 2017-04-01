-- phpMyAdmin SQL Dump
-- version 4.4.15.5
-- http://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Mar 31, 2017 at 03:09 PM
-- Server version: 5.5.49-log
-- PHP Version: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `musicstore`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE IF NOT EXISTS `orders` (
  `OrderID` int(10) NOT NULL,
  `username` varchar(30) NOT NULL,
  `order_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` varchar(10) NOT NULL,
  `exp_ship_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `actual_ship_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE IF NOT EXISTS `order_items` (
  `OrderID` int(10) NOT NULL,
  `PID` int(20) NOT NULL,
  `totalPrice` varchar(20) NOT NULL,
  `buyQuantity` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `PID` int(20) NOT NULL,
  `pname` varchar(50) NOT NULL,
  `category` varchar(20) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `quantity` int(10) NOT NULL,
  `image` varchar(60) NOT NULL,
  `description` mediumtext NOT NULL,
  `isDelete` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`PID`, `pname`, `category`, `price`, `quantity`, `image`, `description`, `isDelete`) VALUES
(1, 'Adele (2016)', 'Pop', 40.00, 20, 'adele.jpg', 'adele .', 0),
(2, 'Justin (2016)', 'Pop', 60.00, 100, 'justin.jpg', 'justin', 0),
(3, 'Sting', 'Clasic', 20.00, 40, 'sting1.jpg', 'clasic album', 0),
(4, 'steven-tylor', 'Clasic', 40.00, 50, 'steven-tyler.jpg', 'clasic ', 1),
(5, 'tylor-swift', 'Pop', 10.00, 30, 'Taylor_Swift.png', 'pop, best ', 0),
(6, 'lady-gaga', 'Pop', 40.00, 5, 'lady-gaga.jpg', 'lady-gaga', 0),
(7, 'sdsfd', 'Pop', 50.00, 4, 'steven-tyler.jpg', 'thtgrs', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `username` varchar(30) NOT NULL,
  `password` varchar(80) NOT NULL,
  `email` varchar(30) NOT NULL,
  `fname` varchar(30) NOT NULL,
  `lname` varchar(30) NOT NULL,
  `address` varchar(100) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `isAdmin` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `password`, `email`, `fname`, `lname`, `address`, `phone`, `isAdmin`) VALUES
('aaaaa', 'bb057481a1b7abc93ad5d70d52e3a55f', 'a@yahoo.com', 'aa', 'bb', 'cd fghn hgntg fg ', '4564567898', 1),
('jinhui', '480aeb42d7b1e3937fe8db12a1ffe6d8', 'jin@gmail.com', 'jinhui', 'guo', 'qwertyuioplkjhgdsazxcvbnm', '12345678901', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`OrderID`),
  ADD KEY `order_date` (`order_date`),
  ADD KEY `username` (`username`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`OrderID`,`PID`),
  ADD KEY `FK3` (`PID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`PID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `FK2` FOREIGN KEY (`OrderID`) REFERENCES `orders` (`OrderID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK3` FOREIGN KEY (`PID`) REFERENCES `products` (`PID`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
