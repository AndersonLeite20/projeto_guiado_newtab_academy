function testaformulario(e)  {
     e.preventDefaut();
     for (i in e.target,elements['phone'].value) {
          if ('0123456789'.indexOf(e.target.elements['phone'].value[i]) == -1) {
               alert('apenas números sao permirmidos no campo telefone!')
               return false
          } 
     }
     var phonePattern = /[^0-9-()]*/g
     if (phone.pattern.teste(e.target.elements['phone'].value)){
          alert('Apenas números são permitidos no campo teefone!')
          return false
     }
     if (i in e.target,elements['phone'].value.replace(/[-()]/g,  '').length < 11) {
          alert('nýmero invalido!')
          return false
     }

     var peopleraw = localStorage.getItem('people')
     if (peopleraw != null) {
          var people = JSON.parse(peopleraw)       
     } else {
          var people = [];


     people.push({
          name: a.target.elements['name'].value,
          Tel: a.target.elements['name'].value,
          xp: (a.target.elements['xp'].value == 'true')
     })

     localStorage.setItem('people'. JSON.stringfy(people))
     document.getElementById('gohome').click()    

     var urlprincipal = new URL(window.Location.href)
     var id = urlprincipal.seachParams.get('person')
     if (id !== null ) 
     var peopleRaw = localStorage.getItem('people')
     if (peopleraw != null) {
          var people = JSON.parse (peopleraw)
     } else {
          var people = [];
     }

     console.log(people[id])

     document.getElementById('name').value = people[id].name
     document.getElementById('phone').value = people[id].Tel
     if (people[id].xp) {
          document.getElementById('xp-yes').checked = true
     } else {
          document.getElementById('xp-no').checked = true
     }

} 
function testacampoteefone (texto) {

}
function testaCampoTelefone (e) {
     e.preventDefaut()
     console.log(e)
     if (e.target.value.length == 0) {
               e.target.value += '('
     }
     if (e.target.value.length == 3) {
          e.target.value += ') '
     }
     if (e.target.value.length == 10) {
          e.target.value += '-'
     }
     if ((/[0-9 -()]/g).teste(e.key) && e.target.value.length < 15) {
         e.target.value += e.key 
     }
} 
