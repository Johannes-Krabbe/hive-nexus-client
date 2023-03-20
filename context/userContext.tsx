export const User = () => {
  var userID: string;
  var createdAt: Date;
  var username: string;

  var getUser = function() {
    const user = localStorage.getItem('hn-user')
    return user
  }

  var setUser = function(id: string, date: Date, name: string) {
    userID = id;
    createdAt = date;
    username = name;

    localStorage.setItem('hn-user', JSON.stringify({
      userID,
      createdAt,
      username
    }))
  }

  // var getUserID = function() {
  //   return userID;
  // }

  // var getCreatedAt = function() {
  //   return createdAt;
  // }

  var getUsername = function() {
    return username;
  }
}
