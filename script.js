var guys = {
	"yuuki": "http://steamcommunity.com/profiles/76561198128126194",
	"plopp": "http://steamcommunity.com/profiles/76561198195043517",
	"ode": "http://steamcommunity.com/profiles/76561198298804931"
}

var links = {
	"sudoku": "http://steamcommunity.com/group/sudokudeath"
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

for (var link in links)
{
	var pre = document.createElement("pre");
	var node = document.createElement("a");
	var text = document.createTextNode(link);

	node.appendChild(text);
	node.href = links[link];
	node.target = "_blank";
	pre.appendChild(node);
	center.appendChild(pre);
}
