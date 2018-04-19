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
                            </div>
                        </div>
                    </div>
                    <main>
                        <div class="main-wrap"  style="min-height:900px ;padding-top:9%">
                             <div class="container-fluid">
                                <div class="col-xs-2">
                                    <div class="col-xs-12 tabBtn" >
                                    <router-link to="/ODLink/ODlinks"> Demographic</router-link>
                                    </div>
                                    <div class="col-xs-12 tabBtn" >
                                    <router-link to="/ODLink/ODlinks/Functional"> Functional Capability </router-link>
                                    </div>
                                    <div class="col-xs-12 tabBtn">
                                    <router-link to="/ODLink/ODlinks/CrossOrg"> Cross Org Capability</router-link>
                                    </div>
                                </div>
                                <div class="col-xs-9" style="margin-bottom:40px">
                                    <router-view/>
                                </div>
                             </div>
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
