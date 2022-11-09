function fuel(nearestPump, mpg, gallonsLeft){
    x = mpg * gallonsLeft;
    return nearestPump <= x;
}

module.exports = fuel;