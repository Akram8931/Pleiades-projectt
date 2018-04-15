<template>
    <div>
        <div class="page text-center single">
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
                                    <div class="rd-navbar-brand__logo ">
                                        <div class="figure-6">
                                            <div class="figure-5">
                                                <div class="figure-5__wrap">
                                                    <a href="./">P</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <main>
                        <!-- <div class="circle-1"></div> -->
                        <div class="main-wrap">
                            <router-link to="/ODLink/Demographic"> Demographic</router-link>
                            <router-link to=""> Functional Capability </router-link>
                            <router-link to=""> Cross Org Capability</router-link>
                            <router-view/>
                        </div>
                    </main>
    
                </div>
            </header>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ODLink',
        data() {
            return {};
        },
    };
</script>
