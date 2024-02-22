import Hero from "@/components/Hero";
import { fetchBooks } from "@/utils/requests";
import { toRedirectOrNot } from "@/utils/redirect";

const Home = async () => {
  await toRedirectOrNot();
  // const data: Book[] = await fetchBooks();
  return (
    <div className="mt-16">
      <Hero />
    </div>
  );
};

export default Home;
