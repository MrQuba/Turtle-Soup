
StartupEvents.registry('item', event => {
    event.create('turtle_meat').displayName('Turtle Meat').maxStackSize(64).food(food =>{
        food
         .hunger(10)
         .saturation(12)
         .meat()
    })
    event.create('turtle_soup').displayName('Turtle Soup').unstackable().food(food =>{
        food
         .hunger(20)
         .saturation(24)
         .alwaysEdible()
         .effect('minecraft:water_breathing', 600, 0, 1)
         .effect('minecraft:dolphins_grace', 180, 1, 1)
    })
  })
