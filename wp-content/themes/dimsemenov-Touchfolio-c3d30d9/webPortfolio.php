<?php
/*
Template Name: Web Portfolio Page
*/
?>
<?php get_header(); ?>

<div id="primary" class="site-content">
  <div id="content" role="main">
    <header class="entry-header">
		<h1 class="entry-title">Web Site Creation</h1>
	</header>
    <main id="webPortfolio">
      <div id="loadingWrap">
        <div id="loading">
          <p id="signWait"> <span class="fa fa-hand-paper-o"></span><br>
            <span id="textWait">Please Wait...</span> </p>
          <p id="signGo"> <span class="fa fa-car"></span><br>
            <span id="textGo">Thanx! Go!!</span> </p>
        </div>
      </div>
      <div id="WebSiteCreation" class="clearfix">
        <div class="left">
          <div class="unpublishedNoImageWrap">
            <a href="<?php bloginfo('url'); ?>/various-projects/">
              <img src="<?php bloginfo('url'); ?>/wp-content/uploads/2016/09/unpublished.jpg" alt="unpublished" width="" height="" class="unpublished"/>
              <img src="<?php bloginfo('url'); ?>/wp-content/uploads/2016/09/noImage.jpg" alt="noImage" width="" height="" class="noImage"/>
              <img src="<?php bloginfo('url'); ?>/wp-content/uploads/2016/09/deskTop.png" alt="deskTop" width="" height="" class="deskTop"/>
            </a>
          </div>
          <h3>Various Projects.<br><span>(Adidas・Nissan・NTT DOCOMO・Alibaba・Nomura Proud・Hochiki・JTB・ZOZO Technologies・DMM.com・Donuts・Branding Engineer etc.)</span></h3>
          <p>
          <span class="myWork">Web Design / HTML / CSS / JavaScript / WordPress / Responsive</span><br>
          <a href="http://kojiyamauchi.com/privatePortfolio/portfolio.pdf" class="nonmover" target="_blank">http://kojiyamauchi.com/privatePortfolio/</a><br>
          <a href="<?php bloginfo('url'); ?>/about-us">please contact us, for more information.</a>
          </p>
        </div>
        <div class="center">
          <div id="microBloodScienceIMGWrap">
            <a href="<?php bloginfo('url'); ?>/micro-blood-science/">
              <img src="<?php bloginfo('url'); ?>/wp-content/uploads/2018/02/mbs-pc.jpg" alt="microBloodSciencePC" width="" height="" class="microBloodScienceIMG1"/>
              <img src="<?php bloginfo('url'); ?>/wp-content/uploads/2018/02/mbs-sp.jpg" alt="microBloodScienceSP" width="" height="" class="microBloodScienceIMG2"/>
              <img src="<?php bloginfo('url'); ?>/wp-content/uploads/2015/04/dummyFastHuntIMG.png" alt="fastHunt" width="" height="" class=""/>
            </a>
          </div>
          <h3>micro Blood Science Inc.</h3>
          <p>
          <span class="myWork">Web Design / HTML / CSS / JavaScript / Responsive</span><br>
          <a href="https://mbsico.jp" class="nonmover" target="_blank">https://mbsico.jp</a>
          </p>
        </div>
        <div class="right">
          <div id="primeMarcheIMGWrap">
            <a href="<?php bloginfo('url'); ?>/prime-marche/">
              <img src="<?php bloginfo('url'); ?>/wp-content/uploads/2016/09/primeMarchePC.jpg" alt="primeMarchePC" width="" height="" class="primeMarcheIMG1"/>
              <img src="<?php bloginfo('url'); ?>/wp-content/uploads/2016/09/primeMarcheSP.jpg" alt="primeMarcheSP" width="" height="" class="primeMarcheIMG2"/>
              <img src="<?php bloginfo('url'); ?>/wp-content/uploads/2015/04/dummyFastHuntIMG.png" alt="fastHunt" width="" height="" class=""/>
            </a>
          </div>
          <h3>Prime Marche.</h3>
          <p>
          <span class="myWork">Web Design / HTML / CSS / JavaScript / Responsive</span><br>
          <!-- Site Open：2016/08/27〜2016/09/26<br> -->
          Direction：<a href="http://sugarlessfactory.com" class="nonmover" target="_blank">Sugarless Factory Inc.</a><br>
          <a href="http://primemarche.com" class="nonmover" target="_blank">http://primemarche.com</a>
          </p>
        </div>
        <div class="clearFix"></div>
        <div class="left">
          <div id="gelatoIncIMGWrap">
            <a href="<?php bloginfo('url'); ?>/gelato-inc/">
              <img src="<?php bloginfo('url'); ?>/wp-content/uploads/2016/07/gelatoIncPC-1.jpg" alt="gelatoIncPC" width="" height="" class="gelatoIncIMG1"/>
              <img src="<?php bloginfo('url'); ?>/wp-content/uploads/2016/07/gelatoIncSP-1.jpg" alt="gelatoIncSP" width="" height="" class="gelatoIncIMG2"/>
              <img src="<?php bloginfo('url'); ?>/wp-content/uploads/2015/04/dummyFastHuntIMG.png" alt="fastHunt" width="" height="" class=""/>
            </a>
          </div>
          <h3>Gelato Inc.</h3>
          <p>
          <span class="myWork">Web Design / HTML / CSS / JavaScript / Responsive</span><br>
          <a href="http://gelato-inc.com" class="nonmover" target="_blank">http://gelato-inc.com</a>
          </p>
        </div>
        <div class="center">
          <a href="<?php bloginfo('url'); ?>/daijiro-kikuchi-official-web-site/">
            <img src="<?php bloginfo('url'); ?>/wp-content/uploads/2018/02/daijiro-kikuchi-pc.jpg" alt="daijiroKikuchi" width="" height=""/>
          </a>
          <h3>Daijiro Kikuchi Official Web Site.</h3>
          <p>
          <span class="myWork">HTML / CSS / JavaScript / WordPress / Responsive</span><br>
          Art Direction & Web Design：<a href="http://design-bard.biz" class="nonmover" target="_blank">Design Bard</a><br>
          <a href="http://kikuchi-daijiro.com" class="nonmover" target="_blank">http://kikuchi-daijiro.com</a>
          </p>
        </div>
        <div class="clearFix"></div>
      </div>
      <div id="pageTop" class="webSiteCreationPageTop">
        <div id="pageTopRocket"> <span class="fa fa-rocket"></span><img src="http://kojiyamauchi.com/main/wp-content/uploads/myPortfolioPageTopIconBalloon.png" alt="" width="" height=""/></div>
        <p>Page Top</p>
      </div>
      <div class="clearfix"></div>
    </main>
  </div>
</div>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
