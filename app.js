
// Sample Input
const blocks = [
{
    "gym": false,
    "school": true,
    "store": false
},
{
    "gym": true,
    "school": false,
    "store": false
},
{
    "gym": true,
    "school": true,
    "store": false
},
{
    "gym": false,
    "school": true,
    "store": false
},
{
"gym": false,
"school": true,
"store": true
}
]
const reqs = ["gym", "school", "store"]

// Passing the arguments in below function
apartmentHunting(blocks, reqs)

function apartmentHunting(blocks, reqs) {
    // Write your code here.

    //1. Initialize the optimal block to first block
    let optimalBlock = 0;

    //2. Initialize the minimum distance to the maximum possible distance
    let optimalDistance = blocks.length;   //5 as given input

    //3. Iterate over block variable 
    for (let i = 0; i < blocks.length; i++) {
        
        // 4. initialize distance as 0 within block
        let distance = 0;

        //5 .Iterate over required building variable 
        for(let j = 0; j < reqs.length; j++){

            //5. Check if the req building is in the block 
            if(blocks[i][reqs[j]]){

                //6. Update the distance, if present
                distance = Math.max(distance, Math.abs(i - optimalBlock));

            }else{ 
                // 7. if the reqired buildingis not present, find the closest block with the required building
                // k will check later blocks for the jth value
                for(let k = i + 1; k < blocks.length; k++){
                    if(blocks[k][reqs[j]]){
                        distance = Math.max(distance, k - i);
                        break;
                    }
                }
            }
        }
        //8. If the distance is smaller than the current optimal distance, update the optimal block and distance
        if(distance < optimalDistance){
            
            //9. save i's value into into optimalBlock
            optimalBlock = i;

            //10. save distance's value into optimalDistance
            optimalDistance = distance;
        }
    }
    //11 after complete iteration return value of optimal block
    return optimalBlock;

    /* Here the optimalBlock = 3rd index  
    and optimalDistance = 1 as person can walk for store at 4th index and 
    for gym person can walk 2nd index
    */
    
  }
  
  // Do not edit the line below.
  exports.apartmentHunting = apartmentHunting;
  
  
