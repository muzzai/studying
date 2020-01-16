const myTree = {
    name: '/',
    children: [
      { name: 'eTc', children: [Array], meta: {}, type: 'directory' },
      { name: 'hOsts', meta: {}, type: 'file' }
    ],
    meta: {},
    type: 'directory'
}

const newTree = (tree) => {
    if (!tree['children']) {
        return Object.assign(tree);
    }
    return tree['children'].map(newTree);
};

const processedTree = newTree(myTree);

console.log(myTree);

console.log(processedTree);