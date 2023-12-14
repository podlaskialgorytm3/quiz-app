import questions from "../data/questions";

export const adjustAnswearsArray = (answears) => {
    const expectedLength = questions.length;
  
    if (answears.length < expectedLength) {
      const missingCount = expectedLength - answears.length;
      const additionalAnswears = Array(missingCount).fill(null); // Lub dowolną inną wartość pustą
  
      return [...answears, ...additionalAnswears];
    } else {
      return answears.slice(0, expectedLength);
    }
  };