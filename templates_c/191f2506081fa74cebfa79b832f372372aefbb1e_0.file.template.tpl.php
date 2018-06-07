<?php
/* Smarty version 3.1.30, created on 2018-03-21 18:28:25
  from "/Users/Maks1m/Sites/PHP/Ugadajka/templates/template.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_5ab29639570c43_42863957',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '191f2506081fa74cebfa79b832f372372aefbb1e' => 
    array (
      0 => '/Users/Maks1m/Sites/PHP/Ugadajka/templates/template.tpl',
      1 => 1520880494,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5ab29639570c43_42863957 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title><?php echo $_smarty_tpl->tpl_vars['site_name']->value;?>
</title>
	<?php echo '<script'; ?>
 src="game/init.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
 src="game/loader.js"><?php echo '</script'; ?>
>
	<link rel="stylesheet" type="text/css" href="game/reset.css">
	<link rel="stylesheet" type="text/css" href="game/layout.css">
	<link rel="stylesheet" type="text/css" href="game/game.css">
</head>
<body onload="init()">
</body>
</html><?php }
}
