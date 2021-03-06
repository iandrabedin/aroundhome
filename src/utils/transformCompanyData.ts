import { Companies, Company } from "types";
import { sortTimeByNewest, groupByDate } from "utils";

export const transformCompanyData = (companies: Companies) => {
  const transformedCompanies = companies.map((company: Company) => {
    const sortedTimeSlots = sortTimeByNewest(company.time_slots);

    const groupedTimeSlots = groupByDate(sortedTimeSlots);

    const companiesWithGroups = {
      ...company,
      time_slots_groups: groupedTimeSlots,
    };

    return companiesWithGroups;
  });

  return transformedCompanies;
};
