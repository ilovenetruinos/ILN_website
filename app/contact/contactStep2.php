<?php
error_reporting(E_ALL ^ E_WARNING);

//Library

function getPostParam($key){
    return  getItem($_POST, $key);
}

function getItem($array, $key){
    return  isset($array[$key]) ? $array[$key] : null;

}

//Form validation

$fullName = getPostParam("fullName");
$email = getPostParam("email");
$subject = getPostParam("subject");
$contentArea = getPostParam("contentArea");

//Email

//Templates

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

$smarty->assign("title", "Register");
$smarty->assign("level", "../");

$smarty->display('contactStep2.tpl');