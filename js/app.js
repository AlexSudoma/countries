console.log(countries);
var htmlString = '';
for (var country of countries) {
    htmlString += `<tr>
    <td>${country.name.official}</td>
    <td>${country.region}</td>
    <td>${country.population}</td>
    <td class="text-center"><img src="${country.flags.png}" class="w-5-rem"></td>
</tr>`
}
document.getElementById('countries').innerHTML = htmlString;