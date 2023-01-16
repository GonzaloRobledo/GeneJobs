export let data = [];

export const getAllJobs = async () => {
    try{
        let res = await fetch('https://arbeitnow-free-job-board.p.rapidapi.com/api/job-board-api',{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': 'fc58e499f0msh6c633a0f6d69291p16edd0jsn0f6f657cf071',
                'X-RapidAPI-Host': 'arbeitnow-free-job-board.p.rapidapi.com'
            }
        })
        let json = await res.json();

        data = json.data;

    }catch(err){
        alert("ERROR getAllJobs")
    }
}