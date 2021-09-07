import { useCallback, useRef } from "react";
import Idea from "../components/ideas/Idea";
import "./IdeaPage.css";
const IdeaPage = () => {
  const cardRef = useRef(null);
  function debounce(func, wait = 30, immediate = true) {
    let timeout;
    return function () {
      let context = this,
        args = arguments;
      let later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  const loadIdeas = () => {
    console.dir(cardRef.current.scrollTop);
  };
  // eslint-disable-next-line
  const debounceHandler = useCallback(debounce(loadIdeas, 20), []);
  return (
    <div onScroll={debounceHandler} className="idea_card" ref={cardRef}>
      <Idea item={{ title: "Idea Generator for Apps" }} />
      <Idea item={{ title: "Pinterest for Athletes" }} />
      <Idea item={{ title: "Marketing App for Dentists" }} />
    </div>
  );
};

export default IdeaPage;
