import { loadInfoJob } from "./load_info_job.js";
const $loader = document.getElementById("loader");

const info = JSON.parse(localStorage.getItem("job"));

document.addEventListener("DOMContentLoaded", e=>{
    loadInfoJob(info);
})

document.addEventListener("click", e=>{
    e.preventDefault();

    if(e.target.matches(".back") || e.target.matches(".back *")){
        localStorage.removeItem("job");
        $loader.classList.remove("none");
        setTimeout(()=>{
            location.href="../index.html";
        },1500)
    }
})