const selection = figma.currentPage.selection;

selection.map(item => {
    let frame = figma.createFrame();
    frame.name = item.name;
    frame.resize(item.width, item.height)
    frame.x = item.x;
    frame.y = item.y;
    frame.appendChild(item);
    item.x = 0;
    item.y = 0;
})

figma.closePlugin();