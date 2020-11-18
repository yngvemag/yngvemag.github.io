function calculate()
{
    _inElement = document.getElementById("tall1");
    var v = parseInt( _inElement.value);

    var res = v**2;    
    _inElement.value = res
}