function formatDataTextNode(str) 
{
	if (str !== undefined)
	{
		str = str.replace(/\n|\t/g, " ");
		str = str.replace(/ {2,}/g, " ");
		str = str.trim();
	}

	return (str);
}

function showChildren(htmlEl)
{
	var el = htmlEl.firstChild;
	while (el !== null)
	{
		if (formatDataTextNode(el.data) !== "")
			console.log(el);

		el = el.nextSibling;
	}	
}
