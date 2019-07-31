// New Instance of XMLHttpRequest

if (window.XMLHttpRequest)    //  Objet standard
{ 
    xhr = new XMLHttpRequest();     //  Firefox, Safari, ...
} 
else  if (window.ActiveXObject)      //  Internet Explorer
{
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
}
// DOM element recever

let demo = document.getElementById(/*id */)
let link = document.getElementById(/*triger */)

// event
link.addEventListener( /*event */ (e) => {
    e.preventDefault()
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            let data =  JSON.stringify(this.response /* part needed */)
            
            // inject
            demo.innerHTML = data
        }
    }
    xhr.open("GET", "" /*your file  */, true)
    xhr.responseType = "json"
    xhr.send( /*prams if needed */ )
})
