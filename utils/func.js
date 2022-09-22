export const mappingArsip = (data) => {
    // return data[0].date.split(' ')

    let arrDate = {
        year:[],
        monthYear : []
    };

    data.forEach((e)=>{
        var [date,month,year] = dateToStr(e.date).split(' ');
        if(!arrDate.year.includes(year)){
            arrDate.year.push(year)
        }
        if(!arrDate.monthYear.includes(`${month} ${year}`)){
            arrDate.monthYear.push(`${month} ${year}`)
        }
    })

    arrDate.monthYear.forEach((e,i)=>{
        let [month,year] = e.split(" ");
        arrDate.monthYear[i] = {
            month : month,
            year : year
        }
    })

    return arrDate;
}

export const currentDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    return today;
}

export const sortDate = (data=[], by="asc") => {
    if (by == "asc"){
        return data.sort((a,b)=> new Date(a.date).getTime()-new Date(b.date).getTime() );
    }else if(by == "desc"){
        return data.sort((a,b)=> new Date(b.date).getTime()-new Date(a.date).getTime() );
    }else{
        console.error("sortDate by error");
    }
}


export const dateToStr = (date) =>{
    const [year,month,dateNum] = date.split('/');

    switch (month) {
        case "01" :
            month = "Januari";
            break;
        case "02" :
            month = "Februari";
            break;
        case "03" :
            month = "Maret";
            break;
        case "04" :
            month = "April";
            break;
        case "05" :
            month = "Mei";
            break;
        case "06" :
            month = "Juni";
            break;
        case "07" :
            month = "Juli";
            break;
        case "08" :
            month = "Agustus";
            break;
        case "09" :
            month = "September";
            break;
        case "10" :
            month = "Oktober";
            break;
        case "11" :
            month = "November";
            break;
        case "12" :
            month = "Desember";
            break;
    }

    return `${dateNum} ${month} ${year}`;
}
