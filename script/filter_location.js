export const filterLocation = (filterData,location) => {
    const loc = location.toLowerCase();

    if(location!="") filterData = filterData.filter(el => el.location.toLowerCase().includes(loc));

    return filterData;
    
}