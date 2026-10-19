import { useState } from "react";
import Navbar from "./components/Navbar";
import Bio from "./components/Bio";
import StatCard from "./components/StatCard";
import Repositories from "./components/Repositories";
import Footer from "./components/Footer";
import Button from "./components/Button";
function App() {
  const [followers, setFollowers] = useState(0);
  const [rate, setRate] = useState(500);
  const [portfolioStars, setPortfolioStars] = useState(0);
  const [todoStars, setTodoStars] = useState(0);
  const [dotfilesStars, setDotfilesStars] = useState(0);

  function handleFollow() {
    setFollowers(followers + 1);
  }

  function handleAddRate() {
    setRate(rate + 100);
  }

  function handleReset() {
    setFollowers(0);
    setRate(500);
  }

  function handleStarPortfolio() {
    setPortfolioStars(portfolioStars + 1);
  }

  function handleStarTodo() {
    setTodoStars(todoStars + 1);
  }

  function handleStarDotfiles() {
    setDotfilesStars(dotfilesStars + 1);
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF3E1] text-[#222222]">
      <Navbar />

      <div className="flex items-end justify-between bg-[#F5E7C6] px-20 py-10">
        <div>
          <Bio
            name="Josh Boniao"
            username="JoshBoniao"
            tagline="Front-end developer from Cebu City."
          />

          <div className="mt-6 flex gap-6">
            <StatCard label={followers} value="Followers" />
            <StatCard label={rate} value="PHP per Hour" />
          </div>
        </div>

        <div className="flex gap-4">
          <Button handleFollow={handleFollow} label="Follow" />
          <Button handleFollow={handleAddRate} label="Add rate" />
          <Button handleFollow={handleReset} label="Reset" />
        </div>
      </div>
      <Repositories
        handleStarPortfolio={handleStarPortfolio}
        portfolioStars={portfolioStars}
        handleStarTodo={handleStarTodo}
        todoStars={todoStars}
        handleStarDotfiles={handleStarDotfiles}
        dotfilesStars={dotfilesStars}
      />
      <Footer />
    </div>
  );
}

export default App;
