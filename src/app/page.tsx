import Hero from "@/components/Hero";
import { toRedirectOrNot } from "@/utils/redirect";

const Home = async () => {
  await toRedirectOrNot();

  return (
    <div className="mt-16">
      <Hero />
    </div>
  );
};

export default Home;
