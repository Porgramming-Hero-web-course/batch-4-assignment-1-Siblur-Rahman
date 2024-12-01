class Car {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    getCarAge(): string {
      const currentYear = new Date().getFullYear();

      const ageOfCar= currentYear - this.year;

      return `${ageOfCar} (assuming current year is ${currentYear})`
    }
  }
  