type Review = number | boolean

function saveReview(rating:Review){
    if(rating){
        console.log( `User rated with ${rating} stars`)
    } else{
        console.log('User has not rated')
    }
}