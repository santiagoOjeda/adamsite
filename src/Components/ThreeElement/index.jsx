import React, {useState, useEffect} from 'react';
import * as THREE from 'three';

import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';
import { TDSLoader } from 'three/examples/jsm/loaders/TDSLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import threeObj from '../../Resources/obj/portalgun/portalgun.3ds';
import threeObjTexture from '../../Resources/obj/portalgun/textures/normal.jpg';
import threeObjTexturePath from '../../Resources/obj/portalgun/textures/color.jpg';

// models/3ds/portalgun/portalgun.3ds



	let width = 1000;
const ThreeElement = ({height,width  }) => {

	useEffect(()=>{
		init();
		animate();
	},[] );

	


	let container, controls;
	let camera, scene, renderer;

	

	function init() {

		container = document.createElement( 'div' );
		document.getElementById("containerThree").appendChild( container );

		camera = new THREE.PerspectiveCamera( 60, width /height, 0.1, 10 );
		camera.position.z = 3;

	
		scene = new THREE.Scene();
		scene.add( new THREE.HemisphereLight() );

		let directionalLight = new THREE.DirectionalLight( 0xffeedd );
		directionalLight.position.set( 10, 0, 200 );
		
		scene.add( directionalLight );




	

		//3ds files dont store normal maps
		let loader2 = new THREE.TextureLoader();
		let normal = loader2.load( "./textures/color.jpg" );

		let loader = new TDSLoader( );
		loader.setResourcePath( "./textures/");

		loader.load( threeObj, function ( object ) {

			// object.traverse( function ( child ) {

			// 	if ( child.isMesh ) {

			// 		child.material.normalMap = normal;

			// 	}

			// } );

			scene.add( object );

		} );

		renderer = new THREE.WebGLRenderer({ alpha:true});
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize(width , height);
		container.appendChild( renderer.domElement );

		controls = new OrbitControls( camera, renderer.domElement );
		controls.autoRotate = true;
		controls.enabled = false;
		controls.update();

		// window.addEventListener( 'resize', resize, false );

	}

	// function resize() {

	// 	camera.aspect =window.innerWidth  / window.innerHeight;
	// 	camera.updateProjectionMatrix();

	// 	renderer.setSize(width, height );

	// }

	function animate() {

		controls.update();
		renderer.render( scene, camera );

		requestAnimationFrame( animate );

	}

    return (
        <div id="containerThree" className="containerThree"></div>
    );
};

export default ThreeElement;