var path = require("path");
var express = require("express");
var app = express();
var request = require("request");
var Cookies = require("cookies");

// var cookieParser = require('cookie-parser');

module.exports = function(app) {

    app.get("/banana", function(req, res) {
        const cookies = new Cookies(req, res);
        cookies.set("laura", "hello", {httpOnly: false});
        res.send(cookies.get("laura"));
    })

    app.get("/github/callback/", function(req, res) {
        const cookies = new Cookies(req, res);
        var session_code = req.query.code;
        console.log("call back");
        console.log(session_code);

        request({
            url:"https://github.com/login/oauth/access_token",
            method:"POST",
            json:true,
            body:{code: session_code,client_id:"3c9aad92df4d73f9b61b",client_secret:"92dca1ca6a97221dbeb187ac063a58b20d5cf967",accept:"json", redirect_uri:"https://enigmatic-refuge-96879.herokuapp.com/github/callback/home"}
        },
            function (error, response, body) {
                console.log(response.body);
                if (!error&&response.statusCode ==200) {
                    console.log(response);
                    console.log("access token="+response.body.access_token);
                    // cookies.set("access token", response.body.access_token, { path: '/' }); 

                    // var access_token=cookies.get("access token");
                    // console.log(access_token);
            
                    request({
                        url:"https://api.github.com/user?access_token="+response.body.access_token,
                        method:"GET",
                        json:true,
                        headers: {
                            "User-Agent": "request"
                        }
                    },
            
                        function(error, response, body) {
                            console.log(response.body)
                            cookies.set("login", response.body.login, {httpOnly: false});
                            // cookies.set("email", response.body.email, { path: '/'});
                            // cookies.set("name", response.body.name, { path: '/'});
                            // cookies.set("avatar_url", response.body.avatar_url, { path: '/'});
                            console.log(cookies.get("login"));
                            // console.log(cookies.get("email"));
                            // console.log(cookies.get("name"));
                            // console.log(cookies.get("avatar_url"));
                            // localStorage.setItem("login", response.body.login);
                            // console.log(localStorage.getItem("login"));
            
                        }
            
                    );

                    // res.redirect("/");

                    
                }
            }

        );
    });



}