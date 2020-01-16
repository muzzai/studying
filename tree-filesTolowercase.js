const myTree = {
    name: '/',
    children: [
      { name: 'eTc', children: [Array], meta: {}, type: 'directory' },
      { name: 'hOsts', meta: {}, type: 'file' }
    ],
    meta: {},
    type: 'directory'
};

const lowerCaseFileNames = (node) => {
    if (node.type === 'file') {
        return { ...node, name: node.name.toLowerCase };
    }
    return { ...node, children: node.children.map(lowerCaseFileNames)};
};

