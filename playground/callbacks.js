var getUser=(id,callback) => {
  var user={
    id:id,
    name:"Manmeet"
  };
  setTimeout(() =>{
    callback(user);
  },3000);
callback("Fuck");
};

getUser(12,(user) =>{
  console.log(user);
});
