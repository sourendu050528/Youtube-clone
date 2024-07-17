export const API_KEY='AIzaSyCWF49sJbA8DatKEGkKaJ99kpJBiLqsQYQ'

 export const value_converter=(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M"
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K"
    }
    else{
        return value
    }
}

export const date_converter=(date)=>{
    

}

