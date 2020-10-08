const selection = figma.currentPage.selection;

selection.forEach(item => {
    if (item.parent.type === "FRAME") {
        // console.log('frame')
        let frame = figma.createFrame();
        let x = item.x;
        let y = item.y;
        frame.name = item.name;
        frame.fills = [];
        frame.resize(item.width, item.height)
        item.parent.appendChild(frame);
        frame.x = x;
        frame.y = y;
        frame.appendChild(item);
        item.x = 0;
        item.y = 0;
    }
    if (item.parent.type === "PAGE") {
        // console.log('page')
        let frame = figma.createFrame();
        frame.name = item.name;
        frame.fills = [];
        frame.resize(item.width, item.height)
        frame.x = item.x;
        frame.y = item.y;
        frame.appendChild(item);
        item.x = 0;
        item.y = 0;
    }
})

figma.closePlugin("👌Done");