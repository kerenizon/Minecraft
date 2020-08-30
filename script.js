
////////////////////////   1.   /////////////////////////////////////

// 0:   dirt
// 1:   grass-dirt
// 2:   tree
// 3:   trunk
// 4:   sky
// 5:   cloud
// 6:   stone
// 7:   sea

const Minecraft= {
    worldMatrix : [
        [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
        [4,4,4,4,4,5,5,4,4,5,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
        [4,4,4,4,5,5,5,5,5,5,5,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
        [4,4,4,4,4,5,5,5,5,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
        [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,2,4,4,4,4],
        [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,2,2,2,4,4,4],
        [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,2,2,2,4,4,4],
        [4,4,4,4,4,4,4,4,4,4,4,2,4,2,4,4,4,4,4,4,3,4,4,4,4],
        [4,4,4,4,4,4,4,4,4,4,2,2,2,2,2,4,4,4,6,4,3,4,6,6,4],
        [4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [7,7,7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [7,7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ],
    resetWorldMatrix : [
        [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
        [4,4,4,4,4,5,5,4,4,5,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
        [4,4,4,4,5,5,5,5,5,5,5,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
        [4,4,4,4,4,5,5,5,5,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
        [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,2,4,4,4,4],
        [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,2,2,2,4,4,4],
        [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,2,2,2,4,4,4],
        [4,4,4,4,4,4,4,4,4,4,4,2,4,2,4,4,4,4,4,4,3,4,4,4,4],
        [4,4,4,4,4,4,4,4,4,4,2,2,2,2,2,4,4,4,6,4,3,4,6,6,4],
        [4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [7,7,7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [7,7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [7,7,7,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ],
    toolbar: {
        currentTool: '',
    }
}


////////////////////////   1.1   /////////////////////////////////////

const pickaxeTool = document.createElement('div');
pickaxeTool.classList.add('pickaxeTool');
pickaxeTool.classList.add('tool');
document.querySelector('.toolbar').appendChild(pickaxeTool);

const shovelTool = document.createElement('div');
shovelTool.classList.add('shovelTool');
shovelTool.classList.add('tool');
document.querySelector('.toolbar').appendChild(shovelTool);

const axeTool = document.createElement('div');
axeTool.classList.add('axeTool');
axeTool.classList.add('tool');
document.querySelector('.toolbar').appendChild(axeTool);

const inventory = document.createElement('div');
inventory.classList.add('inventory');
document.querySelector('.toolbar').appendChild(inventory);


////////////////////////   2.   /////////////////////////////////////

document.querySelector('button[data-name ="startBtn"]').addEventListener('click',function (e){
    e.currentTarget.parentElement.style.background = 'none';
    e.currentTarget.style.position = 'absolute';
    e.currentTarget.previousElementSibling.style.position = 'absolute';
    e.currentTarget.style.visibility = 'hidden';
    e.currentTarget.previousElementSibling.style.visibility = 'hidden';
    Minecraft.createWorld(e);
});


////////////////////////   3.   /////////////////////////////////////

Minecraft.createResetWorld = (e) => {
    let btn = document.createElement('button');
    btn.innerHTML = 'RESET';
    let resetBtn = document.createElement('div');
    resetBtn.classList.add('resetBtn');
    resetBtn.appendChild(btn);
    document.querySelector('.gridContainer').appendChild(resetBtn);

    btn.addEventListener('click',function(){
        document.querySelector('.gridContainer').remove();
        Minecraft.createWorld(e);
        // e.currentTarget.parentElement.removeChild('gridContainer');
        console.log('hi');
    })
}


Minecraft.createWorld = (e) => {
    let containerGrid = document.createElement('div');
    containerGrid.classList.add('gridContainer');
    document.querySelector('.centerZone').appendChild(containerGrid);
    const numRows = 13;
    const numColumns = 25;

    for (let i=0; i<numRows; i++){
        for(let j=0; j<numColumns; j++){
            let tile = document.createElement('div');
            containerGrid.appendChild(tile);

            tile.setAttribute('data-position',[i,j]);
            tile.setAttribute('data-type','tile');
            

            switch(Minecraft.resetWorldMatrix[i][j]){
                case 0:
                    tile.classList.add('dirt');
                    break;
                case 1:
                    tile.classList.add('grass-dirt');
                    break;
                case 2:
                    tile.classList.add('tree');
                    break;
                case 3:
                    tile.classList.add('trunk');
                    break;
                case 4:
                    tile.classList.add('sky');
                    break;
                case 5:
                    tile.classList.add('cloud');
                    break;
                case 6:
                    tile.classList.add('stone');
                    break;
                case 7:
                    tile.classList.add('sea');
                    break;
            }
        }
    }


    ////////////////////////   4.   /////////////////////////////////////
    Minecraft.actionMode = {
        isSelectedTool: false, // click event on tools divs
        // removeTile(), // click event on matrix && isSelectedTool = true
        isSelectedInventory : false, // click event on the inventory
        // addTile() ,// click event on matrix && isSelectedInventory = true
    }


    ////////////////////////   5.   /////////////////////////////////////

    // click event on tools div
    document.querySelector('.pickaxeTool').addEventListener('click',function(){
        Minecraft.toolbar.selectTool('pickaxeTool');  
    })

    document.querySelector('.shovelTool').addEventListener('click',function(){
        Minecraft.toolbar.selectTool('shovelTool');  
    })

    document.querySelector('.axeTool').addEventListener('click',function(){
        Minecraft.toolbar.selectTool('axeTool');  
    })


    // click event on matrix
    document.querySelectorAll('div[data-type ="tile"]').forEach(cell => cell.addEventListener('click',function(e){
        if (Minecraft.actionMode.isSelectedTool)
            Minecraft.actionMode.removeTile(e);
        if (Minecraft.actionMode.isSelectedInventory)
            Minecraft.actionMode.addTile(e);
    }))

    // click event on inventory
    document.querySelector('.inventory').addEventListener('click',function(e){
        if(Minecraft.toolbar.checkIfExist()){
            Minecraft.actionMode.isSelectedInventory = true;
            Minecraft.actionMode.isSelectedTool = false;
            e.target.style['border'] = '1px solid blue';
        }           
    })

    ////////////////////////   6.   /////////////////////////////////////

    
    Minecraft.actionMode.removeTile = (e) => {
        if (Minecraft.checkTool2Cell(e)){
            Minecraft.showCellInventory(e);
            Minecraft.selectCellsOut(e);
        } else{
            Minecraft.toolbar.toolAlert(e);
        }
    }

    Minecraft.actionMode.addTile = (e) => {
        if (Minecraft.checkPosition(e))
            Minecraft.selectCellIn(e)
    }

    ////////////////////////   7.   /////////////////////////////////////

    Minecraft.toolbar.selectTool = (tool) => {
        Minecraft.actionMode.isSelectedTool = true;
        Minecraft.toolbar.currentTool = tool;
    }


    Minecraft.toolbar.toolAlert = (e) => {
        let tool = document.querySelector(`.${Minecraft.toolbar.currentTool}`);
        let flag = 0;
        let id = setInterval(animation, 5);
        function animation(){
            if (flag == 100){
                clearInterval(id);
                tool.style['background-color'] = '';
            }                
            else{
                tool.style['background-color'] = 'red';
                flag++;
            }  
        }
    }

    Minecraft.toolbar.checkIfExist = (e) => {
        let inventory = document.querySelector('.inventory');
        return (inventory.classList.length > 1) ? true : false;
    }


    ////////////////////////   8.   /////////////////////////////////////


    Minecraft.showCellInventory = (e) => {
        let inventory = document.querySelector('.inventory');
        for (let i=0; i<inventory.classList.length; i++){
            inventory.classList.remove(inventory.classList[i+1]);
        }
        switch(e.target.className){
            case 'dirt':
                inventory.classList.add('dirt');
                break;
            case 'grass-dirt':
                inventory.classList.add('grass-dirt');
                break;
            case 'tree':
                inventory.classList.add('tree');
                break;
            case 'trunk':
                inventory.classList.add('trunk');
                break;
            case 'stone':
                inventory.classList.add('stone');
                break;
        }
    }

    Minecraft.checkTool2Cell = (e) => {
        switch(Minecraft.toolbar.currentTool){
            case 'pickaxeTool':
                return (e.target.className === 'stone') ? true : false;
                break;
            case 'shovelTool':
                return (e.target.className === 'dirt' || e.target.className === 'grass-dirt')  ? true : false;
                break;
            case 'axeTool':
                return (e.target.className === 'tree' || e.target.className ==='trunk') ? true : false;
                break;
        }
    }

    Minecraft.selectCellsOut = (e) => {
        switch(e.target.className){
            case 'dirt':
            case 'grass-dirt':
            case 'tree':
            case 'trunk':
            case 'stone':
                e.target.classList.remove(e.target.className);
                e.target.classList.add('sky');
                let position = e.target.dataset.position.split(',');
                Minecraft.worldMatrix[position[0]][position[1]] = 4;
                break;
        }        
    }


    Minecraft.checkPosition = (e) =>{
        let position = e.target.dataset.position.split(',');
        let parsedPosition1 = parseInt(position[0]); 
        let parsedPosition2 = parseInt(position[1]); 
        let condition = Minecraft.worldMatrix[parsedPosition1+1][parsedPosition2];
        if(condition !== 4 && condition !== 5){
            return true;
        }else{
            return false;
        }          
    }

    Minecraft.selectCellIn = (e) => {
        let inventory = document.querySelector('.inventory');
        inventory.style['border'] = '';
        e.target.classList.remove(e.target.className);
        e.target.classList.add(inventory.classList[1]);
        inventory.classList.remove(inventory.classList[1]);  
        Minecraft.actionMode.isSelectedInventory = false;   
    }

    Minecraft.createResetWorld(e);

}





