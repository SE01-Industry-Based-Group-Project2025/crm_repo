import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SubscriptionCRUD from "./components/SubscriptionCRUD";  // Your subscription CRUD page component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/subscriptions" element={<SubscriptionCRUD />} />
      </Routes>
    </Router>
  );
}

export default App;
