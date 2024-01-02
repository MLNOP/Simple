<?php
/**
 * Title: Business home template
 * Slug: simppple/template-home-business
 * Template Types: front-page, home
 * Inserter: no
 */
?>

<!-- wp:group {"tagName":"header","style":{"position":{"type":"sticky","top":"0px"}},"backgroundColor":"white","layout":{"type":"constrained"}} -->
<header class="wp-block-group has-white-background-color has-background">
	<!-- wp:template-part {"slug":"header","area":"header","tagName":"div"} /-->
</header>
<!-- /wp:group -->

<!-- wp:group {"tagName":"main","style":{"spacing":{"margin":{"top":"var:preset|spacing|70","bottom":"var:preset|spacing|70"}}},"layout":{"type":"constrained"}} -->
<main
	class="wp-block-group"
	style="margin-top:var(--wp--preset--spacing--70);margin-bottom:var(--wp--preset--spacing--70)"
>
	<!-- wp:pattern {"slug":"simppple/page-home-business"} /-->
</main>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer","area":"footer","tagName":"footer"} /-->

