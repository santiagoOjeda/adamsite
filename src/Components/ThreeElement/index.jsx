import React, {useState, useEffect} from 'react';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import object from '../../Resources/obj/tetera.FBX';





const ThreeElement = ({height,width, id  }) => {
	const [loading, setLoading] = useState(true);
	useEffect(()=>{
		init();
		animate();
		setLoading(false);
	},[] );

	var container, controls;
	var camera, scene, renderer, light;
	var mixer;

	function init() {
		container = document.createElement( 'div' );
		document.getElementById(id).appendChild( container );
		camera = new THREE.PerspectiveCamera( 45, width / height , 1, 2000);
		// camera.position.z = 300;

		// camera = new THREE.PerspectiveCamera( 60, width /height, 0.1, 10 );
		// camera.position.set( 100, 0, -100 );
		camera.position.z = 300;
		camera.position.x = 0;
		camera.position.y = 100;

		camera.focus = 40;

		scene = new THREE.Scene();
		// scene.background = new THREE.Color( 0xa0a0a0 );
		// scene.fog = new THREE.Fog( 0xa0a0a0, 200, 1000 );

		light = new THREE.HemisphereLight( 0xffffff, 0x444444 );
		light.position.set( 0, 200, 0 );
		scene.add( light );

		light = new THREE.DirectionalLight( 0xffffff );
		light.position.set( 0, 200, 100 );
		light.castShadow = true;
		light.shadow.camera.top = 180;
		light.shadow.camera.bottom = - 100;
		light.shadow.camera.left = - 120;
		light.shadow.camera.right = 120;
		scene.add( light );

		// scene.add( new CameraHelper( light.shadow.camera ) );

		// ground
		// var mesh = new THREE.Mesh( new THREE.PlaneBufferGeometry( 2000, 2000 ), new THREE.MeshPhongMaterial( { color: 0x999999, depthWrite: false } ) );
		// mesh.rotation.x = - Math.PI / 2;
		// mesh.receiveShadow = true;
		// scene.add( mesh );

		// var grid = new THREE.GridHelper( 2000, 20, 0x000000, 0x000000 );
		// grid.material.opacity = 0.2;
		// grid.material.transparent = true;
		// scene.add( grid );

		// model
		var loader = new FBXLoader();
		loader.load( object, function ( object ) {

			mixer = new THREE.AnimationMixer( object );

			var action = mixer.clipAction( object.animations[ 0 ] );
			action.play();

			object.position.y = -90;

			object.traverse( function ( child ) {

				if ( child.isMesh ) {

					child.castShadow = true;
					child.receiveShadow = true;

				}

			} );

			scene.add( object );

		} );


		// renderer = new THREE.WebGLRenderer({ alpha:true, antialias: true});
		// renderer.setPixelRatio( window.devicePixelRatio );
		// renderer.setSize(width , height);
		// renderer.shadowMap.enabled = true;
		// container.appendChild( renderer.domElement );

		renderer = new THREE.WebGLRenderer({ alpha:true});
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize(width , height);
		container.appendChild( renderer.domElement );

		controls = new OrbitControls( camera, renderer.domElement );
		controls.autoRotate = true;
		controls.enabled = false;
		controls.update();

		// controls = new OrbitControls( camera, renderer.domElement );
		// controls.target.set( 0, 100, 0 );
		// controls.update();

		// window.addEventListener( 'resize', onWindowResize, false );



	}

	function onWindowResize() {
		camera.aspect = width / height ;
		camera.updateProjectionMatrix();
		renderer.setSize(width / height );
	}

	function animate() {

		// onWindowResize();

		controls.update();

		requestAnimationFrame( animate );

		renderer.render( scene, camera );


	}


    return (

			<div id={id} className="containerThree"></div>
    );
};

export default ThreeElement;