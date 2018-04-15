<template>
   <div style="width:'100%';height:'100%';position:relative">
        <video autoplay muted loop id="myVideo">
            <source src="../assets/martytrvn v3.mp4" type="video/mp4">
        </video>

    <div class="login-form">
        <form class="form">
            <div class="row">
                <div class="col-sm-6">
                    <div class="form-group">
                        <label for="email">Username</label>
                        <input type="text" class="form-control" placeholder="Enter Username">
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="form-group">
                        <label for="pwd">Password</label>
                        <input type="password" class="form-control" placeholder="Enter Password">
                    </div>
                </div>
            </div>
            <router-link to="/Home" class="submitLogin btn">Submit</router-link>
            <!-- <button type="submit" class="btn btn-default">Submit</button> -->
        </form>
    </div>
       </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {

    };
  },
};
</script>
<style scoped>
* {
    box-sizing: border-box;
    /* margin: 0; */
    /* overflow: hidden; */
}
html,body{
    max-height:100%;
    max-width: 100%;
    overflow: hidden;
}
​body {
    margin: 0;
    font-family: Arial;
    font-size: 17px;
    position: relative;
     overflow: hidden;
}
​#myVideo {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
}
video {
    max-width: 100%;
    min-width: 100%;
}

.login-form {
    background-color: #252430;
    padding: 20px;
    width: 40%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 999999;
}

.login-form input.form-control {
    background-color: #252430;
    border: 1px solid #366270;
}

.login-form .submitLogin {
      background-color: #366270;
    color: #252430;
    border: 1px solid #366270;
    padding: 3px 10px;
    border-radius: 3px;
    float: right;
}

.login-form label {
    color: #366270;
    text-transform: capitalize;
}

.login-form button[type="submit"] {
    float: right
}
input::-webkit-input-placeholder,
input::-moz-placeholder,
input:-ms-input-placeholder,
input:-moz-placeholder {
    color: #366270;
}
.login-form button[type="submit"]::-webkit-input-placeholder { /* Chrome/Opera/Safari */
color: red;
}
::-moz-placeholder { /* Firefox 19+ */
color: red;
}
:-ms-input-placeholder { /* IE 10+ */
color: pink;
}
:-moz-placeholder { /* Firefox 18- */
color: pink;
}
</style>

