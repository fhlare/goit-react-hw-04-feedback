import { List,OptionButton } from "./FeedbackOption.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => {
        return(
          <li key={option}>
            <OptionButton id={option} onClick={e => onLeaveFeedback(e)}>
              {option}
            </OptionButton>
          </li>
        );
      })}
    </List>
  );
};
