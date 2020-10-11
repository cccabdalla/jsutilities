
/**
 * Used to get maxmimum or latest date
 */
 const dates = [
     new Date(2017,4,13),
     new Date(2018,2,12),
     new Date(2016,0,10),
     new Date(2016,0,9)
 ];
 function getMaxDate(dates){
     if(!dates ||!dates.length || dates.length <= 1)
        return dates;

    return new Date(Math.max.apply(null,dates));
 }



 /**
 * Used to get minimum or earliest date
 */

function getMinDate(dates){
    if(!dates ||!dates.length || dates.length <= 1)
       return dates;

    return new Date(Math.min(...dates));
}

console.log('Max date: ' + getMaxDate(dates));
console.log('Min date: ' +getMinDate(dates))