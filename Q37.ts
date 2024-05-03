//Q37.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

//message
class shirt{
    size:string;
    message: string;
    constructor(size: string = "large" ,message: string =" I love pakistan"){
        this.size= size;
        this.message =message;
    }
    displayShirtInfo(){
        console.log(`size:${this.size},message:${this.message}`);
    }
}
function make_shirt(size: string = "large",message: string ="I love karachi;"){
    return new shirt(size ,message);

}
 //large shirt with message
 const largeShirt = make_shirt();
 largeShirt.displayShirtInfo();
 
 //medium shirt with message
 const mediumSirt = make_shirt("medium;");
 mediumSirt.displayShirtInfo();

 //small shirt with message

const customShirt =make_shirt("small;");
customShirt.displayShirtInfo();

