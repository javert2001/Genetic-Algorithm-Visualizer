var generation = [];
export var weights = [23, 26, 20, 18, 32, 27, 29, 26, 30, 27];
export var values = [505, 352, 458, 220, 354, 414, 498, 545, 473, 543];
var limit = 67;

function bestGene(idxGene1, idxGene2) {
    console.log(generation, idxGene1, idxGene2)
    var weightGene1 = 0;
    var weightGene2 = 0;
    var valueGene1 = 0;
    var valueGene2 = 0;
    for (var i = 0; i < values.length; i++) {
        if (generation[idxGene1][i] === 1) {
            weightGene1 += weights[i];
            valueGene1 += values[i];
        }
        if (generation[idxGene2][i] === 1) {
            weightGene2 += weights[i];
            valueGene2 += values[i];
        }
    }
    if (weightGene1 > limit) return idxGene2;
    if (weightGene2 > limit) return idxGene1;
    return valueGene1 > valueGene2 ? idxGene1 : idxGene2;
}

function generateRandomGenesIdxs() {
    var idxs = new Set();
    for (var i = 0; i < 4; i++) {
        var newIdx = Math.floor(Math.random() * generation.length);
        while (idxs.has(newIdx)) {
            newIdx = Math.floor(Math.random() * generation.length);
        }
        idxs.add(newIdx);
    }
    return idxs;
}

function combineGenes(gene1, gene2) {
    for (var i = 0; i < (gene1.length / 2); i++) {
        const aux = gene1[i];
        gene1[i] = gene2[i];
        gene2[i] = aux;
    }
    return [gene1, gene2];
}

function mutateGene(gene) {
    for (var i = 0; i < gene.length; i++) {
        if (Math.random() < 0.05) {
            gene[i] = Math.abs(gene[i] - 1);
        }
        return gene;
    }
}

function createGene(geneSize) {
    const gene = Array.from({ length: geneSize },
        () => Math.floor(Math.random() * 2));
    return gene;
};

export const createGeneration = (generationSize) => {
    generation = Array.from({ length: generationSize },
        () => createGene(values.length));
    return generation;
}

export const nextGeneration = () => {
    console.log(generation);
    var nextGeneration = [];
    while (nextGeneration.length !== generation.length) {
        const idxs = [...generateRandomGenesIdxs()];
        const bestGene01 = bestGene(idxs[0], idxs[1]);
        const bestGene23 = bestGene(idxs[2], idxs[3]);
        const nextGenes = combineGenes(generation[bestGene01], generation[bestGene23]);
        nextGenes[0] = mutateGene(nextGenes[0]);
        nextGenes[1] = mutateGene(nextGenes[1]);
        nextGeneration.push(nextGenes[0]);
        nextGeneration.push(nextGenes[1]);
    }
    generation = nextGeneration;
    return generation;
}

export const gains = (gene) => {
    var gain = 0;
    var weight = 0;
    for (var i = 0; i < gene.length; i++) {
        if (gene[i] === 1) {
            gain += values[i];
            weight += weights[i];
        }
    }
    //console.log(gain, weight, weight > limit ? 0 : gain);
    return weight > limit ? 0 : gain;
}