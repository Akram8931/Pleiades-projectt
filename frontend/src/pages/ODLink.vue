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
                        <div class="main-wrap"  style="min-height:900px ;padding-top:9%">
                             <div class="container">
                                <div class="col-xs-3">

                                </div>
                                <div class="col-xs-6" style="margin-bottom:40px">
                                    <div class="col-xs-4 tabBtn" >
                                    <router-link to="/ODLink/ODlinks"> Demographic</router-link>
                                    </div>
                                    <div class="col-xs-4 tabBtn" >
                                    <router-link to="/ODLink/ODlinks/Functional"> Functional Capability </router-link>
                                    </div>
                                    <div class="col-xs-4 tabBtn">
                                    <router-link to="/ODLink/ODlinks/CrossOrg"> Cross Org Capability</router-link>
                                    </div>
                                </div>
                             </div>
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

<style scoped>
.tabBtn{
      background-color: #848b90;
    color: white;
    padding: 4px;
    border: 1px solid #80808091;
}
.tabBtn .router-link-exact-active.activeLink{
        color: black;
}
</style>
