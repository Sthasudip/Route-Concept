import { useHistory } from "react-router";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuotes = () => {
  const history = useHistory();
  const onAddQuoteHandler = (quoteData) => {
    console.log(quoteData);
    history.replace("./quotes");
  };
  return <QuoteForm onAddQuote={onAddQuoteHandler} />;
};

export default NewQuotes;
