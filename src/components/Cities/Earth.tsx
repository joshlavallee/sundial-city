const Earth = () => {
  return (
    <mesh>
      <sphereBufferGeometry args={[1, 32, 32]} />
      <meshPhysicalMaterial color={0xffffff} />
    </mesh>
  );
};

export default Earth;
