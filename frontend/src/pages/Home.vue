<template>
   <div class="page text-center">
        <!--========================================================
                              HEADER
    =========================================================-->

        <header class="bg-header">
            <div class="light-wrap">
                <canvas id="canvas" class="light" width="681" height="642"></canvas>
            </div>
            <div class="circle"></div>
            <div class="header-wrap">
                <div class="section-scroll" data-section="home">
                    <div id="stuck_container" class="stuck_container">
                        <div class="container relative">
                            <div class="row">
                                <div class="rd-navbar-brand__logo col-xs-2">
                                    <router-link to="/Home">
                                    <div class="figure-6">
                                        <div class="figure-5">
                                            <div class="figure-5__wrap">
                                                <router-link to="/Home">P</router-link>
                                            </div>
                                        </div>
                                    </div>
                                    </router-link>
                                </div>
                            </div>

                            <div class="row">
                                <div class="rd-navbar-brand">
                                    <div class="rd-navbar-brand__name">
                                        <router-link to="/Home">PLEIADES</router-link>

                                        <div class="figure-4">
                                            <div class="figure-4__wrap"></div>
                                        </div>
                                    </div>
                                    <p class="rd-navbar-brand__slogan">&lt; Red Alpha Research &gt;</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <!-- About us -->
                <section class="section-scroll well-sm offset-7 text-sm-right" data-section="about">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <h2 class="inset-1">About us</h2>

                                <p class="small inset-1 text-default">Thank you for visiting our site!
                                    <br class="none"> We create and develop brands, websites and web apps
                                    <br class="none"> with delightful, intuitive user experiences and
                                    <br class="none"> interactions which work beautifully across all
                                    <br class="none"> devices, screen sizes and media. Our team represents a
                                    <br class="none"> depth of experience in the planning, custom
                                    <br class="none"> craftsmanship, and implementation of digital
                                    <br class="none"> experiences.
                                </p>
                            </div>
                            <div class="col-sm-6">
                                <!-- <div class="image-wrap">
                                    <img src="images/page-1_img01.png" alt="">
                                </div> -->
                            </div>
                        </div>
                    </div>
                </section>
                <!-- END About us -->
            </div>
        </header>

        <!--========================================================
                              CONTENT
    =========================================================-->
        <main>
            <!-- <div class="circle-1"></div> -->
            <div class="main-wrap">

                <!-- Gallery -->
                <section class="section-scroll  well-xs relative" data-section="gallery">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-offset-6 col-lg-6">
                                <h2 class="inset-2 text-lg-left">Gallary</h2>
                            </div>
                        </div>
                    </div>

                    <div class="gallery">
                        <div class="figure">
                            <div class="image-wrap-2">
                                <div class="image-wrap-3">
                                    <div class="thumbnail">
                                        <!-- <a href="/OD" class="thumb" data-fancybox-group='1'>

                                        </a> -->
                                        <router-link to="/OD"  class="thumb" data-fancybox-group='1'>
                                            <img src="../assets/images/World-Map.jpg" alt="">
                                        </router-link>

                                        <div class="thumbnail_overlay">
                                            <div class="caption">
                                                <a href="" class="small">OD</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="figure-1">
                            <div class="image-wrap-3">
                                <div class="image-wrap-2">
                                    <div class="thumbnail">
                                        <a href="javascript:function() { return false; }" class="thumb" data-fancybox-group='1'>
                                            <img src="../assets/images/Pleiades Cluster 2.jpg" alt="">
                                        </a>

                                        <div class="thumbnail_overlay thumbnail_overlay--skin">
                                            <div class="caption caption--mod">
                                                <a href="#" class="small">Social <br> unrest</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="figure">
                            <div class="image-wrap-2">
                                <div class="image-wrap-3">
                                    <div class="thumbnail">
                                        <a href="javascript:function() { return false; }" class="thumb" data-fancybox-group='1'>
                                            <img src="../assets/images/Personality Traits.png" alt="">
                                        </a>

                                        <div class="thumbnail_overlay">
                                            <div class="caption">
                                                <a href="#" class="small">Military <br> Readiness</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="figure-1">
                            <div class="image-wrap-3">
                                <div class="image-wrap-2">
                                    <div class="thumbnail">
                                        <a href="javascript:function() { return false; }" class="thumb" data-fancybox-group='1'>
                                            <img src="../assets/images/Pleiades.jpg" alt="">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="figure">
                            <div class="image-wrap-2">
                                <div class="image-wrap-3">
                                    <div class="thumbnail">
                                        <a href="javascript:function() { return false; }" class="thumb" data-fancybox-group='1'>
                                            <img src="../assets/images/bigstock-Color-light-traces-over-black--100445951.jpg" alt="">
                                        </a>

                                        <div class="thumbnail_overlay">
                                            <div class="caption">
                                                <a href="#" class="small">IADF <br> COP</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="figure-1">
                            <div class="image-wrap-3">
                                <div class="image-wrap-2">
                                    <div class="thumbnail">
                                        <a href="javascript:function() { return false; }" class="thumb" data-fancybox-group='1'>
                                            <img src="../assets/images/bigstock-best-concept-of-global-busines-15987380.jpg" alt="">
                                        </a>

                                        <div class="thumbnail_overlay thumbnail_overlay--skin">
                                            <div class="caption caption--mod">
                                                <a href="#" class="small">Cyber <br> policy</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="figure">
                            <div class="image-wrap-2">
                                <div class="image-wrap-3">
                                    <div class="thumbnail">
                                        <a href="javascript:function() { return false; }" class="thumb" data-fancybox-group='1'>
                                            <img src="../assets/images/bigstock-Abstract-low-poly-blue-bright--99207965.jpg" alt="">
                                        </a>

                                        <div class="thumbnail_overlay">
                                            <div class="caption">
                                                <a href="#" class="small">ICE</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="offset-3 preffix-6">
                            <div class="figure-1">
                                <div class="image-wrap-3">
                                    <div class="image-wrap-2">
                                        <div class="thumbnail">
                                            <a href="javascript:function() { return false; }" class="thumb" data-fancybox-group='1'>
                                                <img src="../assets/images/Pleiades.jpg" alt="">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="figure">
                                <div class="image-wrap-2">
                                    <div class="image-wrap-3">
                                        <div class="thumbnail">
                                            <a href="javascript:function() { return false; }" class="thumb" data-fancybox-group='1'>
                                                <img src="../assets/images/Pleiades.jpg" alt="">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="figure-1">
                                <div class="image-wrap-3">
                                    <div class="image-wrap-2">
                                        <div class="thumbnail">
                                            <a href="javascript:function() { return false; }" class="thumb" data-fancybox-group='1'>
                                                <img src="../assets/images/Pleiades.jpg" alt="">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="figure">
                                <div class="image-wrap-2">
                                    <div class="image-wrap-3">
                                        <div class="thumbnail">
                                            <a href="javascript:function() { return false; }" class="thumb" data-fancybox-group='1'>
                                                <img src="../assets/images/bigstock-Abstract-blue-background-Tech-97762865.jpg" alt="">
                                            </a>

                                            <div class="thumbnail_overlay">
                                                <div class="caption">
                                                    <a href="#" class="small">NSC
                                                        </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="figure-1">
                                <div class="image-wrap-3">
                                    <div class="image-wrap-2">
                                        <div class="thumbnail">
                                            <a href="javascript:function() { return false; }" class="thumb" data-fancybox-group='1'>
                                                <img src="../assets/images/Pleiades.jpg" alt="">
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="figure">
                                <div class="image-wrap-2">
                                    <div class="image-wrap-3">
                                        <div class="thumbnail">
                                            <a href="javascript:function() { return false; }" class="thumb" data-fancybox-group='1'>
                                                <img src="../assets/images/Pleiades.jpg" alt="">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="figure-1">
                                <div class="image-wrap-3">
                                    <div class="image-wrap-2">
                                        <div class="thumbnail">
                                            <a href="javascript:function() { return false; }" class="thumb" data-fancybox-group='1'>
                                                <img src="../assets/images/Pleiades.jpg" alt="">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- END Gallery -->

                <div class="bg-main">

                    <!-- END Services -->
                    <footer class="">
                        <div class="copyright">
                            <span id="copyright-year"></span>
                            Copyright by Red Alpha. All Rights Reserved
                        </div>
                    </footer>

                </div>
            </div>
        </main>
    </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {

    };
  },
};
</script>

