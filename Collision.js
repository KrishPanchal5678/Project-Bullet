function Collide (A,B)
{
    bullet.x - wall.x <= wall.width/2 + bullet.width/2
    &&
    wall.x - bullet.x <= wall.width/2 + bullet.width/2
    &&
    bullet.y - wall.y <= wall.height/2 + bullet.height/2
    &&
    wall.y - bullet.y <= wall.height/2 + bullet.height/2
}