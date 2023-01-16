//FUNCIONES
import { filterSearch } from "./filter_search.js"
import { filterFullTime } from "./filter_fulltime.js";
import { filterCity } from "./filter_city.js";
import { renderJobs } from "./render_jobs.js";
import { filterLocation } from "./filter_location.js";

//VARIABLES
import { data } from "./get_all_jobs.js"

//DEARROLLO
export const filterAll = (filterData) => {
    const $busqueda = document.getElementById("input-search");
    const $fullTime = document.getElementById("fulltime");
    const $onCity = document.querySelector(".onCity");
    const $filterLocation = document.getElementById("filter-location");
    
    filterData = data;

    //FILTRO DE BUSQUEDA
    filterData = filterSearch(filterData,$busqueda.value);
    filterData = filterFullTime(filterData, $fullTime);
    filterData = filterCity(filterData, $onCity.value);
    filterData = filterLocation(filterData, $filterLocation.value);

    //Validacion de si tiene elementos o no
    if(filterData.length != 0){
        renderJobs(filterData,1)
    }else{
        renderJobs(filterData,0);
        filterData = data;
    }

    return filterData;
}