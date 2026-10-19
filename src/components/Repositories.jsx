import RepoCard from "./RepoCard";
function Repositories({
  handleStarPortfolio,
  portfolioStars,
  handleStarTodo,
  todoStars,
  handleStarDotfiles,
  dotfilesStars,
}) {
  return (
    <main className="grid grid-cols-3 gap-8 px-20 pt-8">
      <RepoCard
        handleStarPortfolio={handleStarPortfolio}
        portfolioStars={portfolioStars}
        name="portfolio"
        description="My personal page built with React."
        language="JavaScript"
        commits="48 commits"
      />
      <RepoCard
        handleStarPortfolio={handleStarTodo}
        portfolioStars={todoStars}
        name="todo-api"
        description="A small REST API for a to-do list."
        language="Java"
        commits="31 commits"
      />
      <RepoCard
        handleStarPortfolio={handleStarDotfiles}
        portfolioStars={dotfilesStars}
        name="dotfiles"
        description="My terminal and editor settings."
        language="Shell"
        commits="12 commits"
      />
    </main>
  );
}
export default Repositories;
