var main = function() {
    var availableTags = [
      "SAO PAULO",
      "RIO DE JANEIRO",
      "BELO HORIZONTE",
      "FLORIANÓPOLIS",
      "CURITIBA",
      "FORTALEZA",
      "SALVADOR",
      "ESPÍRITO SANTO",
      "Rio Branco",
      "Maceió",
      "Macapá",
      "Manaus",
      "Brasília",
      "Vitória",
      "Goiânia",
      "São Luís",
      "Cuiabá",
      "Campo Grande",
      "Belém",
      "João Pessoa",
      "Palmas",
      "Aracaju",
      "Boa Vista",
      "Porto Velho",
      "Porto Alegre",
      "Natal",
      "Teresina"
    ];

    var newArray = [];

    for (var i = 0; i < availableTags.length; i++) {
    	var x = availableTags[i].toUpperCase();
    	newArray.push(x);
    }

    $( "#myAutoComplete" ).autocomplete({
      source: newArray
    });
};

$(document).ready(main);