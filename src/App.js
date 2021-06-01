import { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuotes = lazy(() => import("./pages/NewQuotes"));
const QuotesDetail = lazy(() => import("./pages/QuotesDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AllQuotes = lazy(() => import("./pages/AllQuotes"));
function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>
          <Route path="/quotes" exact>
            <AllQuotes />
          </Route>
          <Route path="/quotes/:quoteId">
            <QuotesDetail />
          </Route>
          <Route path="/new-quote">
            <NewQuotes />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
