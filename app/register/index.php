<?php
error_reporting(E_ALL ^ E_WARNING);

require '../libs/Smarty.class.php';

$smarty = new Smarty;

$smarty->template_dir = '../templates'; 
$smarty->compile_dir = '../templates_c'; 
$smarty->config_dir = '../configs'; 
$smarty->cache_dir = '../cache'; 

//$smarty->force_compile = true;
$smarty->debugging = false;
$smarty->caching = false;
$smarty->cache_lifetime = 120;

$smarty->assign("title", "Register", true);
$smarty->assign("level", "../", true);

$smarty->assign("ageValues", array("10", "11", "12", "13", "14", "15", "16", "17", "18"));

$smarty->display('register.tpl');