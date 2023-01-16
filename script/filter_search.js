import { data } from "./get_all_jobs.js";

export const filterSearch = (filterData, input) => {
    const texto = input.toLowerCase();
    
    return input != "" ? filterData.filter(el=>el.title.toLowerCase().includes(texto) || el.company_name.toLowerCase().includes(texto)) : data;
}