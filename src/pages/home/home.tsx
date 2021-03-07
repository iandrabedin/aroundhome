import React, { useEffect, useState, Suspense, lazy } from "react";
import { getCompanies } from "../../services";
import { Loading } from "../../components";
import { transformCompanyData } from "utils";

const Date = lazy(() => import("../../components/date"));

const Home = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    getCompanies().then((response) => setCompanies(response));
  }, []);

  return (
    <Suspense fallback={<Loading size="large" />}>
      <Date companies={transformCompanyData(companies)} />
    </Suspense>
  );
};

export default Home;
