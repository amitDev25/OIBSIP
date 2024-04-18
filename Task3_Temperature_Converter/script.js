const convertBtn=()=> {
            
    let deg = document.getElementById("degree").value;
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");
    let deg2;
    
    


    if (unit == 'celsius'){
        deg2 = (deg * 1.8) + 32;
        // console.log(deg2);
        result.innerHTML = `${deg2} °F`;
        result.style.color = "black";

    }

    else if (unit == 'fahrenheit'){
        deg2 = (deg - 32) / 1.8;
        // console.log(deg2);
        result.innerHTML = `${deg2} °C`;
        result.style.color = "black";


    }

    

}

document.getElementById("convert").addEventListener("click", (event)=>{
    event.preventDefault();
});
