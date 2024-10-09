function createPerson(firstName, lastName) {
  const result = {
    firstName,
    lastName,
  };

  Object.defineProperty(result, "fullName", {
    configurable: true,
    enumerable: true,
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(value) {
      let [firstName, lastName] = value.split(" ");
      this.firstName = firstName;
      this.lastName = lastName;
    },
  });

  return result;
}
