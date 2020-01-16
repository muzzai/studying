const map = (func, node) => {
    const { children } = node;
    const modified = func(node);
    if (!children) {
        return modified;
    }
    return { ...modified, children: node.children.map(child => map(func, child))};
};