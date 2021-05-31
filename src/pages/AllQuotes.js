import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "m1", author: "Sudip", text: "I am learning react" },
  { id: "m2", author: "Max", text: "I am good at react" },
];
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
