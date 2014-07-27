<?php
error_reporting(E_ALL ^ E_WARNING);
/**
 * Example Application
 *
 * @package Example-application
 */

require './libs/Smarty.class.php';

$smarty = new Smarty;

//$smarty->force_compile = true;
$smarty->debugging = false;
$smarty->debugging_ctrl = ($_SERVER['SERVER_NAME'] == 'localhost') ? 'URL' : 'NONE';
$smarty->caching = false;
$smarty->cache_lifetime = 120;

$smarty->assign("title", "An annual STEAM course", true);
$smarty->assign("level", "./", true);
/*
$smarty->assign("contacts", array(array("phone" => "1", "fax" => "2", "cell" => "3"),
                                  array("phone" => "555-4444", "fax" => "555-3333", "cell" => "760-1234")));
$smarty->assign("option_values", array("NY", "NE", "KS", "IA", "OK", "TX"));
*/

$smarty->display('index.tpl');