class JobOffers {
  constructor(employer, position) {
    this.employer = employer;
    this.position = position;
    this.jobCandidates = new Map();
  }

  jobApplication(candidates) {
    let addedCandidates = [];
    for (let info of candidates) {
      let [name, education, yearsExperience] = info.split("-");
      yearsExperience = Number(yearsExperience);

      if (this.jobCandidates.has(name)) {
        if (this.jobCandidates.get(name).yearsExperience < yearsExperience) {
          this.jobCandidates.get(name).yearsExperience = yearsExperience;
        }
      } else {
        if(!addedCandidates.includes(name)){
        addedCandidates.push(name);
        }
        this.jobCandidates.set(name, { education, yearsExperience });
      }
    }
    return `You successfully added candidates: ${addedCandidates.join(", ")}.`;
  }

  jobOffer(chosenPerson) {
    let [name, minimalExperiance] = chosenPerson.split("-");
    minimalExperiance = Number(minimalExperiance);

    if (!this.jobCandidates.has(name)) {
      throw Error(`${name} is not in the candidates list!`);
    }

    let currExperiance = this.jobCandidates.get(name).yearsExperience;
    let education = this.jobCandidates.get(name).education;

    if (minimalExperiance > currExperiance) {
      throw Error(
        `${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperiance} years.`
      );
    }

    this.jobCandidates.set(name, { education, yearsExperience: "hired" });

    return `Welcome aboard, our newest employee is ${name}.`;
  }

  salaryBonus(name) {
    if (!this.jobCandidates.has(name)) {
      throw Error(`${name} is not in the candidates list!`);
    }

    let edu = this.jobCandidates.get(name).education;

    if (edu === "Bachelor") {
      return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
    } else if (edu === "Master") {
      return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
    } else {
      return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
    }
  }

  candidatesDatabase() {
    if (this.jobCandidates.size === 0) {
      throw Error("Candidate Database is empty!");
    }

    let result = [];

    result.push("Candidates list:");

    let sortedNames = [];

    for(let name of this.jobCandidates.keys()){
        sortedNames.push(name)
    }

    sortedNames = sortedNames.sort((a,b)=>a[0].localeCompare(b[0]));

    sortedNames.forEach((name)=>{
        result.push(`${name}-${this.jobCandidates.get(name).yearsExperience}`);
    })

    return result.join("\n");
  }
}



let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(
  Jobs.jobApplication([
    "John Doe-Bachelor-10",
    "Peter Parker-Master-5",
    "Jordan Cole-High School-5",
    "Daniel Jones- Bachelor-18",
  ])
);
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());
