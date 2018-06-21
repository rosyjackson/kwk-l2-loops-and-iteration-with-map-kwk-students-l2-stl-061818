// Code your solution in this file.

function other (student){
  return student.toLowerCase();
}

function lowerCaseStudentNames(list) {
return list.map(other) 
}

const students = ['Mary Cassatt', 'Joan Mitchell', 'Eva Hesse', 'Frida Kahlo', 'Taylor Swift', 'Agnes Martin'];

[
  { firstName: 'Mary',   lastName: 'Cassatt'     },
  { firstName: 'Joan',   lastName: 'Mitchell'   },
  { firstName: 'Eva',   lastName: 'Hesse'   },
  { firstName: 'Frida', lastName: 'Kahlo'    },
  { firstName: 'Taylor',   lastName: 'Swift' },
  { firstName: 'Agnes',   lastName: 'Martin'     }
];