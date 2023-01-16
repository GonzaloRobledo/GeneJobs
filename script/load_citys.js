export const loadCitys = (filterData) => {
    const citys = new Set();
    let city = `
        <div>
            <input checked type="radio" value="all" id="all" name="city" class="city onCity">
            <label for="all">All</label>
        </div>`;

    filterData.forEach(el=>citys.add(el.location));

    citys.forEach(el => {
        city += `
        <div>
            <input type="radio" value="${el}" id="${el}" name="city" class="city">
            <label for="${el}">${el}</label>
        </div>`
    })
    
    document.getElementById("citys").innerHTML = city;
}