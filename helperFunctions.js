function filterInputs(exercise, weight, tag, reps) {
    exercise = filterCamelCase(exercise);
    weight = filterWeight(weight);
    tag = filterCamelCase(tag);
    tag = filterTag(tag);
    return [exercise, weight, tag];
}

function filterCamelCase(exercise) {
    const words = exercise.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }
    return words.join(" ");
}

filterWeight = (weight) => weight + "KG";

filterTag = (tag) => [{ name: tag }]; // Tags need to be an array of objects (in our case, it will always be length = 1)

module.exports = { // Export these functions to use in index.js
    filterInputs,
}