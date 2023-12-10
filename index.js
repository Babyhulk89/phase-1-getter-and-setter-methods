class Circle {
    #radius;
  
    constructor(radius) {
      this.#radius = radius;
    }
  
    // Getter method for diameter
    get diameter() {
      return this.#radius * 2;
    }
  
    // Getter method for circumference
    get circumference() {
      return Math.PI * this.diameter;
    }
  
    // Getter method for area
    get area() {
      return Math.PI * Math.pow(this.#radius, 2);
    }
  
    // Setter method for diameter
    set diameter(value) {
      this.#radius = value / 2;
    }
  
    // Setter method for circumference
    set circumference(value) {
      this.#radius = value / (2 * Math.PI);
    }
  
    // Setter method for area
    set area(value) {
      this.#radius = Math.sqrt(value / Math.PI);
    }
  
    // Getter method for radius
    get radius() {
      return this.#radius;
    }
  }
  
  // Export the Circle class if needed
  module.exports = Circle;
  