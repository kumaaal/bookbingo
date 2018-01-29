function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      console.log('connection status : already connected**');
      //document.getElementById('fb-btn').style.display = 'none';
        testAPI();

    }else {
      // The person is not logged into your app or we are unable to tell.

      //document.getElementById('fb-btn').style.display = 'block';
      //testAPI();
    }
  }
function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    var imageUrl;
    FB.api('/me', function(response) {
      if (!response || response.error) {
    //alert('Error occured');
        alert("Server Error**!");
      } else {
    //alert('Post ID: ' + response.id);

      console.log("fine****");
      }
      imageUrl = "http://graph.facebook.com/" + response.id + "/picture?type=normal";
      console.log("original response: "+imageUrl);
        console.log('Successful login for: ' + response.name);
        console.log('user id : '+response.id);
        //console.log(response.data);

      //document.getElementById('status').innerHTML =
       // 'Thanks for logging in, ' + response.name + '!';
        //https://graph.facebook.com/{facebookId}/picture?type=small
        // document.getElementById('login').style.display = "block";
          //document.getElementById('someImage').innerHTML = '<img src="http://graph.facebook.com/' + response.id + '/picture?type=small" />';
          //document.getElementById("profileImage").setAttribute("src", "http://graph.facebook.com/" + response.id + "/picture?type=normal");
          //console.log("original response**: "+imageUrl);
    return imageUrl;
    });

  }
FB.login(function(response){
  // Handle the response object, like in statusChangeCallback() in our demo
  // code.
   statusChangeCallback(response)
});

FB.login(function(response) {
  // handle the response
}, {scope: 'public_profile,email'});

FB.login(function(response) {
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
  } else {
    // The person is not logged into this app or we are unable to tell.
  }
});

FB.logout(function(response) {
   // Person is now logged out
});
