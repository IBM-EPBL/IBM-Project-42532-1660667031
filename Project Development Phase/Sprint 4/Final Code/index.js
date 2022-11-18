
var data = [
  {
      username:"esai",
      password:"0020"    
  },
  {
      username:"abdul",
      password:"0001"
  },
  {
      username:"riyas",
      password:"0004"
  },
  {
      username:"senthil",
      password:"0050"
  },
  {
    username:"vijay",
    password:"0055"
}
]
function login(){
  var uname = document.getElementById("username").value
  var pass = document.getElementById("password").value

  for (i = 0; i<data.length; i++){
      if (uname == data[i].username && pass == data[i].password){
          window.location.replace("home.html")
          return false
      }
  }
  alert("incorrect password")
}
function register(){
  var runame = document.getElementById("username").value
  var rpass = document.getElementById("password").value
  var rpass1 = document.getElementById("password1").value
  if (rpass == rpass1){
      var rdata = {
          username: runame,
          password: rpass
      }
  }else{
      alert("password doesn't match")
      return
  }
  
  for (i = 0; i<data.length; i++){
      if (runame == data[i].username){
          alert("Username not available")
          return false
      }
  }
  data.push(rdata)
  window.location.replace("home.html")
}