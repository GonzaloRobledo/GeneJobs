export const renderJobs = (data, page) => {
    const $listJobs = document.getElementById("list-jobs");
    const $page = document.getElementById("num-page");

    const min = (page-1)*5;
    let max = (page-1)*5+5;

    if(data.length<max) max -= (max - data.length);
    
    let info = "";

    if(page!=0){
        for(let i=min; i<max;i++){
            info+=`
                <li data-id=${i}>
                    <img src="https://th.bing.com/th/id/OIP.BxEl0HcybhKJon35uJXkvQAAAA?pid=ImgDet&rs=1" alt="company-logo">
                    <div class="info-job">
                        <h3>${data[i].company_name}</h3>
                        <h2>${data[i].title}</h2>
                        <div class="site-day">
                            <div>
                                ${data[i].job_types.length != 0 ? (data[i].job_types.map(el=>`<p>${el}</p>`)).join("") : `<p>Sin datos</p>` }
                            </div>
                            <div>
                                <p>${data[i].location}</p>
                                <p>${Math.floor(data[i].created_at/1000/60/60/24)} days Ago</p>
                            </div>
                        </div>
                    </div>
                </li>
            `
        }
    }

    info != "" ? $listJobs.innerHTML = info : $listJobs.innerHTML = `<p class="not-find">Sin coincidencias :(</p>`;
    $page.textContent = page;
}