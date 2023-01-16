//VARIABLES
import { data } from "./get_all_jobs.js";
export const $loader = document.getElementById("loader");
let filterData;
let $numPage = document.getElementById("num-page");

//FUNCTIONS
import { getAllJobs } from "./get_all_jobs.js"
import { renderJobs } from "./render_jobs.js";
import { loadCitys } from "./load_citys.js";
import { filterAll } from "./filter_all.js";

//EVENTOS Y DEMAS
document.addEventListener("DOMContentLoaded", async e=>{
    await getAllJobs();
    $loader.classList.add("none");
    renderJobs(data,1);
    filterData = data;
    loadCitys(filterData);
})

document.addEventListener("click", e=>{
    if(e.target.matches(".fa-chevron-left")){
        if($numPage.textContent != 1){
            let numPage = parseInt($numPage.textContent) - 1;
            renderJobs(filterData,numPage);
            $numPage.textContent = numPage;
        }
    }
    if(e.target.matches(".fa-chevron-right")){
        if($numPage.textContent != Math.ceil(filterData.length/5)){
            let numPage = parseInt($numPage.textContent) + 1;
            $numPage.textContent = numPage;
            renderJobs(filterData,numPage);
        }
    }

    if(e.target.matches("#btn-search")) filterData = filterAll(filterData);

    if(e.target.matches("#list-jobs li") || e.target.matches("#list-jobs li *")){
        const id = e.target.closest("li").dataset.id;
        localStorage.setItem("job",JSON.stringify(filterData[id]));
        $loader.classList.remove("none");
        setTimeout(()=>{
            $loader.classList.add("none");
            location.href = "./pages/info_job.html"
        },1500)
    }
})

document.addEventListener("change", e=>{
    if(e.target.matches("#fulltime")){
        e.target.classList.toggle("on");
        filterData = filterAll(filterData);
    }

    if(e.target.matches(".city")){
        const $city = document.querySelectorAll(".city");
        $city.forEach(city=>city.classList.remove("onCity"));

        document.getElementById("filter-location").value = "";
        e.target.classList.add("onCity");
        filterData = filterAll(filterData);
    }
})

document.addEventListener("keyup", e=>{
    if(e.target.matches("#input-search")){
        if(e.target.value == "") filterData = filterAll(filterData);
    }
    if(e.target.matches("#filter-location")) filterData = filterAll(filterData);

})