var guys = {
	"yuuki": "http://steamcommunity.com/id/ezwallhack",
	"plopp": "http://steamcommunity.com/id/unsuccessful",
	"ode": "http://steamcommunity.com/id/9mil"
}

var marquee = document.getElementsByClassName("js-marquee")[0];

for (var guy in guys)
{
	var node = document.createElement("a");
	var text = document.createTextNode(guy);

	node.appendChild(text);
	node.href = guys[guy];
	node.target = "_blank";
	marquee.appendChild(node);

	var keys = Object.keys(guys);
	if (guy != keys[keys.length - 1])
		marquee.innerHTML += ' - ';
}

var center = document.getElementById("center");
