// TODO: Declare any global variables we need
// number of heads: 0
// number of tails: 0
// imageElement: node
// resultMessageElement: node

// function updateTable content
    // set heads text content to numberOfHeads
    // set tails text content to numberOfTails
    // if (numberOfHeads + numberOfTails)
        // set percentageHeads to (numberOfHeads/(numberOfHeads + numberOfTails))
        // set percentageTails to (numberOfTails/(numberOfHeads + numberOfTails))
        // else
            // set percentageHeads to 0
            // set percentageTails to 


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
    // select flip button and add event listener
        // listening for a click
        // on click
            // create isHeads variable
            // see if it's heads or tails
                // generate a random number
                    // if odd isHeads = true
                    // if even isHeads = false
            // if isHeads
                // add one to heads
                // change text content to "You flipped heads!"
                // change src property on imageElement to './assets/images/pennny-heads.jpg'
                // update table content
             // if !isHeads
                // add one to tails
                // change text content to "You flipped tails!"
                // change src property on imageElement to './assets/images/pennny-tails.jpg'
                // update table content

    // select clear button and add event listener
        // listening for a click
            // numberOfHeads to 0
            // numberOfTails to 0
            // Update Table Content
            // change text content to 'Let's get to flipping!'