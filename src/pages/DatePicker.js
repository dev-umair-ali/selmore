import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "../styles/BookNow.css";

export default function DatePickerValue() {
  const [value, setValue] = React.useState(dayjs("2024-12-17"));

  return (
    <div>
      <div className="dte-picker-main">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Start date"
            defaultValue={dayjs("2024-10-31")}
            slotProps={{ textField: { size: 'small' } }}
            
          />
          <DatePicker
            slotProps={{ textField: { size: 'small' } }}
            label="End date"
            value={value}
            onChange={(newValue) => setValue(newValue)}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
}
