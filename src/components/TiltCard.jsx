import Tilt from "react-parallax-tilt";

export default function TiltCard({ children, className }) {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.05}
      transitionSpeed={250}
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      className={`rounded-2xl shadow-lg p-4 bg-white dark:bg-gray-900 ${className}`}
    >
      {children}
    </Tilt>
  );
}
