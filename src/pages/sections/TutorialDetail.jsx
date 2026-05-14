import { useParams } from "react-router-dom";
import tutorials from "./data/tutorialsData";
import "../../style/sections/TutorialDetail.css";


const TutorialDetail = () => {
  const { id } = useParams();
  const tutorial = tutorials.find(t => t.id === Number(id));

  if (!tutorial) return <div className="tutorial-detail">Not found</div>;

  const video = tutorial.video.replace("watch?v=", "embed/");

  return (
    <div className="tutorial-detail">
      <h1>{tutorial.title}</h1>

      <p className="tutorial-article">{tutorial.article}</p>

      <iframe
        width="100%"
        height="400"
        src={video}
        title="video"
        allowFullScreen
      />

      <h2>Quiz</h2>

      {tutorial.quiz.map((q, i) => (
        <div key={i} className="quiz-block">
          <p>{q.question}</p>

          <div className="quiz-options">
            {q.options.map((o, idx) => (
              <button key={idx} className="quiz-option">
                {o}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TutorialDetail;