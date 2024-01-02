<?php
/**
 * Title: 404 template
 * Slug: simppple/template-404
 * Template Types: 404-page
 * Inserter: no
 */
?>

<!-- wp:group {"tagName":"header","style":{"position":{"type":"sticky","top":"0px"}},"backgroundColor":"white","layout":{"type":"constrained"}} -->
<header class="wp-block-group has-white-background-color has-background">
	<!-- wp:template-part {"slug":"header","area":"header","tagName":"div"} /-->
</header>
<!-- /wp:group -->

<!-- wp:group {"tagName":"main","style":{"spacing":{"margin":{"top":"0","bottom":"0"}}},"layout":{"type":"constrained"}} -->
<main
	class="wp-block-group"
	style="margin-top:0;margin-bottom:0"
>
	<!-- wp:spacer {"height":"80px"} -->
	<div
		style="height:80px"
		aria-hidden="true"
		class="wp-block-spacer"
	></div>
	<!-- /wp:spacer -->

	<!-- wp:pattern {"slug":"simppple/page-404"} /-->

	<!-- wp:spacer {"height":"120px"} -->
	<div
		style="height:120px"
		aria-hidden="true"
		class="wp-block-spacer"
	></div>
	<!-- /wp:spacer -->
</main>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer","area":"footer","tagName":"footer"} /-->

