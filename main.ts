enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const tool = SpriteKind.create()
    export const Berry = SpriteKind.create()
    export const 寶物 = SpriteKind.create()
    export const 草莓 = SpriteKind.create()
}
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
function 動畫 () {
    anim = animation.createAnimation(ActionKind.Walking, 100)
    anim.addAnimationFrame(img`
. . f f f . . . . . . . . f f f 
. f f c c . . . . . . f c b b c 
f f c c . . . . . . f c b b c . 
f c f c . . . . . . f b c c c . 
f f f c c . c c . f c b b c c . 
f f c 3 c c 3 c c f b c b b c . 
f f b 3 b c 3 b c f b c c b c . 
. c b b b b b b c b b c c c . . 
. c 1 b b b 1 b b c c c c . . . 
c b b b b b b b b b c c . . . . 
c b c b b b c b b b b f . . . . 
f b 1 f f f 1 b b b b f c . . . 
f b b b b b b b b b b f c c . . 
. f b b b b b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
`)
    anim.addAnimationFrame(img`
. . f f f . . . . . . . . . . . 
f f f c c . . . . . . . . f f f 
f f c c . . c c . . . f c b b c 
f f c 3 c c 3 c c f f b b b c . 
f f b 3 b c 3 b c f b b c c c . 
. c b b b b b b c f b c b c c . 
. c b b b b b b c b b c b b c . 
c b 1 b b b 1 b b b c c c b c . 
c b b b b b b b b c c c c c . . 
f b c b b b c b b b b f c . . . 
f b 1 f f f 1 b b b b f c c . . 
. f b b b b b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    anim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . c c . . c c . . . . . . . . 
. . c 3 c c 3 c c c . . . . . . 
. c b 3 b c 3 b c c c . . . . . 
. c b b b b b b b b f f . . . . 
c c b b b b b b b b f f . . . . 
c b 1 b b b 1 b b c f f f . . . 
c b b b b b b b b f f f f . . . 
f b c b b b c b c c b b b . . . 
f b 1 f f f 1 b f c c c c . . . 
. f b b b b b b f b b c c . . . 
c c f b b b b b c c b b c . . . 
c c c f f f f f f c c b b c . . 
. c c c . . . . . . c c c c c . 
. . c c c . . . . . . . c c c c 
. . . . . . . . . . . . . . . . 
`)
    anim.addAnimationFrame(img`
. f f f . . . . . . . . f f f . 
f f c . . . . . . . f c b b c . 
f c c . . . . . . f c b b c . . 
c f . . . . . . . f b c c c . . 
c f f . . . . . f f b b c c . . 
f f f c c . c c f b c b b c . . 
f f f c c c c c f b c c b c . . 
. f c 3 c c 3 b c b c c c . . . 
. c b 3 b c 3 b b c c c c . . . 
c c b b b b b b b b c c . . . . 
c b 1 b b b 1 b b b b f c . . . 
f b b b b b b b b b b f c c . . 
f b c b b b c b b b b f . . . . 
. f 1 f f f 1 b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
`)
    anim.addAnimationFrame(img`
. . f f f . . . . . . . . f f f 
. f f c c . . . . . . f c b b c 
f f c c . . . . . . f c b b c . 
f c f c . . . . . . f b c c c . 
f f f c c . c c . f c b b c c . 
f f c 3 c c 3 c c f b c b b c . 
f f b 3 b c 3 b c f b c c b c . 
. c 1 b b b 1 b c b b c c c . . 
. c 1 b b b 1 b b c c c c . . . 
c b b b b b b b b b c c . . . . 
c b 1 f f 1 c b b b b f . . . . 
f f 1 f f 1 f b b b b f c . . . 
f f 2 2 2 2 f b b b b f c c . . 
. f 2 2 2 2 b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
`)
    anim.addAnimationFrame(img`
. . f f f . . . . . . . . . . . 
f f f c c . . . . . . . . f f f 
f f c c c . c c . . . f c b b c 
f f c 3 c c 3 c c f f b b b c . 
f f c 3 b c 3 b c f b b c c c . 
f c b b b b b b c f b c b c c . 
c c 1 b b b 1 b c b b c b b c . 
c b b b b b b b b b c c c b c . 
c b 1 f f 1 c b b c c c c c . . 
c f 1 f f 1 f b b b b f c . . . 
f f f f f f f b b b b f c . . . 
f f 2 2 2 2 f b b b b f c c . . 
. f 2 2 2 2 2 b b b c f . . . . 
. . f 2 2 2 b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
`)
    anim.addAnimationFrame(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . c c . c c . . . . . . . . 
. . f 3 c c 3 c c c . . . . . . 
. f c 3 b c 3 b c c c . . . . . 
f c b b b b b b b b f f . . . . 
c c 1 b b b 1 b b b f f . . . . 
c b b b b b b b b c f f f . . . 
c b 1 f f 1 c b b f f f f . . . 
f f 1 f f 1 f b c c b b b . . . 
f f f f f f f b f c c c c . . . 
f f 2 2 2 2 f b f b b c c c . . 
. f 2 2 2 2 2 b c c b b c . . . 
. . f 2 2 2 b f f c c b b c . . 
. . . f f f f f f f c c c c c . 
. . . . . . . . . . . . c c c c 
`)
    anim.addAnimationFrame(img`
. f f f . . . . . . . . f f f . 
f f c . . . . . . . f c b b c . 
f c c . . . . . . f c b b c . . 
c f . . . . . . . f b c c c . . 
c f f . . . . . f f b b c c . . 
f f f c c . c c f b c b b c . . 
f f f c c c c c f b c c b c . . 
. f c 3 c c 3 b c b c c c . . . 
. c b 3 b c 3 b b c c c c . . . 
c c b b b b b b b b c c . . . . 
c 1 1 b b b 1 1 b b b f c . . . 
f b b b b b b b b b b f c c . . 
f b c b b b c b b b b f . . . . 
. f 1 f f f 1 b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
`)
    animation.attachAnimation(蝙蝠, anim)
    animation.setAction(蝙蝠, ActionKind.Walking)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.tool, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeLifeBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Berry, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(1)
    otherSprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    _1111.setImage(img`
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . f f e e 4 4 4 e f . . . 
. . . . . 4 d d e 2 2 2 f . . . 
. . . . . e d d e 2 2 2 f . . . 
. . . . . f e e f 4 5 5 f . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . f f f . . . . . . 
`)
    磚 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . 9 . . . . . . 
. . . . . 9 9 9 9 9 9 . . . . . 
. . . . . 9 9 9 9 9 . 9 . . . . 
. . . . . 9 9 9 9 9 9 . . . . . 
. . . . . . . . . 9 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, mySprite, 50, 0)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.pewPew.play()
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (_1111.isHittingTile(CollisionDirection.Bottom)) {
        _1111.vy = -280
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    _1111.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f f f . . . . . . . . . . . . . . . 
. . . f f f 2 2 f f f . . . . . . . . . . . . . 
. . f f f 2 2 2 2 f f f . . . . . . . . . . . . 
. f f f e e e e e e f f f . . . . . . . . . . . 
. f f e 2 2 2 2 2 2 e e f . . . . . . . . . . . 
. f e 2 f f f f f f 2 e f . . . . . . . . . . . 
. f f f f e e e e f f f f . . . . . . . . . . . 
f f e f b f 4 4 f b f e f f . . . . . . . . . . 
f e e 4 1 f d d f 1 4 e e f . . . . . . . . . . 
. f f f f d d d d d e e f . . . . . . . . . . . 
f d d d d f 4 4 4 e e f . . . . . . . . . . . . 
f b b b b f 2 2 2 2 f 4 e . . . . . . . . . . . 
f b b b b f 2 2 2 2 f d 4 . . . . . . . . . . . 
. f c c f 4 5 5 4 4 f 4 4 . . . . . . . . . . . 
. . f f f f f f f f . . . . . . . . . . . . . . 
. . . . f f . . f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
})
let 水果: Sprite = null
let mySprite = 0
let 磚: Sprite = null
let 蝙蝠: Sprite = null
let anim: animation.Animation = null
let _1111: Sprite = null
_1111 = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . f f f f . . . . . . . . . . . . . . . 
. . . f f f 2 2 f f f . . . . . . . . . . . . . 
. . f f f 2 2 2 2 f f f . . . . . . . . . . . . 
. f f f e e e e e e f f f . . . . . . . . . . . 
. f f e 2 2 2 2 2 2 e e f . . . . . . . . . . . 
. f e 2 f f f f f f 2 e f . . . . . . . . . . . 
. f f f f e e e e f f f f . . . . . . . . . . . 
f f e f b f 4 4 f b f e f f . . . . . . . . . . 
f e e 4 1 f d d f 1 4 e e f . . . . . . . . . . 
. f f f f d d d d d e e f . . . . . . . . . . . 
f d d d d f 4 4 4 e e f . . . . . . . . . . . . 
f b b b b f 2 2 2 2 f 4 e . . . . . . . . . . . 
f b b b b f 2 2 2 2 f d 4 . . . . . . . . . . . 
. f c c f 4 5 5 4 4 f 4 4 . . . . . . . . . . . 
. . f f f f f f f f . . . . . . . . . . . . . . 
. . . . f f . . f f . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(_1111, 100, 0)
_1111.ay = 800
_1111.y = 100
tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000303030000000000000000000000000303000000000000000000000002020202020202020202`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . 2 2 2 . . . . . 
. . . . . . . 2 2 . 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.dungeon.floorLight0,sprites.castle.tilePath2,sprites.builtin.forestTiles0],
            TileScale.Sixteen
        ))
