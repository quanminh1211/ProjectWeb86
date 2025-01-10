import "./BrowseByCategory.css";
import CategoryList from "../CategoryList/CategoryList.jsx";
import NavigationButtons from "../../../ultils/NavigationButtons.jsx";

const BrowseByCategory = () => {
    const handlePrev = () => {
        console.log("Previous button clicked");
      };
    
      const handleNext = () => {
        console.log("Next button clicked");
      };
  return (
    <>
      <div className="timer-container">
        <div className="countdown-timer">
          <h3>Categories</h3>
          <div className="countdown-body">
            <h1>Browse By Category</h1>
          </div>
        </div>
        <div>
      <NavigationButtons onPrev={handlePrev} onNext={handleNext} />
      <CategoryList />
    </div>
      </div>
      
    </>
  );
};

export default BrowseByCategory;
