import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import "./Home.css";

const Home = ({ name, setName, fetchQuestions }) => {
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleSubmit = () => {
    if (!name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions();
      history.push("/quiz");
    }
  };

  return (
    <div className="content">
      <div className="settings">
        <div className="settings__select">
          {error && <ErrorMessage>Please enter your name </ErrorMessage>}
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          
            
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <img src="/quiz.svg" className="banner" alt="quiz app" />
    </div>
  );
};

export default Home;