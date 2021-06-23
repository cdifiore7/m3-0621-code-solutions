/* exported Student */
class Student{
constructor (firstName, lastName, subject) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.subject = subject;
}
getFullName() {
  return this.firstName;
  return this.lastName;
  return this.subject;
};
getIntroduction() {
  return `Hello, my name is ${this.firstName} ${this.lastName} and I am studying ${this.subject}.`
}
}
