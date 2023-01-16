export const filterCity = (filterData, city) => {

    if(city != "all") filterData = filterData.filter(job => job.location == city); 

    return filterData;
}