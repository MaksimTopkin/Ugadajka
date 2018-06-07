<?php
/* Smarty version 3.1.30, created on 2018-06-02 17:33:06
  from "/Users/Maks1m/sites/PHP/Ugadajka/templates/template.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.30',
  'unifunc' => 'content_5b12b8b2af8d62_69646479',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'e9e55f62ba77791469185d45b39fc2c6296f605c' => 
    array (
      0 => '/Users/Maks1m/sites/PHP/Ugadajka/templates/template.tpl',
      1 => 1527953580,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5b12b8b2af8d62_69646479 (Smarty_Internal_Template $_smarty_tpl) {
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title><?php echo $_smarty_tpl->tpl_vars['site_name']->value;?>
</title>
	<?php echo '<script'; ?>
 src="game/core.js"><?php echo '</script'; ?>
>
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
<body>
</body>
</html><?php }
}
