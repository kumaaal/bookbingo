function calculatePrice (){

alert("Executing");
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

FB.login(function(response){
  // Handle the response object, like in statusChangeCallback() in our demo
  // code.
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