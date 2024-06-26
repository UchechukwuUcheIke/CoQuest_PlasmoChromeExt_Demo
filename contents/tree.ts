class TreeNode {
    constructor(id, parentId, name) {
        this.id = id;
        this.parentId = parentId;
        this.name = name;
        this.children = [];
    }
}

function buildTree(data, parentId = null) {
    const nodes = {};

    // Create nodes for each item in the data
    data.forEach(({ id, parentId, name }) => {
        nodes[id] = new TreeNode(id, parentId, name);
    });

    const tree = [];
    Object.values(nodes).forEach(node => {
        // Check if the node belongs to the current parent
        if (node.parentId === parentId) {
            // Recursively build the children of the current node
            const children = buildTree(data, node.id);
            // Set the children of the current node
            node.children = children;
            // Add the current node to the tree
            tree.push(node);
        }
    });
    return tree;
}

export default buildTree