<?php include 'templates/header.php'; ?>
<?php $current = 'home'; ?>
<?php include 'templates/nav.php'; ?>
    <section id="main" role="main">
	<h1><?php echo (date('W', strtotime('+2 days')) % 2 == 1)? 'Yep<span smiley>:)</span>' : 'Nope<span smiley>:(</span>'; ?></h1>
    <div id="tips">
	<?php include 'tips.php'; ?>
    </div>
    </section>
<?php include 'templates/footer.php'; ?>

