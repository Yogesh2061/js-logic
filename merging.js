//merging 2 arrys of data fetched from seperate APIs into a sinfle list.

 const names = ['CR7','modric','sergio','marcelo','casillas']
 const lastnames=['mbappe','bellingham','van dijk','trent','de gea']

 const fullnames = [...names,...lastnames];
 console.log(fullnames)