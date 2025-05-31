
let input = prompt('what would u like to do')
const todo = ['collect chicken eggs ', 'clean cat litter box']
while(input !=='quit' && input !== 'q'){
   if(input === 'list'){
      console.log('**********')
      for(let i = 0 ; i< todo.length; i++){
         console.log(i + ' : ' + todo[i])
      }
      console.log('**********')
   }else if (input === 'new'){
      const newtodo = prompt('ok, what is the new todo?')
      todo.push(newtodo);
      console.log(newtodo +' add to the list ')
   }else if (input === 'delete'){
      const index = prompt('ok enter the index');
      todo.splice(index,1);
      console.log('deleted'+ index)
   }
   input = prompt('what would u like to do')
}
console.log("you quit the todo app")