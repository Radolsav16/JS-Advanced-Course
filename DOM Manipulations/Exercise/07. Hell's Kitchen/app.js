function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    const inputEl = document.querySelector("#inputs textarea");
    const bestResturantOutput = document.querySelector("#bestRestaurant p");
    const bestWorkerstOutput = document.querySelector("#workers p");
    const arr = JSON.parse(inputEl.value);
    const infoOfRestourants = [];

    arr.forEach((el) => {
      const workers = [];
      const arrOfItems = el.split(" - ");
      const [resturant, workersStr] = arrOfItems;
      const workesrArr = workersStr.split(", ").join(" ").split(" ");
      let avarageSalary = 0;
      let bestSalary = 0;
      let countWorkers = 0;

      for (let i = 0; i < workesrArr.length; i += 2) {
        const worker = workesrArr[i];
        countWorkers++;
        const salary = Number(workesrArr[i + 1]);
        if (salary > bestSalary) {
          bestSalary = salary;
        }
        workers.push({ worker, salary });
        avarageSalary += salary;
      }
      avarageSalary /= countWorkers;
      infoOfRestourants.push({ resturant, avarageSalary, bestSalary, workers });
    });

    const sortedRestourants = infoOfRestourants.sort(
      (a, b) => b.avarageSalary - a.avarageSalary
    );
    const bestRestourant = sortedRestourants[0];
    console.log(bestRestourant);

    const bestRestourantInfoOutput = `Name: ${
      bestRestourant.resturant
    } Average Salary: ${bestRestourant.avarageSalary.toFixed(
      2
    )} Best Salary: ${bestRestourant.bestSalary.toFixed(2)}`;
    const bestRestourantWorkers = bestRestourant.workers;
    let infoWorkersOutput = [];
    for (let obj of bestRestourantWorkers) {
      infoWorkersOutput.push(`Name: ${obj.worker} With Salary: ${obj.salary}`);
    }

    bestResturantOutput.textContent = bestRestourantInfoOutput;
    bestWorkerstOutput.textContent = infoWorkersOutput.join(" ");
  }
}
