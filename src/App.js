import { RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux'
import "./App.css";
import store from "./redux/store";
import router from "./router/Router";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-8 md:px-10">
      <Provider store={store}>
        <RouterProvider router={router}>

        </RouterProvider>

      </Provider>

    </div>
  );
}

export default App;
