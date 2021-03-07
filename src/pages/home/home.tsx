import React, { useEffect, useState, Suspense, lazy } from "react";
import { getCompanies } from "../../services";
import { Loading } from "../../components";
import { transformCompanyData } from "utils";

const Reservation = lazy(() => import("../../components/reservation"));

const Home = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getCompanies().then((response) => setCompanies(response));
  }, []);

  return (
    <Suspense fallback={<Loading size="large" />}>
      <Reservation companies={transformCompanyData(companies)} />
    </Suspense>
  );
};

export default Home;
