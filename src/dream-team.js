const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
  if (members === null) {
    return false;
  }
  let array = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) == 'string') {
      let name = members[i].trim();
      array.push(name[0]);
    }
  }

  let acronym = array.join(',').toUpperCase().split(',').sort().join('');
  return acronym;
};
