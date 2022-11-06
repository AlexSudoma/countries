console.log(countries);
var htmlString = '';
for (var item = 0; item < countries.length; item++) {
    var country = countries[item];
    htmlString += `<tr>
    <td>${country.name.official}</td>
    <td>${country.region}</td>
    <td>${country.population}</td>
    <td><img src="${country.flags.png}"class="col-10"></td>
</tr>`
}
document.getElementById('countries').innerHTML = htmlString;