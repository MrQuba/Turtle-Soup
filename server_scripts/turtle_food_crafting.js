ServerEvents.recipes(event =>{
    event.shapeless(
        Item.of('kubejs:turtle_soup', 1),
        [
            "minecraft:turtle_egg",
            "minecraft:scute",
            "minecraft:seagrass",
            "kubejs:turtle_meat"
        ]
    )
    event.shapeless(
        Item.of('kubejs:turtle_meat', 1),
        [
            "minecraft:porkchop",
            "3x minecraft:seagrass"
        ]
    )
})
