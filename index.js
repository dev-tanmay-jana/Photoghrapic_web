let boxlist = document.getElementById("boxlist")
boxlist.style.maxHeight ="0px"

function togglemenue(){
    if(boxlist.style.maxHeight=="0px")
    {
        boxlist.style.maxHeight="20rem"
        console.log('click')
    }
    else{
        boxlist.style.maxHeight="0px"
    }
}