const team = [
{
    nome : 'Wayne Barnett',
    ruolo : 'Founder & CEO',
    immagine : 'wayne-barnett-founder-ceo.jpg'
},
{
    nome : 'Angela Caroll',
    ruolo : 'Chief Editor',
    immagine : 'angela-caroll-chief-editor.jpg'
},
{
    nome : 'Walter Gordon',
    ruolo : 'Office Manager',
    immagine : 'walter-gordon-office-manager.jpg'
},
{
    nome : 'Angela Lopez',
    ruolo : 'Social Media Manager',
    immagine : 'angela-lopez-social-media-manager.jpg'
},
{
    nome : 'Scott Estrada',
    ruolo : 'Developer',
    immagine : 'scott-estrada-developer.jpg'
},
{
    nome : 'Barbara Ramos',
    ruolo : 'Graphic Designer',
    immagine : 'barbara-ramos-graphic-designer.jpg'
}
];
// ------------------------------------------------------------------------------------------
for (let i = 0; i < team.length; i++) {
    console.log(team[i].nome);
    console.log(team[i].ruolo);
    console.log(team[i].immagine);
    console.log('------------------------------');
};
// ------------------------------------------------------------------------------------------                      
// document.getElementById('persona1').innerHTML = team[0].nome + '<br>';
// document.getElementById('persona1').innerHTML += team[0].ruolo + '<br>';
// document.getElementById('persona1').innerHTML += '<img src="img/' + team[0].immagine + '">';
// ------------------------------------------------------------------------------------------
// document.getElementById('persona2').innerHTML = team[1].nome + '<br>';
// document.getElementById('persona2').innerHTML += team[1].ruolo + '<br>';
// document.getElementById('persona2').innerHTML += '<img src="img/' + team[1].immagine + '">';
// ------------------------------------------------------------------------------------------
// document.getElementById('persona3').innerHTML = team[2].nome + '<br>';
// document.getElementById('persona3').innerHTML += team[2].ruolo + '<br>';
// document.getElementById('persona3').innerHTML += '<img src="img/' + team[2].immagine + '">';
// ------------------------------------------------------------------------------------------
// document.getElementById('persona4').innerHTML = team[3].nome + '<br>';
// document.getElementById('persona4').innerHTML += team[3].ruolo + '<br>';                                     */💀💀💀💀💀💀/*
// document.getElementById('persona4').innerHTML += '<img src="img/' + team[3].immagine + '">';
// ------------------------------------------------------------------------------------------
// document.getElementById('persona5').innerHTML = team[4].nome + '<br>';
// document.getElementById('persona5').innerHTML += team[4].ruolo + '<br>';
// document.getElementById('persona5').innerHTML += '<img src="img/' + team[4].immagine + '">';
// ------------------------------------------------------------------------------------------
// document.getElementById('persona6').innerHTML = team[5].nome + '<br>';
// document.getElementById('persona6').innerHTML += team[5].ruolo + '<br>';
// document.getElementById('persona6').innerHTML += '<img src="img/' + team[5].immagine + '">';
// ------------------------------------------------------------------------------------------

for (i = 0; i < team.length; i++) {

    document.getElementById('persona' + [(i + 1)]).innerHTML += team[i].nome + '<br>';
    document.getElementById('persona' + [(i + 1)]).innerHTML += team[i].ruolo + '<br>';
    document.getElementById('persona' + [(i + 1)]).innerHTML += '<img src="img/' + team[i].immagine + '">';

}