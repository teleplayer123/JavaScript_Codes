function lychrelTest() {
    var originalNum=document.getElementById('number').value;
    if (isNaN(parseInt(originalNum))) {
        alert ('"'+originalNum+'" is not a number');
        return;
    }

    var result = document.getElementById('result');
    result.innerHTML = "";

    var current=originalNum;
    var palindrome=false;
    var x;
    for (x=0; x<50; x++) {
        var rev = current.split("").reverse().join("");
        var attempt = current + "+" + rev;
        current = (parseInt(current) + parseInt(rev)).toString();
        result.innerHTML += attempt + "=" + current + "<br/>";
        if (current == current.split("").reverse().join("")) {
            palindrome=true;
            break;
        }
    }
    result.innerHTML+=(palindrome ? ("NO: "+current+" after "+(x+1)+" iterations") : "YES");
}
