import { Engine } from "@babylonjs/core/Engines/engine";
import { Scene } from "@babylonjs/core/scene";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { FreeCamera } from "@babylonjs/core/Cameras/freeCamera";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";

import "@babylonjs/core/Materials/standardMaterial";
import { CreateGround } from "@babylonjs/core/Meshes/Builders/groundBuilder";
import { CreateSphere } from "@babylonjs/core/Meshes/Builders/sphereBuilder";

const canvas = document.getElementById("renderCanvas") as HTMLCanvasElement;
const engine = new Engine(canvas);
var scene = new Scene(engine);

// This creates and positions a free camera (non-mesh)
var camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);

// This targets the camera to scene origin
camera.setTarget(Vector3.Zero());

// This attaches the camera to the canvas
camera.attachControl(true);

// This creates a light, aiming 0,1,0 - to the sky (non-mesh)
var light = new HemisphericLight("light1", new Vector3(0, 1, 0), scene);

// Default intensity is 1. Let's dim the light a small amount
light.intensity = 0.7;

// Our built-in 'sphere' shape. Params: name, subdivs, size, scene
var sphere = CreateSphere("sphere1", { segments: 16, diameter: 2 }, scene);

// Move the sphere upward 1/2 its height
sphere.position.y = 2;

// Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
CreateGround("ground1", { width: 6, height: 6, subdivisions: 2 }, scene);

engine.runRenderLoop(() => {
    scene.render();
});
