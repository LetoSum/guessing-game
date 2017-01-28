class GuessingGame {
    constructor() {}

    setRange(min, max) {
    	this.min = min + 1;
    	this.max = max - 1;
    }

    guess() {
    	return Math.round((this.max - this.min)/2 + this.min);
    }

    lower() {
    	this.max = this.guess() - 1;
    }

    greater() {
    	this.min = this.guess() + 1;
    }
}

module.exports = GuessingGame;
