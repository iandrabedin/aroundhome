export interface TimeSlot {
  start_time: string;
  end_time: string;
}

export interface Company {
  id: number;
  name: string;
  type: string;
  time_slots: TimeSlot[];
}

export type Companies = Company[];

export interface TimeSlotGroups {
  date: string;
  time_slots: TimeSlot[];
}

export interface CompanyVM {
  id: number;
  name: string;
  type: string;
  time_slots: TimeSlot[];
  time_slots_groups: TimeSlotGroups[];
}

export interface SelectedTimeSlot {
  companyId: number;
  startTime: string;
  endTime: string;
}
