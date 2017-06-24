gdjs.New_32sceneCode = {};


gdjs.New_32sceneCode.GDPlayerObjects1= [];
gdjs.New_32sceneCode.GDPlayerObjects2= [];
gdjs.New_32sceneCode.GDPlatformObjects1= [];
gdjs.New_32sceneCode.GDPlatformObjects2= [];
gdjs.New_32sceneCode.GDJumpthruObjects1= [];
gdjs.New_32sceneCode.GDJumpthruObjects2= [];
gdjs.New_32sceneCode.GDTiledGrassPlatformObjects1= [];
gdjs.New_32sceneCode.GDTiledGrassPlatformObjects2= [];
gdjs.New_32sceneCode.GDTiledCastlePlatformObjects1= [];
gdjs.New_32sceneCode.GDTiledCastlePlatformObjects2= [];
gdjs.New_32sceneCode.GDMovingPlatformObjects1= [];
gdjs.New_32sceneCode.GDMovingPlatformObjects2= [];
gdjs.New_32sceneCode.GDGoLeftObjects1= [];
gdjs.New_32sceneCode.GDGoLeftObjects2= [];
gdjs.New_32sceneCode.GDGoRightObjects1= [];
gdjs.New_32sceneCode.GDGoRightObjects2= [];
gdjs.New_32sceneCode.GDLadderObjects1= [];
gdjs.New_32sceneCode.GDLadderObjects2= [];
gdjs.New_32sceneCode.GDNewObjectObjects1= [];
gdjs.New_32sceneCode.GDNewObjectObjects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};

gdjs.New_32sceneCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.New_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.New_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.New_32sceneCode.GDPlatformObjects1.length = 0;
gdjs.New_32sceneCode.GDPlatformObjects2.length = 0;
gdjs.New_32sceneCode.GDJumpthruObjects1.length = 0;
gdjs.New_32sceneCode.GDJumpthruObjects2.length = 0;
gdjs.New_32sceneCode.GDTiledGrassPlatformObjects1.length = 0;
gdjs.New_32sceneCode.GDTiledGrassPlatformObjects2.length = 0;
gdjs.New_32sceneCode.GDTiledCastlePlatformObjects1.length = 0;
gdjs.New_32sceneCode.GDTiledCastlePlatformObjects2.length = 0;
gdjs.New_32sceneCode.GDMovingPlatformObjects1.length = 0;
gdjs.New_32sceneCode.GDMovingPlatformObjects2.length = 0;
gdjs.New_32sceneCode.GDGoLeftObjects1.length = 0;
gdjs.New_32sceneCode.GDGoLeftObjects2.length = 0;
gdjs.New_32sceneCode.GDGoRightObjects1.length = 0;
gdjs.New_32sceneCode.GDGoRightObjects2.length = 0;
gdjs.New_32sceneCode.GDLadderObjects1.length = 0;
gdjs.New_32sceneCode.GDLadderObjects2.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects1.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects2.length = 0;


{



}


{



}


{

gdjs.New_32sceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.New_32sceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.New_32sceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects1[k] = gdjs.New_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects1.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.New_32sceneCode.GDPlayerObjects2.createFrom(gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.New_32sceneCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects2[k] = gdjs.New_32sceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects2.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.New_32sceneCode.GDPlayerObjects2.createFrom(gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects2[k] = gdjs.New_32sceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects2.length = k;}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects2[i].setAnimation(2);
}
}}

}

} //End of subevents
}

}


{

gdjs.New_32sceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{

gdjs.New_32sceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{



}


{

gdjs.New_32sceneCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.New_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDPlayerObjects1[0].getPointX("")), "", 0);
}
}


{



}


{

gdjs.New_32sceneCode.GDGoLeftObjects1.createFrom(runtimeScene.getObjects("GoLeft"));
gdjs.New_32sceneCode.GDGoRightObjects1.createFrom(runtimeScene.getObjects("GoRight"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.New_32sceneCode.GDGoLeftObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDGoLeftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDGoRightObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDGoRightObjects1[i].hide();
}
}}

}


{

gdjs.New_32sceneCode.GDGoLeftObjects1.createFrom(runtimeScene.getObjects("GoLeft"));
gdjs.New_32sceneCode.GDMovingPlatformObjects1.createFrom(runtimeScene.getObjects("MovingPlatform"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("GoLeft", gdjs.New_32sceneCode.GDGoLeftObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("MovingPlatform", gdjs.New_32sceneCode.GDMovingPlatformObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.New_32sceneCode.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDMovingPlatformObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDMovingPlatformObjects1[i].addForce(-150, 0, 1);
}
}}

}


{

gdjs.New_32sceneCode.GDGoRightObjects1.createFrom(runtimeScene.getObjects("GoRight"));
gdjs.New_32sceneCode.GDMovingPlatformObjects1.createFrom(runtimeScene.getObjects("MovingPlatform"));

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(context.clearEventsObjectsMap().addObjectsToEventsMap("GoRight", gdjs.New_32sceneCode.GDGoRightObjects1).getEventsObjectsMap(), context.clearEventsObjectsMap().addObjectsToEventsMap("MovingPlatform", gdjs.New_32sceneCode.GDMovingPlatformObjects1).getEventsObjectsMap(), false, runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.New_32sceneCode.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDMovingPlatformObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDMovingPlatformObjects1[i].addForce(150, 0, 1);
}
}}

}

return;
}
gdjs['New_32sceneCode']= gdjs.New_32sceneCode;