info.setLife(3)
game.onUpdateInterval(800, function () {
    蝙蝠 = sprites.createProjectileFromSide(img`
. . f f f . . . . . . . . f f f 
. f f c c . . . . . . f c b b c 
f f c c . . . . . . f c b b c . 
f c f c . . . . . . f b c c c . 
f f f c c . c c . f c b b c c . 
f f c 3 c c 3 c c f b c b b c . 
f f b 3 b c 3 b c f b c c b c . 
. c b b b b b b c b b c c c . . 
. c 1 b b b 1 b b c c c c . . . 
c b b b b b b b b b c c . . . . 
c b c b b b c b b b b f . . . . 
f b 1 f f f 1 b b b b f c . . . 
f b b b b b b b b b b f c c . . 
. f b b b b b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
`, -50, 0)
    動畫()
    蝙蝠.setKind(SpriteKind.Enemy)
    蝙蝠.y = Math.randomRange(10, 100)
})
game.onUpdateInterval(1000, function () {
    mySprite = Math.randomRange(1, 4)
    if (mySprite == 1) {
        水果 = sprites.createProjectileFromSide(img`
. . . . . . . 6 . . . . . . . . 
. . . . . . 8 6 6 . . . 6 8 . . 
. . . e e e 8 8 6 6 . 6 7 8 . . 
. . e 2 2 2 2 e 8 6 6 7 6 . . . 
. e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
. e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
e 2 2 2 2 2 2 2 4 e 2 e e c . . 
e e 2 e 2 2 4 2 2 e e e c . . . 
e e e e 2 e 2 2 e e e c . . . . 
e e e 2 e e c e c c c . . . . . 
. c c c c c c c . . . . . . . . 
`, 50, 0)
        水果.y = Math.randomRange(10, 30)
    } else if (mySprite == 2) {
        水果 = sprites.createProjectileFromSide(img`
. . . . . . . 6 . . . . . . . . 
. . . . . . 8 6 6 . . . 6 8 . . 
. . . e e e 8 8 6 6 . 6 7 8 . . 
. . e 2 2 2 2 e 8 6 6 7 6 . . . 
. e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
. e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
e 2 2 2 2 2 2 2 4 e 2 e e c . . 
e e 2 e 2 2 4 2 2 e e e c . . . 
e e e e 2 e 2 2 e e e c . . . . 
e e e 2 e e c e c c c . . . . . 
. c c c c c c c . . . . . . . . 
`, -50, 0)
        水果.y = Math.randomRange(10, 30)
    } else if (mySprite == 3) {
        水果 = sprites.createProjectileFromSide(img`
. . . . . . . e c 7 . . . . . . 
. . . . e e e c 7 7 e e . . . . 
. . c e e e e c 7 e 2 2 e e . . 
. c e e e e e c 6 e e 2 2 2 e . 
. c e e e 2 e c c 2 4 5 4 2 e . 
c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
. e e e 2 2 2 2 2 2 2 2 2 4 e . 
. 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
. . 2 e e 2 2 2 2 2 4 4 2 e . . 
. . . 2 2 e e 4 4 4 2 e e . . . 
. . . . . 2 2 e e e e . . . . . 
`, 50, 0)
        水果.y = Math.randomRange(20, 60)
        水果.setKind(SpriteKind.tool)
    } else if (mySprite == 4) {
        水果 = sprites.createProjectileFromSide(img`
. . . . . . . e c 7 . . . . . . 
. . . . e e e c 7 7 e e . . . . 
. . c e e e e c 7 e 2 2 e e . . 
. c e e e e e c 6 e e 2 2 2 e . 
. c e e e 2 e c c 2 4 5 4 2 e . 
c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
. e e e 2 2 2 2 2 2 2 2 2 4 e . 
. 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
. . 2 e e 2 2 2 2 2 4 4 2 e . . 
. . . 2 2 e e 4 4 4 2 e e . . . 
. . . . . 2 2 e e e e . . . . . 
`, -50, 0)
        水果.y = Math.randomRange(20, 60)
        水果.setKind(SpriteKind.tool)
    }
})
