import { Navbar } from "./_components/navigation/navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default LandingLayout;
