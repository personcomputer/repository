let redStripeWidth = 0;
let yellowStripeWidth = -3;
let newRedStripeWidth = 0;

let x = innerWidth/5;
let y = innerHeight/5;
 
let stripeHeight = (innerHeight/5)/3;




function setup() {
  createCanvas(innerWidth, innerHeight);
  background(255, 255, 255); // white background

}

function draw() {
  

  // Draw the first red stripe from left to right
  noStroke();
  fill(206, 17, 38);
  rect(x, y, redStripeWidth, stripeHeight);
  // Increase width of red stripe each frame
  if (redStripeWidth + x <= 4 * x) {
    redStripeWidth += 3;
  }
  
  // Once the first red stripe reaches full width, draw the yellow stripe from right to left at the bottom of the first stripe
  if (redStripeWidth + x >= 4 * x && yellowStripeWidth + x <= 4 * x) {
    noStroke();
    fill(255, 211, 0);
    rect(4 * x - yellowStripeWidth, y + stripeHeight, yellowStripeWidth, stripeHeight);
    yellowStripeWidth += 3; // Increase height of yellow stripe each frame
  }
  
  // Once the yellow stripe reaches full width, draw the last red stripe below the yellow stripe from left to right
 
    noStroke();
    fill(206, 17, 38);
    rect(x, y + stripeHeight * 2, newRedStripeWidth, stripeHeight);
   if (yellowStripeWidth + x >= 4 * x && newRedStripeWidth + x <= 4 * x) {
    newRedStripeWidth += 3; // Increase width of red stripe each frame
  }
  


}