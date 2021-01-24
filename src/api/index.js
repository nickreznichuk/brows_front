import { get, post } from "axios";
import {
  fetchDashboardSuccess,
  // fetchDashboardFailure,
} from "../store/actions/dashboard";
import { store } from "../App";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const fetchDashboard = () => {
  const { dispatch } = store;
  get("http://localhost:5000/api/v1/dashboard", { header: headers })
    .then((dashboard) => {
      dispatch(fetchDashboardSuccess(dashboard.data));
    })
    .catch(({ response }) => {
      console.log(response);
      // dispatch(fetchDashboardFailure(message));
    });
};

export const createRecord = (data) => {
  // const { dispatch } = store;
  post("http://localhost:5000/api/v1/new_record", {
    params: { ...data },
  })
    .then((response) => {
      // dispatch(fetchDashboardSuccess(dashboard.data));
      console.log(response);
    })
    .catch(({ response }) => {
      console.log(response);
      // dispatch(fetchDashboardFailure(message));
    });
};
