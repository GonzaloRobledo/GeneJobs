export const filterFullTime = (filterData, input) => {

    if(input.classList.contains("on")){
        let filter = [];

        filterData.forEach(job => {
            if(job.job_types.length != 0){
                job.job_types.forEach(type=>{
                    if(type=="Full-time") filter.push(job);
                })
            }
        })
        filterData = filter;
    }

    return filterData;
}