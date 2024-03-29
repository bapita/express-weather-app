const submitbtn = document.getElementById("submitbtn");
const cityname = document.getElementById('cityname');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

// data hide trick
const datahide = document.querySelector('.middle_layer');


const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityname.value;    
    // using fetch API 
    if(cityVal === "") {
        city_name.innerText = "Please write the name of the City";
        datahide.classList.add('data_hide');

    }else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=dbe7ec7fd358d632555d8a6d51fb087d`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            temp.innerText = arrData[0].main.temp;
            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;

            const tempmood = arrData[0].weather[0].main;

            //condition check  temp_status
            if(tempmood === "Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68'></i>";
            }else if(tempmood === "Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6'></i>";
            }else if(tempmood === "Rain"){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be'></i>";
            }else{
                temp_status.innerHTML = "<i class='fas fa-smog' style='color: #f1f2f6'></i>";
            }

            datahide.classList.remove('data_hide');

        } catch (error) {
            city_name.innerText = "Error!! No data received from your City";
            datahide.classList.add('data_hide');
        }
    }
}

// adding event listner
submitbtn.addEventListener("click", getInfo);