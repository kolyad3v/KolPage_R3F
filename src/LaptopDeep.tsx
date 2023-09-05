/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { Html, useGLTF } from '@react-three/drei'
import { FC } from 'react'

type GLTFResult = GLTF & {
	nodes: {
		Circle001: THREE.Mesh
		Circle001_1: THREE.Mesh
		Circle001_2: THREE.Mesh
		Circle001_3: THREE.Mesh
		Circle001_4: THREE.Mesh
		Circle001_5: THREE.Mesh
		Circle001_6: THREE.Mesh
		Circle006: THREE.Mesh
		Circle006_1: THREE.Mesh
		FrontCameraRing001: THREE.Mesh
		Circle: THREE.Mesh
		Circle_1: THREE.Mesh
		Circle_2: THREE.Mesh
		KeyboardKeyHole: THREE.Mesh
		RubberFoot: THREE.Mesh
		Circle012: THREE.Mesh
		Circle012_1: THREE.Mesh
		Circle009: THREE.Mesh
		Circle009_1: THREE.Mesh
		Circle003: THREE.Mesh
		Circle003_1: THREE.Mesh
		Circle002: THREE.Mesh
		Circle002_1: THREE.Mesh
		Circle002_2: THREE.Mesh
		Circle002_3: THREE.Mesh
		Circle002_4: THREE.Mesh
		AppleLogo000: THREE.Mesh
	}
	materials: {
		['Frame.001']: THREE.MeshStandardMaterial
		HeadPhoneHole: THREE.MeshStandardMaterial
		USB_C_INSIDE: THREE.MeshStandardMaterial
		TouchbarBorder: THREE.MeshStandardMaterial
		Keyboard: THREE.MeshStandardMaterial
		['CameraRIngBlack.002']: THREE.MeshStandardMaterial
		['Keyboard.001']: THREE.MeshStandardMaterial
		Key: THREE.MeshStandardMaterial
		Touchbar: THREE.MeshStandardMaterial
		DarkRubber: THREE.MeshStandardMaterial
		HingeBlack: THREE.MeshStandardMaterial
		HingeMetal: THREE.MeshStandardMaterial
		SpeakerHole: THREE.MeshStandardMaterial
		['Frame.001']: THREE.MeshStandardMaterial
		Screen: THREE.MeshStandardMaterial
		ScreenGlass: THREE.MeshStandardMaterial
		Rubber: THREE.MeshStandardMaterial
		DisplayGlass: THREE.MeshStandardMaterial
		['AppleLogo.004']: THREE.MeshStandardMaterial
	}
}

export const LaptopDeep: FC<{}> = (props) => {
	const { nodes, materials } = useGLTF('/laptop.gltf') as GLTFResult
	console.log(nodes, materials)
	return (
		<>
			<group
				{...props}
				dispose={null}
			>
				<group
					position={[0, -0.5, 0]}
					scale={0.103}
				>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Circle001.geometry}
						material={materials['Frame.001']}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Circle001_1.geometry}
						material={materials['Frame.001']}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Circle001_2.geometry}
						material={materials.HeadPhoneHole}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Circle001_3.geometry}
						material={materials.USB_C_INSIDE}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Circle001_4.geometry}
						material={materials['Frame.001']}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Circle001_5.geometry}
						material={materials.TouchbarBorder}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Circle001_6.geometry}
						material={materials.Keyboard}
					/>
					<group
						position={[0, -0.509, 0]}
						scale={5.796}
					>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Circle006.geometry}
							material={materials['Frame.001']}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Circle006_1.geometry}
							material={materials.USB_C_INSIDE}
						/>
					</group>

					<group
						position={[-11.786, -0.15, -8.301]}
						scale={5.796}
					>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Circle.geometry}
							material={materials['Keyboard.001']}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Circle_1.geometry}
							material={materials.Key}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Circle_2.geometry}
							material={materials.Touchbar}
						/>
					</group>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.KeyboardKeyHole.geometry}
						material={materials['Keyboard.001']}
						position={[-11.786, -0.152, -8.301]}
						scale={5.796}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.RubberFoot.geometry}
						material={materials.DarkRubber}
						position={[-11.951, -0.751, 7.857]}
						scale={5.796}
					/>
					<group
						position={[0.011, -0.211, -10.559]}
						scale={5.796}
					>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Circle012.geometry}
							material={materials.HingeBlack}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Circle012_1.geometry}
							material={materials.HingeMetal}
						/>
					</group>
					<group
						position={[-15.026, 0.031, 0.604]}
						scale={5.796}
					>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Circle009.geometry}
							material={materials['Frame.001']}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Circle009_1.geometry}
							material={materials.SpeakerHole}
						/>
					</group>
					<group
						position={[12.204, 0.031, 0.604]}
						scale={5.796}
					>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Circle003.geometry}
							material={materials['Frame.001']}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Circle003_1.geometry}
							material={materials.SpeakerHole}
						/>
					</group>
					{/* Modify Me  */}
					<group
						position={[0.007, -0.472, -10.412]}
						rotation={[Math.PI / 3, 0, 0]}
						scale={5.796}
					>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.FrontCameraRing001.geometry}
							material={materials['CameraRIngBlack.002']}
							position={[-0.155, 19.571, -16.151]}
							scale={5.796}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Circle002.geometry}
							material={materials['Frame.001']}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Circle002_1.geometry}
							material={materials.Screen}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Circle002_2.geometry}
							material={materials.ScreenGlass}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Circle002_3.geometry}
							material={materials.Rubber}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Circle002_4.geometry}
							material={materials.DisplayGlass}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.AppleLogo000.geometry}
							material={materials['AppleLogo.004']}
							position={[0.005, -0.111, -1.795]}
							rotation={[-Math.PI, 0, -Math.PI]}
							scale={0.579}
						/>
					</group>
				</group>
				<Html
					transform
					wrapperClass='htmlScreen'
					distanceFactor={1.17}
					position={[0, 0.5, -1.4]}
					rotation-x={-0.256}
				>
					<iframe src='https://nickgillham.dev' />
				</Html>
			</group>
		</>
	)
}

useGLTF.preload('/laptop.gltf')