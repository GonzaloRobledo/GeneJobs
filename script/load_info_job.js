export const loadInfoJob = (info) => {
    const $infoJob = document.getElementById("info-job");
    const $title = document.querySelector("title");

    $title.textContent = `GeneJobs - ${info.company_name}`
    
    $infoJob.innerHTML = `
    <div class="job-type">
        <h1>${info.title}</h1>
        ${info.job_types.length != 0 ? (info.job_types.map(el=>`<p>${el}</p>`)).join("") : "<p>Sin datos</p>"}
    </div>
    <p class="days-ago">${Math.floor(info.created_at/1000/60/60/24)} days Ago</p>
    <div class="img-name-city">
        <img src="https://th.bing.com/th/id/OIP.BxEl0HcybhKJon35uJXkvQAAAA?pid=ImgDet&rs=1" alt="logo-company">
        <div>
            <h3 class="name-company">${info.company_name}</h3>
            <p class="location-company">${info.location}</p>
        </div>
    </div>
    <div class="info-job">
        ${info.description}
    </div>
    <button class="btn-apply">Apply</button>
    `
}