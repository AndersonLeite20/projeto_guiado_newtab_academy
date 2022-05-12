var peopleRaw = localStorage.getItem('people')
if (peopleRaw != null) {
     var people = JSON.parse(localStorage.getItem('people'))
} else {
     var people = [];
} 
function desenhatebele() {

     currntLines = [...document.querySelectorAll('table.lista tbody .dinamic-content')];
     currntLines.forEach((element) => {
          element.remove()
     }) 
     for (person in people) {
          document.querySelector('table.lista tbody').innerHTML += `<tr style="backgroud-color:${((person % 2 == 0)? '#fff' : '#eee')}">
               <td>${people[person].name}</td>
               <td>${people[person].tel}</td>
               <td>${people[person].xp ? '<strong><span style="color:green">sim</span>' : '<span style="color:red">Não</span></strong>'} ; </td>
               <td>
                    <button onclick="deleteUser(${person})"</button>
                    <a href="./src/form.html?person=${person}">Editar</a>
               </td>

          </tr>`
     }
}
function deleteUser(p) {
     people.splce(p, 1);
     desenhatebele();
     localStorage.setItem('people', JSON.stringify(people))
}


               /*<tr>     <td>Nome</td>
                    <td>Telefone</td>
                    <td>Experiência prévia</td>
                    <td>Ações</td>
               </tr>
               <tr>
                    <td>Fernando Henrrique Carvessan Santos Duro</td>
                    <td>+55(14)999999999</td>
                    <td>sim</td>
                    <td><button>Alterar</button></td>
               </tr>
               <tr>
                    <td>Anderson Arcenio Matos da Costa</td>
                    <td>+55(14)999999999</td>
                    <td>sim</td>
                    <td><button>Alterar</button></td>
               </tr>
               <tr>
                    <td>karina do Amaral</td>
                    <td>+55(14)999999999</td>
                    <td>Não</td>
                    <td><button>Alterar</button></td>
               </tr>*/





               /*var people = ([
                    {
          name: 'Fernando Henrrique Caversan Santos Duro',
          tel: '14999999999',
          xp: true
     },
     {
          name: 'Anderson Arcenio Matos da Costa',
          tel: '14999999999',
          xp: true
     },
     {
          name: 'Karina do Amaral',
          tel: '14999999999',
          xp: false
     },
     {
          name: 'Kaue Sanches',
          tel: '14999999999',
          xp: true
     },
];) */