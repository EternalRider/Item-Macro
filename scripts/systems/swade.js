import { logger } from "../logger.js";
import { settings } from "../settings.js";

export function register_helper()
{
  logger.info(`Registering SWADE Helpers`);
  
  Hooks.on("swadeAction", async (SwadeTokenOrActor, SwadeItem, SwadeAction, SwadeRoll, SwadeUserId) => {
    //console.log([SwadeTokenOrActor, SwadeItem, SwadeAction, SwadeRoll, SwadeUserId]);  
    
    if( item.hasMacro() && settings.value("defaultmacro") ) {
        //console.log([SwadeTokenOrActor, SwadeItem, SwadeAction, SwadeRoll, SwadeUserId]);
        return SwadeItem.executeMacro(SwadeTokenOrActor, SwadeItem, SwadeAction, SwadeRoll, SwadeUserId);
      }
    });
}

export function sheetHooks()
{
  const renderSheets = {    
    CharacterSheet : ".item-img", 
    NPCSheet : ".item-img",
  };
  const renderedSheets = {

  };

  return { render : renderSheets, rendered : renderedSheets };
}


