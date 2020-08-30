
demo of the game: https://www.youtube.com/watch?v=jritMw-79ck

 * Pickaxe - for mining rocks
 * Shovel - for digging dirt
 * Axe - for cutting trees

# Object Minecraft:

## **Properties and methods() list:**
*	world matrix 
*   createWorld()
*   resetWorldMatrix - keeping the initial state
*   createResetWorld()
*	toolbar object
    *	currentTool
    *   selectTool()
    *   toolAlert()
    *   checkIfExist()

*   actionMode object - as detailed below

    * isSelectedTool
    * isSelectedInventory
    * removeTile()
    * addTile()
* showCellInventory()
* checkTool2Cell()
* selectCellsOut()
* checkPosition()
* selectCellIn()

# HTML:
container div which contains:
1. center zone - initial page
2. right zone - toolbar (the tools and the inventory)

# CSS
1. styling the container: initial page
2. styling the container: toolbar
3. styling the World Matrix

# JS

## **Pseudocode:**

1. creating Minecraft object which contains only the World Matrix and the toolbar properties.

    * creating the toolbar HTML - rightZone
    
2. adding to the initial page (to the start button) a click event which will trigger the createWorld() method.
3. implementing createWorld() method of Minecraft object: 
    * creating 2d matrix object with data attribute of position for each tile.
    * creating 'reset' button with click event which resulting in showing the initial state of the matrix.

4. adding actionMode object property to Minecraft object:

    the properties inside actionMode object are boolean.

        actionMode object =  {
            isSelectedTool, // click event on tools divs
            removeTile(), // click event on matrix && isSelectedTool = true
            isSelectedInventory, // click event on the inventory
            addTile() ,// click event on matrix && isSelectedInventory = true
       }
5. adding listening callbacks to the toolbar divs, to the matrix and to the inventory.

    * click event on tools divs -> 
        1. isSelectedTool=true
        2. selectTool()

    * click event on matrix ->

        1. removeTile() ? according isSelectedTool
        2. addTile() ? according isSelectedInventory
        
    * click event on inventory ->
        1. checkIfExist()
        2. isSelectedInventory ? according checkIfExist()


6. implementing the methods of Minecraft.actionMode object:
    * removeTile(): the method invokes showCellInventory() and selectCellsOut() methods according checkTool2Cell() true result. if checkTool2Cell() returns false it invokes toolAlert() method.
    * addTile(): the method invokes selectCellIn() method according checkPosition() true result.

7. implementing the methods of Minecraft.toolbar object:
    * selectTool()
    * toolAlert()
    * checkIfExist()

8. implementing the methods of Minecraft object:

    * showCellInventory()
    * checkTool2Cell()
    * selectCellsOut()
    * checkPosition()
    * selectCellIn()






