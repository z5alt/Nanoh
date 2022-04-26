function removeLine()
{
    var removeval = document.getElementById('test').value;
    removeval = removeval.trim();
    var n = removeval.split("\n");
    delete n[(n.length)-1];
    var newval = n.join('\n');
    document.getElementById('test').value = newval;
}