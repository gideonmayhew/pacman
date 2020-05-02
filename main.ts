namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
function set_level () {
    scene.setTileMap(list[level])
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . . 5 5 5 5 5 5 5 5 5 5 . . 
. . . . . 5 5 5 5 5 5 5 5 5 . . 
. . . . . 5 5 5 5 5 5 5 5 5 . . 
. . . . 5 5 5 5 5 5 5 5 5 5 . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
function coin () {
    coins = 0
    for (let value of scene.getTilesByType(8)) {
        mySprite7 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
        coins += 1
        scene.place(value, mySprite7)
    }
}
function tils () {
    scene.setTile(8, img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`, false)
    scene.setTile(2, img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`, true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    if (info.score() == coins) {
        info.setLife(3)
        level += 1
        info.setScore(0)
        enemy()
        set_level()
        coin()
    }
})
function enemy () {
    myEnemy = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 3 3 3 3 3 3 3 . . . . 
. . . . 3 3 3 3 3 3 3 3 3 . . . 
. . . 3 3 3 3 3 3 3 3 3 3 3 . . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. . 3 3 f 1 3 3 3 f 1 3 3 3 3 . 
. . 3 3 f 1 3 3 3 f 1 3 3 3 3 . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. . 3 3 . 3 3 3 . 3 3 3 . 3 3 . 
. . 3 . . . 3 . . . 3 . . . 3 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    scene.placeOnRandomTile(myEnemy, 15)
    myEnemy = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 3 3 3 3 3 3 3 . . . . 
. . . . 3 3 3 3 3 3 3 3 3 . . . 
. . . 3 3 3 3 3 3 3 3 3 3 3 . . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. . 3 3 f 1 3 3 3 f 1 3 3 3 3 . 
. . 3 3 f 1 3 3 3 f 1 3 3 3 3 . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
. . 3 3 . 3 3 3 . 3 3 3 . 3 3 . 
. . 3 . . . 3 . . . 3 . . . 3 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    myEnemy = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 8 8 8 8 8 8 8 . . . . 
. . . . 8 8 8 8 8 8 8 8 8 . . . 
. . . 8 8 8 8 8 8 8 8 8 8 8 . . 
. . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. . 8 8 f 1 8 8 8 f 1 8 8 8 8 . 
. . 8 8 f 1 8 8 8 f 1 8 8 8 8 . 
. . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
. . 8 8 . 8 8 8 . 8 8 8 . 8 8 . 
. . 8 . . . 8 . . . 8 . . . 8 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    scene.placeOnRandomTile(myEnemy, 15)
    scene.placeOnRandomTile(myEnemy, 15)
    myEnemy.follow(mySprite2, 100)
    myEnemy.follow(mySprite2)
    myEnemy.follow(mySprite2, 90)
    myEnemy = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 7 5 4 2 a 8 7 . . . . 
. . . . 8 7 5 4 2 a 8 7 5 . . . 
. . . a 8 7 5 4 2 a 8 7 5 4 . . 
. . 2 a 8 7 5 4 2 a 8 7 5 4 2 . 
. . 2 a f 1 5 4 2 f 1 7 5 4 2 . 
. . 2 a f 1 5 4 2 f 1 7 5 4 2 . 
. . 2 a 8 7 5 4 2 a 8 7 5 4 2 . 
. . 2 a 8 7 5 4 2 a 8 7 5 4 2 . 
. . 2 a 8 7 5 4 2 a 8 7 5 4 2 . 
. . 2 a 8 7 5 4 2 a 8 7 5 4 2 . 
. . 2 a 8 7 5 4 2 a 8 7 5 4 2 . 
. . 2 a . 7 5 4 . a 8 7 . 4 2 . 
. . 2 . . . 5 . . . 8 . . . 2 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    myEnemy.follow(mySprite2, 115)
    scene.placeOnRandomTile(myEnemy, 15)
    myEnemy.follow(mySprite2)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scene.placeOnRandomTile(mySprite2, 8)
    info.changeLifeBy(-1)
    music.jumpDown.playUntilDone()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. 5 5 5 5 5 5 5 5 5 5 5 . . . . 
. 5 5 5 5 5 5 5 5 5 5 . . . . . 
. 5 5 5 5 5 5 5 5 5 . . . . . . 
. 5 5 5 5 5 5 5 5 . . . . . . . 
. 5 5 5 5 5 5 5 5 5 . . . . . . 
. 5 5 5 5 5 5 5 5 5 5 . . . . . 
. 5 5 5 5 5 5 5 5 5 5 5 . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
})
scene.onHitTile(SpriteKind.Enemy, 14, function (sprite) {
    let otherSprite: Sprite = null
    if (myEnemy.overlapsWith(otherSprite) == myEnemy) {
    	
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
let myEnemy: Sprite = null
let mySprite7: Sprite = null
let coins = 0
let list: Image[] = []
let level = 0
let mySprite2: Sprite = null
mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. 5 5 5 5 5 5 5 5 5 5 5 . . . . 
. 5 5 5 5 5 5 5 5 5 5 . . . . . 
. 5 5 5 5 5 5 5 5 5 . . . . . . 
. 5 5 5 5 5 5 5 5 . . . . . . . 
. 5 5 5 5 5 5 5 5 5 . . . . . . 
. 5 5 5 5 5 5 5 5 5 5 . . . . . 
. 5 5 5 5 5 5 5 5 5 5 5 . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite2, 150, 150)
scene.cameraFollowSprite(mySprite2)
level = 0
list = [img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 f f f f f f f f f f f f 
f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 8 2 f f 2 f f 2 f f f f f f f f f f f f 
f f f f 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 f f 2 f f 2 f f 2 2 2 2 2 2 2 2 f f 
f f f f 2 8 8 8 2 2 2 2 2 2 2 2 2 2 f f 8 2 f f f f f f f f 8 8 8 8 2 8 f 2 f f 
f f f f 2 8 8 8 2 8 8 8 8 8 8 8 8 2 f f 8 2 f f f f f 2 f 2 2 8 8 2 2 8 f 2 f f 
f f f f 2 8 8 8 f 8 8 8 8 8 8 8 8 f f f 8 2 f f 2 f f 2 f f 2 8 8 8 2 8 f 2 f f 
f f f f 8 8 8 8 f 8 8 2 8 8 2 8 8 f f 8 8 8 f f 2 f f 2 f f 2 8 8 8 8 8 f 2 f f 
f f 2 8 2 2 2 2 f 8 8 8 8 8 8 8 8 f 2 2 2 8 2 f 2 f f 2 f f 2 2 2 2 2 2 2 2 f f 
f f 2 8 f f f f f 2 8 8 8 8 8 8 2 f f f f 8 2 f 2 f f 2 f f f f f f f f 2 f f f 
f f 2 8 f f f f f 2 8 8 8 8 8 8 2 f f f f 8 2 f 2 f f 2 2 2 2 2 2 2 2 2 2 2 2 2 
f f 2 8 f 2 f f f 2 8 8 8 8 8 8 2 f f 2 f 8 2 f 2 f f 2 2 2 2 2 2 2 2 2 2 2 2 2 
f f 2 8 f f f f f 2 8 8 8 8 8 8 2 f f f f 8 2 f 2 f f 2 2 2 2 2 2 2 2 2 2 2 2 2 
f f 2 8 f f f f f 2 8 8 8 8 8 8 2 f f f f 8 2 f 2 f f 2 2 2 f f f f 2 2 2 2 2 2 
f f 2 8 2 2 2 f f 2 2 2 2 2 2 2 2 f 2 2 2 8 2 f 2 f f 2 2 2 f f 8 f 2 2 2 2 2 2 
f f 8 8 8 2 f f f f f f f f f f f f f 2 8 8 2 f 2 f f 2 2 2 f f 8 f f 2 2 2 2 2 
f f 8 8 8 2 f f f f f f f f f 8 8 f f 2 8 8 2 f 2 f f 2 2 2 f f 8 8 f 2 2 2 2 2 
f f 8 8 8 2 f f 8 8 8 8 8 8 8 8 f f f 2 8 8 2 f 2 f f 2 2 2 f f f 8 f 2 2 2 2 2 
f 2 2 2 8 2 f f 8 8 8 8 8 8 8 8 f f f 2 8 2 2 2 2 f f 2 2 2 2 2 f 8 f 2 2 2 2 2 
f 2 2 2 8 8 8 8 8 8 8 8 8 8 8 8 f f f 2 8 2 2 2 2 f f f f f f 2 8 8 2 2 2 2 2 2 
f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 2 f f f 2 f f f f 2 2 2 2 2 2 
f f 2 2 2 2 2 2 2 2 2 f f 2 2 2 2 2 2 2 2 2 2 f f f f 2 2 2 f f f f 2 2 2 2 2 2 
f f 8 8 8 f f f f f f f f f f f f f 8 8 8 f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 f 8 8 8 f f 2 f f f f f f f 2 f f 8 8 8 f f 2 2 f f 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 f 8 8 8 f 2 2 2 2 2 2 2 2 2 2 2 f 8 8 8 f f 2 2 f f 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 f 8 8 8 f 2 2 2 2 2 2 2 2 2 2 2 f 8 8 8 f f 2 2 f f 2 f f f f f f f f f f f f 
2 f f f f f f f f f f f f f f f f f f f 2 2 f f f f f 2 f f f f f f f f 8 8 8 8 
2 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 2 f f f 
2 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f 8 f f f f 2 f 8 8 
2 f f f f f f f f f f f f f f f f f f f f f f f f f f 2 f f f 8 f f f f 2 2 8 8 
2 2 2 2 2 f f 2 2 2 2 2 2 2 2 2 2 2 2 f f 2 2 2 2 2 2 2 f f f 8 f f f f 2 2 8 8 
2 f f f f f f f f f f f f 2 f f f f f f f f 2 f f 2 f 2 f f f f f f f f 2 2 8 8 
2 f f f f f f 8 2 8 8 8 8 2 8 8 8 8 2 8 8 8 2 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 f f f f f f f 2 f f f f 2 f f f f 2 f f f 2 f f f f f f f f 8 f f f f 2 2 2 2 
2 f f f 2 2 f f 2 f f f f f f f f f 2 f f f f f f f f f f f f 8 f f f f 2 2 2 2 
2 f f f 2 2 f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f 8 f f f f 2 2 2 2 
2 f f f 2 2 f 8 2 8 8 8 8 8 8 8 8 f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 f f f 2 2 f f 2 f f f f f f 2 f f 2 f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 f f f f f f f 2 f f f f f f f 2 f f 2 f 2 f 2 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 f f f 2 f f f f f f f 2 2 f f f f f f f 2 f f 2 
2 f f f 2 f f f f f f f 2 2 f f f f f f f 2 f f 2 
2 f f f 2 f f f 2 2 2 2 2 2 2 2 2 2 f f f 2 f f 2 
2 f f f 2 f f f 2 f f f f f f f f 2 f f f 2 f f 2 
2 f f f f f f f f f f f f f f f f f f f f f f f 2 
2 f f f f f f 2 f f f f f f f f f f 2 f f f f f 2 
2 f 2 f f f f f f f f f f f f f f f f f f f 2 f 2 
2 f 2 f f f f f f 2 f f f f f f 2 f f f f f 2 f 2 
2 f 2 f f f f f f 2 f f f f f f 2 f f f f f 2 f 2 
2 f 2 f f f f f f 2 f f f f f f 2 f f f f f 2 f 2 
2 f 2 f f f f f f 2 f f f f f f 2 f f f f f 2 f 2 
2 f 2 f f f f f f 2 f f f f f f 2 f f f f f 2 f 2 
2 f 2 f f f f f f 2 2 2 2 2 2 2 2 f f f f f 2 f 2 
2 f 2 f f f f f f f f f f f f f f f f f f f 2 f 2 
2 f 2 f f f f f f f f f f f f f f f f f f f 2 f 2 
2 f f f f f f f f f f f f f f f f f f f f f f f 2 
2 f 2 f f f f f f f f f f f f f f f f f f f 2 f 2 
2 f 2 f f f f f f f f f f f f f f f f f f f f f 2 
2 f f f f f f f f f f f f f f f f f f f f f f f 2 
2 f 2 2 2 2 2 2 2 2 2 f f 2 2 2 2 2 2 2 2 2 2 f 2 
2 f f f f f f f f f 2 f f 2 f f f f f f f f f f 2 
2 f f f f f f f f f f f f f f f f f f f f f f f 2 
2 f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`]
info.setLife(6)
set_level()
enemy()
tils()
coin()
forever(function () {
    if (info.score() == 100) {
        list = [img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 8 2 f f 2 f f 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f 2 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 2 f f 2 f f 2 f f 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f 
f f f f 2 8 8 8 2 2 2 2 2 2 2 2 2 2 f f 8 2 f f f f f f f f 8 8 8 8 2 8 f 2 f f f f f f f f f f f f f f f f f f f f f f 
f f f f 2 8 8 8 2 8 8 8 8 8 8 8 8 2 f f 8 2 f f f f f 2 f 2 2 8 8 2 2 8 f 2 f f f f f f f f f f f f f f f f f f f f f f 
f f f f 2 8 8 8 f 8 8 8 8 8 8 8 8 f f f 8 2 f f 2 f f 2 f f 2 8 8 8 2 8 f 2 f f f f f f f f f f f f f f f f f f f f f f 
f f f f 8 8 8 8 f 8 8 2 8 8 2 8 8 f f 8 8 8 f f 2 f f 2 f f 2 8 8 8 8 8 f 2 f f f f f f f f f f f f f f f f f f f f f f 
f f 2 8 2 2 2 2 f 8 8 8 8 8 8 8 8 f 2 2 2 8 2 f 2 f f 2 f f 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f 
f f 2 8 f f f f f 2 8 8 8 8 8 8 2 f f f f 8 2 f 2 f f 2 f f f f f f f f 2 f f f f f f f f f f f f f f f f 2 f f f f f f 
f f 2 8 f f f f f 2 8 8 8 8 8 8 2 f f f f 8 2 f 2 f f 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f 2 f f f f f f 
f f 2 8 f 2 f f f 2 8 8 8 8 8 8 2 f f 2 f 8 2 f 2 f f 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f 2 f f f f f f 
f f 2 8 f f f f f 2 8 8 8 8 8 8 2 f f f f 8 2 f 2 f f 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f 2 f f f f f f 
f f 2 8 f f f f f 2 8 8 8 8 8 8 2 f f f f 8 2 f 2 f f 2 2 2 f f f f 2 2 2 2 2 2 f f f f f f f f f f f f f 2 f f f f f f 
f f 2 8 2 2 2 f f 2 2 2 2 2 2 2 2 f 2 2 2 8 2 f 2 f f 2 2 2 f f 8 f 2 2 2 2 2 2 f f f f f f f f f f f f f 2 f f f f f f 
f f 8 8 8 2 f f f f f f f f f f f f f 2 8 8 2 f 2 f f 2 2 2 f f 8 f f 2 2 2 2 2 f f f f f f f f f f f f f 2 f f f f f f 
f f 8 8 8 2 f f f f f f f f f 8 8 f f 2 8 8 2 f 2 f f 2 2 2 f f 8 8 f 2 2 2 2 2 f f f f f f f f f f f f f 2 f f f f f f 
f f 8 8 8 2 f f 8 8 8 8 8 8 8 8 f f f 2 8 8 2 f 2 f f 2 2 2 f f f 8 f 2 2 2 2 2 f f f f f f f f f f f f f 2 2 f f f f f 
f 2 2 2 8 2 f f 8 8 8 8 8 8 8 8 f f f 2 8 2 2 2 2 f f 2 2 2 2 2 f 8 f 2 2 2 2 2 f f f f f f f f f f f f f f 2 f f f f f 
f 2 2 2 2 2 2 8 8 8 8 8 8 8 8 8 f f f 2 2 2 2 2 2 f f f f f f 2 8 8 2 2 2 2 2 2 f f f f f f f f f f f f f f 2 f f f f f 
f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 2 f f f 2 f f f f 2 2 2 2 2 2 f f f f f f f f f f f f f f 2 f f f f f 
f f 2 2 2 2 2 2 2 2 2 f f 2 2 2 2 2 2 2 2 2 2 f f f f 2 2 2 f f f f 2 2 2 2 2 2 f f f f f f f f f f f f f f 2 f f f f f 
f f 8 8 8 f f f f f f f f f f f f f 8 8 8 f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f 2 f f f f f 
2 f 8 8 8 f f 2 f f f f f f f 2 f f 8 8 8 f f 2 2 f f 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f 2 f f f f f 
2 f 8 8 8 f 2 2 2 2 2 2 2 2 2 2 2 f 8 8 8 f f 2 2 f f 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f 2 f f f f f 
2 f 8 8 8 f 2 2 2 2 2 2 2 2 2 2 2 f 8 8 8 f f 2 2 f f 2 f f f f f f f f f f f f f f f f f f f f f f f f f f 2 f f f f f 
2 f f f f f f f f f f f f f f f f f f f 2 2 f f f f f 2 f f f f f f f f 8 8 8 8 f f f f f f f f f f f f f f 2 f f f f f 
2 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f 2 f f f f f f f f f f f f f f f f f 2 f f f f f 
2 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f 8 f f f f 2 f 8 8 f f f f f f f f f f f f f f 2 f f f f f 
2 f f f f f f f f f f f f f f f f f f f f f f f f f f 2 f f f 8 f f f f 2 2 8 8 f f f f f f f f f f f f f f 2 f f f f f 
2 2 2 2 2 f f 2 2 2 2 2 2 2 2 2 2 2 2 f f 2 2 2 2 2 2 2 f f f 8 f f f f 2 2 8 8 f f f f f f f f f f f f f f 2 f f f f f 
2 f f f f f f f f f f f f 2 f f f f f f f f 2 f f 2 f 2 f f f f f f f f 2 2 8 8 f f f f f f f f f f f f f f 2 f f f f f 
2 f f f f f f 8 2 8 8 8 8 2 8 8 8 8 2 8 8 8 2 8 8 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f 2 f f f f f 
2 f f f f f f f 2 f f f f 2 f f f f 2 f f f 2 f f f f f f f f 8 f f f f 2 2 2 2 f f f f f f f f f f f f f f 2 f f f f f 
2 f f f 2 2 f f 2 f f f f f f f f f 2 f f f f f f f f f f f f 8 f f f f 2 2 2 2 f f f f f f f f f f f f f f 2 f f f f f 
2 f f f 2 2 f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f 8 f f f f 2 2 2 2 f f f f f f f f f f f f f f 2 f f f f f 
2 f f f 2 2 f 8 2 8 8 8 8 8 8 8 8 f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f 2 f f f f f 
2 f f f 2 2 f f 2 f f f f f f 2 f f 2 f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f 2 f f f f f 
2 f f f f f f f 2 f f f f f f f 2 f f 2 f 2 f 2 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f 2 f f f f f 
2 f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f 2 f f f f f 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f 2 f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 2 f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 2 2 f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 2 2 f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 2 2 f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 2 f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 f f f 2 f f f f f f f 2 2 f f f f f f f 2 f f 2 
2 f f f 2 f f f f f f f 2 2 f f f f f f f 2 f f 2 
2 f f f 2 f f f 2 2 2 2 2 2 2 2 2 2 f f f 2 f f 2 
2 f f f 2 f f f 2 f f f f f f f f 2 f f f 2 f f 2 
2 f f f f f f f f f f f f f f f f f f f f f f f 2 
2 f f f f f f 2 f f f f f f f f f f 2 f f f f f 2 
2 f 2 f f f f f f f f f f f f f f f f f f f 2 f 2 
2 f 2 f f f f f f 2 f f f f f f 2 f f f f f 2 f 2 
2 f 2 f f f f f f 2 f f f f f f 2 f f f f f 2 f 2 
2 f 2 f f f f f f 2 f f f f f f 2 f f f f f 2 f 2 
2 f 2 f f f f f f 2 f f f f f f 2 f f f f f 2 f 2 
2 f 2 f f f f f f 2 f f f f f f 2 f f f f f 2 f 2 
2 f 2 f f f f f f 2 2 2 2 2 2 2 2 f f f f f 2 f 2 
2 f 2 f f f f f f f f f f f f f f f f f f f 2 f 2 
2 f 2 f f f f f f f f f f f f f f f f f f f 2 f 2 
2 f f f f f f f f f f f f f f f f f f f f f f f 2 
2 f 2 f f f f f f f f f f f f f f f f f f f 2 f 2 
2 f 2 f f f f f f f f f f f f f f f f f f f f f 2 
2 f f f f f f f f f f f f f f f f f f f f f f f 2 
2 f 2 2 2 2 2 2 2 2 2 f f 2 2 2 2 2 2 2 2 2 2 f 2 
2 f f f f f f f f f 2 f f 2 f f f f f f f f f f 2 
2 f f f f f f f f f f f f f f f f f f f f f f f 2 
2 f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`]
    }
})
