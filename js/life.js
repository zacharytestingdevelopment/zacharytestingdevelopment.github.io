
//Structure to define a given organism's decision making 
//In order for program to not self-terminate immediately, initial getCurrentPleasure() must be greater than initial getFuturePleasureEstimate()

//Current user --> Zachary Jordan
var user = firebase.user.getCurrent();

//This function describes what decision the user is most likely to make in the future
void lifeDecision()
{
    if (user.getCurrentPleasure() < user.getFuturePleasureEstimate()) {
        return terminate;
    }
    else {
        identifyPleasure();
    }
}

//Pleasure in a given moment (KNOWN VALUE)
function getCurrentPleasure() {
    return pleasure;
}

//Estimated pleasure in a future moment (ESTIMATED VALUE)
function getFuturePleasureEstimate() {
    return pleasureEstimate
}

//Estimated best path to aquire more pleasure
function identifyPleasure() {
    return bestPath;
}
