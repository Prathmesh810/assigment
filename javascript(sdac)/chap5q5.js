// chp5q5

meth = (age) => {
  if (age < 18) {
    throw new Error("you are a minor .. you cannot apply for the course");
  }
};
try {
  meth(15);
} catch (e) {
  console.log(e.message);
}
