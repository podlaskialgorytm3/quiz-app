import questions from "../data/questions";

export const adjustAnswearsArray = (answears) => {
    const expectedLength = questions.length - 1;
  
    if (answears.length < expectedLength) {
      const missingCount = expectedLength - answears.length;
      const additionalAnswears = Array(missingCount).fill("dull"); // Lub dowolną inną wartość pustą
  
      return [...answears, ...additionalAnswears];
    } else {
      return answears.slice(0, expectedLength);
    }
  };